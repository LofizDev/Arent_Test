import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import theme from "./Theme";

import "highcharts/indicators/indicators";
import "highcharts/indicators/pivot-points";
import "highcharts/indicators/macd";
import "highcharts/modules/exporting";
import "highcharts/modules/map";

const options = {
    ...theme,
    chart: {
        type: "line",
        backgroundColor: '#2E2E2E',
        borderColor: "#111111",
        borderWidth: 2,
        className: "dark-container",
        plotBackgroundColor: "rgba(255, 255, 255, .1)",
        plotBorderColor: "#CCCCCC",
        plotBorderWidth: 1
    },
    title: {
        text: ""
    },
    subtitle: {
        text: ""
    },
    xAxis: {
        categories: [
            "6 月",
            "7 月",
            "8 月",
            "9 月",
            "10 月",
            "11 月",
            "12 月",
            "1 月",
            "2 月",
            "3 月",
            "4 月",
            "5 月"
        ]
    },
    yAxis: {
        title: {
            text: ""
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false,
                color: "red"
            },
            enableMouseTracking: true,
            marker: {
                lineColor: "#333"
            }
        },
        spline: {
            marker: {
                lineColor: "#333"
            }
        },
        scatter: {
            marker: {
                lineColor: "#333"
            }
        },
        candlestick: {
            lineColor: "white"
        }
    },
    series: [
        {
            name: "",
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
            name: "",
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ]
};


const Chart = () => (
    <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType={"chart"}
        />
    </div>
);

export default Chart;
