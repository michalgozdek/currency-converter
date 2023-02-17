const PLNcurency = document.querySelector(".js-PLN");
const curencyElemnt = document.querySelector(".js-curency");
const formElement = document.querySelector(".js-form");
const resultCurency = document.querySelector(".js-result");
const resetElement = document.querySelector(".js-reset")

const USD = 4.41;
const EUR = 4.74;

formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();



    const curency = curencyElemnt.value
    const PLN = +PLNcurency.value;
    let result;

    switch (curency) {
        case "USD":
            result = PLN / USD;
            break;
        case "EUR":
            result = PLN / EUR;

            break;
    }




    resultCurency.innerHTML = `${"Kwota po przeliczniu"} ${PLN.toFixed(2)}  PLN= <strong>${result.toFixed(2)} ${curency}</strong `;
});

//resetElement.addEventListener("click" , () => {
   // resultCurency.remove();
//})
