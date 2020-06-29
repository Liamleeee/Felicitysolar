/*
Author: lIAM
Note: Graduation project
*/

/*Random CPU & RAM*/
var handleCPUChart = function () {
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

		var plot = $.plot($('#live-updated-chart'), [{ label: 'disk stats', data: getRandomData() }], {
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


var handleGPUChart = function () {
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
    
	if ($('#live-updated-chart_2').length !== 0) {
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

		var plot = $.plot($('#live-updated-chart_2'), [{ label: 'RAM stats', data: getRandomData() }], {
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
			handleCPUChart();
			handleGPUChart();
		}
	};
}();

$(document).ready(function() {
	Chart.init();
});


/* Echarts for bandwidth*/

var dom = document.getElementById("bandwidth_chart");
var myChart = echarts.init(dom);

data = [["00:30:00",2],["01:00:00",2],["01:30:00",2],["02:00:00",2],["02:30:00",2],["03:00:00",1],["03:30:00",2],["04:00:00",2],["04:30:00",2],["05:00:00",2],["05:30:00",2],["06:00:00",2],["06:30:00",2],["07:00:00",2],["07:30:00",2],["08:00:00",2],["08:30:00",2],["09:00:00",2],["09:30:00",2],["10:00:00",2],["10:30:00",2],["11:00:00",2],["11:30:00",2],["12:00:00",2],["12:30:00",2],["13:00:00",6],["13:30:00",6],["14:00:00",7],["14:30:00",7],["15:00:00",7],["15:30:00",7],["16:00:00",7],["16:30:00",7],["17:00:00",7],["17:30:00",2],["18:00:00",2],["18:30:00",2],["19:00:00",2],["19:30:00",2],["20:00:00",2],["20:30:00",2],["21:00:00",2],["21:30:00",2],["22:00:00",2],["22:30:00",2],["23:00:00",2],["23:30:00",2],["24:00:00",2]];
data_flow = [["00:30:00",364],["01:00:00",480],["01:30:00",224],["02:00:00",408],["02:30:00",364],["03:00:00",502],["03:30:00",610],["04:00:00",255],["04:30:00",230],["05:00:00",285],["05:30:00",2060],["06:00:00",535],["06:30:00",455],["07:00:00",340],["07:30:00",600],["08:00:00",670],["08:30:00",522],["09:00:00",423],["09:30:00",400],["10:00:00",244],["10:30:00",201],["11:00:00",168],["11:30:00",255],["12:00:00",290],["12:30:00",346],["13:00:00",380],["13:30:00",333],["14:00:00",311],["14:30:00",188],["15:00:00",202],["15:30:00",230],["16:00:00",211],["16:30:00",333],["17:00:00",301],["17:30:00",222],["18:00:00",280],["18:30:00",291],["19:00:00",211],["19:30:00",199],["20:00:00",355],["20:30:00",466],["21:00:00",480],["21:30:00",503],["22:00:00",550],["22:30:00",566],["23:00:00",588],["23:30:00",599],["24:00:00",601]];

var dateList = data.map(function (item) {
    return item[0];
});
var dateList_flow = data_flow.map(function (item) {
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1];
});
var valueList_flow = data_flow.map(function (item) {
    return item[1];
});

option = {

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
    }, {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.length - 1
    }],


    title: [{
        left: 'center',
        text: '总连接数'
    }, {
        top: '55%',
        left: 'center',
        text: '流量使用数据(KB)'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        data: dateList
    }, {
        data: dateList_flow,
        gridIndex: 1
    }],
    yAxis: [{
        splitLine: {show: false}
    }, {
        splitLine: {show: false},
        gridIndex: 1
    }],
    grid: [{
        bottom: '60%'
    }, {
        top: '60%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList
    }, {
        type: 'line',
        showSymbol: false,
        data: valueList_flow,
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};

myChart.setOption(option, true);