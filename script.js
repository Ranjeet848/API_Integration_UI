document.getElementById("submit-btn").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    const responseContainer = document.getElementById("response-container");

    // Clear previous response
    responseContainer.style.display = "none";
    responseContainer.textContent = "";

    if (!userInput.trim()) {
        alert("Please enter a query.");
        return;
    }

    try {
        // Simulate an API call
        const response = await fetch("https://api.openai.com/v1/audio/speech", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: userInput }),
        });

        if (!response.ok) {
            throw new Error("Error in API call.");
        }

        const data = await response.json();
        responseContainer.textContent = data.response || "No response received.";
    } catch (error) {
        responseContainer.textContent = `Error: ${error.message}`;
    }

    responseContainer.style.display = "block";
});
