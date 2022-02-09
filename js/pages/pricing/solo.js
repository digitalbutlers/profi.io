// import KisTabs from 'kis-tabs';

const starterTabs = new KisTabs({
	tabSelector: '[data-price-type~="starter"]',
	btnSelector: '[data-payment-type]',
});
const proTabs = new KisTabs({
	tabSelector: '[data-price-type~="pro"]',
	btnSelector: '[data-payment-type]',
});
const premiumTabs = new KisTabs({
	tabSelector: '[data-price-type~="premium"]',
	btnSelector: '[data-payment-type]',
});

starterTabs.init();
proTabs.init();
premiumTabs.init();


(function stickyHeaders() {
	const desktopHeader = document.querySelector('.st-tiltle-row.sticky');
	const desktopDefaultOffsetTop = desktopHeader.offsetTop;
	const mobileHeader = document.querySelector('.st-row.mobile-sticky');
	const mobileDefaultOffsetTop = mobileHeader.offsetTop;
	const scrolledClass = 'js--scrolled';

	window.addEventListener('scroll', () => {
		if (desktopHeader.offsetTop > desktopDefaultOffsetTop) {
			desktopHeader.classList.add(scrolledClass);
		} else {
			desktopHeader.classList.remove(scrolledClass);
		}
		if (mobileHeader.offsetTop > mobileDefaultOffsetTop) {
			mobileHeader.classList.add(scrolledClass);
		} else {
			mobileHeader.classList.remove(scrolledClass);
		}
	}, {
		passive: true,
	});
}());

