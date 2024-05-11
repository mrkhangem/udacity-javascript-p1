/**
 * @description Represents a Dinosaur
 * @constructor
 * @param {string} species - Species of the Dinosaur
 * @param {number} weight - Dinosaur weight
 * @param {number} height - Dinosaur height
 * @param {string} diet - Dinosaur diet
 * @param {string} where - The place where Dinosaurs appeared
 * @param {string} when - Dinosaur time period
 * @param {string} fact - Fact about Dinosaur
 * @param {string} image - Dinosaur image
 */
function Dino(species, weight, height, diet, where, when, fact, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = image;
}

/**
 * @description Retrieves a list of dinosaur objects
 * @returns {Array} - List of Dino objects
 */
function getDinoDataList() {
  return [
    new Dino(
      "Triceratops",
      13000,
      114,
      "herbavor",
      "North America",
      "Late Cretaceous",
      "First discovered in 1889 by Othniel Charles Marsh",
      "./images/triceratops.png"
    ),
    new Dino(
      "Tyrannosaurus Rex",
      11905,
      144,
      "carnivor",
      "North America",
      "Late Cretaceous",
      "The largest known skull measures in at 5 feet long.",
      "./images/tyrannosaurus rex.png"
    ),
    new Dino(
      "Anklyosaurus",
      10500,
      55,
      "herbavor",
      "North America",
      "Late Cretaceous",
      "The largest known skull measures in at 5 feet long.",
      "./images/anklyosaurus.png"
    ),
    new Dino(
      "Brachiosaurus",
      70000,
      372,
      "herbavor",
      "North America",
      "Late Jurasic",
      "An asteroid was named 9954 Brachiosaurus in 1991.",
      "./images/brachiosaurus.png"
    ),
    new Dino(
      "Stegosaurus",
      11600,
      79,
      "herbavor",
      "North America, Europe, Asia",
      "Late Jurasic to Early Cretaceous",
      "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
      "./images/stegosaurus.png"
    ),
    new Dino(
      "Elasmosaurus",
      16000,
      59,
      "carnivor",
      "North America",
      "Late Cretaceous",
      "Elasmosaurus was a marine reptile first discovered in Kansas.",
      "./images/elasmosaurus.png"
    ),
    new Dino(
      "Pteranodon",
      44,
      20,
      "carnivor",
      "North America",
      "Late Cretaceous",
      "Actually a flying reptile, the Pteranodon is not a dinosaur.",
      "./images/pteranodon.png"
    ),
    new Dino(
      "Pigeon",
      0.5,
      9,
      "carnivor",
      "World Wide",
      "Holocene",
      "All birds are living dinosaurs.",
      "./images/pigeon.png"
    )
  ];
}

/**
 * @description Represents a human
 * @constructor
 * @param {string} name - The name of a human
 * @param {number} height - The height of a human
 * @param {number} weight - The weight of a human
 * @param {string} diet - The diet of a human
 * @param {string} image - Human image
 * @param {string} unit - Measurement unit
 */
function Human(name, height, weight, diet, image, unit) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
  this.image = image;
  this.unit = unit;
}

/**
 * @description Prototype object with helpful functions
 */
const protoObject = {
  getMetricWeight: function () {
    return Math.round(this.weight / 2.21);
  },
  getMetricHeight: function () {
    return Math.round(this.height * 2.54);
  },
  getImperialWeight: function () {
    return this.weight;
  },
  getImperialHeight: function () {
    return this.height;
  },
};
Dino.prototype = protoObject;

/**
 * @description Gets human weight and height from form
 * @returns {Object} - Size data
 */
function getHumanSizeValue() {
  const bigHeight = Number(document.getElementById("big-height").value);
  const smallHeight = Number(document.getElementById("small-height").value);
  const weight = Number(document.getElementById("weight").value);
  return { bigHeight, smallHeight, weight };
}

/**
 * @description Gets human data from form
 * @returns {Object} - Human object
 */
function getHumanData() {
  const name = document.getElementById("name").value;
  const { bigHeight, smallHeight, weight } = getHumanSizeValue();
  const unit = document.getElementById("unit").value;
  const height = unit === "Metric" ? bigHeight * 100 + smallHeight : bigHeight * 12 + smallHeight;
  const diet = document.getElementById("diet").value;
  return new Human(name, height, weight, diet, "./images/human.png", unit);
}

/**
 * @description Creates human tile HTML element
 * @param {Object} human - Human object
 * @returns {string} - HTML element
 */
function createHumanTile(human) {
  return `<div class="grid-item"><h3>${human.name}</h3><img src="${human.image}" alt="${human.name}"></div>`;
}

/**
 * @description Compares weight between a dinosaur and a human
 * @param {Object} dino - Dinosaur object
 * @param {Object} human - Human object
 * @returns {string} - Comparison message
 */
