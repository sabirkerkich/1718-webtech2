function drawMountain(lengthOfMountain) {

    let i = 1;

    document.write('/');


    while (i <= lengthOfMountain) {
        document.write("'");
        i++;
    }

    document.write('\\')
};





function drawFlatArea(lengthOfFlatArea) {
    let i = 1;

    //beginnen en eindigen met punt is niet verpliccht
    document.write(".");

    while (i <= lengthOfFlatArea) {
        document.write('_');
        i++;
    };
    document.write(".");
};


setInterval(function () {

    let randomTrueFalse = Math.random() >= 0.5;

    let randomBetween = Math.floor(Math.random() * 4) + 1;

    if (randomTrueFalse == true) {
        drawMountain(randomBetween);
    } else {
        drawFlatArea(randomBetween);
    }

},5000);