const legBtn = document.getElementById("leg")
const excerciseSec = document.getElementById("exercise-sec")

const legData = [
  {
    heading:"Legs",
    img:"/images/demo.jpeg",
    exName:"sumoDeadlift squats",
    des:"lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading:"Legs",
    img:"/images/demo.jpeg",
    exName:"sumoDeadlift squats",
    des:"lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading:"Legs",
    img:"/images/demo.jpeg",
    exName:"sumoDeadlift squats",
    des:"lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
]

// Function to add leg section
const legSection =()=>{

  const legBoxHeading = document.createElement("div")
  legBoxHeading.classList.add("legBoxHeading");
  legBoxHeading.innerHTML=`
      <h1 class="ex-heading">${legData[0].heading}</h1>  
  `
  excerciseSec.appendChild(legBoxHeading);

  legData.forEach((item)=>{
    const legBox = document.createElement("div")
    legBox.classList.add("ex-container");
    legBox.innerHTML=`
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `
    excerciseSec.appendChild(legBox)
  })
}


// Adding event listener
legBtn.addEventListener("click",legSection)












