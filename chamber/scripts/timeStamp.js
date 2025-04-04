function timeStamp() {
    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Africa/Bamako",
        timeZoneName: "short"
    };

    const timestamp = now.toLocaleString("en-US", options);

    const timestampElement = document.getElementById("timestamp");
    if (timestampElement) {
        timestampElement.innerText = `Timestamp: ${timestamp}`;
    }
}
