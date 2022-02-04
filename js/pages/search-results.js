document.querySelector('[data-role="search-request"]').innerHTML = document.querySelector('#search').value;

function numberSearch() {
	const parent = document.querySelector('.search-result-wrapper');
	const itemsSearch = parent.querySelectorAll('.search-result-item');

	itemsSearch.forEach((item, index) => {
		if ((index + 1) < 10) {
			const number = item.querySelector('.search-result-item-number');
			number.textContent = `0${index + 1}`;
		} else {
			const number = item.querySelector('.search-result-item-number');
			number.textContent = `${index + 1}`;
		}
	});
}
numberSearch();
