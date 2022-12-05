window.onload = (event) => {
  const paragraphe = document.querySelector(`p`);
  paragraphe.style.visibility = `hidden`;
  let answer = window.prompt(`Voulez-vous voir le contenu de cette page (o/n)`);
  if(answer == `o` || answer == `O`)
    paragraphe.style.visibility = `visible`;
};