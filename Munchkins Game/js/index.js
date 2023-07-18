console.log("Hello to me");
// choosing race
// function changeRaceImage() {
//     let selectedRace = document.getElementById("floatingSelectRacePlayerOne").value;
//     let heroRaceImage = document.getElementById("hero-race-image")
//     if (selectedRace === "1") {
//         // Elf
//         heroRaceImage.src = "";
//         console.log(selectedRace);
        
//     } else if (selectedRace === "2") {
//         // Hafling
//         heroRaceImage.src = "";
//     } else if (selectedRace === "3") {
//         // Dwarf
//         heroRaceImage.src = "images/gunnery_2822367.png";
//     } else if (selectedRace === "4") {
//         // Human
//         heroRaceImage.src = "images/adventurer_2822371.png";
//     }
// }
// changeRaceImage();

function changeRaceImage() {
    let selectedRace = document.getElementById("floatingSelectRacePlayerOne").value;
    let heroRaceImage = document.getElementById("hero-race-image")
    let selectedClass = document.getElementById(
      "floatingSelectClassPlayerOne"
    ).value;
    // Elf
    if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "1" && selectedClass === "2") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "1" && selectedClass === "2") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "1" && selectedClass === "3") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "1" && selectedClass === "4") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "1" && selectedClass === "5") {
      heroRaceImage.style.display = "none";
    // Hafling
    } else if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
      heroRaceImage.src = "images/hobbit-2.jpg";
    } else if (selectedRace === "2" && selectedClass === "1") {
      heroRaceImage.src = "images/hobbit-cleric.jpg";
    } else if ( selectedRace === "2" && selectedClass === "2") {
      heroRaceImage.src = "images/hobbit-thief.jpg";
    } else if ( selectedRace === "2" && selectedClass === "3") {
      heroRaceImage.src = "images/warrior hobbit.jpg";
    } else if ( selectedRace === "2" && selectedClass === "4") {
      heroRaceImage.src = "images/hobbit-wizard.jpg";
    } else if ( selectedRace === "2" && selectedClass === "5") {
      heroRaceImage.style.display = "none";
    // Dwarf
    } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
      heroRaceImage.src = "images/gunnery_2822367.png";
    } else if (selectedRace === "3" && selectedClass === "1") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "3" && selectedClass === "2") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "3" && selectedClass === "3") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "3" && selectedClass === "4") {
      heroRaceImage.src = "";
    } else if ( selectedRace === "3" && selectedClass === "5") {
      heroRaceImage.style.display = "none";
      // Human
    } else if (selectedRace === "4" && selectedClass === "0") {
      heroRaceImage.src = "images/adventurer_2822371.png";
    } else if (selectedRace === "4" && selectedClass === "1") {
      heroRaceImage.src = "images/priest_2822364 (3).png";
    } else if ( selectedRace === "4" && selectedClass === "2") {
      heroRaceImage.src = "images/thief_2822380 (1).png";
    } else if ( selectedRace === "4" && selectedClass === "3") {
      heroRaceImage.src = "images/swordsman_2822374.png";
    } else if ( selectedRace === "4" && selectedClass === "4") {
      heroRaceImage.src = "images/wizard_2822377.png";
    } else if ( selectedRace === "4" && selectedClass === "5") {
      heroRaceImage.src = "images/adventurer_2822371.png";
    } else {heroRaceImage.src = "images/adventurer_2822371.png"};
}
changeRaceImage();

function changeRaceImageP2() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerTwo").value;
  let heroRaceImage = document.getElementById("hero-race-image-p2")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerTwo"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP2();

function changeRaceImageP3() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerThree").value;
  let heroRaceImage = document.getElementById("hero-race-image-p3")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerThree"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP3();

function changeRaceImageP3() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerThree").value;
  let heroRaceImage = document.getElementById("hero-race-image-p3")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerThree"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP3();

function changeRaceImageP4() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerFour").value;
  let heroRaceImage = document.getElementById("hero-race-image-p4")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerFour"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP4();

function changeRaceImageP5() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerFive").value;
  let heroRaceImage = document.getElementById("hero-race-image-p5")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerFive"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP5();

function changeRaceImageP6() {
  let selectedRace = document.getElementById("floatingSelectRacePlayerSix").value;
  let heroRaceImage = document.getElementById("hero-race-image-p6")
  let selectedClass = document.getElementById(
    "floatingSelectClassPlayerSix"
  ).value;
  // Elf
  if (selectedRace === "1" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "1" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Hafling
  } if (selectedRace === "2" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "";
  } else if (selectedRace === "2" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "2" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  // Dwarf
  } else if (selectedRace === "3" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/gunnery_2822367.png";
  } else if (selectedRace === "3" && selectedClass === "1") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "2") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "3") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "4") {
    heroRaceImage.src = "";
  } else if ( selectedRace === "3" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
    // Human
  } else if (selectedRace === "4" && selectedClass === "0" || selectedClass === "5") {
    heroRaceImage.src = "images/adventurer_2822371.png";
  } else if (selectedRace === "4" && selectedClass === "1") {
    heroRaceImage.src = "images/priest_2822364 (3).png";
  } else if ( selectedRace === "4" && selectedClass === "2") {
    heroRaceImage.src = "images/thief_2822380 (1).png";
  } else if ( selectedRace === "4" && selectedClass === "3") {
    heroRaceImage.src = "images/swordsman_2822374.png";
  } else if ( selectedRace === "4" && selectedClass === "4") {
    heroRaceImage.src = "images/wizard_2822377.png";
  } else if ( selectedRace === "4" && selectedClass === "5") {
    heroRaceImage.style.display = "none";
  }  
}
changeRaceImageP6();

