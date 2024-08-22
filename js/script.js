// Code here!
// DOM exercises

// 1. Byt namn på första hoodien från Ash till Potato.

//     Tips
//     använd .innerText

const firstHoodie = document.querySelector(".art-1 h3");
firstHoodie.innerHTML = "Potato";

// 2. Byt namn på Home till Start.

const homeToStart = document.querySelector("nav a")[1];
homeToStart.innerHTML = "Start";

// 3. Byt namn på Contact till Mail Us.
const contact = document.querySelector("nav a:nth-of-type(2)");
contact.innerHTML = "Mail Us";
// 4. Byt ut informationen om Sinus Hoodie  - Fire.
const fireHoodieInfo = document.querySelector(".art-2 p");

fireHoodieInfo.innerHTML =
  "Do you want to be a danger to society? Get this fire hoodie!!";

// 5. Byt bakgrundsfärg och text på en knapp.

//     Tips
//     använd el.style.backgroundColor

const button = document.querySelector(".art-2 button");

button.style.backgroundColor = "red";

// 6. Byt bakgrundsfärg på någon av produkterna.

const figure3 = document.querySelector(".art-3 figure");

figure3.style.backgroundColor = "pink";
// 7. Byt ut adressen på sidan.
const address = document.querySelector("footer article p");
address.innerHTML = "Sinus skateboards  Chas Academy 92, 100 10 Stockholm";

// 8. Byt färg på samtliga <p>.

//     Tips
//     använd .querySelectorAll()

const pColor = document.querySelectorAll("p");
console.log(pColor);
pColor.forEach((p) => {
  p.style.color = "blue";
});

// 9. Ändra text på samtliga knappar till add to cart.
const buttonsText = document.querySelectorAll("button");

buttonsText.forEach((button) => {
  button.innerHTML = "Add to cart";
});

// 10. Lägg till classen active på menyalternativet home.

//     Tips
//     använd el.classList.add()

const homeEl = document.querySelector("footer a:nth-of-type(1)");

homeEl.classList.add("active");
// 11. Ta bort classen logo på logotypen.

//     Tips
//     använd el.classList.remove()

const removeClass = document.getElementsByClassName(".logo");
removeClass.classList.remove("logo");
// Add Content
// 12. Lägg till ett nytt menyalternativ.
// 13. Lägg till en ny produkt med följande info.

// ![image](https://github.com/user-attachments/assets/fbf7178c-c31b-4ec5-966a-5cd83f84fd31)

//     Tips
//     använd el.insertAdjecentHTML('beforeend',...)

// Events
// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
