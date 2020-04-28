function index() {

    const box = document.querySelector(".box");
    let move;
    let percentage = 1;
    let movement = 0;
    let timer;
    function setMovement() {
        timer = setInterval(() => {
            console.log(movement);
            if (movement * percentage >= 100) {            
                console.log("clear");
                clearInterval(timer);
            }
            movement++;
            box.style.left = `${movement * percentage}%`;
        }, 16.666667);
    }
    
    const btn = document.querySelector(".btn");
    btn.toggle = false;
    btn.addEventListener("click", () => {
        if (!btn.toggle) {
            setMovement();
            btn.toggle = true;
        } else {
            clearInterval(timer);
            btn.toggle = false;
        }
    })
}    
