(function blog() {
	const templateWrapper = document.querySelector('.category-template');
	const templateTitles = templateWrapper.querySelectorAll('[post-template=title]');
	const postsList = [...document.querySelectorAll('[post-field=wrapper]')];


	for (let i = 0; i < templateTitles.length; i += 1) {
		const title = templateTitles[i];
		postsList.filter((post) => post.querySelector('[post-field=title]').textContent === title.textContent).forEach((elem) => {
			elem.querySelector('[post-field="info"]').appendChild(title.nextSibling.cloneNode(true));
		});
	}
	templateWrapper.remove();
}());
