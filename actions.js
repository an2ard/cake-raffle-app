
// Waits until the HTML page has completely loaded.
document.addEventListener("DOMContentLoaded", function() {

    // Gets the entry form from the HTML.
    var entryForm = document.getElementById("entryForm");

    // Gets the name input field from the HTML.
    var participantName = document.getElementById("participantName");

    // Gets the participants list from the HTML.
    var participantsList = document.getElementById("participantsList");

    // Gets the participant counter from the HTML.
    var participantCount = document.getElementById("participantCount");

    // Gets the winner display area from the HTML.
    var winnerDisplay = document.getElementById("winnerDisplay");

    // Gets the Draw Winner button from the HTML.
    var drawButton = document.getElementById("drawButton");

    // Gets the Reset button from the HTML.
    var resetButton = document.getElementById("resetButton");

    // Creates an empty array to store participant names.
    var participants = [];

    // Runs when someone submits the entry form.
    entryForm.addEventListener("submit", function(event) {

        // Prevents the page from refreshing.
        event.preventDefault();

        // Gets the name entered by the participant.
        var name = participantName.value.trim();

        // Checks if the name is empty.
        if (name === "") {
            return;
        }

        // Adds the participant's name to the array.
        participants.push(name);

        // Creates a new list item for the participant.
        var listItem = document.createElement("li");

        // Places the participant's name inside the list item.
        listItem.textContent = name;

        // Adds the new list item to the participants list.
        participantsList.appendChild(listItem);

        // Updates the total number of participants.
        participantCount.textContent = "Total participants: " + participants.length;

        // Clears the name input field.
        participantName.value = "";

        // Resets the winner message when a new participant joins.
        winnerDisplay.textContent = "Waiting for the lucky winner! 🎂";

    });

    // Runs when the Draw Winner button is clicked.
    drawButton.addEventListener("click", function() {

        // Checks whether there are any participants.
        if (participants.length === 0) {

            // Displays a message if nobody has registered.
            winnerDisplay.textContent = "Please add participants before drawing!";

            // Stops the drawing process.
            return;
        }

        // Generates a random number based on the participants.
        var randomIndex = Math.floor(Math.random() * participants.length);

        // Selects the participant at the random position.
        var winner = participants[randomIndex];

        // Creates a paragraph element for the winner.
        var winnerMessage = document.createElement("p");

        // Adds a CSS class to style the winner's name.
        winnerMessage.className = "winner-name";

        // Displays the winner's name with cake and party emojis.
        winnerMessage.textContent = "🎂🎉 " + winner + " 🎉🎂";

        // Displays the winner's name.
        winnerDisplay.replaceChildren(winnerMessage);

    });

    // Runs when the Reset button is clicked.
    resetButton.addEventListener("click", function() {

        // Clears all participants from the array.
        participants.length = 0;

        // Removes all names from the participants list.
        participantsList.innerHTML = "";

        // Resets the participant counter to zero.
        participantCount.textContent = "Total participants: 0";

        // Restores the original winner message.
        winnerDisplay.textContent = "Waiting for the lucky winner! 🎂";

        // Clears the name input field.
        participantName.value = "";

    });

});
