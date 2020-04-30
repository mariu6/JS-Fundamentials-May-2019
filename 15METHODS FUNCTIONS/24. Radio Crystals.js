function piezo(array) {
    let finalSize = array.shift();
    let currentSize = 0;
    while (array.length) {
        let startSize = array.shift();
        currentSize = startSize;
        console.log(`Processing chunk ${startSize} microns`);
        while (currentSize > finalSize) {
            if (currentSize >= (finalSize * 4)) {
                cutting();
                transportingWashing();
            }
            if (currentSize >= (finalSize * 1.25)) {
                lapping();
                transportingWashing();
            }
            if (currentSize >= (finalSize + 20)) {
                grinding();
                transportingWashing();
            }
            if (currentSize >= (finalSize + 2)) {
                etching();
                transportingWashing();
            }
        }
        if (currentSize < finalSize) {
            x_raying();
        }
        console.log(`Finished crystal ${finalSize} microns`);
    }

    function cutting() {
        let cut = 0;
        while (currentSize >= (finalSize * 4)) {
            currentSize /= 4;
            cut++;
        }
        console.log(`Cut x${cut}`);
        return currentSize;
    }

    function lapping() {
        let lap = 0;
        while (currentSize >= (finalSize * 1.25)) {
            currentSize -= (currentSize * 0.2);
            lap++;
        }
        console.log(`Lap x${lap}`);
        return currentSize;
    }

    function grinding() {
        let grind = 0;
        while (currentSize >= (finalSize + 20)) {
            currentSize -= 20;
            grind++;
        }
        console.log(`Grind x${grind}`);
        return currentSize;
    }

    function etching() {
        let etch = 0;
        while (currentSize > (finalSize)) {
            currentSize -= 2;
            etch++;
        }
        console.log(`Etch x${etch}`);
        return currentSize;
    }

    function x_raying() {
        currentSize++;
        console.log(`X-ray x1`);
        return currentSize;
    }

    function transportingWashing() {
        console.log('Transporting and washing');
        return currentSize = Math.floor(currentSize);
    }
}
// piezo([1375, 50000]);
piezo([1000, 4000, 8100]);

