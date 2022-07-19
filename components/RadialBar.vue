<template>
  <div id="chart">
    <VueApexCharts type="radialBar" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>

<script>
export default {
  props: ["series"],
  data() {
    return {
      chartOptions: {
        chart: {
          height: 100,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                color: "#FECDA4",
                fontSize: '22px',
              },
              value: {
                color: "#FECDA4",
                fontSize: '16px',
              }
            },
            hollow: {
              size: '65%',
            }
          },
        },
        colors: ['#FECDA4'],
        labels: ['Total'],
      }
    }
  },
}
</script>
