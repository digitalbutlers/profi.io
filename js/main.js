/* eslint no-undef: 0 */


(function quotesFontSizeManager() {
	const quotes = document.querySelectorAll('.case-study-rich-text blockquote');

	for (let i = 0; i < quotes.length; i += 1) {
		const quote = quotes[i];

		if (quote.textContent.length > 160) {
			quote.style.fontSize = `${parseInt(getComputedStyle(quote).fontSize, 10) * 0.764}px`;
			quote.style.lineHeight = '1.8em';
		}
	}
}());

function header() {
	const headerEl = document.querySelector('.header');

	if (window.pageYOffset < 1) {
		headerEl.classList.remove('scrolled');
	} else {
		headerEl.classList.add('scrolled');
	}
}

window.addEventListener('load', header);
window.addEventListener('scroll', header);


$(document).ready(() => {
	$.getScript('https://d2twz9av6or5hk.cloudfront.net/1.6/adally.js', (data, textStatus, jqxhr) => {
		// console.log(data); // данные
		// console.log(textStatus); // успех
		// console.log(jqxhr.status); // 200
		if (textStatus === 'success') {
			(function changeIcon() {
				const setInt = setInterval(() => {
					const parentIcon = document.querySelector('.mic-access-tool-general-button');
					if (parentIcon !== undefined) {
						const iconImg = parentIcon.querySelector('img');

						iconImg.setAttribute('src', 'https://assets.website-files.com/604b409bd0218f7308223ed9/60ffbd628caccdd4ac836f51_Invalid_icon_Profi.svg');
						clearInterval(setInt);
					}
				}, 500);
			}());
		}
	});


	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js', (data, textStatus, jqxhr) => {
		if (textStatus === 'success') {
			if (!Cookies.get('alert')) {
				$('.popup-overlay').show();
				Cookies.set('alert', true, { expires: 1 });
				// Documentation at https://github.com/js-cookie/js-cookie
			}
		}
	});

	(function initYeps(y, e, p) {
		e.YepsID = 'FcCCm8f3wCoCETmXg';
		const s = y.createElement('script');
		e[p] = e[p] || function (...args) {
			(e[p].q = e[p].q || []).push(args);
		};
		s.async = true;
		s.src = 'https://widget.yeps.io/yeps.js';
		if (y.head) y.head.appendChild(s);
	}(document, window, 'Yeps'));
	(function initFprom() {
		const t = document.createElement('script');
		t.type = 'text/javascript', t.async = !0, t.src = 'https://cdn.firstpromoter.com/fprom.js', t.onload = t.onreadystatechange = function () {
			const t = this.readyState;
			if (!t || t === 'complete' || t === 'loaded') {
				try {
					$FPROM.init('acl276a7', '.profi.io');
				} catch (t) {
				}
			}
		};
		const e = document.getElementsByTagName('script')[0];
		e.parentNode.insertBefore(t, e);
	}());

	(function initIntercomButtons() {
		const attr = 'data-intercom-message';
		const buttons = document.querySelectorAll(`[${attr}]`);

		buttons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				Intercom('showNewMessage', button.getAttribute(attr));
			});
		});
	}());

	function playAudio(name) {
		const audio = new Audio();
		audio.src = `https://digitalbutlers.me/any_scripts/profi/audio/${name}.mp3`;
		audio.autoplay = true;
		audio.addEventListener('ended', () => {
			audio.remove();
		});
	}

	(function initSoundListeners() {
		document.querySelectorAll('[data-sound]').forEach((el) => {
			el.addEventListener('click', () => {
				playAudio(el.dataset.sound);
			});
		});
	}());
});
