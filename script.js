//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Define the async function
async function showMessageWithDelay() {
  // Get the text and delay values from the user inputs
  const text = textInput.value;
  const delay = parseInt(delayInput.value, 10);

  // Validate the inputs
  if (!text || isNaN(delay) || delay <= 0) {
    outputDiv.innerText = 'Invalid input';
    return;
  }

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message on the webpage
  outputDiv.innerText = text;
}

// Attach event listener to the submit button
submitButton.addEventListener('click', showMessageWithDelay);
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