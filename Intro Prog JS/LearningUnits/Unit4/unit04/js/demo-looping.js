let LOOPING = {};

LOOPING.baseImage = null;
LOOPING.slideImages = [];
LOOPING.slidesContext = null;
LOOPING.currentImage = 0;


function drawBaseImage() {
    "use strict";

    LOOPING.currentImage = 0;
    LOOPING.slidesContext.clearRect(0, 0, 727, 558);
    LOOPING.slidesContext.drawImage(LOOPING.baseImage, 0, 0);

}

function drawImage(index) {
    "use strict";

    LOOPING.slidesContext.clearRect(0, 0, 727, 558);
    LOOPING.slidesContext.drawImage(LOOPING.slideImages[index], 0, 0);
}


function resetFrames() {
    "use strict";

    LOOPING.currentImage = 0;
    drawBaseImage();
}

/*
    If we're not in a loop then just increment

*/
function nextFrame() {
    "use strict";


    if (LOOPING.currentImage < LOOPING.slideImages.length) {
        drawImage(LOOPING.currentImage);
        LOOPING.currentImage += 1;
    } else {
        resetFrames();
    }

}

function loadDemoImages() {
    "use strict";

    LOOPING.baseImage = new Image();
    LOOPING.baseImage.src = "../resources/looping00.jpg";

    LOOPING.slideImages[0] = new Image();
    LOOPING.slideImages[0].src = "../resources/looping01.png";

    LOOPING.slideImages[1] = new Image();
    LOOPING.slideImages[1].src = "../resources/looping02.png";

    LOOPING.slideImages[2] = new Image();
    LOOPING.slideImages[2].src = "../resources/looping03.png";

    LOOPING.slideImages[3] = new Image();
    LOOPING.slideImages[3].src = "../resources/looping03b.png";

    LOOPING.slideImages[4] = new Image();
    LOOPING.slideImages[4].src = "../resources/looping04.png";

    LOOPING.slideImages[5] = new Image();
    LOOPING.slideImages[5].src = "../resources/looping05.png";

    LOOPING.slideImages[6] = new Image();
    LOOPING.slideImages[6].src = "../resources/looping05b.png";

    LOOPING.slideImages[7] = new Image();
    LOOPING.slideImages[7].src = "../resources/looping06.png";

    LOOPING.slideImages[8] = new Image();
    LOOPING.slideImages[8].src = "../resources/looping07.png";

    LOOPING.slideImages[9] = new Image();
    LOOPING.slideImages[9].src = "../resources/looping08.png";

    LOOPING.slideImages[10] = new Image();
    LOOPING.slideImages[10].src = "../resources/looping08b.png";

    LOOPING.slideImages[11] = new Image();
    LOOPING.slideImages[11].src = "../resources/looping09.png";

    LOOPING.slideImages[12] = new Image();
    LOOPING.slideImages[12].src = "../resources/looping10.png";

    LOOPING.slideImages[13] = new Image();
    LOOPING.slideImages[13].src = "../resources/looping11.png";

    LOOPING.slideImages[14] = new Image();
    LOOPING.slideImages[14].src = "../resources/looping11b.png";

    LOOPING.slideImages[15] = new Image();
    LOOPING.slideImages[15].src = "../resources/looping12.png";

    LOOPING.slideImages[16] = new Image();
    LOOPING.slideImages[16].src = "../resources/looping13.png";

    LOOPING.slideImages[17] = new Image();
    LOOPING.slideImages[17].src = "../resources/looping14.png";

    LOOPING.slideImages[18] = new Image();
    LOOPING.slideImages[18].src = "../resources/looping14b.png";

    LOOPING.slideImages[19] = new Image();
    LOOPING.slideImages[19].src = "../resources/looping15.png";

    LOOPING.slideImages[20] = new Image();
    LOOPING.slideImages[20].src = "../resources/looping16.png";

    LOOPING.slideImages[21] = new Image();
    LOOPING.slideImages[21].src = "../resources/looping17.png";

    LOOPING.slideImages[22] = new Image();
    LOOPING.slideImages[22].src = "../resources/looping18.png";

}

function makeLoopingDemo() {
    "use strict";

    LOOPING.slidesContext =
            document.getElementById('repetitionCanvas').getContext('2d');

    loadDemoImages();

    LOOPING.baseImage.onload = function () {
        drawBaseImage();
    };

}


/*
    It's not magic
*/
function nonMagic() {
    "use strict";

    // A non-magical way to run that statement five times

    // Declare Constants
    const INITIAL_VALUE = 0;
    const LOOP_LIMIT = 5;

    // Declare Variables
    let loopCounter;

    // Assign initial values to variables
    loopCounter = INITIAL_VALUE;

    // Here's the real magic cloud
    while (loopCounter < LOOP_LIMIT) {
        document.write("Here's a line of output.<br />");
        loopCounter++;
    }
}
