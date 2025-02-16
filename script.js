// DOM Elements
const crops = document.querySelectorAll('.crop');
const plantBtn = document.getElementById('plant-btn');
const waterBtn = document.getElementById('water-btn');
const harvestBtn = document.getElementById('harvest-btn');
const statusDiv = document.getElementById('status');

// Game State
let isPlanted = false;
let isWatered = false;

// Event Listeners
plantBtn.addEventListener('click', plantCrops);
waterBtn.addEventListener('click', waterCrops);
harvestBtn.addEventListener('click', harvestCrops);

// Functions
function plantCrops() {
  if (!isPlanted) {
    crops.forEach(crop => {
      crop.style.backgroundColor = 'brown';
    });
    statusDiv.textContent = 'Crops planted!';
    isPlanted = true;
    isWatered = false;
  } else {
    statusDiv.textContent = 'Crops are already planted!';
  }
}

function waterCrops() {
  if (isPlanted && !isWatered) {
    crops.forEach(crop => {
      crop.style.backgroundColor = 'lightblue';
    });
    statusDiv.textContent = 'Crops watered!';
    isWatered = true;
  } else if (!isPlanted) {
    statusDiv.textContent = 'You need to plant crops first!';
  } else {
    statusDiv.textContent = 'Crops are already watered!';
  }
}

function harvestCrops() {
  if (isPlanted && isWatered) {
    crops.forEach(crop => {
      crop.style.backgroundColor = 'gold';
    });
    statusDiv.textContent = 'Crops harvested!';
    isPlanted = false;
    isWatered = false;
  } else if (!isPlanted) {
    statusDiv.textContent = 'You need to plant crops first!';
  } else if (!isWatered) {
    statusDiv.textContent = 'You need to water crops first!';
  }
}
