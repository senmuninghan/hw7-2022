var video;

//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window!");
    video = document.querySelector("#player1");
    video.autoplay=false;
    video.loop=false;
    console.log("Auto play is set to " + video.autoplay);
    console.log("Loop is set to " + video.loop);
});

//play button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    var volume= document.getElementById("slider").value;
    document.getElementById("volume").innerHTML=volume + "%";
});

//pause button
document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

//slow down
document.querySelector("#slower").addEventListener("click", function () {
    console.log("Slow Down Video");
    video.playbackRate=0.9*video.playbackRate;
    console.log(" Video speed is " + document.querySelector('#player1').playbackRate);
});

//speed up
document.querySelector("#faster").addEventListener("click", function () {
    console.log("speed up Video");
    video.playbackRate=video.playbackRate/0.9;
    console.log(" Video speed is " + document.querySelector('#player1').playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function () {
    console.log("Skip ahead" );
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log(" Video current time is " + video.currentTime);
});

//mute
document.querySelector("#mute").addEventListener("click", function () {
    var x = document.getElementById("mute");
    if (x.innerHTML === "Mute") {
        x.innerHTML = "Unmute";
        video.muted=true;
        console.log("Mute");
      } else {
        x.innerHTML = "Mute";
        video.muted=false;
        console.log("Unmute");
      }
});

//volume slider
document.querySelector("#slider").addEventListener("click", function () {
    console.log("The current value is " + video.volume*100);
    var volume= document.getElementById("slider").value;
    video.volume=volume/100
    console.log("The current value is " + document.getElementById("slider").value);
    document.getElementById("volume").innerHTML=volume + "%";
    console.log(document.getElementById("volume").innerHTML + "%");
});

//styled
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

//original
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});


