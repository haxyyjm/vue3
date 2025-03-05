import { createI18n } from "vue-i18n";
import enMessages from "./en/messages.json";

const messages = {
  en: enMessages,
  zh: {
    message: {
      hello: "你好，世界",
      welcome: "欢迎使用 Vue.js",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages,
});

export default i18n;
