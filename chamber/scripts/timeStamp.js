/*function timeStamp() {
    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Africa/Bamako",
        timeZoneName: "short"
    };

    const formatted = now.toLocaleString("en-US", options);

        // Target the hidden input and set the timestamp
        const hiddenInput = document.getElementById("timestamp");
        if (hiddenInput) {
            hiddenInput.value = formatted;  // Set hidden field value
        }

        // Target the visible paragraph element and set the timestamp text
        const visibleText = document.getElementById("timestamp-text");
        if (visibleText) {
            visibleText.innerText = `Timestamp: ${formatted}`;
        }
    }

    // Call the function after DOM content is loaded
    document.addEventListener("DOMContentLoaded", timeStamp); */