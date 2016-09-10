(function(d3) {

	d3.playerTrends = function() {

		var margin = { top: 40, right: 40, bottom: 30, left: 40 },
			width,
			height,
			animationDuration = 300;

		var svgContainer, xScale, xAxis, yScale, yAxis, line, chart;

		var didSetup = false;

		function playerTrends( parent ) {

			svgContainer = parent;
			
			var data = svgContainer.datum();

			setDimensions();
			setXScale( data );
			setXAxis();
			setYScale( data );
			setYAxis();
			setLine();

			if( !didSetup ) {
				setupContainer( parent );
				appendXAxis();
				appendYAxis();
			} else {
				updateContainer();
				updateXAxis();
				updateYAxis();
			}

			updateLine( data );
			updatePoints( data );

			didSetup = true;

		}

		function setDimensions() {
			height = parseInt( d3.select("[server-player-trends]").style("height"), 10 );
			height = height - margin.top - margin.bottom;
			width = parseInt( d3.select("[server-player-trends]").style("width"), 10 );
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
			svgContainer.attr("width", width + margin.left + margin.right);
			chart.attr("transform", translate( margin.left, margin.top ));
		}

		function setXScale( data ) {
			xScale = d3.time.scale()
						.range([ 0, width ])
						.domain([
							d3.min( data, xValue ),
							d3.max( data, xValue )
						])
						.nice( d3.time.hour );
		}

		function setXAxis() {
			xAxis = d3.svg.axis()
						.scale( xScale )
						.orient("bottom");
		}

		function appendXAxis() {
			chart.append("g")
					.attr("class", "x axis")
					.attr("transform", translate( 0, height ) )
					.call( xAxis )
					.append("text")
						.attr("class", "label")
						.attr("x", width)
						.attr("y", -6)
						.style("text-anchor", "end")
						.text("Time");
		}

		function updateXAxis() {
			var axis = chart.select(".x.axis");

			axis.transition().duration( animationDuration )
				.attr("transform", translate( 0, height ) )
				.call( xAxis );
			
			axis.selectAll(".label")
				.transition().duration( animationDuration )
				.attr("x", width);
		}

		function setYScale( data ) {
			yScale = d3.scale.linear()
						.range([ height, 0 ])
						.domain([
							0,
							d3.max( data, yValue )
						]).nice();
		}

		function setYAxis() {
			yAxis = d3.svg.axis()
						.scale( yScale )
						.orient("left");
		}

		function appendYAxis() {
			chart.append("g")
					.attr("class", "y axis")
					.call( yAxis )
					.append("text")
						.attr("class", "label")
						.attr("y", -15)
						.attr("x", 40)
						.style("text-anchor", "end")
						.text("Player Count");
		}

		function updateYAxis() {
			chart.select(".y.axis")
				.transition().duration( animationDuration )
				.call( yAxis );
		}

		function setLine() {
			line = d3.svg.line()
						.x(function(data) {
							return xScale( xValue( data ) );
						})
						.y(function(data) {
							return yScale( yValue( data ) );
						}).interpolate("linear");
		}

		function updateLine( data ) {
			var trend = chart.selectAll(".trend").data([ data ]);

			trend.transition().duration( animationDuration )
				.attr("d", line);

			trend.enter()
					.append("path")
					.attr("class", "trend")
					.attr("d", line);

			trend.exit().remove();
		}

		function updatePoints( data ) {
			var points = chart.selectAll(".point").data( data );

			points.enter()
				.append("circle")
				.attr("class", function( data, idx ) {
					return "point point-" + idx;
				})
				.attr("r", 0);

			points.exit().remove();

			points.transition().duration( animationDuration )
				.attr("r", 8)
				.attr("cx", function( data ) {
					return xScale( xValue( data ) );
				})
				.attr("cy", function( data ) {
					return yScale( yValue( data ) );
				});

			points.on("mouseover", function( data, idx ) {
				d3.selectAll(".point-" + idx)
					.transition().duration(100)
					.style("fill-opacity", "1")
					.style("stroke", "black");

				showToolTip( data, idx );
			});

			points.on("mouseout", function( data, idx ) {
				d3.selectAll(".point-" + idx)
					.transition().duration(100)
					.style("fill-opacity", "0.5")
					.style("stroke", "none");
			});
		}

		function showToolTip( data, idx ) {
			var points = $(".point-" + idx);

			points.qtip({
				show: { when: false, ready: true },
				hide: { target: points },
				position: { my: "bottom center", at: "top center" },
				style: { classes: "qtip-dark" },
				events: {
					hide: function(event, api) {
						api.tooltip.remove();
					}
				},
				content: {
					title: function(event, api) {
						return timeFormat( xValue( data ) );
					},
					text: function(event, api) {
						return data.count + " connected players";
					}
				}
			});
		}

		return playerTrends;

	}

	var randomColor = d3.scale.category20();

	function timeFormat( time ) {
		return window.moment(time).format("h A");
	}

	function translate( x, y ) {
		x = x || 0;
		y = y || 0;
		
		return "translate(" + x + "," + y + ")";
	}

	function xValue( data ) {
		return window.moment.utc(data.time).toDate();
	}

	function yValue( data ) {
		return +data.count;
	}

})(d3);