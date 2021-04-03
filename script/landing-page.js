let userStory = document.getElementsByClassName("");
let videoShow = document.getElementsByClassName("videohide")

function play(){
    // userStory.style.display = "none";
    videoShow.style.display = "block";
}


let nigeriaReward = document.getElementById("nigeriaReward");
let ghanaReward = document.getElementById("ghanaReward")

function toggle() {
    if (nigeriaReward.style.display === "block"){
        ghanaReward.style.display = "none";
    }
    else {
        ghanaReward.style.display = "block";
    }
}