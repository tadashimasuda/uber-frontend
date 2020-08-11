<template>
  <div class="container">
    <div id="form_box">
      <div id="show">
        {{area}}
        <span v-for="option in ways" :key="option.id">
          <template v-if="option.value === way">{{option.name}}</template>
        </span>
        {{hour}}時間{{min}}分
        {{count}}件
        {{reward}}円
      </div>
      <ul>
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
            <input type="text" id="reward" v-model="reward" />円
          </li>
          <li class="label">
            <label for="comment">コメント</label>
          </li>
          <li class="input">
            <input type="text" id="text" />
          </li>
          <li class="input">
            <input type="button" id="button" />
          </li>
        </form>
      </ul>
      <div id="popup">
        <h1>お疲れ様です。</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
div#contents_box {
  width: 100%;
  height: auto;
  min-height: 300px;
  margin-top: 10px;
}
ul#contents {
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin: 0 auto;
}
li.content {
  width: 380px;
  height: 110px;
  background-color: #fff;
  border: 1px solid #707070;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
li.content a {
  padding: 50px 0 50px 100px;
  line-height: 110px;
  text-align: center;
  font-size: 18px;
}
li.content a span {
  padding-left: 100px;
  padding-right: 60px;
}

/* form */
div#form_box {
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
}
ul {
  width: 100%;
  height: auto;
}
li.label {
  text-align: center;
}
li.label label {
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}
li.input {
  width: 100%;
  height: auto;
  /* text-align: center; */
  margin-bottom: 20px;
}
li.input select,
input {
  width: 100%;
  /* text-align: center; */
}
input#submit {
  margin: 0 auto;
}
input#text {
  height: 200px;
}
</style>
