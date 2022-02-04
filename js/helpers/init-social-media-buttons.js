/* eslint no-undef: 0 */


// eslint-disable-next-line no-unused-vars
function initSocialMediaButtons() {
	$('.back-link-block').click(() => {
		window.history.back();
	});
	$('.social-share-btn').click(() => {
		const curURL = encodeURIComponent(document.URL);
		const curTitle = encodeURIComponent($('.h1.case-study-h1').text());
		const imgURL = encodeURI($('.post-body img').attr('src'));
		let openURL = curURL;
		const theTitle = encodeURIComponent('') || curTitle;

		if ($(this).hasClass('fb')) {
			openURL = `https://www.facebook.com/sharer.php?s=100&u=${
				curURL
			}&p[title]=${
				curTitle
			}&p[summary]=${
				theTitle
			}&p[images][0]=${
				imgURL}`;
		}
		if ($(this).hasClass('lnk')) {
			openURL = `https://www.linkedin.com/shareArticle?mini=true&url=${
				curURL
			}&title=${
				curTitle}`;
		}
		if ($(this).hasClass('twitter')) {
			openURL = `http://twitter.com/share?text=${theTitle}&url=${curURL}`;
		}
		// for copy current URL
		if ($(this).hasClass('copy-link')) {
			const popup = document.querySelector('.popup_link-save');
			navigator.clipboard.writeText(window.location.href);
			popup.classList.add('active');
			setTimeout(() => {
				popup.classList.remove('active');
			}, 1000);
			return false;
		}
		window.open(
			openURL,
			curTitle,
			'toolbar=0, status=0, width=640, height=640',
		);
		return false;
	});
}

