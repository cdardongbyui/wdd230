// Hamburger Menu

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main");
const weather = document.querySelector("#weather");
const spot = document.querySelector("#spot");
const spot1 = document.querySelector("#spot1");
const spot2 = document.querySelector("#spot2");
const spot3 = document.querySelector("#spot3");
const hero = document.querySelector("#hero");
const events= document.querySelector("#events"); 
const cardEvent1= document.querySelector("#cardEvent1"); 
const cardEvent2= document.querySelector("#cardEvent2"); 
const cardEvent3= document.querySelector("#cardEvent3"); 
const header= document.querySelector("#header");
const herobox= document.querySelector("#hero-box"); 
const footer = document.querySelector("footer");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌃")) {
		main.style.background = "#00ddd0";
		main.style.color = "#ffffff";
        header.style.background='#8e8a8a';
        header.style.color = '#fff';
        
        herobox.style.background='#000000';
        weather.style.background ='#000000';
        spot.style.background ='#000000';
        spot1.style.background ='#000000';
        spot2.style.background ='#000000';
        spot3.style.background ='#000000';
        events.style.background="#000000";
        cardEvent1.style.background="#fff";
        cardEvent2.style.background="#fff"
        cardEvent3.style.background="#fff"
		modeButton.textContent = "🌅";
        footer.style.background = "#8e8a8a";
        
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        header.style.background='#E5E5E5';

        weather.style.background ='#ffffff';
		spot.style.background ='#ffffff';
        spot1.style.background ='#ffffff';
        spot2.style.background ='#ffffff';
        spot3.style.background ='#ffffff';
        events.style.background="#fff";
        modeButton.textContent = "🌃";
        footer.style.background = "#e5e5e5";

	}
});

