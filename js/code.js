let PLNcurency = document.querySelector(".js-PLN");
let curencyElemnt = document.querySelector(".js-curency");
let formElement = document.querySelector(".js-form");
let resultCurency = document.querySelector(".js-result");
let resetElement = document.querySelector(".js-reset")

let USD = 4.41;
let EUR = 4.74;

formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();



    let curency = curencyElemnt.value
    let PLN = +PLNcurency.value;
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
