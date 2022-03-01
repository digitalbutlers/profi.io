document.addEventListener('DOMContentLoaded', () => {
	// eslint-disable-next-line no-undef
	fillNav();

	const elemToObserve = document.querySelector('.case-table-of-content');

	const mutationObserver = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (
				mutation.attributeName === 'class'
        && mutation.target.classList.contains('w--current')
			) {
				elemToObserve.scrollTo({
					top: +mutation.target.dataset.scroll,
					behavior: 'smooth',
				});
			}
		});
	});
	const items = [...elemToObserve.querySelectorAll('a')];
	items.reduce((prevTop, item) => {
		item.setAttribute('data-scroll', prevTop);
		return prevTop + item.scrollHeight;
	}, 0);

	mutationObserver.observe(elemToObserve, {
		attributes: true,
		childList: true,
		subtree: true,
	});

	if (document.body.clientWidth < 992) {
		const tabNav = document.querySelector('.table-of-content-block');
		document
			.querySelector('.post-body')
			.insertAdjacentElement('afterbegin', tabNav);
		const dropdownCardOpen = (dropdownCardSelector, dropdownText, openClass) => {
			let activeCard;
			const dropdownCardsList = document.querySelectorAll(dropdownCardSelector);
			if (dropdownCardsList[0]) {
				dropdownCardsList.forEach((elem) => {
					elem.addEventListener('click', () => {
						const dropdownTextOfElem = elem.querySelector(dropdownText);
						if (!elem.classList.contains(openClass)) {
							if (activeCard) {
								activeCard.querySelector(
									dropdownText,
								).parentNode.style.height = '0px';
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

		dropdownCardOpen(
			'.table-of-content-block',
			'.table-of-contents-list',
			'open',
		);
		document.addEventListener('scroll', () => {
			if (tabNav.classList.contains('open')) {
				tabNav.click();
			}
		});
	}
});
