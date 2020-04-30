class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.price = (800 - (this.info.age * 2) + (this.quality * 0.5));  // за да има стойност още в началото
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
        this.price = (800 - (this.info.age * 2) + (this.quality * 0.5));  // ново изчисление, защото има промяна
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
        this.price = (800 - (this.info.age * 2) + (this.quality * 0.5)); // ново изчисление, защото има промяна
    }

    showInfo() {
        let infoData = {};                        // не принтирам направо info, защото там може да има и други данни
        infoData.producer = this.info.producer;   // вадя поотделно само producer, age и brand
        infoData.age = this.info.age;
        infoData.brand = this.info.brand;
        return JSON.stringify(infoData);        // връщам стрингифиран обект, който ще бъде отпечатан
    }
}




let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)


// const Laptop = result;

// let laptop = new Laptop({producer: "Dell", age: 2, brand: "XPS"}, 10);

// laptop.turnOn()
// laptop.turnOff()
// laptop.turnOn()

// expect(laptop.info.producer).to.equal("Dell")
// expect(laptop.info.age).to.equal(2)
// expect(laptop.info.brand).to.equal("XPS")
// expect(laptop.isOn).to.equal(true)
// expect(laptop.price).to.equal(799.5)