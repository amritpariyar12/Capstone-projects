// Example driverApi.js
export async function getDriverBusInfo() {
    // Replace with your backend API call
    return {
        number: "25A",
        name: "City Bus",
        current_lat: 27.700769,
        current_lng: 85.300140,
        stops: [{ id: 1, name: "Stop 1" }, { id: 2, name: "Stop 2" }]
    };
}

export async function updateLocation(location) {
    console.log("Location updated:", location);
    // Replace with your backend POST request
}

export async function sendNotification(stopId, message) {
    console.log(`Notification sent to stop ${stopId}: ${message}`);
    // Replace with your backend POST request
}
