window.onload = function(){
    const number = document.getElementById("number");
    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    console.log(number);
    console.log(increase);
    console.log(decrease);

    increase.addEventListener("click", function(){
        console.log("increase가 클릭됨");

        const n = parseInt(number.innerText, 10);
        number.innerText = n+1;

    });

    decrease.addEventListener("click", function(){
        console.log("decrease가 클릭됨");
        
        let n = parseInt(number.innerText, 10);
        number.innerText = n-1;
    });


}