const $fileInput = document.getElementById('image')
const $dropZone = document.getElementById('result-image')
const $img = document.getElementById('img-result')

$dropZone.addEventListener('click', () => $fileInput.click())

$dropZone.addEventListener('dragover', (e) => {
	e.preventDefault()

	$dropZone.classList.add('form-file__result--active')
})

$dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault()

	$dropZone.classList.remove('form-file__result--active')
})

const uploadImage = (file) => {
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('load', (e) => {
		$img.setAttribute('src', e.target.result)
	})
}

$dropZone.addEventListener('drop', (e) => {
	e.preventDefault()

	/* console.log(e.dataTransfer) */

	$fileInput.files = e.dataTransfer.files
	const file = $fileInput.files[0]

	uploadImage(file)
})

$fileInput.addEventListener('change', (e) => {
	/* console.log(e.target.files[0]) */
	const file = e.target.files[0]

	uploadImage(file)
})

// codigo que manda el formulario 
const btn = document.getElementById('button');

document.getElementById('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.value = 'Enviando...';

		const serviceID = 'default_service';
		const templateID = 'template_55igq9i';

		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				btn.value = 'Enviar';
				alert('Mensaje enviado correctamente');
			}, (err) => {
				btn.value = 'Enviar';
				alert(JSON.stringify(err));
			});
	});

	const btno = document.getElementById('button');

