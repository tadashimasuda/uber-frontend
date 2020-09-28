import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules';
import * as originalRules from 'vee-validate/dist/rules';

import ja from 'vee-validate/dist/locale/ja.json';

// // 必要なルールのみインポート
// extend('required', required);
// extend('email', email);

let rule;
for (rule in originalRules) {
  extend(rule, {
    ...originalRules[rule], // eslint-disable-line
  });
}
// メッセージを設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);