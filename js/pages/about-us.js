// eslint-disable-next-line
const arCounter = []; const arImgData = []; for (let e = 1; e <= 11; e += 1)arCounter.push(e); for (let e = 1; e <= 11; e += 1) { const r = Math.floor(Math.random() * arCounter.length); const t = `.team-wrp-${e}`; const a = `.team-wrp-${arCounter.splice(r, 1)[0]}`; const o = document.querySelector(t); o.querySelector('img'), arImgData.push({ className: a, src: o.querySelector('img').src, text: o.querySelector('.member-text-block').innerText }); }arImgData.forEach((e) => { const r = document.querySelector(e.className); r.querySelector('img').src = e.src, r.querySelector('.member-text-block').innerText = e.text; });

function soundClick() {
	const audio = new Audio();
	audio.src = 'https://digitalbutlers.me/any_scripts/profi/audio/profi-pron.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true;
}

function ready() {
	document.querySelector('#sound').addEventListener('click', soundClick);
}

document.addEventListener('DOMContentLoaded', ready);
