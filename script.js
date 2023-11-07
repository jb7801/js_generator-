
var goodBegin = ["It's a great day to be ", "Today will be so ", "Yay you're, ", "I woofing love being, "];
var badBegin = ["Oo, it's not looking too good out there to be ", "Yikes you're ", "Oh no you're ", "It's ruff being "];
var goodEnd = [", keep it up!", ", yay!", ", let's go!", ", slay!", ", you got this!"];
var badEnd = [", so sorry.", " that sucks lol.", ", take a nap."];
var goodEmote = ["silly", "happy", "slay", "confident", "lovely", "excited", "Hopeful"];
var badEmote = ["angry", "mad", "tired", "sleepy", "cold", "sad", "nervous", "anxious", "lost"]
var maloneBad = ["malone_winter.jpg", "malone_nose.jpg", "malon_drama.jpg", "malone_sleep.jpg"]
var maloneGood = ["malone_flowers.jpeg", "malone_glasses.jpg", "malone_back.jpg"]

function generate(argument) {
    argument = argument.toLowerCase(); 

    var randomBegin, randomEnd, randomImg;
    if (badEmote.indexOf(argument) > -1) {
        randomBegin = badBegin[Math.floor(Math.random() * badBegin.length)];
        randomEnd = badEnd[Math.floor(Math.random() * badEnd.length)];
        randomImg = maloneBad[Math.floor(Math.random() * maloneBad.length)];
    } else if (goodEmote.indexOf(argument) > -1) { 
        randomBegin = goodBegin[Math.floor(Math.random() * goodBegin.length)];
        randomEnd = goodEnd[Math.floor(Math.random() * goodEnd.length)];
        randomImg = maloneGood[Math.floor(Math.random() * maloneGood.length)];
    } else {
        outputParagraph.innerText = "Sorry, your emotion is not valid :(";
        return
    }

    outputParagraph.innerText = randomBegin + argument + randomEnd;
    maloneImage.src = randomImg
}

function restyle() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#8e44ad"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    outputParagraph.style.color = randomColor; // Apply new style color
}

var executeButton = document.getElementById('executeButton');
executeButton.addEventListener("click", function() {
    var inputElement = document.getElementById('myInput');
    var currentInputText = inputElement.value;
    if (currentInputText.trim() === "") {
        outputParagraph.innerText = "Please enter how you feel today :)";
    } else {
        generate(currentInputText);
        restyle();
    }
});

var outputParagraph = document.getElementById('outputText');
var outputImage = document.getElementById("maloneImage")

