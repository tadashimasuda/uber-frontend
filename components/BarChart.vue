<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["recent5days"],
  data() {
    return {
      chartdata: {
        labels: [
          this.recent5days[0].created_at,
          this.recent5days[1].created_at,
          this.recent5days[2].created_at,
          this.recent5days[3].created_at,
          this.recent5days[4].created_at,
        ],
        datasets: [
          {
            backgroundColor: "#04C950",
            data: [
              this.recent5days[0].reward,
              this.recent5days[1].reward,
              this.recent5days[2].reward,
              this.recent5days[3].reward,
              this.recent5days[4].reward,
            ],
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