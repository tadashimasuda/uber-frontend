<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["labels", "data"],
  data() {
    return {
      chartdata: {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: "#04C950",
            data: this.data,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>