import { createI18n } from "vue-i18n";
import enMessages from "./en/messages.json";
import zhCNMessages from "./zh-CN/messages.json";
import zhTWMessages from "./zh-TW/messages.json";

const messages = {
  en: enMessages,
  "zh-CN": zhCNMessages,
  "zh-TW": zhTWMessages,
};

const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  fallbackLocale: "en",
  messages,
});

export default i18n;
