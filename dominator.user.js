// ==UserScript==
// @name        The Dominator
// @namespace   Ondra
// @match       https://en.wikipedia.org/wiki/Dominik_Ha%C5%A1ek
// @grant       none
// @version     1.0
// @author      Ondra Kučera
// @description Změní všechny výskyty slova Hašek na záznamu o Dominiku Haškovi na anglické Wikipedii na výraz The Dominator.
// ==/UserScript==

const HASEK_REG_EXP = /Hašek/g;
const DOMINATOR = "The Dominator";

document.body.querySelectorAll("*").forEach((element) => {
	element.childNodes.forEach((childNode) => {
		if (childNode.nodeType === Node.TEXT_NODE) {
			if (HASEK_REG_EXP.test(childNode.nodeValue)) {
				childNode.nodeValue = childNode.nodeValue.replace(HASEK_REG_EXP, DOMINATOR);
			}
		}
	});
});
