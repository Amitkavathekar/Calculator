let display = document.getElementById("display");

let buttons = document.querySelectorAll(".numberblock");

buttons.forEach(button => {
    button.onclick = () => {
        let value = button.innerText;
        
        if (value === "c") {
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    };
});
