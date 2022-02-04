// eslint-disable-next-line no-unused-vars
function fillNav() {
	const headings = [
		...document.querySelectorAll('.case-study-rich-text.w-richtext h2, .case-study-rich-text.w-richtext h3'),
	];
	const sortedHeadings = [];
	if (headings.length < 1) {
		document.querySelector('.table-of-content-block').remove();
		return;
	}
	// sort headings
	for (let i = 0; i < headings.length; i += 1) {
		if (headings[i].tagName === 'H2') {
			sortedHeadings.push({ h2: headings[i], h3: [] });
		} else {
			sortedHeadings[sortedHeadings.length - 1].h3.push(headings[i]);
		}
	}

	function createList(listHeadings, navSelector) {
		const prefix = 'paragraph';
		const nav = document.querySelector(navSelector);
		const template = nav.querySelector(`${navSelector}> li`);

		for (let i = 0; i < listHeadings.length; i += 1) {
			const heading = listHeadings[i];

			const h2Wrapper = document.createElement('div');
			h2Wrapper.setAttribute('id', `${prefix}-${i + 1}`);
			let el = heading.h2;
			el.before(h2Wrapper);
			do {
				const next = el.nextSibling;
				h2Wrapper.append(el);
				if (next) {
					el = next;
				} else {
					break;
				}
			} while (el.tagName !== 'H2');

			const item = template.cloneNode(true);
			const mainLink = item.querySelector('a');
			mainLink.innerHTML = heading.h2.textContent;
			mainLink.setAttribute('href', `#${prefix}-${i + 1}`);

			if (heading.h3.length) {
				const subNav = item.querySelector('ul');
				const secondaryTemplate = subNav.querySelector('li');

				for (let j = 0; j < heading.h3.length; j += 1) {
					const subNavItem = secondaryTemplate.cloneNode(true);
					const secondaryLink = subNavItem.querySelector('a');

					const h3Wrapper = document.createElement('div');
					h3Wrapper.setAttribute('id', `${prefix}-${i + 1}-${j + 1}`);
					let el2 = heading.h3[j];
					el2.before(h3Wrapper);
					do {
						const next = el2.nextSibling;
						h3Wrapper.append(el2);
						if (next) {
							el2 = next;
						} else {
							break;
						}
					} while (el2.tagName !== 'H2' && el2.tagName !== 'H3');
					secondaryLink.innerHTML = heading.h3[j].textContent;
					secondaryLink.setAttribute('href', `#${prefix}-${i + 1}-${j + 1}`);
					subNav.append(subNavItem);
				}
				secondaryTemplate.remove();
			} else {
				item.querySelector('ul').remove();
			}
			nav.append(item);
		}
		template.remove();
	}

	createList(sortedHeadings, '.table-of-contents-list');
}
