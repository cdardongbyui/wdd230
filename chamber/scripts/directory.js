var jsonData;

// Function to create and append HTML elements based on JSON data
function populateData(data) {
    var mainContainer = document.getElementById('directory');
    mainContainer.innerHTML = ''; // Clear previous content

    // Loop through each member in the JSON data
    data.members.forEach(function (member) {
        // Create a card element for each member
        var card = document.createElement('div');
        card.classList.add('card');
        // You can add more styling or classes as needed

        // Create HTML content for the card based on member data
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membership.level}</p>
            <p>Perks: ${member.membership.perks.join(', ')}</p>
            <p>Pricing: ${member.membership.pricing}</p>
            <p>${member.otherInfo}</p>
        `;

        // Append the card to the main container
        mainContainer.appendChild(card);
    });
}

// Fetch JSON data from a file or API endpoint
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        populateData(jsonData);
        // Set the default view as a grid
        setGridView();
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Function to set the grid view
function setGridView() {
    var mainContainer = document.getElementById('directory');

    // Clear previous content
    mainContainer.innerHTML = '';

    // Update the class of the main container to apply the appropriate styles
    mainContainer.classList.remove('list-view');
    mainContainer.classList.add('grid-view');

    // Repopulate the content based on the current view
    populateData(jsonData);
}

// Function to toggle between grid and list views
function toggleView(view) {
    var mainContainer = document.getElementById('directory');

    // Clear previous content
    mainContainer.innerHTML = '';

    // Update the class of the main container to apply the appropriate styles
    mainContainer.classList.remove('grid-view', 'list-view');
    mainContainer.classList.add(view);

    // Repopulate the content based on the current view
    populateData(jsonData);
}
