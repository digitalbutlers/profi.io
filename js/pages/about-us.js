// eslint-disable-next-line
const arCounter = []; const arImgData = []; for (let e = 1; e <= 11; e += 1)arCounter.push(e); for (let e = 1; e <= 11; e += 1) { const r = Math.floor(Math.random() * arCounter.length); const t = `.team-wrp-${e}`; const a = `.team-wrp-${arCounter.splice(r, 1)[0]}`; const o = document.querySelector(t); o.querySelector('img'), arImgData.push({ className: a, src: o.querySelector('img').src, text: o.querySelector('.member-text-block').innerText }); }arImgData.forEach((e) => { const r = document.querySelector(e.className); r.querySelector('img').src = e.src, r.querySelector('.member-text-block').innerText = e.text; });

function soundClick() {
	const audio = new Audio();
	audio.src = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fe47fb3-dcd7-4e16-aab3-50fcfe55184d/c62f204af86c6cea52532fd836488f02-AudioTrimmer.com-AudioTrimmer.com.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210618T070117Z&X-Amz-Expires=86400&X-Amz-Signature=191f4f407b71ba36d16ea97b8f2e5c13bdd4529c9a5c745ef7f3062759b1d6b3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Profi%2520pronunciation%2520female%2520cut.wav%22'; // Указываем путь к звуку "клика"
	audio.autoplay = true;
}

function ready() {
	document.querySelector('#sound').addEventListener('click', soundClick);
}

document.addEventListener('DOMContentLoaded', ready);
