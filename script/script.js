/*
Scrool Arrown Down
 */
const arrowDown = document.querySelector('.arrow-down');
const service = document.querySelector('#service');
arrowDown.addEventListener('click', () => {
	service.scrollIntoView();
})

/*
Validation Form
 */

const form = document.querySelector('form');
const nameForm = document.querySelector('input[name=name]');
const emailForm = document.querySelector('input[name=email]');
const messageForm = document.querySelector('textarea');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (nameForm.value == "") {
		errorName.style.display = "block";
		errorName.innerText = "Nama Tidak Boleh Kosong";
	}
	else {
		errorName.style.display = "none";

	}

	if (emailForm.value == "") {
		errorEmail.style.display = "block";
		errorEmail.innerText = "Email Tidak Boleh Kosong";
	}
	else {
		errorEmail.style.display = "none";
	}

	if (messageForm.value == "") {
		errorMessage.style.display = "block";
		errorMessage.innerText = "Pesan Tidak Boleh Kosong";
	}
	else {
		errorMessage.style.display = "none";
	}

	if (!nameForm.value == "" && !emailForm.value == "" && !messageForm.value == "") {
		successMessage.style.display = "block";
		successMessage.innerText = "Terima kasih sudah berkenal dengan saya";
	}
})