import exerciseAPI from "./ExerciseApi.js";

const exerciseSec = document.getElementById("exercise-sec");
const exerciseArr = [
  {
    name: "leg",
    dpUrl:
      "https://media.istockphoto.com/id/1202786878/photo/trained-legs-with-muscular-calves-in-sneakers-in-training-gym-during-hard-fitness-and-gym.jpg?s=1024x1024&w=is&k=20&c=B5UhhTNFfa1Lwd0C5joJU1SurPW5Bhn3KYgEdnAcGSE=",
  },
  {
    name: "abs",
    dpUrl:
      "https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_960_720.jpg",
  },
  {
    name: "chest",
    dpUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg",
  },
  {
    name: "shoulder",
    dpUrl:
      "https://media.istockphoto.com/id/510790690/photo/strong-athletic-man-back-on-grey-background.jpg?s=1024x1024&w=is&k=20&c=mGGUbcbAeFBam2e-iQAs3DAAUPkiGg5j3spJWKZuaOc=",
  },
  {
    name: "arms",
    dpUrl:
      "https://cdn.pixabay.com/photo/2017/09/27/18/52/gym-2793007_1280.jpg",
  },
  {
    name: "back",
    dpUrl:
      "https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_1280.jpg",
  },
  {
    name: "fullBody",
    dpUrl: "https://cdn.pixabay.com/photo/2012/11/28/10/30/men-67636_1280.jpg",
  },
];

function setExBox(exUrl, exName, exDesc, exHeading) {
  return ` <div class="ex-Box" data-exDesc = "${exDesc}" data-ExHeading="${exHeading}">
    <img
      src="${exUrl}"
      alt="${exName}"
      class="ex-img"
    />
    <span class="ex-name">${exName}</span>
  </div>`;
}

function getExercises(exerciseName) {
  let clutter = exerciseName + "Data";
  for (let ExerciseSet of exerciseAPI) {
    ExerciseSet.clutter.forEach((elm) => {
      console.log(elm);
    });
  }
}

// exerciseAPI.forEach((ExeciseSet)=>{
//   console.log(ExeciseSet);
// })
function setExerciseLi(exercisename, dpUrl) {
  return `<li id="${exercisename}" 
  onclick="getExercises('${exercisename}')" >
    <a href="#ex-container" id="${exercisename}op" class="serviceLink"><img src="${dpUrl}"
    alt="img for ex." /><label for="${exercisename}op">
    ${exercisename}
    </label></a>
    </li>`;
}

const serviceUl = document.querySelector(".services");
exerciseArr.forEach((li) => {
  serviceUl.innerHTML += setExerciseLi(li.name, li.dpUrl);
});

// function selector(){
let legBtn = document.getElementById("leg");
let absBtn = document.getElementById("abs");
let chestBtn = document.getElementById("chest");
let shoulderBtn = document.getElementById("shoulder");
let armsBtn = document.getElementById("arms");
let backsBtn = document.getElementById("backs");
let fullBodyBtn = document.getElementById("fullBody");

// // }
// //Function to add leg section
// const legSection = () => {
//   const legBoxHeading = document.createElement("div");
//   legBoxHeading.classList.add("legBoxHeading");

//   legBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${exerciseAPI[0].legData[0].heading}</h1>
//         <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>
//     `;
//   exerciseSec.appendChild(legBoxHeading);

//   exerciseAPI[0].legData.forEach((item) => {
//     const legBox = document.createElement("div");
//     legBox.classList.add("ex-container");
//     legBox.innerHTML = `
//           <img src="${item.img}" alt="ex. image" class="ex-img" />
//           <h1 class="ex-name">${item.exName}</h1>
//       `;
//     exerciseSec.appendChild(legBox);
//   });

//   //------------------------- function for exitLegBoxHead ----------------------------
//   let exPageExitBtn = document.getElementById("exitLegBoxHead");
//   exPageExitBtn.addEventListener("click", () => {
//     // console.log("click",exPageExitBtn);
//     exerciseSec.innerHTML = "";
//   });
// };
// // Adding event listener
// legBtn.addEventListener("click", legSection);

