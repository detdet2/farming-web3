
// Game Variables
let gold = 100;
let energy = 50;

// Update Display Function
function updateDisplay() {
  document.getElementById('gold').textContent = gold;
  document.getElementById('energy').textContent = energy;
}

// Plant Crop Function
function plantCrop() {
  if (energy >= 10) {
    energy -= 10;
    alert("You planted a crop!");
  } else {
    alert("Not enough energy to plant!");
  }
  updateDisplay();
}

// Harvest Crop Function
function harvestCrop() {
  if (energy >= 5) {
    energy -= 5;
    gold += 20;
    alert("You harvested a crop and earned 20 gold!");
  } else {
    alert("Not enough energy to harvest!");
  }
  updateDisplay();
}

// Refill Energy Function
function refillEnergy() {
  if (gold >= 30) {
    gold -= 30;
    energy += 40;
    alert("Energy refilled!");
  } else {
    alert("Not enough gold to refill energy!");
  }
  updateDisplay();
}

// Initialize display
updateDisplay();
