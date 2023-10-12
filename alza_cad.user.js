// ==UserScript==
// @name        Alza in CAD
// @namespace   Ondra
// @match       https://www.alza.cz/*
// @grant       none
// @version     1.0
// @author      Ondra Kučera
// @description Zobrazí ceny na Alze v kanadských dolarech
// ==/UserScript==

const CAD = 16.5;
const PRICE_ELEMENT_SELECTORS = ".price-container__price, .price-box__price, .price-detail__without-vat-value, .price-value";

const getPriceNumber = (priceString) => Number(priceString.replace(/\s/g, "").slice(0, -2));
const czkToCad = (priceInCzk) => Math.round(priceInCzk / CAD);
const changePriceToCad = (priceElement) => {
	priceElement.textContent = `${czkToCad(getPriceNumber(priceElement.textContent))} CAD`;
};

document.body.querySelectorAll(PRICE_ELEMENT_SELECTORS).forEach((priceElement) => {
	changePriceToCad(priceElement);
});

const observer = new MutationObserver((mutationRecords) => {
	mutationRecords.forEach((mutationRecord) => {
		mutationRecord.addedNodes.forEach((node) => {
			if (node.nodeType === Node.ELEMENT_NODE) {
				node.querySelectorAll(PRICE_ELEMENT_SELECTORS).forEach((priceElement) => {
					changePriceToCad(priceElement);
				});
			}
		});
	});
});
observer.observe(document.body, { childList: true, subtree: true });
