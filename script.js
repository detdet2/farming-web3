// Variables to keep track of crop statuses
const crops = [
  { id: 'crop-1', status: 'empty', growTime: 5000 },
  { id: 'crop-2', status: 'empty', growTime: 5000 },
  { id: 'crop-3', status: 'empty', growTime: 5000 }
];

// Buttons and status element
const plantBtn = document.getElementById('plant-btn');
const waterBtn = document.getElementById('water-btn');
const harvestBtn = document.getElementById('harvest-btn');
const statusDiv = document.getElementById('status');

// Update the status of the crops and buttons
function updateGameStatus() {
  let statusMessage = 'Crops: ';
  crops.forEach(crop => {
    statusMessage += `${crop.id} (${crop.status}), `;
  });
  statusDiv.textContent = statusMessage;

  // Enable or disable buttons based on crop status
  const allPlanted = crops.every(crop => crop.status === 'planted');
  waterBtn.disabled = !allPlanted;
  harvestBtn.disabled = crops.some(crop => crop.status !== 'grown');
}

// Plant crops
plantBtn.addEventListener('click', () => {
  crops.forEach(crop => {
    if (crop.status === 'empty') {
      crop.status = 'planted';
      document.getElementById(crop.id).style.backgroundColor = 'yellow';
    }
  });
  updateGameStatus();
});

// Water crops
waterBtn.addEventListener('click', () => {
  crops.forEach(crop => {
    if (crop.status === 'planted') {
      crop.status = 'growing';
      document.getElementById(crop.id).style.backgroundColor = 'lightblue';
      
      // Simulate growth over time
      setTimeout(() => {
        crop.status = 'grown';
        document.getElementById(crop.id).style.backgroundColor = 'green';
        updateGameStatus();
      }, crop.growTime);
    }
  });
  updateGameStatus();
});

// Harvest crops
harvestBtn.addEventListener('click', () => {
  crops.forEach(crop => {
    if (crop.status === 'grown') {
      crop.status = 'empty';
      document.getElementById(crop.id).style.backgroundColor = 'lightgreen';
    }
  });
  updateGameStatus();
});

// Initial game status
updateGameStatus();
