var hourHand = document.getElementById("idHourHand");
var minuteHand = document.getElementById("idMinuteHand");
setInterval(function () {
    var now = new Date();
    var hour = now.getHours() % 12;
    var minute = now.getMinutes();
    var hourDeg = 360 * (hour / 12.0);
    var minuDeg = 360 * (minute / 60.0);
    hourHand.setAttribute("transform", "rotate(" + hourDeg + " 160 160)");
    minuteHand.setAttribute("transform", "rotate(" + minuDeg + " 160 160)");
}, 1);