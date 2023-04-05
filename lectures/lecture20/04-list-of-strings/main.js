//array of strings
const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Sarah", "Tristan", "Page", "Paige", "Pag"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');

let i = 0;
while (i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}



