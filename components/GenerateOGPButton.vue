<template>
  <div class="wrap">
    <div class="button" ref="capture">作成する</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const elm = this.$refs.capture;
    const self = this;

    this.$nextTick(() => {
      if (process.client) {
        const h2c = require("html2canvas");
        elm.addEventListener("click", () => {
          self.$store.dispatch("setLoading", true);
          window.scrollTo(0, 0);
          h2c(document.querySelector("#show"), {
            backgroundColor: "#fff",
          }).then((canvas) => {
            canvas.toBlob(blob => {
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onload = function () {
                const dataURL = this.result;
                self.handleClick(dataURL);
              };
            });
          });
        });
      }
    });
  },
  methods:{
      handleClick(dataURL){
          this.$emit("click",dataURL);
      }
  }
};
</script>
