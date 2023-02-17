{
    const PLNcurency = document.querySelector(".js-PLN");
    const curencyElemnt = document.querySelector(".js-curency");
    const formElement = document.querySelector(".js-form");
    const resultCurency = document.querySelector(".js-result");
    const resetElement = document.querySelector(".js-reset")

   


    const curencyResult = (PLN, curency) => 
    {
        const USD = 4.41;
        const EUR = 4.74;
    

       
       

        switch (curency) {
            case "USD":
                return PLN / USD;
                
            case "EUR":
                return PLN / EUR;

            
        }
    };


    formElement.addEventListener("submit", (Event) => {
        Event.preventDefault();




        const curency = curencyElemnt.value
        const PLN = +PLNcurency.value;


            const result = curencyResult(PLN ,curency);

        resultCurency.innerHTML = `${"Kwota po przeliczniu"} ${PLN.toFixed(2)}  PLN= <strong>${result.toFixed(2)} ${curency}</strong> `;
    });


}