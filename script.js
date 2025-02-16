// DOM Elements
const crops = document.querySelectorAll('.crop');
const plantBtn = document.getElementById('plant-btn');
const waterBtn = document.getElementById('water-btn');
const harvestBtn = document.getElementById('harvest-btn');
const statusDiv = document.getElementById('status');
const goldDisplay = document.getElementById('gold');
const energyDisplay = document.getElementById('energy');

// Game State
let isPlanted = false;
let isWatered = false;
let gold = 100; // Starting gold
let energy = 10; // Starting energy

// Update UI
function updateUI() {
  goldDisplay.textContent = gold;
  energyDisplay.textContent = energy;
}

// Event Listeners
plantBtn.addEventListener('click', plantCrops);
waterBtn.addEventListener('click', waterCrops);
harvestBtn.addEventListener('click', harvestCrops);

// Functions
function plantCrops() {
  if (!isPlanted && energy >= 2) {
    crops.forEach(crop => {
      crop.style.backgroundColor = 'brown';
    });
    statusDiv.textContent = 'Crops planted!';
    isPlanted = true;
    isWatered = false;
    energy -= 2; // Deduct energy for planting
    updateUI();
  } else if (energy < 2) {
    statusDiv.textContent = 'Not enough energy to plant!';
  } else {
    statusDiv.textContent = 'Crops are already planted!';
  }
}

function waterCrops() {
  if (isPlanted && !isWatered && energy >= 1) {
    crops.forEach(crop => {
      crop.style.backgroundColor = 'lightblue';
    });
    statusDiv.textContent = 'Crops watered!';
    isWatered = true;
    energy -= 1; // Deduct energy for watering
    updateUI();
  } else if (!isPlanted) {
    statusDiv.textContent = 'You need to plant crops first!';
  } else if (isWatered) {
    statusDiv.textContent = 'Crops are already watered!';
  } else {
    statusDiv.textContent = 'Not enough energy to water!';
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
    gold += 50; // Earn gold for harvesting
    energy += 5; // Recover some energy
    updateUI();
  } else if (!isPlanted) {
    statusDiv.textContent = 'You need to plant crops first!';
  } else if (!isWatered) {
    statusDiv.textContent = 'You need to water crops first!';
  }
}

// Initialize UI
updateUI();
