/** @format */

let element = document.getElementById("Nemo");
let i = 0;
function increase() {
  if (i === 405) return;
  element.innerHTML = i;

  i += 1;
  setTimeout(increase, 5);
}

const createEffect = (id, txt, speed) => {
  let doc = document.getElementById(id);
  doc.innerHTML = "";
  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      //if theres \n then clear the text before it and add a new line
      if (txt.charAt(i) === "\n") doc.innerHTML = "";

      doc.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed || 100);
    } else return;
  }
  typeWriter();
};

createEffect(
  "Nemo",
  "Oh You are here a bit early               \n  I am upgrading my portfolio to NEXT level           "
);

// setTimeout(createEffect("Nemo", "Taking it to the NEXT level", 100), 16000);
setTimeout(increase, 12000);

function toggleClassList() {
  document.getElementById("Elsa").classList.remove("hidden");
  document.getElementById("Elsa").classList.add("custom");
}

setTimeout(toggleClassList, 14000);
