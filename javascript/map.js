
var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function(distance) {
    if (distance < 10) {
        return "Ključanje!";
    } else if (distance < 20) {
        return "Jako toplo";
    } else if (distance < 40) {
        return "Vrelo";
    } else if (distance < 80) {
        return "Toplo";
    } else if (distance < 160) {
        return "Hladno";
    } else if (distance < 320) {
        return "Jako hladno";
    } else {
        return "Ledeno!";
    }
};

var width = 400;
var height = 400;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function(event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert("Blago nađeno za " + clicks + " klika!");
    }
});