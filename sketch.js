// Examples use jsonplaceholder.typicode.com for a Mock Data API

let url = 'http://192.168.43.206:8080/receive';
let input, gretting1, gretting2, redInput, greenInput, blueInput, redHeader, greenHeader, blueHeader; 


function setup() {
  createCanvas(500, 500);
  background(200);

  greeting1 = createElement('h2', 'What is your name?');
  greeting1.position(20, 5);

  // Create a text input field
  input = createInput(); 
      
  // Set the input position
  input.position(20, 50);

  // Create a button to trigger data sending
  let button = createButton('Send to Flask');
  button.position(20, 80);
  button.mousePressed(sendToFlask);

  greeting2 = createElement('h2', 'Enter the RGB values');
  greeting2.position(110, 125);


  // Create input elements for RGB values
  redInput = createInput(255);
  greenInput = createInput(255);
  blueInput = createInput(255);

   // Position the input elements
   redInput.position(125, 180);
   greenInput.position(125,210);
   blueInput.position(125,240);

   // Create and position text labels

  redHeader= createElement('h4', 'Red:');
  redHeader.position(75, 162);

  greenHeader= createElement('h4', 'Green:');
  greenHeader.position(75, 192);

  blueHeader= createElement('h4', 'Blue:');
  blueHeader.position(75, 222);

  
}

function sendToFlask() {

  background(200);
  // Get the value entered by the user
  let inputValue = input.value();

  // Get the RGB values entered by the user
  let r = redInput.value();
  let g = greenInput.value();
  let b = blueInput.value();


  // Set the font size
  textSize(24); // Change this value to adjust the font size
  
  // Create a POST request to the Flask server
  httpPost(url, 'json', { message: inputValue, Red: r, Green: g, Blue: b }, function(response) {
    console.log(response);

    text(response.message+" successfully received", 80, 450);
  });

}
