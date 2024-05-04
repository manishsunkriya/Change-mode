let modeBtn = document.querySelector(`#moon`);
let body = document.querySelector(`body`);
let currmode = `light`; //Dark

modeBtn.addEventListener(`click`, () =>{
    if(currmode === `light`){
        currmode = `dark`;
        body.classList.add(`dark`);
        body.classList.remove(`light`);
    }
    else{
        currmode = `light`;
        body.classList.add(`dark`);
        body.classList.remove(`dark`);
    }

    // console.log(currmode)
})