function compareWeight(dino, human) {
  const dinoWeight = human.unit === "Metric" ? dino.getMetricWeight() : dino.getImperialWeight();
  const times = Math.round(dinoWeight / human.weight);
  if (dinoWeight > human.weight) {
    return `${dino.species} is ${times} times heavier than you.`;
  } else if (dinoWeight < human.weight) {
    return `${dino.species} is ${times} times lighter than you.`;
  } else {
    return `${dino.species} weighs almost as much as you.`;
  }
}

/**
 * @description Compares height between a dinosaur and a human
 * @param {Object} dino - Dinosaur object
 * @param {Object} human - Human object
 * @returns {string} - Comparison message
 */
function compareHeight(dino, human) {
  const dinoHeight = human.unit === "Metric" ? dino.getMetricHeight() : dino.getImperialHeight();
  const times = Math.round(dinoHeight / human.height);
  if (dinoHeight > human.height) {
    return `${dino.species} is ${times} times taller than you.`;
  } else if (dinoHeight < human.height) {
    return `${dino.species} is ${times} times lower than you.`;
  } else {
    return `${dino.species} is about as tall as you.`;
  }
}

/**
 * @description Compares diet between a dinosaur and a human
 * @param {Object} dino - Dinosaur object
 * @param {Object} human - Human object
 * @returns {string} - Comparison message
 */
function compareDiet(dino, human) {
  const humanDiet = human.diet.toLowerCase();
  if (dino.diet === humanDiet) {
    return `${dino.species} has the same diet as you, which is ${humanDiet}.`;
  } else {
    return `${dino.species} has a diet of ${dino.diet}, but you have a diet of ${humanDiet}.`;
  }
}

/**
 * @description Generates a random fact about a dinosaur
 * @param {Object} dino - Dinosaur object
 * @param {Object} human - Human object
 * @returns {string} - Random fact message
 */
function createRandomFact(dino, human) {
  const randomNumber = Math.round(Math.random() * 5);
  switch (randomNumber) {
    case 0:
      return dino.fact;
    case 1:
      return compareWeight(dino, human);
    case 2:
      return compareHeight(dino, human);
    case 3:
      return compareDiet(dino, human);
    case 4:
      return `${dino.species} used to live in ${dino.where}.`;
    case 5:
      return `${dino.species} lived in the ${dino.when} period.`;
    default:
      return dino.fact;
  }
}

/**
 * @description Creates HTML element for a dinosaur tile
 * @param {Object} dino - Dinosaur object
 * @param {string} randomFact - Random fact message
 * @returns {string} - HTML element
 */
function createDinoTile(dino, randomFact) {
  return `<div class="grid-item"><h3>${dino.species}</h3><img src="${dino.image}" alt="${dino.species}"><p>${randomFact}</p></div>`;
}

/**
 * @description Adds dinosaur and human tiles to DOM
 */
function addTiles() {
  const human = getHumanData();
  const dinoList = getDinoDataList();
  const centerIndex = Math.floor(dinoList.length / 2);
  const tiles = dinoList.map((dino, index) => {
    const randomFact = createRandomFact(dino, human);
    return index === centerIndex
      ? createHumanTile(human) + createDinoTile(dino, randomFact)
      : createDinoTile(dino, randomFact);
  }).join("");
  document.getElementById("grid").innerHTML = tiles;
}

/**
 * @description Hides the form from the DOM
 */
function hideForm() {
  document.querySelector("form").style.display = "none";
}

/**
 * @description Event handler for button click
 * @param {Event} e - The click event
 */
function clickEvent(e) {
  e.preventDefault();
  // Validate form
  const smallHeight = Number(document.getElementById("small-height").value);
  const weight = Number(document.getElementById("weight").value);
  const valid = smallHeight > 0 && weight > 0;
  if (valid) {
    hideForm();
    addTiles();
  } else {
    document.getElementById("error-height").innerHTML = smallHeight <= 0 ? "Height must be greater than 0." : "";
    document.getElementById("error-weight").innerHTML = weight <= 0 ? "Weight must be greater than 0." : "";
  }
}

/**
 * @description Event handler for unit change
 */
function changeEvent() {
  const unit = document.getElementById("unit").value;
  const labelBigHeight = document.getElementById("label-big-height");
  const labelSmallHeight = document.getElementById("label-small-height");
  if (unit === "Metric") {
    labelBigHeight.innerHTML = "Meter: ";
    labelSmallHeight.innerHTML = "Centimeters: ";
    document.getElementById("label-weight").innerHTML = "Kilogram: ";
  } else {
    labelBigHeight.innerHTML = "Feet: ";
    labelSmallHeight.innerHTML = "Inches: ";
    document.getElementById("label-weight").innerHTML = "Pound: ";
  }
}

/**
 * @description Adds event listeners to the form elements
 */
function initializeForm() {
  document.getElementById("btn").addEventListener("click", clickEvent);
  document.getElementById("unit").addEventListener("change", changeEvent);
}

// Initialize the form
initializeForm();
