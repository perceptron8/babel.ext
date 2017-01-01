"use strict";

const swmmo = document.getElementById("SWMMO");
if (swmmo) {
	const clone = swmmo.cloneNode();
	const lang = chrome.i18n.getMessage("lang");
	clone.setAttribute("flashvars", swmmo.getAttribute("flashvars")
		.replace(/lang=[a-z]{2}[-][a-z]{2}/g, "lang=" + lang));
	swmmo.parentNode.replaceChild(clone, swmmo);
	console.info(lang);
}
