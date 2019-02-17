// import * as mobilenet from '@tensorflow-models/mobilenet';
import defaultExport, * as name from "@tensorflow-models/mobilenet";
// document.body.appendChild(document.createElement('script')).src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.11.7";
// document.body.appendChild(document.createElement('script')).src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@0.1.1";



console.log('Started .......................');

var image_list = document.getElementsByTagName('img');



console.log('Got image .......................');
var image = image_list[0];
console.log('Actual image : ');
console.log(image.src);

console.log('Load model .......................');
// Load the model.

async function load_model() {
	// body...
   model = await mobilenet.load();
   return model;

}

trained_model = load_model();

// console.log('Got model .......................');
// // Classify the image.
// const predictions = await model.classify(image);

// console.log('Predictions: ');
// console.log(predictions);