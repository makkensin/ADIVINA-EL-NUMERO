

export const footer = () => {

  const footer = document.createElement("footer")
  footer.id = "footer"

  const p2 = document.createElement('p');
  const div2 = document.createElement('div');
  p2.innerText = "hola"

    div2.appendChild(p2);
    footer.appendChild(div2);
    
    document.body.appendChild(footer)

}