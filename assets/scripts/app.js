function initLazy(){
	const images = document.querySelectorAll("img.lozad")
	const observer = window.lozad(images)
	observer.observe()
}

function renderImages(cb){
	const gallery = document.querySelectorAll("#gallery")
	for(let i=0; i < data.dogs.length; i++){
		const link = data.dogs[i].image
		const newElement = document.createElement('div')
		newElement.innerHTML = `<img class='img-dog ${link}' data-attr='${link}' class='lozad' data-original='${link}' src='${link}'/>`
		document.getElementById("gallery").appendChild(newElement);


	}
	cb()
}

function renderModal(src){
	// Get the modal
	const modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	const img = document.getElementsByClassName(src);
	const modalImg = document.getElementById("img01");
	const captionText = document.getElementById("caption");
	const span = document.getElementsByClassName("close")[0];

	modal.style.display = "block"
	modalImg.src = src

	span.onclick = function() { 
	    modal.style.display = "none";
	}
}


function modalClick(e){
	e.preventDefault()
	if(e.target.dataset.attr){
		renderModal(e.target.dataset.attr)
	}
}


renderImages(initLazy)


