// Sample data for events
const events = [
    { title: 'Tennis', date: '2024-02-25', time: '10:00', location: 'Guntur', description: 'Want to become a Professional in Tennis' },
    { title: 'Boating/Sailing', date: '2024-03-05', time: '14:00', location: 'Vizag', description: 'Want to become a Professional in Boating/Sailing' },
    { title: 'Horseback riding', date: '2024-03-15', time: '09:30', location: 'Vijayawada', description: 'Want to become a Professional in Horseback riding' }
];

// Function to display events
function displayEvents() {
    const eventCards = document.getElementById('event-cards');
    eventCards.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
        `;
        eventCards.appendChild(card);
    });
}

// Function to handle form submission
function addEvent(event) {
    event.preventDefault();
    const form = event.target;
    const newEvent = {
        title: form.title.value,
        date: form.date.value,
        time: form.time.value,
        location: form.location.value,
        description: form.description.value
    };
    events.push(newEvent);
    displayEvents();
    form.reset();
}

// Event listeners
document.getElementById('event-form').addEventListener('submit', addEvent);

// Initial display of events
displayEvents();

function searchEvents() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const searchResults = events.filter(event =>
    event.title.toLowerCase().includes(searchInput) ||
    event.date.includes(searchInput) ||
    event.location.toLowerCase().includes(searchInput)
  );

  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  
  if (results.length === 0) {
    searchResultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(event => {
      const eventElement = document.createElement("div");
      eventElement.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <hr>
      `;
      searchResultsContainer.appendChild(eventElement);
    });
  }
}