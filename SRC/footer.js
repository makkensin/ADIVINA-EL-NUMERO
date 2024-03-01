

export const printFooter = () =>{

  const foot = document.createElement('footer')
  foot.id = "footer"
  const footDiv = document.createElement("div");
  footDiv.classList.add("foot-Div");
  const footP = document.createElement("p");
  footP.classList.add("foot-p");
  footP.innerText = "hola caracola";

  
  foot.appendChild(footDiv);
  footDiv.appendChild(footP);

  document.body.appendChild(foot);

}



