

"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const data = [
    { name: "Jan", value: 2000 },
    { name: "Feb", value: 15000 },
    { name: "Mar", value: 7000 },
    { name: "Apr", value: 20000 },
    { name: "May", value: 16000 },
    { name: "Jun", value: 18000 },
    { name: "Jul", value: 12000 },
];

export default function Chart() {
    return (
        <Box
            sx={{
                width: "331.2px",
                height: "2000px",
                bgcolor: "background.paper",
                borderRadius: "14.94px",
                border: "0.62px solid #EFEFEF",
                boxShadow:
                    "0px 0.62px 1.87px #00000005, 0px 3.74px 6.23px #b1b1b114",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 1,
                }}
            >
                <Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 600, color: "text.secondary" }}
                        >
                            Balance
                        </Typography>
                        <InfoOutlinedIcon
                            sx={{ fontSize: 14, color: "text.disabled" }}
                        />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                        $20,245
                    </Typography>
                    <Box
                        sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
                    >
                        <ArrowUpwardIcon
                            sx={{ fontSize: 12, color: "success.main" }}
                        />
                        <Typography
                            variant="caption"
                            sx={{ color: "success.main", fontWeight: 500 }}
                        >
                            12% vs last years
                        </Typography>
                    </Box>
                </Box>
                <IconButton size="small" sx={{ mt: -1, mr: -1 }}>
                    <MoreHorizIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#f0f0f0"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: "#888" }}
                            tickMargin={8}
                        />
                        <Bar
                            dataKey="value"
                            radius={[4, 4, 0, 0]}
                            barSize={26}
                            shape={(props: {
                                name?: any;
                                x?: any;
                                y?: any;
                                width?: any;
                                height?: any;
                            }) => {
                                const { x, y, width, height } = props;
                                return (
                                    <g>
                                        <defs>
                                            <linearGradient
                                                id="barGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#E2E8FF"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#F3F5FF"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="activeBarGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#849FFF"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#5E7BF6"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <rect
                                            x={x}
                                            y={y}
                                            width={width}
                                            height={height}
                                            fill={
                                                props.name === "Jun"
                                                    ? "url(#activeBarGradient)"
                                                    : "url(#barGradient)"
                                            }
                                            rx={4}
                                        />
                                    </g>
                                );
                            }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
}
