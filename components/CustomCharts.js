// components/LineChart.js

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Utils from 'chart.js'
import { Add, Subtract } from '@/utils/utils';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);


export function ModuleDropoutRiskPlot({ title, line, deviation, students_at_risk = [] }) {
    const chartContainer = useRef(null);

    const label = [];
    for (let i = 1; i <= line.length; i++) {
        label.push(`T${i}`);
    }
    let data = {
        labels: label,
        datasets: [
            {
                label: 'Mean',
                data: line,
                borderColor: "#5210DC",
                backgroundColor: '#5210DC',
                fill: false
            },
            {
                label: 'Lower 75th Percentile',
                data: Subtract(line, deviation),
                borderColor: "#969696",
                borderWidth: 1,
                backgroundColor: '#c9c9c9',
                pointRadius: 0,
            },
            {
                label: 'Upper 75th Percentile',
                data: Add(line, deviation),
                borderColor: "#969696",
                borderWidth: 1,
                backgroundColor: '#c9c9c9',
                fill: false,
                pointRadius: 0,
                fill: '-1',
            },


        ]
    };

    students_at_risk.map((student, key = key) => (
        data.datasets.unshift(
            {
                label: "Stundent: " + student.id,
                data: student.data,
                borderColor: "#DC107E",
                borderWidth: 2,
                backgroundColor: '#DC107E',
                fill: false,

            }
        )
    ))


    const config = {
        type: 'line',
        data: data,
        options: {
            elements: {
                line: {
                    tension: 0.4,
                }
            },
            scales: {
                y: {
                    stacked: false,
                    title: {
                        text: "Abbruchgefahr",
                        display: true,
                    },
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false
                    },
                    suggestedMax: 100,
                    min: 0,
                },
                x: {

                }
            },
            smooth: true,
            plugins: {
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: title,
                    color: "black",
                    font: {
                        family: 'Inria Sans'
                    }
                },
                annotation: {
                    annotations: {
                        dangerLine: {
                            type: 'line',
                            label: {
                                display: true,
                                content: 'Danger Zone',
                                position: 'start',
                                backgroundColor: "#FFFFFF",
                                color: '#DC107E',
                                borderColor: '#DC107E',
                                borderWidth: 1,
                                font: {
                                    size: 8,
                                }
                            },
                            yMin: 80,
                            yMax: 80,
                            borderColor: '#DC107E',
                            borderWidth: 2,
                            borderDash: [8],
                        },

                    }
                },
            },
            interaction: {
                intersect: false,
            },



            maintainAspectRatio: false,
        },
    };

    useEffect(() => {
        if (chartContainer && chartContainer.current) {

            const ctx = chartContainer.current.getContext('2d');
            const chart = new Chart(ctx, config);

            return () => {
                chart.destroy();
            };
        }
    }, [chartContainer, data]);

    return (

        <canvas ref={chartContainer} />

    )
};



export function LineChartWithDeviation({ title, line, deviation, extra_lines = [] }) {
    const chartContainer = useRef(null);

    const label = [];
    for (let i = 1; i <= line.length; i++) {
        label.push(`T${i}`);
    }

    let data = {
        labels: label,
        datasets: [
            {
                label: 'Mean',
                data: line,
                borderColor: "#6E6B74",
                backgroundColor: '#6E6B74',
                fill: false,
                pointRadius: 0,
            },
            {
                label: 'Lower 75th Percentile',
                data: Subtract(line, deviation),
                borderColor: "#969696",
                borderWidth: 1,
                backgroundColor: '#c9c9c9',
                pointRadius: 0,
            },
            {
                label: 'Upper 75th Percentile',
                data: Add(line, deviation),
                borderColor: "#969696",
                borderWidth: 1,
                backgroundColor: '#c9c9c9',
                fill: false,
                pointRadius: 0,
                fill: '-1',
            },


        ]
    };

    extra_lines.map((line, key = key) => (
        data.datasets.unshift(
            {
                label: "Stundent: " + line.id,
                data: line.data,
                borderColor: "#5210DC",
                borderWidth: 2,
                backgroundColor: '#5210DC',
                fill: false,

            }
        )
    ))


    const config = {
        type: 'line',
        data: data,
        options: {
            elements: {
                line: {
                    tension: 0.4,
                }
            },
            scales: {
                y: {
                    stacked: false,
                    title: {
                        text: "Übungsnoten",
                        display: true,
                    },
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: false
                    },
                    suggestedMax: 100,
                    min: 0,
                },
                x: {

                }
            },
            smooth: true,
            plugins: {
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: title,
                    color: "black",
                    font: {
                        family: 'Inria Sans'
                    }
                },
                annotation: {
                    annotations: {


                    }
                },
            },
            interaction: {
                intersect: false,
            },



            maintainAspectRatio: false,
        },
    };

    useEffect(() => {
        if (chartContainer && chartContainer.current) {

            const ctx = chartContainer.current.getContext('2d');
            const chart = new Chart(ctx, config);

            return () => {
                chart.destroy();
            };
        }
    }, [chartContainer, data]);

    return (

        <canvas ref={chartContainer} />

    )
};


export function PieChart({data}) {

    const chartContainer = useRef(null);

    const DATA_COUNT = 5;
    const my_rate = 0.33;
    const class_rate = 0.54;

    

    const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
                display: false,
                position: top,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            },
            title: {
              display: true,
              text: 'Abgabequote'
            }
          }
        },
      };



      useEffect(() => {
        if (chartContainer && chartContainer.current) {

            const ctx = chartContainer.current.getContext('2d');
            const chart = new Chart(ctx, config);

            return () => {
                chart.destroy();
            };
        }
    }, [chartContainer, data]);

    return (

        <canvas ref={chartContainer} />

    )
}