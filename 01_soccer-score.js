const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
  { input: [1, 2], output: [1] }, // Team 2 menang
  { input: [3, 4], output: [0] } // Team 3 menang
]);

const output = network.run([4, 1]);

console.log(`Prob: ${output}`);
