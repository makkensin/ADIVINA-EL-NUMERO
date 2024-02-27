

export const printHeader = () =>{

   const header = document.createElement("header")
   header.id = "header"

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText = "JUEGA Y ADIVINA UN NUMERO"

    div1.appendChild(p1);
    header.appendChild(div1);
    
    document.body.appendChild(header)

}

