const button = document.querySelector(".advice-click");
const number = document.querySelector(".advice-number");
const advice = document.querySelector(".advice-type");

async function geradorDeConselhos(){
    const url = "https://api.adviceslip.com/advice"
    const conselho = await fetch(url)
    const geradorConselhos = await conselho.json();

    if(geradorConselhos.slip){
        const AdviceId = geradorConselhos.slip.id;
        const AdviceText = geradorConselhos.slip.advice;
        number.innerHTML = "advice #" + AdviceId;
        advice.innerHTML = AdviceText;
    }
}

button.addEventListener("click", geradorDeConselhos);