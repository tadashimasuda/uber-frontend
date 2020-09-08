<template>
  <div class="container">
      <div id="show">
        <p id="ogp_title">本日の配達</p>
        <p id="ogp_area">{{area}} エリア</p>
        <div id="ogp_time_count">
          <span id="canvas_time">{{hour}}時間{{min}}分</span>
          <span id="canvas_count">{{count}}件</span>
        </div>
        <span v-for="option in ways" :key="option.id">
          <template v-if="option.value === way">{{option.name}}</template>
        </span>
        <div id="ogp_reward">
          <span id="canvas_reward">報酬:{{reward}}円</span>
        </div>
      </div>
      <ul id="form">
        <form>
          <li class="label">
            <label for="area">稼働エリア</label>
          </li>
          <li class="input">
            <input type="text" v-model="area" />
          </li>
          <li class="label">
            <label for="way">配達手段</label>
          </li>
          <li class="input">
            <select name id v-model="way">
              <option v-for="way in ways" :key="way.id" :value="way.value">{{ way.name }}</option>
            </select>
          </li>
          <li class="label">
            <label for="count">配達件数</label>
          </li>
          <li class="input">
            <select name id v-model="count">
              <option v-for="count in 50" :key="count.id" :value="count">{{ count }}</option>
            </select>
          </li>
          <li class="label">
            <label for="time">稼働時間</label>
          </li>
          <li class="input">
            <select name id v-model="hour">
              <option v-for="hour in 12" :key="hour.id" :value="hour">{{ hour }}</option>
            </select>時間
            <select name id v-model="min">
              <option v-for="min in 59" :key="min.id" :value="min">{{ min }}</option>
            </select>分
          </li>
          <li class="label">
            <label for="reward">報酬金額</label>
          </li>
          <li class="input">
            <input type="number" id="reward" v-model="reward" />円
          </li>
          <li class="label">
            <label for="comment">コメント</label>
          </li>
          <li class="input">
            <input type="text" id="comment" name="comment" v-model="comment" />
          </li>
          <div class="control">
            <client-only placeholder="Loading...">
              <GenerateOGPButton @click="handleGenerateOGP" />
            </client-only>
          </div>
        </form>
      </ul>
      <!-- <div id="popup">
        <h1>お疲れ様です。</h1>
      </div>-->
  </div>
</template>

<script>
import GenerateOGPButton from "@/components/GenerateOGPButton";

export default {
  components: {
    GenerateOGPButton,
  },
  data() {
    return {
      comment: "",
      isLoading: false,
      area: "",
      reward: 0,
      way: "",
      count: 0,
      hour: 0,
      min: 0,
      ways: [
        { name: "自転車", value: 0 },
        { name: "バイク", value: 1 },
        { name: "車", value: 2 },
      ],
    };
  },
  methods: {
    handleGenerateOGP(e) {
      //vuex action
      this.$store.dispatch("setMessage", {
        message: this.comment,
        image: e,
        area: this.area,
        way: this.way,
        count: this.count,
        time: this.hour * 60 + this.min,
        reward: Number(this.reward),
      });
    },
  },
};
</script>

<style scoped>
div#show {
  background-color: black;
  border: #35aa3e solid 20px;
  padding: 20px 0;
  height: 400px;
  width: 700px;
  margin: 0 auto;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
}
p#ogp_title{
  font-size: 45px;
}
p#ogp_area{
  font-size: 35px;
}
#ogp_time_count{
  font-size: 65px;
}
div#ogp_reward{
  font-size: 75px;
}
ul#form{
  width: 600px;
  margin :0 auto;
  margin-top: 30px;
  text-align: center;
}
li{
  width:350px;
  height:auto;
}
li input,select{
  width: 100%;
  height:40px;
  font-size: 20px;
}
li input#comment{
  height:150px;
}
li.input{
  margin-bottom: 10px;
}
</style>