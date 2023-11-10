// Declare the URL of the JSON resource.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with the id "cards".
const cards = document.querySelector('#cards');

// Function to fetch and process the data.
async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Call the function to display prophets.
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display prophets.
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create a section element for the prophet card.
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content to show the prophet's full name.
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting attributes.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the section card.
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the "cards" div.
    cards.appendChild(card);
  });
};

// Call the function to fetch and display the data.
getProphetData();
