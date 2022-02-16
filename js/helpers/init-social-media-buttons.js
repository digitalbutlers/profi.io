/* eslint no-undef: 0 */


// eslint-disable-next-line no-unused-vars

$('.back-link-block').click(() => {
	window.history.back();
});


(function shareButtonsInit() {
	const shareButtons = document.querySelectorAll('a[data-share]');

	const title = document.querySelector('h1').textContent;
	const url = window.location.href;

	for (let i = 0; i < shareButtons.length; i += 1) {
		const button = shareButtons[i];
		const type = button.parentElement.querySelector('[data-role="share-type"]').textContent;


		const strings = {
			twitter: {
				default: `?url=${url}&text=${title}`,
				'press-release': `?text=@Profi_io in the press again: ${url}`,
				blog: `?text=Check up this awesome content: ${title} — ${url}`,
			},
		};


		switch (button.dataset.share) {
		case 'facebook': {
			button.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
			break;
		}
		case 'twitter': {
			button.href = `https://twitter.com/intent/tweet${strings.twitter[type]}`;
			break;
		}
		case 'linkedin': {
			button.href = `https://www.linkedin.com/sharing/share-offsite/
				?url=${url}
				&title=${title}`;
			break;
		}
		case 'copy-link': {
			button.addEventListener('click', () => {
				navigator.clipboard.writeText(url)
					.then(() => {
						button.classList.add('js--copied');
						setTimeout(() => {
							button.classList.remove('js--copied');
						}, 2000);
					})
					.catch((e) => {
						// eslint-disable-next-line no-console
						console.error(e);
					});
			});
			break;
		}
		default: {
			break;
		}
		}
	}
}());

