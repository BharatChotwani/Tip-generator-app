const food = document.querySelector("#food");
const tip = document.querySelector("#tip");
const calculateBtn = document.querySelector("#calculateAmount");
const output = document.querySelector("#output");




calculateBtn.addEventListener("click", () => {

    const initialFood = Number(food.value);
    const initialTip = Number(tip.value) ;

    if(initialFood < 0 || initialFood < 0){
        showMessage("Error!, Invalid number")
    } else{
    const tipPercentage = initialTip / 100;
    const tipAmount = initialFood * tipPercentage;
    const total = addition(initialFood, tipAmount);
    showMessage(total)
    }
})

function addition(fd, tp){
    return fd + tp ;
}
    
function showMessage(message){
        output.innerText = message ;
}