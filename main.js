// A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante nãopo de ser alterada ou retribuída.

const display = document.querySelector("#display");
// puxa o elemento #display
const buttons = document.querySelectorAll("button");
// puxa a lista de elementos button

buttons.forEach((btn)=> {
  btn.addEventListener("click",() =>{
    if (btn.id === "=") {
      display.value = eval (display.value);
    } else if (btn.id === "ac") {
      display.value = "";
    } else if (btn.id === "de"){
      display.value = display.value.slice (0, -1);
    } else {
      display.value +=btn.id;
    }
  })
})