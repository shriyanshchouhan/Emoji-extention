// Load the emoji mapping
const emojis = {
    "smile": "😊",
    "sad": "😢",
    "laughing": "😆",
    "wink": "😉",
    "heart": "❤️",
    "angry": "😠",
    "surprised": "😮",
    "tongue": "😛",
    "unamused": "😒",
    "kissing": "😗",
    "crying": "😢",
    "thinking": "🤔",
    "fire": "🔥",
    "thumbs up": "👍",
    "thumbs down": "👎",
    "star": "⭐️",
    "check": "✔️",
    "cross": "❌",
    "rocket": "🚀",
    "clap": "👏",
    "laugh": "😆",
    "love": "❤️",
    "cool": "😎",
    "hugs": "🤗",
    "heart_eyes": "😍",
    "blush": "😊",
    "nerd_face": "🤓",
    "thumbsup":"👍",
    "thumbsdown": "👎",
  };
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "fetchEmojis") {
      sendResponse(emojis);
    }
  });
  