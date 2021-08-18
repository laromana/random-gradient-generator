const setBg = () => {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2})` /* "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")" */;
    color1.innerHTML = `linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();


  