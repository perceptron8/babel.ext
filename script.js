"use strict";

const lang = chrome.i18n.getMessage("lang");
const realmLang = chrome.i18n.getMessage("realmLang");

const script = document.createElement("script");
script.appendChild(document.createTextNode(`
	window.gameClientStartUrl = window.gameClientStartUrl?.replace(/lang=[a-z]{2}[-][a-z]{2}/g, "lang=${lang}");
	window.gameClientStartUrl = window.gameClientStartUrl?.replace(/realmLang=[a-z]{2}/g, "realmLang=${realmLang}");
`));
document.body.appendChild(script);
