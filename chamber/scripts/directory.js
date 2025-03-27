async function getMembers() {
    try {
        const response = await fetch("data/members.json"); // Ensure the path is correct
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const members = await response.json();
        displayMembers(members); // Directly pass the array
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getMembers();

const displayMembers = (members) => {
    const container = document.querySelector("#members"); // Target <article> instead of <div>

    if (!container) {
        console.error("Error: #members container not found.");
        return;
    }

    container.innerHTML = ""; // Clear previous content before adding new elements

    members.forEach((member) => {
        const bizCard = document.createElement("section");
        bizCard.classList.add("member");

        const companyName = document.createElement("h3");
        companyName.textContent = member.name; // Fixed key

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement("a");
        website.href = member.website.startsWith("http") ? member.website : `https://${member.website}`;
        website.textContent = "Visit Website";
        website.target = "_blank"; // Open link in a new tab

        const logo = document.createElement("img");
        logo.src = `images/${member.image}`; // Ensure images are in the "images" folder
        logo.alt = `${member.name} logo`;
        logo.loading = "lazy";
        logo.width = 75;
        logo.height = "auto";

        // Append elements to the business card
        bizCard.appendChild(logo);
        bizCard.appendChild(companyName);
        bizCard.appendChild(address);
        bizCard.appendChild(phone);
        bizCard.appendChild(website);

        // Append card to the container
        container.appendChild(bizCard);
    });
};

// Toggle List/Grid View
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const display = document.querySelector("#members"); // Now correctly selecting <article>

if (gridBtn && listBtn && display) {
    gridBtn.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });
} else {
    console.error("Error: Grid/List buttons or #members container not found.");
}
