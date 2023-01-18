const button = document.querySelector('.btn');
const container = document.querySelector(".container");

button.onclick = generateBlocks;

function generateBlocks() {
    // let div;
    // for (let i = 1;  i <= 25; i++) {
    //     div = document.createElement("div");   
    // } 

    // div.classList.add("box");
    // container.prepend(div);

    const divsAmound = 25;
    const arrayDiv = new Array();

    for (var i = 0; i < divsAmound; i++) {
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].id = 'block' + i;
        arrayDiv[i].style.backgroundColor = "#" + setDivBg();;
        arrayDiv[i].className = 'block' + i;
        arrayDiv[i].className = 'box';

        document.body.appendChild(arrayDiv[i]);
}
}

const setDivBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }
  