import exerciseAPI from "./ExerciseApi.js";

const legBtn = document.getElementById("leg");
const absBtn = document.getElementById("abs");
const chestBtn = document.getElementById("chest");
const shoulderBtn = document.getElementById("shoulder");
const armsBtn = document.getElementById("arms");
const backsBtn = document.getElementById("backs");
const fullBodyBtn = document.getElementById("fullBody");

const excerciseSec = document.getElementById("exercise-sec");

// const legData = [
//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "squats",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },
//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "Deadlift",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },
//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "jumping squats",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },
//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "deep squats",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },
//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "Barbell Squats",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },

//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "Barbell Lunges",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },

//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "Leg press",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },

//   {
//     heading: "Legs",
//     img: "/images/demo.jpeg",
//     exName: "Leg Extensions",
//     des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
//   },
// ];

const absData = [
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Crunches",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Reverse Crunches",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Plank",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Leg Raise",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Hanging Leg Raise",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Abs",
    img: "/images/demo.jpeg",
    exName: "Plate Twist",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

const chestData = [
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Simple Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "wide hand Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Incline Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Decline Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Dumbble flyes",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Bench press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Incline Bench press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Chest",
    img: "/images/demo.jpeg",
    exName: "Decline Bench press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

const shoulderData = [
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Barbell shoulder press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Front Dumbbell Raise",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Side dumbbell Raise",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Hanuman Dand",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Hindu Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Back Barbell Press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Dumbbell Shoulder Press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Shoulder",
    img: "/images/demo.jpeg",
    exName: "Upright Barbell Row",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

const backsData = [
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Hand Stand",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Wide-Grip Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Close-Grip Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Babell Deadlift",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "One Arm Dumbbell Row",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Bent Over Dumbbell Row",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Backs",
    img: "/images/demo.jpeg",
    exName: "Spate",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

const armsData = [
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Spate",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Dumbbell Curl",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Barbell Curl",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Concentration Curls",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Dumbbell Tricep Extension",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Seated Triceps Press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Dumbbell Kickback",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Arms",
    img: "/images/demo.jpeg",
    exName: "Cable Pushdown",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

const fullBodyData = [
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Spate",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Pull-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Push-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Abs Crunch",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Sit-ups",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Side Crunch",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Squates",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Sumo-Squates",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Forearm Curl",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
  {
    heading: "Full Body",
    img: "/images/demo.jpeg",
    exName: "Dumbbell Shoulder Press",
    des: "lorem loremjsjdfliasj fiosdj riofsjrlifj; srgfijr;dgn ;siergn;aierong",
  },
];

//Function to add leg section
const legSection = () => {
  const legBoxHeading = document.createElement("div");
  legBoxHeading.classList.add("legBoxHeading");

  legBoxHeading.innerHTML = `
      <h1 class="ex-heading">${exerciseAPI[0].legData[0].heading}</h1>
        <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>  
    `;
  excerciseSec.appendChild(legBoxHeading);

  exerciseAPI[0].legData.forEach((item) => {
    const legBox = document.createElement("div");
    legBox.classList.add("ex-container");
    legBox.innerHTML = `
          <img src="${item.img}" alt="ex. image" class="ex-img" />
          <h1 class="ex-name">${item.exName}</h1>  
      `;
    excerciseSec.appendChild(legBox);
  });

  //------------------------- function for exitLegBoxHead ----------------------------
  let exPageExitBtn = document.getElementById("exitLegBoxHead");
  exPageExitBtn.addEventListener("click", () => {
    // console.log("click",exPageExitBtn);
    excerciseSec.innerHTML = "";
  });
};
// Adding event listener
legBtn.addEventListener("click", legSection);

// Function to add abs section
const absSection = () => {
  const absBoxHeading = document.createElement("div");
  absBoxHeading.classList.add("absBoxHeading");
  absBoxHeading.innerHTML = `
      <h1 class="ex-heading">${absData[0].heading}</h1>
      <span class="exitLegBoxHead"   id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(absBoxHeading);

  absData.forEach((item) => {
    const absBox = document.createElement("div");
    absBox.classList.add("ex-container");
    absBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(absBox);

    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for abs
absBtn.addEventListener("click", absSection);

// Function to add Chest section
const chestSection = () => {
  const chestBoxHeading = document.createElement("div");
  chestBoxHeading.classList.add("chestBoxHeading");
  chestBoxHeading.innerHTML = `
      <h1 class="ex-heading">${chestData[0].heading}</h1>
      <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(chestBoxHeading);

  chestData.forEach((item) => {
    const chestBox = document.createElement("div");
    chestBox.classList.add("ex-container");
    chestBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(chestBox);

    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for chestbtn
chestBtn.addEventListener("click", chestSection);

// Function to add shoulder section
const shoulderSection = () => {
  const shoulderBoxHeading = document.createElement("div");
  shoulderBoxHeading.classList.add("shoulderBoxHeading");
  shoulderBoxHeading.innerHTML = `
      <h1 class="ex-heading">${shoulderData[0].heading}</h1>
      <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(shoulderBoxHeading);

  shoulderData.forEach((item) => {
    const shoulderBox = document.createElement("div");
    shoulderBox.classList.add("ex-container");
    shoulderBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(shoulderBox);

    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for shoulderbtn
shoulderBtn.addEventListener("click", shoulderSection);

// Function to add arms section
const armsSection = () => {
  const armsBoxHeading = document.createElement("div");
  armsBoxHeading.classList.add("armsBoxHeading");
  armsBoxHeading.innerHTML = `
      <h1 class="ex-heading">${armsData[0].heading}</h1>
      <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(armsBoxHeading);

  armsData.forEach((item) => {
    const armsBox = document.createElement("div");
    armsBox.classList.add("ex-container");
    armsBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(armsBox);

    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for armsbtn
armsBtn.addEventListener("click", armsSection);

// Function to add backs section
const backsSection = () => {
  const backsBoxHeading = document.createElement("div");
  backsBoxHeading.classList.add("backsBoxHeading");
  backsBoxHeading.innerHTML = `
      <h1 class="ex-heading">${backsData[0].heading}</h1>
      <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(backsBoxHeading);

  backsData.forEach((item) => {
    const backsBox = document.createElement("div");
    backsBox.classList.add("ex-container");
    backsBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(backsBox);
    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for backsbtn
backsBtn.addEventListener("click", backsSection);

// Function to add fullBody section
const fullBodySection = () => {
  const fullBodyBoxHeading = document.createElement("div");
  fullBodyBoxHeading.classList.add("fullBodyBoxHeading");
  fullBodyBoxHeading.innerHTML = `
      <h1 class="ex-heading">${fullBodyData[0].heading}</h1>
      <span class="exitLegBoxHead"  id="exitLegBoxHead">x</span>

      
  `;
  excerciseSec.appendChild(fullBodyBoxHeading);

  fullBodyData.forEach((item) => {
    const fullBodyBox = document.createElement("div");
    fullBodyBox.classList.add("ex-container");
    fullBodyBox.innerHTML = `
        <img src="${item.img}" alt="ex. image" class="ex-img" />
        <h1 class="ex-name">${item.exName}</h1>  
    `;
    excerciseSec.appendChild(fullBodyBox);

    //------------------------- function for exitLegBoxHead ----------------------------
    let exPageExitBtn = document.getElementById("exitLegBoxHead");
    exPageExitBtn.addEventListener("click", () => {
      // console.log("click",exPageExitBtn);
      excerciseSec.innerHTML = "";
    });
  });
};
// Adding event listener for fullBodybtn
fullBodyBtn.addEventListener("click", fullBodySection);
