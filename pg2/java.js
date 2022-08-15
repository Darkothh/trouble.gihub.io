const textInput = document.querySelector("#textInput")

function encriptar() {
  var textModif = textInput.value
  var newText = textModif.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
   
  if (textModif === "") {
    console.log("escribe algo")
    let notify = document.getElementById("err");
    notify.innerHTML = "Escribe Algo";
    notify.style.display = "block";
    setTimeout(function() {
    notify.style.display = "none";
  }, 3000);
  } else {
    document.querySelector("#textDesencripted").innerHTML = newText;
    console.log(newText);
  }
}

function desencriptar() {
  var textModif = textInput.value
  var newText = textModif.toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
   
  if (textModif === "") {
    console.log("escribe algo")
  } else {
    document.querySelector("#textDesencripted").innerHTML = newText;
    console.log(newText);
  }
}

function copy(){
  var textArea = document.getElementById("textDesencripted");
  var copyText = textArea.innerHTML;
  navigator.clipboard.writeText(copyText);

  let notify = document.getElementById("popCopy");
  notify.innerHTML = "Copiado!";
  notify.style.display = "block";
  setTimeout(function() {
    notify.style.display = "none";
  }, 3000);
}
