chrome.runtime.sendMessage({ type: "fetchEmojis" }, function (emojis) {
  // Reference to the textarea element
  const textarea = document.getElementById("textarea");
  // Reference to the emoji suggestions container
  const emojiSuggestions = document.getElementById("emoji-suggestions");

  // Add an event listener to the textarea to update the emoji suggestions
  textarea.addEventListener("input", function () {
    // Clear the previous emoji suggestions
    emojiSuggestions.innerHTML = "";
    // Split the text into words
    const words = textarea.value.split(" ");
    // Iterate through the words and suggest the matching emojis
    for (const word of words) {
      if (emojis[word.toLowerCase()]) {
        const emoji = emojis[word.toLowerCase()];
        const emojiSpan = document.createElement("span");
        emojiSpan.innerText = emoji;
        emojiSpan.style.display = "inline-block";

        const copyIcon = document.createElement("i");
        copyIcon.classList.add("fa", "fa-copy");
        copyIcon.addEventListener("click", function () {
          // Copy the emoji to the clipboard
          navigator.clipboard.writeText(emoji).then(function () {
            // Show a message indicating that the emoji was copied
            alert("Copied " + emoji + " to the clipboard");
          });
        });

        // Add the emoji and the copy icon to the emoji suggestions container
        emojiSuggestions.appendChild(emojiSpan);
        emojiSuggestions.appendChild(copyIcon);
      }
    }
  });
});


