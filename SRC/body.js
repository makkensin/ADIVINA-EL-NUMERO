

export const main = () =>{
  const main = document.createElement('main');
  main.id = "main"
  const section1 = document.createElement('section');
  section1.classList.add('section-1');
  const p = document.createElement('p');
  p.classList.add('p');
  p.textContent = "0" 
  const input = document.createElement('input');
  input.classList.add('input');
  input.addEventListener('blur', putNumber)
  const section2 = document.createElement('section');
  section2.classList.add('section-2');
  const btn1 = document.createElement('button');
  btn1.textContent = "random"
  btn1.addEventListener("click", numeroRandom)
  const btn2 = document.createElement('button');
  btn2.textContent = "reset"
  btn2.addEventListener("click", reseteo)


  section1.appendChild(p)
  section1.appendChild(input)
  section2.appendChild(btn1)
  section2.appendChild(btn2)

  
  main.appendChild(section1)
  main.appendChild(section2)
  document.body.appendChild(main)
}


export const numeroRandom = () =>{
   
   const numRan = Math.floor(Math.random() * 100) + 1;
   const newSection1 = document.querySelector('.section-1');
   let newRam = document.querySelector(".p");

   if (!newRam) {
     newRam = document.createElement('p');
     newRam.classList.add('p');
     newSection1.appendChild(newRam);
   }
  
   newRam.innerText = numRan;
 
}



export const putNumber = (e) =>{
  const input1 = document.querySelector('.input');
  const newP1 = document.querySelector(".p");
  if (e.target.value === newP1.textContent) {
    newP1.innerHTML = 'Lo lograste'
  } else {
    newP1.innerHTML = 'Sigue intentando'
    
  }
  
}


export const reseteo = () =>{
  // const newSection2 = document.querySelector('.section-1');
  const newP = document.querySelector(".p");
  newP.innerHTML = 0

}










