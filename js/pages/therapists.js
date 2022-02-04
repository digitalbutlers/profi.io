document.querySelectorAll('.w-lightbox').forEach((lb) => {
	lb.addEventListener('click', () => {
		document.querySelectorAll('.w-lightbox-content').forEach((el) => {
			el.setAttribute('style', `top: ${window.scrollY}px;`);
		});
	});
});
