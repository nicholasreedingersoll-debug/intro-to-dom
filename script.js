console.log("script started");
//variable to track num of clicks
let clicks = 0;
//display clicks
let clickDisplay = document.getElementById("click-display");
//set inital text
clickDisplay.innerText = "Clicks: " + clicks;
// Called each time the image is clicked
function handleClick() {
    console.log("clicks");
    // Add one to click count
    clicks = clicks + 1;
    // Update click count display h1
    countDisplay.innerText = "Clicks: " + clicks;
}