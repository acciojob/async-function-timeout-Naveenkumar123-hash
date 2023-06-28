//your JS code here. If required.
const form = document.querySelector('form');
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');

async function showMessageAfterDelay() {
  // Get the input values
  const message = textInput.value;
  const delayTime = parseInt(delayInput.value) * 1000; // Convert delay time to milliseconds

  // Wait for the specified time before getting the message
  await delay(delayTime);

  // Display the message on the webpage
  outputDiv.textContent = message;
}

// Add event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Call the function to display the message after a delay
  showMessageAfterDelay();
});

// Delay function
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);