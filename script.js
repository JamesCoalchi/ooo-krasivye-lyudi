let confirmationCount = 0;
const maxConfirmations = 5;
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    confirmationCount++;
    if (confirmationCount < maxConfirmations) {
      const messages = [
        "Вы уверены?",
        "А точно уверены?",
        "Вы правда хотите это сделать?",
        "Почему вы это нажимаете?",
        "...",
        "Вы не передумали, точно? 😏"
      ];
      if (!confirm(messages[confirmationCount - 1])) {
        return;
      }
    } else {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  });
});
