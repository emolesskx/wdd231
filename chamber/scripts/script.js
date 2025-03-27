
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `© ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

function getLastModified() {
    const options = {
        timeZone: "Africa/Harare", // Harare Time Zone (CAT, UTC+2)
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short"
    };

    const lastModified = new Date(document.lastModified).toLocaleString("en-ZA", options);
    return `Last Modified: ${lastModified}`;
}

document.getElementById("lastModified").innerHTML = getLastModified();


// Toggle Dark/Light Mode
function screenMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");

    const sections = document.querySelectorAll(
        "main, div.info, div.spotlights, div.event, div.event-card, section.style5, article.card, div.weather-info, div.form-wrapper, section.member, section.member a, div.form-wrapper, form label.top input, form label.sbs, form fieldset, form legend, form label.top, figcaption, section .hero-discover,section.style1,section.style2, section.style3, section.style4, section.style5, .style6"
    );
    sections.forEach((section) => {
        section.classList.toggle("dark-mode");
    });
}


//  Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

//  Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//  Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
} else {
visitsDisplay.textContent = `First Visit!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.




document.addEventListener("DOMContentLoaded", function () {
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
const currentDate = Date.now();
const timeDifference = currentDate - parseInt(lastVisit);
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const messageElement = document.getElementById("message");

if (daysDifference === 0) {
  messageElement.textContent = "Back so soon! Awesome!";
} else {
  messageElement.textContent = `You last visited ${daysDifference} days ago.`;
}
} else {
localStorage.setItem("lastVisit", Date.now());
document.getElementById("message").textContent =
  "Welcome! Let us know if you have any questions.";
}
});
