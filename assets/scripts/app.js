'use strict;'

function initLazy(){
	var images = document.querySelectorAll("img.lozad")
	var observer = window.lozad(images)
	observer.observe()
}

function renderImages(cb){
	var gallery = document.querySelectorAll("#gallery")
	var i = 0;
	var len = data.dogs.length
	while(i < len){
		var link = data.dogs[i].image
		var newElement = document.createElement('div')
		newElement.innerHTML = `<img class='lozad img-dog ${link}' data-attr='${link}' src='${link}'/>`
		document.getElementById("gallery").appendChild(newElement);
		i++
	}
	cb()
}

function renderModal(src){
	var modal = document.getElementById('myModal');
	var img = document.getElementsByClassName(src);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	var span = document.getElementsByClassName("close")[0];

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


