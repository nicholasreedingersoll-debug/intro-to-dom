console.log("script started");
//variable to track num of clicks
let clicks = 0;
let clickValue = 1;
//display clicks
let clickDisplay = document.getElementById("click-display");
//set inital text
clickDisplay.innerText = "Clicks: " + clicks;
// Called each time the image is clicked
function handleClick() {
    console.log("click");
    // Add one to click count
    clicks = clicks + clickValue;
    //get var
    let levelDisplay = document.getElementById("level-display")
    // Update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;
    if (clicks == 10) {
        alert("Congrats on reaching level 2");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
    }
    else if (clicks == 50) {
        alert("Congrats on reaching level 3");
        levelDisplay.innerText = "Level 3";
        clickValue = 5;
    }
    else if (clicks == 500) {
        alert("Congrats on reaching level 4");
        levelDisplay.innerText = "Level 4";
        clickValue = 10;
    }
    else if (clicks == 1000) {
        alert("Congrats on reaching level 5");
        levelDisplay.innerText = "Level 5";
        clickValue = 50;
    }
    else if (clicks == 5000) {
        alert("Congrats on reaching level 6");
        levelDisplay.innerText = "Level 6";
        clickValue = 100;
    }
    else if (clicks == 10000) {
        alert("Congrats on reaching level 7");
        levelDisplay.innerText = "Level 7";
        clickValue = 500;
    }
    else if (clicks == 15000) {
        alert("Congrats on reaching level 8");
        levelDisplay.innerText = "Level 8";
        clickValue = 1000;
    }
    else if (clicks == 20000) {
        alert("Congrats on reaching level 9");
        levelDisplay.innerText = "Level 9";
        clickValue = 1500;
    }
    else if (clicks == 3000) {
        alert("Congrats on reaching level 10");
        levelDisplay.innerText = "Level 10";
        clickValue = 2000;
    }
}