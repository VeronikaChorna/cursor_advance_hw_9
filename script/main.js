const button = document.querySelector('.btn');

button.onclick = generateBlocks();



function generateBlocks() { 
    const divsAmound = 25;
    const container = document.querySelector(".container");
   
    const setDivBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
      }

    for (let i = 0; i < divsAmound; i++) {
       div = document.createElement('div');
       div.id = 'block' + i;
       div.style.backgroundColor = "#" + setDivBg();
       div.className = 'box';
       container.prepend(div);
        // divs = document.getElementsByClassName('box');
    }
    
}




  