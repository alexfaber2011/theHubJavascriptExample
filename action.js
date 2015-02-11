/**
 * Created by alexfaber on 2/10/15.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    //Run the clock
    setInterval(function () {
        var clockElement = document.getElementById('clock');
        clockElement.innerHTML = new Date().toLocaleTimeString();
    }, 1000);

    //Grab DOM elements
    var button = document.getElementById('fire');
    var countdownElement = document.getElementById('countdown');

    //Handle the onclick event
    button.onclick = function(){
        var count = 10;
        //countdownElement is declared in the parent of this function's
        //    scope, so it's accessible here
        countdownElement.innerHTML = count;

        //Start another interval
        //    setInterval takes two arguments: a function, and a number of milliseconds to separate executions by
        var interval = setInterval(function(){
            count--;
            countdownElement.innerHTML = count;
            if(count == 0){
                alert('BOOM!');
                clearInterval(interval);
            }
        }, 1000);
    };
});

