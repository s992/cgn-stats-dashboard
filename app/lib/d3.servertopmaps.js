(function(d3) {

	d3.topMaps = function() {

		var margin = { top: 40, right: 40, bottom: 30, left: 100 },
			width,
			height,
			animationDuration = 300;

		var svgContainer, xScale, xAxis, yScale, yAxis, rScale, chart;

		var didSetup = false;

		function topMaps( parent ) {

			svgContainer = parent;
			
			var data = svgContainer.datum();

			setDimensions();
			setXScale( data );
			setXAxis();
			setYScale( data );
			setYAxis();
			setRScale( data );

			if( !didSetup ) {
				setupContainer( parent );
				appendXAxis();
				appendYAxis();
			} else {
				updateContainer();
				updateXAxis();
				updateYAxis();
			}

			updateMaps( data );

			didSetup = true;

		}

		function setDimensions() {
			height = parseInt( d3.select("[server-top-maps]").style("height"), 10 );
			height = height - margin.top - margin.bottom;
			width = parseInt( d3.select("[server-top-maps]").style("width"), 10 );
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
			xScale = d3.scale.linear()
						.range([ 0, width ])
						.domain([
							d3.min( data, xValue ) - 2, // give a little padding so our dots aren't slamming against the axis line
							d3.max( data, xValue )
						]);
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
						.text("Times Played");
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
							d3.min( data, yValue ),
							d3.max( data, yValue )
						]).nice();
		}

		function setYAxis() {
			yAxis = d3.svg.axis()
						.scale( yScale )
						.orient("left")
						.tickFormat( timeFormat );
		}

		function appendYAxis() {
			chart.append("g")
					.attr("class", "y axis")
					.call( yAxis )
					.append("text")
						.attr("class", "label")
						.attr("y", -15)
						.attr("x", 30)
						.style("text-anchor", "end")
						.text("Time Spent");
		}

		function updateYAxis() {
			chart.select(".y.axis")
				.transition().duration( animationDuration )
				.call( yAxis );
		}

		function setRScale( data ) {
			rScale = d3.scale.linear()
						.range([ 5, 30 ])
						.domain([
							0,
							d3.max( data, xValue )
						]);
		}

		function updateMaps( data ) {
			var maps = chart.selectAll(".map").data( data );

			maps.enter()
				.append("circle")
				.attr("class", function( data ) {
					return "map map-" + data.id;
				})
				.style("fill", function( data, idx ) {
					return randomColor( idx );
				})
				.attr("cx", 0)
				.attr("cy", height)
				.attr("r", 0);

			maps.exit().remove();

			maps.transition().duration( 1000 )
				.attr("cx", function( data ) {
					return xScale( xValue( data ) );
				})
				.attr("cy", function( data ) {
					return yScale( yValue( data ) );
				})
				.attr("r", function( data ) {
					return rScale( xValue( data ) );
				});

			maps.on("mouseover", function( data ) {
				d3.selectAll(".map-" + data.id)
					.transition().duration(100)
					.style("fill-opacity", "1")
					.style("stroke", "black");

				showToolTip( data );
			});

			maps.on("mouseout", function( data ) {
				d3.selectAll(".map-" + data.id)
					.transition().duration(100)
					.style("fill-opacity", "0.5")
					.style("stroke", "none");
			});

			maps.on("click", function( data ) {
				$(".qtip").remove();
				window.location.hash = "#/map/" + data.id;
			});
		}

		function showToolTip( map ) {
			var maps = $(".map-" + map.id);

			maps.qtip({
				show: { when: false, ready: true },
				hide: { target: maps },
				position: { my: "bottom center", at: "top center" },
				style: { classes: "qtip-dark" },
				events: {
					hide: function(event, api) {
						api.tooltip.remove();
					}
				},
				content: {
					title: function(event, api) {
						return map.map;
					},
					text: function(event, api) {
						var times = map.times,
							duration = timeFormat( +map.duration );

						return [
							"Times played: " + times,
							"Time spent: " + duration
						].join("<br>");
					}
				}
			});
		}

		return topMaps;

	}

	var randomColor = d3.scale.category20();

	function timeFormat( time ) {
		return window.moment.duration( time, "s" ).format("h[h] m[m]");
	}

	function translate( x, y ) {
		x = x || 0;
		y = y || 0;
		
		return "translate(" + x + "," + y + ")";
	}

	function xValue( data ) {
		return +data.times;
	}

	function yValue( data ) {
		return +data.duration;
	}

})(window.d3);