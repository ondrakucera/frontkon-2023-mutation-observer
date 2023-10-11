// ==UserScript==
// @name        Alza in CAD (naïve version)
// @namespace   Ondra
// @match       https://www.alza.cz/*
// @grant       none
// @version     1.0
// @author      Ondra Kučera
// @description Zobrazí ceny na Alze v kanadských dolarech (ve skutečnosti funguje pouze na detailu zboží)
// ==/UserScript==

const CAD = 16.5;
const PRICE_ELEMENT_SELECTORS = ".price-container__price, .price-box__price, .price-detail__without-vat-value";

const getPriceNumber = (priceString) => Number(priceString.replace(/\s/g, "").slice(0, -2));
const czkToCad = (priceInCzk) => Math.round(priceInCzk / CAD);

document.querySelectorAll(PRICE_ELEMENT_SELECTORS).forEach((priceElement) => {
	priceElement.textContent = `${czkToCad(getPriceNumber(priceElement.textContent))} CAD`;
});
