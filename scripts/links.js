const baseURL = "https://cdardongbyui.github.io/wdd230/"; 
const linksURL = "https://cdardongbyui.github.io/wdd230/data/links.json"; 

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const table = document.createElement("table"); // Create a new unordered list
  table.id = "activity-links"; // Give the list an ID for styling

  weeks.lessons.forEach((week) => {
    const tr = document.createElement("tr"); // Create a list item for each week
    const td = document.createElement("td");
    const ltd = document.createElement("td");
    const lessonLabel = document.createElement("span");
    lessonLabel.textContent = `Lesson ${week.lesson}: `;

    td.appendChild(lessonLabel)
    week.links.forEach((link, index) => {
      const a = document.createElement("a"); // Create a link for the lesson
      a.href = isAbsoluteURL(link.url) ? link.url : new URL(link.url, baseURL).href; // Check if it's an absolute URL or relative
      a.textContent = link.title; // Set link text
      
      ltd.appendChild(a); // Append the link to the div
      if (index < week.links.length - 1) {
        const separator = document.createElement("span");
        separator.textContent = " | "; // Add a separator between links
        ltd.appendChild(separator);
      }
    });

    tr.appendChild(td); // Append the links
    tr.appendChild(ltd);
    table.appendChild(tr); // Append the list item to the main table
  });

  // Replace the static content with the dynamic list
  const existingList = document.getElementById("activity-links");
  const parent = existingList.parentNode;
  parent.replaceChild(table, existingList);
}

function isAbsoluteURL(url) {
  return /^https?:\/\//i.test(url);
}

getLinks();
