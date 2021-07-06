// const {checkAndGenerate} = require("./util");
// const { generateText, createElement, validateInput } = require('./util');
//
// const initApp = () => {
//   // Initializes the app, registers the button click listener
//   const newUserButton = document.querySelector('#btnAddUser');
//   newUserButton.addEventListener('click', addUser);
// };
//
// const addUser = () => {
//   // Fetches the user input, creates a new HTML element based on it
//   // and appends the element to the DOM
//   const newUserNameInput = document.querySelector('input#name');
//   const newUserAgeInput = document.querySelector('input#age');
//
//   const userList = document.querySelector('.user-list');
// 	// const outputText = generateText(
// 	//   newUserNameInput.value,
// 	//   newUserAgeInput.value
// 	// );
//   const outputText = checkAndGenerate(
//     newUserNameInput.value,
//     newUserAgeInput.value
//   );
//   const element = createElement('li', outputText, 'user-item');
//   userList.appendChild(element);
// };
//
// // Start the app!
// initApp();


// async testing intro section
const { fetchData } = require('./http');

const button = document.querySelector('button');

const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
  });
};

button.addEventListener('click', printTitle);

exports.printTitle = printTitle;