// // Function to add abs section
// const absSection = () => {
//   const absBoxHeading = document.createElement("div");
//   absBoxHeading.classList.add("absBoxHeading");
//   absBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${absData[0].heading}</h1>
//       <span class="exitLegBoxHead"   id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(absBoxHeading);

//   absData.forEach((item) => {
//     const absBox = document.createElement("div");
//     absBox.classList.add("ex-container");
//     absBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(absBox);

//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for abs
// absBtn.addEventListener("click", absSection);

// // Function to add Chest section
// const chestSection = () => {
//   const chestBoxHeading = document.createElement("div");
//   chestBoxHeading.classList.add("chestBoxHeading");
//   chestBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${chestData[0].heading}</h1>
//       <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(chestBoxHeading);

//   chestData.forEach((item) => {
//     const chestBox = document.createElement("div");
//     chestBox.classList.add("ex-container");
//     chestBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(chestBox);

//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for chestbtn
// chestBtn.addEventListener("click", chestSection);

// // Function to add shoulder section
// const shoulderSection = () => {
//   const shoulderBoxHeading = document.createElement("div");
//   shoulderBoxHeading.classList.add("shoulderBoxHeading");
//   shoulderBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${shoulderData[0].heading}</h1>
//       <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(shoulderBoxHeading);

//   shoulderData.forEach((item) => {
//     const shoulderBox = document.createElement("div");
//     shoulderBox.classList.add("ex-container");
//     shoulderBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(shoulderBox);

//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for shoulderbtn
// shoulderBtn.addEventListener("click", shoulderSection);

// // Function to add arms section
// const armsSection = () => {
//   const armsBoxHeading = document.createElement("div");
//   armsBoxHeading.classList.add("armsBoxHeading");
//   armsBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${armsData[0].heading}</h1>
//       <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(armsBoxHeading);

//   armsData.forEach((item) => {
//     const armsBox = document.createElement("div");
//     armsBox.classList.add("ex-container");
//     armsBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(armsBox);

//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for armsbtn
// armsBtn.addEventListener("click", armsSection);

// // Function to add backs section
// const backsSection = () => {
//   const backsBoxHeading = document.createElement("div");
//   backsBoxHeading.classList.add("backsBoxHeading");
//   backsBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${backsData[0].heading}</h1>
//       <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(backsBoxHeading);

//   backsData.forEach((item) => {
//     const backsBox = document.createElement("div");
//     backsBox.classList.add("ex-container");
//     backsBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(backsBox);
//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for backsbtn
// backsBtn.addEventListener("click", backsSection);

// // Function to add fullBody section
// const fullBodySection = () => {
//   const fullBodyBoxHeading = document.createElement("div");
//   fullBodyBoxHeading.classList.add("fullBodyBoxHeading");
//   fullBodyBoxHeading.innerHTML = `
//       <h1 class="ex-heading">${fullBodyData[0].heading}</h1>
//       <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

//   `;
//   exerciseSec.appendChild(fullBodyBoxHeading);

//   fullBodyData.forEach((item) => {
//     const fullBodyBox = document.createElement("div");
//     fullBodyBox.classList.add("ex-container");
//     fullBodyBox.innerHTML = `
//         <img src="${item.img}" alt="ex. image" class="ex-img" />
//         <h1 class="ex-name">${item.exName}</h1>
//     `;
//     exerciseSec.appendChild(fullBodyBox);

//     //------------------------- function for exitLegBoxHead ----------------------------
//     let exPageExitBtn = document.getElementById("exitLegBoxHead");
//     exPageExitBtn.addEventListener("click", () => {
//       // console.log("click",exPageExitBtn);
//       exerciseSec.innerHTML = "";
//     });
//   });
// };
// // Adding event listener for fullBodybtn
// fullBodyBtn.addEventListener("click", fullBodySection);
