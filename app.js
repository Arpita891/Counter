let count = 0;

const value = document.querySelector("#value");
// console.log(value);
const button = document.querySelectorAll(".btn");
// console.log(button);

button.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener( "click", function (e) {
        // console.log(e.currentTarget.classList);
        let className = e.currentTarget.classList;
        if(className.contains("decrease")) {
            count--;
        }else if (className.contains("increase")){
            count++;
        }else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        value.textContent = count;
    });
});