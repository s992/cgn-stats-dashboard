(function(d3) {

	d3.runViewer = function() {

		var barHeight = 40,
			margin = { top: 40, right: 120, bottom: 40, left: 80 },
			width,
			height,
			animationDuration = 300;

		var svgContainer, xScale, xAxis, yScale, yAxis, chart;

		var didSetup = false;

		function runViewer( parent ) {

			svgContainer = parent;
			
			var data = svgContainer.datum();

			setDimensions( data );
			setXScale( data );
			setXAxis();
			setYScale( data );
			setYAxis( data );

			if( !didSetup ) {
				setupContainer( parent );
				appendXAxis();
				appendYAxis();
			} else {
				updateContainer();
				updateXAxis();
				updateYAxis();
			}

			updateRuns( data );
			updateStages();
			setYAxisLinks( data );

			didSetup = true;

		}

		function setDimensions( data ) {

			// don't read this code, i hate myself
			var longestName = "";

			data.forEach(function( run ) {
				if( run.name.length > longestName.length ) {
					longestName = run.name;
				}
			});

			var sizeTest = document.getElementById("name-size-tester")
			sizeTest.textContent = longestName;

			margin.left = sizeTest.clientWidth + 10;

			height = ( ( data.length + 1 ) * barHeight ) + margin.top + margin.bottom;
			width = parseInt( d3.select("[run-viewer]").style("width"), 10 );
			width = width - margin.left - margin.right;
		}

		function setupContainer( parent ) {
			chart = parent.attr("height", height + margin.top + margin.bottom )
							.attr("width", width + margin.left + margin.right )
							.append("g")
								.attr("class", "chart-container")
								.attr("transform", translate( margin.left, margin.top ));
		}

		function updateContainer() {
			svgContainer
				.attr("height", height + margin.top + margin.left)
				.attr("width", width + margin.left + margin.right );

			svgContainer.select(".chart-container")
						.attr("transform", translate( margin.left, margin.top ));
		}

		function setXScale( data ) {
			xScale = d3.scale.linear()
						.range([ 0, width ])
						.domain([
							0,
							d3.max( data, function( run ) {
								return d3.max( run.cps, function( cp ) {
									return parseFloat( cp.time );
								})
							})
						]);
		}

		function setXAxis() {
			xAxis = d3.svg.axis()
						.scale( xScale )
						.orient("bottom")
						.tickFormat( timeFormat );
		}

		function appendXAxis() {
			chart.append("g")
					.attr("class", "x axis")
					.attr("transform", translate( 0, height ) )
					.call( xAxis );
		}

		function updateXAxis() {
			chart.select(".x.axis")
				.transition().duration( animationDuration )
				.attr("transform", translate( 0, height ) )
				.call( xAxis );
		}

		function setYScale( data ) {
			yScale = d3.scale.ordinal()
						.rangeRoundBands([ 0, height ], 0.1)
						.domain(data.map(function( run ) {
							return run.name;
						}));
		}

		function setYAxis() {
			yAxis = d3.svg.axis()
						.scale( yScale )
						.orient("left");
		}

		function appendYAxis() {
			chart.append("g")
					.attr("class", "y axis")
					.call( yAxis );
		}

		function updateYAxis() {
			chart.select(".y.axis")
				.transition().duration( animationDuration )
				.call( yAxis );
		}

		function setYAxisLinks( data ) {
			chart.selectAll(".y.axis text").on("click", function( playerName ) {
				var run = data.filter(function( run ) { return run.name === playerName; })[0];
				$(".qtip").remove();
				window.location.hash = "#/player/" + run.id;
			});
		}

		function updateRuns( data ) {
			var runs = chart.selectAll(".run").data( data );

			runs.enter()
				.append("g")
				.attr("class", "run");

			runs.exit().remove();

			runs.transition().duration( animationDuration )
				.attr("transform", function( run ) {
					return translate( 0, yScale( run.name ) );
				});
		}

		function updateStages() {
			var runs = chart.selectAll(".run"),
				stages = runs.selectAll(".stage");

			stages = stages.data(function( run ) {
				return run.cps;
			});

			stages.enter()
					.append("rect")
					.attr("class", function( cp ) {
						return "stage stage-" + cp.zone;
					})
					.attr("height", barHeight)
					.attr("fill", function( cp, idx ) {
						return randomColor( idx );
					});

			stages.exit().remove();

			stages.on("mouseover", function( cp, stage, run ) {
				d3.selectAll(".stage-" + cp.zone)
					.transition().duration(100)
					.style("fill-opacity", "1")
					.style("stroke", "black");

				showToolTip( cp.zone );
			});

			stages.on("mouseout", function( cp, stage, run ) {
				d3.selectAll(".stage-" + cp.zone)
					.transition().duration(100)
					.style("fill-opacity", "0.5")
					.style("stroke", "none");
			});

			stages.transition().duration( animationDuration )
					.attr("width", function( cp, idx ) {
						return xScale( cp.time - getPreviousTime( this, idx ) );
					})
					.attr("transform", function( cp, idx ) {
						return translate( xScale( getPreviousTime( this, idx ) ), ( yScale.rangeBand() - barHeight ) / 2 )
					});
		}

		function showToolTip( zone ) {
			var stages = $(".stage-" + zone);

			stages.qtip({
				show: { when: false, ready: true },
				hide: { target: stages },
				position: { my: "left center", at: "right center" },
				style: { classes: "qtip-dark" },
				events: {
					hide: function(event, api) {
						api.tooltip.remove();
					}
				},
				content: {
					title: function(event, api) {
						var cp = d3.select( this[0] ).datum();
						return "Checkpoint " + cp.zone;
					},
					text: function(event, api) {
						var cp = d3.select( this[0] ).datum();
						return timeFormat( cp.actualTime ) + " (" + timeFormat( cp.time ) + ")";
					}
				}
			});
		}

		return runViewer;

	}

	var randomColor = d3.scale.category20();

	function timeFormat( time ) {
		return window.moment.utc( window.moment.duration( parseFloat( time ), "s" ).asMilliseconds() ).format("mm:ss.SS");
	}

	function translate( x, y ) {
		x = x || 0;
		y = y || 0;
		
		return "translate(" + x + "," + y + ")";
	}

	function getPreviousTime( context, index ) {
		if( index === 0 ) {
			return 0;
		}

		return d3.select( context.parentNode ).datum().cps[ index - 1 ].time;
	}

})(window.d3);