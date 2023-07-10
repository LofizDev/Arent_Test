import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import theme from "./Theme";

import "highcharts/indicators/indicators";
import "highcharts/indicators/pivot-points";
import "highcharts/indicators/macd";
import "highcharts/modules/exporting";
import "highcharts/modules/map";

const Chart = (props) => {
    const { data } = props

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
                data: data?.data1
            },
            {
                name: "",
                data: data?.data2

            }
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                constructorType={"chart"}
            />
        </div>
    );
}
export default Chart;
