import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'This is a test evacuation warning message.';
  }
}

const testBuilding = new TestBuilding(200);
console.log(testBuilding.evacuationWarningMessage()); // Output: "This is a test evacuation warning message."
