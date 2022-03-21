
function startReadings() {
    console.log("oh yea baby lets get it started");
    document.getElementById("data").rows["seconds"].innerHTML = "reading data. . .";
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopReadings() {
    console.log("ok no more lets stop it here");
    document.getElementById("data").rows["seconds"].innerHTML = "<td>time that has gone by</td><td>15 seconds</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}


//initializations
var stopFlag = new Boolean(true);
var BOOWOMP = new Audio('BOOWOMP.mp3');
var AWESOME_MUSIC = new Audio('jeopardy.mp3');
var BACKGROUND_MUSIC = new Audio('background music.mp3');
BACKGROUND_MUSIC.play();
var currentTimeout;

function startBlast() {
    //check if stopped, dont start timer again if its already going
    if(stopFlag) {

        //making sure variables are correct, also begins playing music
        stopFlag = false;
        document.getElementById("BlastOffText").innerHTML = "";
        console.log("ok, im blasting off now")
        AWESOME_MUSIC.play();
        var currTime = 50;

        //wanted to do the loop recursively
        blastOff(currTime);
        function blastOff(timeRemaining) {
            //if stopped, dont do anything
            if(!stopFlag) {

                //"change order request from fleet admiral" requires countdown to show different text when more than halfway done
                if(timeRemaining < 25) {
                    document.getElementById("BlastOffText").innerHTML="Warning Less than ½ way to launch, time left = " + timeRemaining; 
                } else {
                    document.getElementById("BlastOffText").innerHTML=timeRemaining;
                }
                
                /*
                / if theres still time to count down, recursively call function with time-5
                / i havent worked with javascript before but im assuming setTimeout is asychronous 
                / so i cant just do setTimeOut(blastOff(x-5),5000) because it would run instantly
                / i tested it and that appeared to be the case
                */

                if(timeRemaining > 0) {
                    currentTimeout = setTimeout(function() {
                        blastOff(timeRemaining-5);
                    }, 5000);
                } else {
                    alert("blast off ! ! ! ! !");
                    stopFlag = true;
                }
            }
        }
    }
}

//stops the timer
function stopThat() {
    AWESOME_MUSIC.pause();
    AWESOME_MUSIC.currentTime = 0;
    BOOWOMP.play();
    if(!stopFlag) {
        stopFlag = true;
        clearTimeout(currentTimeout);
        document.getElementById("BlastOffText").innerHTML = "ok ill stop jeez";
    } else {
        //get mad if it isnt doing anything, because its funny
        document.getElementById("BlastOffText").innerHTML = "dude im not even doing anything";
    }
}