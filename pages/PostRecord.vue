<template>
  <div class="container">
    <div id="show">
      <p id="ogp_title">本日の配達</p>
      <p id="ogp_area">{{ area }} エリア</p>
      <div id="ogp_time_count">
        <span id="canvas_time">{{ hour }}時間{{ min }}分</span>
        <span id="canvas_count">{{ count }}件</span>
      </div>
      <span v-for="option in ways" :key="option.id">
        <template v-if="option.value === way">{{ option.name }}</template>
      </span>
      <div id="ogp_reward">
        <span id="canvas_reward">報酬:{{ reward }}円</span>
      </div>
    </div>

    <ValidationObserver ref="observer" v-slot="{ errors }">
      <ul id="form">
        <form>
          <li class="label">
            <label for="area">稼働エリア</label>
          </li>
          <li class="input">
            <ValidationProvider
              name="エリア"
              rules="required"
              v-slot="{ errors }"
              style="width:100%;"
            >
              <input type="text" v-model="area" v-on:change="formCheck" class="input"/>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </li>
          <li class="label">
            <label for="way">配達手段</label>
          </li>
          <p v-if="errors">{{ errors.way }}</p>
          <li class="input">
            <ValidationProvider
              name="配達手段"
              rules="required"
              v-slot="{ errors }"
              style="width:100%;"
            >
              <select name id v-model="way">
                <option
                  v-for="way in ways"
                  :key="way.id"
                  :value="way.value"
                  v-on:change="formCheck"
                >
                  {{ way.name }}
                </option>
              </select>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </li>
          <li class="label">
            <label for="count">配達件数</label>
          </li>
          <p v-if="errors">{{ errors.count }}</p>
          <li class="input">
            <ValidationProvider
              name="配達件数"
              rules="required"
              v-slot="{ errors }"
              style="width:100%;"
            >
              <select name id v-model="count">
                <option v-for="count in 50" :key="count.id" :value="count">
                  {{ count }}
                </option>
              </select>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </li>
          <li class="label">
            <label for="time">稼働時間</label>
          </li>
          <p v-if="errors">{{ errors.hour }}</p>
          <li class="input">
            <ValidationProvider
              name="稼働時間"
              rules="required"
              v-slot="{ errors }"
              style="width:100%;"
            >
              <select name id v-model="hour">
                <option v-for="hour in 12" :key="hour.id" :value="hour">
                  {{ hour }}
                </option></select
              >時間
              <select name id v-model="min">
                <option v-for="min in 59" :key="min.id" :value="min">
                  {{ min }}
                </option></select
              >分
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </li>
          <li class="label">
            <label for="reward">報酬金額</label>
          </li>
          <p v-if="errors">{{ errors.reward }}</p>
          <li class="input">
            <ValidationProvider
              name="報酬金額"
              rules="min_value:100|required"
              v-slot="{ errors }"
              style="width:100%;"
            >
              <input type="number" id="reward" v-model="reward" />円
              <span>{{ errors[0] }}</span>
              <span>{{ errors[1] }}</span>
            </ValidationProvider>
          </li>
          <li class="label">
            <label for="comment">コメント</label>
          </li>
          <li class="input">
            <textarea
              id="comment"
              cols="150"
              rows="10"
              name="comment"
              v-model="comment"
            ></textarea>
          </li>
          <li>
            <span v-if="errors['エリア']== '' && errors['配達手段']=='' &&errors['配達件数']==''&&errors['稼働時間']==''&&errors['報酬金額']==''"> 
              <client-only placeholder="Loading...">
                <GenerateOGPButton @click="handleGenerateOGP" />
              </client-only>
            </span>
          </li>
        </form>
      </ul>
    </ValidationObserver>

    <div id="control">
      <!-- <div id="show">
            <p id="ogp_title">本日の配達</p>
            <p id="ogp_area">{{ area }} エリア</p>
            <div id="ogp_time_count">
              <span id="canvas_time">{{ hour }}時間{{ min }}分</span>
              <span id="canvas_count">{{ count }}件</span>
            </div>
            <span v-for="option in ways" :key="option.id">
              <template v-if="option.value === way">{{ option.name }}</template>
            </span>
            <div id="ogp_reward">
              <span id="canvas_reward">報酬:{{ reward }}円</span>
            </div>
          </div> -->
    </div>
  </div>
</template>

<script>
import GenerateOGPButton from "@/components/GenerateOGPButton";

export default {
  middleware({ $auth, store, redirect }) {
    if (!$auth.state.loggedIn) {
      redirect("/login");
    }
  },
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
      user_id: this.$auth.user.id,
    };
  },
  methods: {
    handleGenerateOGP(e) {
      //vuex action
      this.$store.dispatch("record/setMessage", {
        message: this.comment,
        image: e,
        area: this.area,
        way: this.way,
        count: this.count,
        user_id: this.user_id,
        time: this.hour * 60 + this.min,
        reward: Number(this.reward),
      });
    },
    formCheck() {
      this.errors = [];
      if (!this.area) {
        this.errors.area = "正しく入力してください";
      }
      if (!this.reward) {
        this.errors.reward = "正しく入力してください";
      }
      if (!this.way) {
        this.errors.way = "正しく入力してください";
      }
      if (!this.count) {
        this.errors.count = "正しく入力してください";
      }
      if (!this.hour || !this.min) {
        this.errors.hour = "正しく入力してください";
      }

      if (!this.errors.length) {
        //not error
        console.log("not error", this.errors);
        if (process.client) {
          // 追加
          // document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
          // document.getElementById("control").style.display ="block"
        }
      }
    },
  },
  computed: {
    check() {
      if (!this.errors.length) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
div#show {
  background-color: black;
  border: #35aa3e solid 20px;
  /* padding: 20px 0; */
  height: 400px;
  width: 700px;
  margin: 0 auto;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
}
p#ogp_title {
  font-size: 20px;
}
p#ogp_area {
  font-size: 35px;
}
#ogp_time_count {
  font-size: 65px;
}
div#ogp_reward {
  font-size: 75px;
}
ul#form {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
}
li {
  height: auto;
  width: 100%;
}
li input,
select {
  width: 100%;
  height: 40px;
  font-size: 20px;
}
li.input {
  margin-bottom: 10px;
}
div#control {
  display: none;
}
@media screen and (max-width: 460px) {
  div#show {
    border: #35aa3e solid 10px;
    padding: 20px 0;
    height: 200px;
    width: 350px;
    margin: 0 auto;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
  }
  p#ogp_area {
    font-size: 16px;
  }
  #ogp_time_count {
    font-size: 30px;
  }
  div#ogp_reward {
    font-size: 35px;
  }
}
</style>