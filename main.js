const imgViewer = document.createElement('div')
imgViewer.id = 'imgViewer'
document.body.appendChild(imgViewer)
const images = document.querySelectorAll('img')


// Add click listeners to all img elements
images.forEach(image => {
	image.addEventListener('click', e => {
		imgViewer.classList.add('active')
		const imgPreview = document.createElement('img')
		imgPreview.src = image.src
		imgViewer.appendChild(imgPreview)
		imgViewer.focus()
	})
});

imgViewer.addEventListener('click', e => {
	imgViewer.classList.remove('active')
	imgViewer.removeChild(imgViewer.firstChild) // keep only one child inside imgViewer
})

document.body.addEventListener('keydown', k => {
	try {
		imgViewer.removeChild(imgViewer.firstChild)
	} finally {
		imgViewer.classList.remove('active')
	}
})