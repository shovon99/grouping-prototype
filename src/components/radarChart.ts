import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


import { defineComponent, h, PropType } from 'vue'

import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  Plugin
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
)

export default defineComponent({
  name: 'RadarChart',
  components: {
    Radar
  },
  props: {
    chartId: {
      type: String,
      default: 'radar-chart'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object ,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    },
    programming: {
        type: Number,
        default: 0
    },
    writing: {
        type: Number,
        default: 0
    },
    communication: {
        type: Number,
        default: 0
    }
  },
  setup(props) {
    const chartData = {
      labels: [
        'Programming',
        'Communication',
        'Writing',
      ],
      datasets: [
        {
          label: 'Strengths Radar',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [props.programming, props.communication, props.writing]
        },
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
            min: 0,
            max: 5,
            ticks: {
                stepSize: 1
            }
        },
      }
    }

    return () =>
      h(Radar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})