document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line no-undef
	fillNav();
	// eslint-disable-next-line no-undef
	initSocialMediaButtons();

	if (document.body.clientWidth < 992) {
		const tabNav = document.querySelector('.table-of-content-block');
		const clonedNode = tabNav.cloneNode(true);
		tabNav.remove();
		document.querySelector('.post-body figure').insertAdjacentElement('afterend', clonedNode);

		const dropdownCardOpen = (dropdownCardSelector, dropdownText, openClass) => {
			let activeCard;
			const dropdownCardsList = document.querySelectorAll(dropdownCardSelector);
			if (dropdownCardsList[0]) {
				dropdownCardsList.forEach((elem) => {
					elem.addEventListener('click', () => {
						const dropdownTextOfElem = elem.querySelector(dropdownText);
						if (!elem.classList.contains(openClass)) {
							if (activeCard) {
								activeCard.querySelector(dropdownText).parentNode.style.height = '0px';
								activeCard.classList.remove(openClass);
							}
							elem.classList.add(openClass);
							dropdownTextOfElem.parentNode.style.height = `${dropdownTextOfElem.clientHeight}px`;
							activeCard = elem;
						} else {
							elem.classList.remove(openClass);
							dropdownTextOfElem.parentNode.style.height = '0px';
						}
					});
				});
			}
		};

		dropdownCardOpen('.table-of-content-block', '.table-of-contents-list', 'open');
		document.addEventListener('scroll', () => {
			if (clonedNode.classList.contains('open')) {
				clonedNode.click();
			}
		});
	}
});