// choosing classes player one
// function changeHeroImage() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerOne"
//   ).value;
//   let heroImage = document.getElementById("hero-image");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImage();

// // choosing classes player two
// function changeHeroImagePlayerTwo() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerTwo"
//   ).value;
//   let heroImage = document.getElementById("hero-image-player-2");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImagePlayerTwo();

// // choosing classes player three
// function changeHeroImagePlayerThree() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerThree"
//   ).value;
//   let heroImage = document.getElementById("hero-image-player-3");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImagePlayerThree();

// // choosing classes player Four
// function changeHeroImagePlayerFour() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerFour"
//   ).value;
//   let heroImage = document.getElementById("hero-image-player-4");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImagePlayerFour();

// // choosing classes player Five
// function changeHeroImagePlayerFive() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerFive"
//   ).value;
//   let heroImage = document.getElementById("hero-image-player-5");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImagePlayerFive();

// // choosing classes player Six
// function changeHeroImagePlayerSix() {
//   let selectedClass = document.getElementById(
//     "floatingSelectClassPlayerSix"
//   ).value;
//   let heroImage = document.getElementById("hero-image-player-6");

//   if (selectedClass === "1") {
//     // Cleric
//     heroImage.src = "images/priest_2822364 (3).png";
//   } else if (selectedClass === "2") {
//     // Thief
//     heroImage.src = "images/thief_2822380 (1).png";
//   } else if (selectedClass === "3") {
//     // Warrior
//     heroImage.src = "images/swordsman_2822374.png";
//   } else if (selectedClass === "4") {
//     // Wizard
//     heroImage.src = "images/wizard_2822377.png";
//   } else if (selectedClass === "5") {
//     // None
//     heroImage.style.display = "none";
//   }
// }
// changeHeroImagePlayerSix();

// calculate strength player one
function calculateStrength() {
  let level = parseInt(document.getElementById("level").value) || 1;
  let weapons = parseInt(document.getElementById("weapons").value) || 0;
  let strength = level + weapons;
  document.getElementById("strength").value = strength;
}
calculateStrength();

// calculate strength player two
function calculateStrengthP2() {
  let level = parseInt(document.getElementById("levelP2").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP2").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP2").value = strength;
}
calculateStrengthP2();

// calculate strength player three
function calculateStrengthP3() {
  let level = parseInt(document.getElementById("levelP3").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP3").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP3").value = strength;
}
calculateStrengthP3();

// calculate strength player four
function calculateStrengthP4() {
  let level = parseInt(document.getElementById("levelP4").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP4").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP4").value = strength;
}
calculateStrengthP4();

// calculate strength player five
function calculateStrengthP5() {
  let level = parseInt(document.getElementById("levelP5").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP5").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP5").value = strength;
}
calculateStrengthP5();

// calculate strength player six
function calculateStrengthP6() {
  let level = parseInt(document.getElementById("levelP6").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP6").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP6").value = strength;
}
calculateStrengthP6();

// card color
function changeCardColor() {
  let cardColor = document.getElementById("cardColorInput").value;
  let card = document.getElementById("card");
  card.style.backgroundColor = cardColor;
}

// cards per player
const playerOne = document.getElementById("card");
const playerTwo = document.getElementById("player2");
const playerThree = document.getElementById("player3");
const playerFour = document.getElementById("player4");
const playerFive = document.getElementById("player5");
const playerSix = document.getElementById("player6");

function changeNumberOfPlayers() {
  const selectedNumber = document.getElementById("selectedNumber").value;

  if (selectedNumber === "1") {
    // 1 player
    playerOne.style.display = "block";
    playerTwo.style.display = "none";
    playerThree.style.display = "none";
    playerFour.style.display = "none";
    playerFive.style.display = "none";
    playerSix.style.display = "none";
  } else if (selectedNumber === "2") {
    // 2 players selected
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
    playerThree.style.display = "none";
    playerFour.style.display = "none";
    playerFive.style.display = "none";
    playerSix.style.display = "none";
  } else if (selectedNumber === "3") {
    // 3 players selected
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
    playerThree.style.display = "block";
    playerFour.style.display = "none";
    playerFive.style.display = "none";
    playerSix.style.display = "none";
  } else if (selectedNumber === "4") {
    // 4 players selected
    playerTwo.style.display = "block";
    playerThree.style.display = "block";
    playerFour.style.display = "block";
    playerFive.style.display = "none";
    playerSix.style.display = "none";
  } else if (selectedNumber === "5") {
    // 5 players selected
    playerTwo.style.display = "block";
    playerThree.style.display = "block";
    playerFour.style.display = "block";
    playerFive.style.display = "block";
    playerSix.style.display = "none";
  } else if (selectedNumber === "6") {
    // 6 players selected
    playerTwo.style.display = "block";
    playerThree.style.display = "block";
    playerFour.style.display = "block";
    playerFive.style.display = "block";
    playerSix.style.display = "block";
  } else {
    playerOne.style.display = "block";
    playerTwo.style.display = "none";
    playerThree.style.display = "none";
    playerFour.style.display = "none";
    playerFive.style.display = "none";
    playerSix.style.display = "none";
  }
}
changeNumberOfPlayers();
