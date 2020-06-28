/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.6.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/admin/
*/

function showFlotTooltip(x, y, contents) {
	$('<div id="tooltip" class="flot-tooltip">' + contents + '</div>').css({
		top: y,
		left: x + 35
	}).appendTo('body').fadeIn(200);
}

var handleLiveUpdatedChart = function () {
	'use strict';
        
	function update() {
		plot.setData([ getRandomData() ]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
    
	function getRandomData() {
		if (data.length > 0) {
			data = data.slice(1);
		}
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			}
			if (y > 100) {
				y = 100;
			}
			data.push(y);
		}
		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]]);
		}
		return res;
	}
    
	if ($('#live-updated-chart').length !== 0) {
		var data = [], totalPoints = 150;
		var updateInterval = 1000;

		$('#updateInterval').val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				}
				if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val('' + updateInterval);
			}
		});

		var plot = $.plot($('#live-updated-chart'), [{ label: 'Server stats', data: getRandomData() }], {
			series: { 
				shadowSize: 0, 
				color: COLOR_GREEN, 
				lines: { 
					show: true, 
					fill:true 
				} 
			},
			yaxis: { 
				min: 0, 
				max: 100, 
				tickColor: COLOR_SILVER_TRANSPARENT_3 
			},
			xaxis: { 
				show: true, 
				tickColor: COLOR_SILVER_TRANSPARENT_3 
			},
			grid: {
				borderWidth: 1,
				borderColor: COLOR_SILVER_TRANSPARENT_5,
				backgroundColor: COLOR_SILVER_TRANSPARENT_1
			},
			legend: {
				noColumns: 1,
				show: true
			}
		});

		update();
	}
};

var Chart = function () {
	'use strict';
	return {
		//main function
		init: function () {
			handleLiveUpdatedChart();
		}
	};
}();

$(document).ready(function() {
	Chart.init();
});