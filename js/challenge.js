// let count = 0;
// const counterDisplay = document.querySelector("#counter");
//
//
// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let heart = document.querySelector("#heart");
// let pause = document.querySelector("#pause");
// let comment = document.querySelector("#list");
// let submitButton = document.querySelector("#submit");
// function counter() {
//     if (count < 9999) {
//         count++;
//         counterDisplay.innerHTML = count;
//     }
// }
// setInterval(counter, 1000);
//
// let numbersClicked = [];
// function fooNumbersClicked() {
//    let result = numbersClicked.find((object) => {return object.number === count})
//     if(result === undefined) {
//         //add object to numbersClicked[]
//         let obj = {
//             number: count,
//             likes: 1,
//         }
//         numbersClicked.push(obj);
//         console.log("this is the array of number clicked: ", numbersClicked);
//         displayLis();
//     } else {
//         //add like to the object
//     }
// }
//
//
// function displayLis() {
//     let unorderedList = document.querySelector("ul");
//     unorderedList.innerHTML = "";
//     numbersClicked.forEach((obj) => {
//         let listItem = document.createElement("li");
//         listItem.innerHTML = `${obj.number} has been clicked ${obj.likes}`
//         unorderedList.append(listItem);
//
//     })
// }





// let car = { }
// function makeSteeringWheel() {
//     return "steering wheel"
// }
// function makeWheels() {
//     return "wheels"
// }
// function makeSeats() {
//     return "seats"
// }
// function makeGasTank() {
//     return "gas tank"
// }
//
// function driveCar(car) {
//     if (car.wheels) {
//         console.log("I'm driving my car!")
//     } else {
//             console.log("My car won't start :(")
//         }
//     }
//
//     function crashCar(car) {
//         console.log("I crashed my car!")
//         car.wheels = null
//     }
//
// // create makeCar here
//     function makeCar() {
//         car.steeringWheel = makeSteeringWheel();
//         car.wheels = makeWheels()
//         car.seats = makeSeats();
//         car.gasTank = makeGasTank();
//         return car;
//     }
//
//     let myCar = makeCar(/* input any arguments here */);
//     console.log(myCar)
//     driveCar(myCar)
//     crashCar(myCar)
//
//     let myNewCar = makeCar(/* input any arguments here */)
//     console.log(myNewCar)
//     driveCar(myNewCar)






function makeSteeringWheel() {
    return "steering wheel"
}
function makeWheels() {
    return "wheels"
}
function makeSeats() {
    return "seats"
}
function makeGasTank() {
    return "gas tank"
}

let brokenCars = {};
let car = { }
function driveCar(car) {
    if (brokenCars[car]) {
        console.log("My car won't start :(")
    } else {
            console.log("I'm driving my car!")
        }
    }

    function crashCar(car) {
        console.log("I crashed my car!")
        brokenCars[car] = true;
    }

// create makeCar here
    function makeCar() {
        car.steeringWheel = makeSteeringWheel();
        car.wheels = makeWheels()
        car.seats = makeSeats();
        car.gasTank = makeGasTank();
        return car;
    }

    let myCar = makeCar(/* input any arguments here */);
    console.log(myCar)
    driveCar(myCar)
    crashCar(myCar)

    let myNewCar = makeCar(/* input any arguments here */)
    console.log(myNewCar)
    driveCar(myNewCar)


// let obj = {
//     count: 0,
//     string: ""
// }
// function likedCount() {
//    let list = document.querySelector("ul");
//    let listItem = document.createElement("li");
//    let span = document.createElement("span");
//    span.innerHTML = obj.count;
//    span.id = "spanNumber";
//    if (count !== obj.string) {
//        console.log("inside of the if");
//        obj.count = 0
//        obj.string = count
//        obj.count = obj.count + 1
//        listItem.innerHTML = `${count} has been liked ${span.innerHTML} times`;
//        list.append(listItem);
//    } else {
//        console.log("inside the else");
//        obj.count = obj.count + 1
//        span.innerHTML = obj.count
//    }
// }
//
// function pauseCounter() {
//     clearInterval(counter);
// }
//
// minus.addEventListener("click", (e)=>{
//     count--;
//     counterDisplay.innerHTML = count;
// });
//
// plus.addEventListener("click", (e) => {
//     count++;
//     counterDisplay.innerHTML = count;
// });
//
// heart.addEventListener("click", (e) => {
//     console.log();
//     // likedCount();
//     fooNumbersClicked();
// });
// pause.addEventListener("click", (e) => {
//     pauseCounter();
// });
//
// submitButton.addEventListener("form", (e) => {
//     console.log(submitButton);
//     event.preventDefault();
// })