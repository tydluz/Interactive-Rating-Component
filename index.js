const rateOne = document.getElementById("rate1");
const rateTwo = document.getElementById("rate2");
const rateThree = document.getElementById("rate3");
const rateFour = document.getElementById("rate4");
const rateFive = document.getElementById("rate5");

rateOne.addEventListener("click", (e) => {
    console.log("Event worked!");
    if (
        rateTwo.classList.contains("clicked") ||
        rateThree.classList.contains("clicked") ||
        rateFour.classList.contains("clicked") ||
        rateFive.classList.contains("clicked")
    ) {
        rateTwo.classList.remove("clicked");
        rateThree.classList.remove("clicked");
        rateFour.classList.remove("clicked");
        rateFive.classList.remove("clicked");
        rateOne.classList.add("clicked");
        console.log(rateOne);
    } else {
        // rateOne.classList.toggle("clicked");
        console.log("this is rate one");
    }
});

rateTwo.addEventListener("click", (e) => {
    if (
        rateOne.classList.contains("clicked") ||
        rateThree.classList.contains("clicked") ||
        rateFour.classList.contains("clicked") ||
        rateFive.classList.contains("clicked")
    ) {
        rateOne.classList.remove("clicked");
        rateThree.classList.remove("clicked");
        rateFour.classList.remove("clicked");
        rateFive.classList.remove("clicked");
        rateTwo.classList.add("clicked");
    } else {
        rateTwo.classList.toggle("clicked");
    }
});

rateThree.addEventListener("click", (e) => {
    if (
        rateOne.classList.contains("clicked") ||
        rateTwo.classList.contains("clicked") ||
        rateFour.classList.contains("clicked") ||
        rateFive.classList.contains("clicked")
    ) {
        rateOne.classList.remove("clicked");
        rateTwo.classList.remove("clicked");
        rateFour.classList.remove("clicked");
        rateFive.classList.remove("clicked");
        rateThree.classList.add("clicked");
    } else {
        rateThree.classList.toggle("clicked");
    }
});

rateFour.addEventListener("click", (e) => {
    if (
        rateOne.classList.contains("clicked") ||
        rateTwo.classList.contains("clicked") ||
        rateThree.classList.contains("clicked") ||
        rateFive.classList.contains("clicked")
    ) {
        rateOne.classList.remove("clicked");
        rateTwo.classList.remove("clicked");
        rateThree.classList.remove("clicked");
        rateFive.classList.remove("clicked");
        rateFour.classList.add("clicked");
    } else {
        rateFour.classList.toggle("clicked");
    }
});

rateFive.addEventListener("click", (e) => {
    if (
        rateTwo.classList.contains("clicked") ||
        rateThree.classList.contains("clicked") ||
        rateFour.classList.contains("clicked") ||
        rateOne.classList.contains("clicked")
    ) {
        rateOne.classList.remove("clicked");
        rateTwo.classList.remove("clicked");
        rateThree.classList.remove("clicked");
        rateFour.classList.remove("clicked");
        rateFive.classList.add("clicked");
    } else {
        rateFive.classList.toggle("clicked");
    }
});

const rates = document.querySelectorAll(".rate");
const rateCard = document.getElementById("rate__card");
const selected = document.getElementById("selected");
const thankYouCard = document.getElementById("thank_you_card");
const submitButton = document.getElementById("btn");

submitButton.addEventListener("click", (e) => {
    console.log("Button was clicked");
    if (
        rateOne.classList.contains("clicked") ||
        rateTwo.classList.contains("clicked") ||
        rateThree.classList.contains("clicked") ||
        rateFour.classList.contains("clicked") ||
        rateFive.classList.contains("clicked")
    ) {
        for (let rate = 0; rate < rates.length; rate++) {
            if (rates[rate].classList.contains("clicked")) {
                switch (rate) {
                    case 0:
                        selected.innerText = 1;
                        break;
                    case 1:
                        selected.innerText = 2;
                        break;
                    case 2:
                        selected.innerText = 3;
                        break;
                    case 3:
                        selected.innerText = 4;
                        break;
                    case 4:
                        selected.innerText = 5;
                        break;

                    default:
                        break;
                }
            }
        }
        rateCard.style.display = "none";
        thankYouCard.style.display = "block";
    }
});
