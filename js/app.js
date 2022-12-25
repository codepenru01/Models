// let models = [
//     {
//         image: './img/chevrolet.jpg',
//         title: "chevrolet",
//     },

//     {
//         image: './img/lada.jpg',
//         title: "lada",
//     },

//     {
//         image: './img/lamborghini.jpg',
//         title: "lamborghini",
//     },

//     {
//         image: './img/ferrari.jpg',
//         title: "ferrari",
//     }
// ];  

// function writeModels() {
//     innerHTML = "";
// }

let border1 = document.querySelector(".border1");
let border2 = document.querySelector(".border2");
let borderr1 = document.querySelector(".borderr1");
let borderr2 = document.querySelector(".borderr2");
let radi1 = document.querySelector(".radi1");
let radi2 = document.querySelector(".radi2");

border2.addEventListener("click", function() {
    borderr2.style.backgroundColor = "black";
    borderr1.style.backgroundColor = "white";
    radi1.style.display = "none";
    radi2.style.display = "block";
});

border1.addEventListener("click", function() {
    borderr2.style.backgroundColor = "white";
    borderr1.style.backgroundColor = "black";
    radi1.style.display = "block";
    radi2.style.display = "none";
});

// let hero = document.querySelector(".hero");

// let models = [
//     {
//         image: './img/Malibu.jpg',
//         title: "Chevrolet",
//         link: './ChevroletModels.html'
//     },
//     {
//         image: './img/lada.jpg',
//         title: "Lada",
//         link: './LadaModels.html'
//     },
//     {
//         image: './img/lamborghini.jpg',
//         title: "Lamborgini",
//         link: './LamborginiModels.html'
//     },
//     {
//         image: './img/ferrari.jpg',
//         title: "Ferrari",
//         link: './FerrariModels.html'
//     },
// ]

// function writeModels() {
//     hero.innerHTML = "";
//     hero.forEach((model, index) => {
//         car.innerHTML = `
//         <div class="card text-center" style="width: 18rem; border: none;">
//             <a href="${model.link}">
//                 <img src="${model.image}" class="card-img-top" alt="${model.title}_${index}">
//             </a>
//             <div class="card-body">
//                 <p class="card-text dt fs-5 text-uppercase">${model.title}</p>
//             </div>
//         </div>`
//     });
// };

// document.body.onload = () => writeModels();

// <div class="card text-center" style="width: 18rem; border: none;">
// <img src="${model.image}" class="card-img-top" alt="${model.title}_${index}">
// <div class="card-body">
//     <p class="card-text dt fs-5 text-uppercase">${model.title}</p>
// </div>
// </div>
// <div class="card text-center" style="width: 18rem; border: none;">
// <img src="${model.image}" class="card-img-top" alt="${model.title}_${index}">
// <div class="card-body">
//     <p class="card-text dt fs-5 text-uppercase">${model.title}</p>
// </div>
// </div>
// <div class="card text-center" style="width: 18rem; border: none;">
// <img src="${model.image}" class="card-img-top" alt="${model.title}_${index}">
// <div class="card-body">
//     <p class="card-text dt fs-5 text-uppercase">${model.title}</p>
// </div>
// </div>`