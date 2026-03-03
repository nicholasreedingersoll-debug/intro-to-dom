console.log("script started");
//variable to track num of clicks
let clicks = 0;
//display clicks
let clickDisplay = document.getElementById("click-display");
//set inital text
clickDisplay.innerText = "Clicks: " + clicks;
// Called each time the image is clicked
function handleClick() {
    console.log("click");
    // Add one to click count
    clicks = clicks + 1;
    // Update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;
    if (clicks >= 10) {
        alert("Congrats on reaching level 2")
        clicks = clicks + 2;
        levelDisplay,innerText = "Level 2";
    }
}