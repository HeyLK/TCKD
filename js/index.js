/*
* @Author: WG
* @Date:   2016-09-20 21:52:17
* @Last Modified by:   WG
* @Last Modified time: 2016-09-20 21:58:49
*/

'use strict';
$(function(){

// 左侧菜单栏固定
    menuFixed('.menu_box','no');

// 用户地域统计
   $('.user_hometown_table').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '注册用户地域分布统计表'
        },
        subtitle: {
            text: '截止至2016-9-20'
        },
        xAxis: {
            categories: ['广东', '安徽', '湖南', '哈尔滨', '台湾'],
            title: {
                text:'省份'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '注册用户数量（人）',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '人'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '人数',
            data: [627, 331, 235, 203, 68]
        }]
    });


});