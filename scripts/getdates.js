const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
	navigation.classList.toggle('open');
	
});

document.getElementById("year").innerHTML = new Date().getFullYear();

Name = "Cristian Joaquin Dardon Godoy";

document.getElementById("name-footer").innerHTML = Name;

document.getElementById("last-modified").innerHTML = "Last Modification  " + document.lastModified;

