// ============================
// Part 1: JavaScript Basics
// ============================

// Access elements
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

// Event listener for age check
checkAgeBtn.addEventListener('click', () => {
    const age = Number(ageInput.value); // variable declaration
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// ============================
// Part 2: Functions
// ============================

// Function 1: Greet user
function greetUser(name = "Guest") {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
    greeting.textContent = greetUser();
});

// Function 2: Sum numbers 1-10
function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', () => {
    sumResult.textContent = `Sum of numbers 1-10 is: ${sumNumbers()}`;
});

// ============================
// Part 3: Loops
// ============================

const countdownBtn = document.getElementById('countdownBtn');
const countdownResult = document.getElementById('countdownResult');

countdownBtn.addEventListener('click', () => {
    let result = "";
    for (let i = 5; i >= 0; i--) { // for loop example
        result += i + " ";
    }
    countdownResult.textContent = result.trim();
});

const listBtn = document.getElementById('listBtn');
const listResult = document.getElementById('listResult');

listBtn.addEventListener('click', () => {
    listResult.innerHTML = ""; // clear previous items
    const fruits = ["Apple", "Banana", "Cherry"];
    fruits.forEach(fruit => {  // forEach loop example
        const li = document.createElement('li');
        li.textContent = fruit;
        listResult.appendChild(li);
    });
});

// ============================
// Part 4: DOM Manipulation
// ============================

const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
    toggleText.classList.toggle('highlight'); // toggle class
});

const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `New Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(li); // dynamically add element
});

const changeTextBtn = document.getElementById('changeTextBtn');
const textToChange = document.getElementById('textToChange');

changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = "Text has been changed!";
});
