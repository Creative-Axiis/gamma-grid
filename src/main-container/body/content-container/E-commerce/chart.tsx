"use client";

import React from "react";
import * as echarts from "echarts";

interface ChartProps {
    selectedPeriod: string;
}

const Chart: React.FC<ChartProps> = ({ selectedPeriod }) => {
    const chartRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!chartRef.current) return;

        const chart = echarts.init(chartRef.current);

        const getDataForPeriod = (period: string) => {
            switch (period) {
                case "All":
                    return {
                        xAxis: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        barData: [
                            100, 190, 280, 337, 217, 205, 298, 205, 324, 205,
                            190, 298,
                        ],
                        lineData: [
                            680, 700, 720, 800, 710, 690, 720, 690, 740, 690,
                            680, 720,
                        ],
                    };
                case "1M":
                    return {
                        xAxis: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        barData: [
                            298, 205, 324, 205, 190, 298, 100, 190, 280, 337,
                            217, 205,
                        ],
                        lineData: [
                            720, 690, 740, 690, 680, 720, 680, 700, 720, 800,
                            710, 690,
                        ],
                    };
                case "6M":
                    return {
                        xAxis: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        barData: [
                            337, 217, 205, 298, 100, 190, 280, 205, 324, 205,
                            190, 298,
                        ],
                        lineData: [
                            800, 710, 690, 720, 680, 700, 720, 690, 740, 690,
                            680, 720,
                        ],
                    };
                case "1Y":
                    return {
                        xAxis: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        barData: [
                            190, 298, 337, 100, 190, 280, 217, 205, 298, 205,
                            324, 205,
                        ],
                        lineData: [
                            680, 720, 800, 680, 700, 720, 710, 690, 720, 690,
                            740, 690,
                        ],
                    };
                default:
                    return {
                        xAxis: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        barData: [
                            190, 298, 337, 100, 190, 280, 217, 205, 298, 205,
                            324, 205,
                        ],
                        lineData: [
                            680, 720, 800, 680, 700, 720, 710, 690, 720, 690,
                            740, 690,
                        ],
                    };
            }
        };

        const {
            xAxis: xAxisData,
            barData,
            lineData,
        } = getDataForPeriod(selectedPeriod);

        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "none",
                },
                formatter: function (params: any) {
                    let tooltip = `Month: ${params[0].axisValue}<br/>`;
                    params.forEach((param: any) => {
                        if (param.seriesName === "Bar") {
                            tooltip += `Bar Value: ${param.value}<br/>`;
                        } else if (param.seriesName === "Line") {
                            tooltip += `Line Value: ${param.value}`;
                        }
                    });
                    return tooltip;
                },
                textStyle: {
                    color: "#101318",
                },
            },
            grid: {
                top: 20,
                left: 24,
                right: 24,
                bottom: 52,
                containLabel: false,
            },
            xAxis: [
                {
                    type: "category",
                    data: xAxisData,
                    axisLine: {
                        lineStyle: {
                            color: "#E9E9E9",
                            width: 1,
                            type: "solid",
                        },
                        onZero: true,
                        symbol: ["none", "none"],
                    },
                    boundaryGap: true,
                    offset: 12,
                    axisTick: { show: false },
                    axisLabel: {
                        color: "#7C818A",
                        fontSize: 13,
                        fontFamily: "Inter",
                        fontWeight: 500,
                    },
                    axisPointer: {
                        type: "shadow",
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    show: false,
                    max: 600,
                },
                {
                    type: "value",
                    show: false,
                    max: 1000,
                },
            ],
            series: [
                {
                    name: "Bar",
                    type: "bar",
                    barWidth: 46.75,
                    barGap: "24px",
                    itemStyle: {
                        color: "#5654D4",
                        borderRadius: [5, 5, 5, 5],
                    },
                    data: barData,
                },
                {
                    name: "Line",
                    type: "line",
                    yAxisIndex: 1,
                    symbol: "circle",
                    symbolSize: 8,
                    lineStyle: {
                        color: "#5654D4",
                        width: 2,
                    },
                    itemStyle: {
                        color: "#5654D4",
                        borderWidth: 2,
                        borderColor: "#FFFFFF",
                    },
                    data: lineData,
                },
            ],
        };

        chart.setOption(option as any);

        const handleResize = () => {
            chart.resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            chart.dispose();
        };
    }, [selectedPeriod]);

    return <div ref={chartRef} style={{ height: "252px", width: "100%" }} />;
};

export default Chart;


