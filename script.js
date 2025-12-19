const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const eventName = button.parentElement.querySelector("p").innerText;
        alert("You have successfully registered for " + eventName);
    });
});