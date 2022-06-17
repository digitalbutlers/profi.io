const email = document.querySelector('[data-register-email]');
const confirmEmail = document.querySelector('[data-register-confirm-email]');
const form = document.querySelector('.registration form');

const onChangeInput = (evt) => {
	if (evt.target.closest('[data-register-email]') || evt.target.closest('[data-register-confirm-email]')) {
		const emailValue = email.value.trim().toLowerCase();
		const emailConfirmValue = confirmEmail.value.trim().toLowerCase();

		if (emailValue === emailConfirmValue) {
			email.classList.remove('invalid');
			confirmEmail.classList.remove('invalid');

			form.removeEventListener('input', onChangeInput);
		}
	}
};

const validateConfirmEmail = () => {
	if (!email || !confirmEmail) {
		return;
	}

	const buttonSubmit = form.querySelector('[type="submit"]');

	buttonSubmit.addEventListener('click', (e) => {
		const emailValue = email.value.trim().toLowerCase();
		const emailConfirmValue = confirmEmail.value.trim().toLowerCase();

		if (emailValue !== emailConfirmValue) {
			e.preventDefault();
			email.classList.add('invalid');
			confirmEmail.classList.add('invalid');

			form.addEventListener('input', onChangeInput);
		}
	});
};

validateConfirmEmail();
