// import {cleric} from "./classes.js";

console.log("index.js loaded");

// CHANGING IMAGE FOR RACE AND CLASS PLAYER ONE
function changeRaceImage(playerNumber) {
  const raceClasses = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };
console.log(raceClasses);


  const selectedRace = document.getElementById(`floatingSelectRacePlayerOne`).value;
  const selectedClass = document.getElementById(`floatingSelectClassPlayerOne`).value;

  const heroRaceImage = document.getElementById(`hero-race-image`);
  const imgText = document.getElementById("img-text");
  const imgLabel = document.getElementById("img-label");

  const playerData = raceClasses[selectedRace][selectedClass];

  if (playerData) {
    if (playerData.src) {
      heroRaceImage.src = playerData.src;
    } else if (playerData.display) {
      heroRaceImage.style.display = "none";
    }

    if (playerData.text) {
      imgText.innerHTML = playerData.text;
    } else {
      imgText.innerHTML = "";
    }

    if (playerData.label) {
      imgLabel.innerHTML = playerData.label;
    } else {
      imgLabel.innerHTML = "";
    }
  } else {
    heroRaceImage.src = "images/human.jpg";
    heroRaceImage.style.display = "block";
    imgText.innerHTML = "";
    imgLabel.innerHTML = "";
  }
}


// PLAYER 2 CHANGING RACE AND CLASS
function changeRaceImageP2(playerNumber) {
  const raceClassesP2 = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };

  const selectedRaceP2 = document.getElementById(`floatingSelectRacePlayerTwo`).value;
  const selectedClassP2 = document.getElementById(`floatingSelectClassPlayerTwo`).value;

  const heroRaceImageP2 = document.getElementById(`hero-race-image-p2`);
  const imgTextP2 = document.getElementById("img-text");
  const imgLabelP2 = document.getElementById("img-label");

  const playerDataP2 = raceClassesP2[selectedRaceP2][selectedClassP2];

  if (playerDataP2) {
    if (playerDataP2.src) {
      heroRaceImageP2.src = playerDataP2.src;
    } else if (playerDataP2.display) {
      heroRaceImageP2.style.display = "none";
    }

    if (playerDataP2.text) {
      imgTextP2.innerHTML = playerDataP2.text;
    } else {
      imgTextP2.innerHTML = "";
    }

    if (playerDataP2.label) {
      imgLabelP2.innerHTML = playerDataP2.label;
    } else {
      imgLabelP2.innerHTML = "";
    }
  } else {
    heroRaceImageP2.src = "images/human.jpg";
    heroRaceImageP2.style.display = "block";
    imgTextP2.innerHTML = "";
    imgLabelP2.innerHTML = "";
  }
}

// PLAYER 3 CHANGING RACE AND CLASS
function changeRaceImageP3(playerNumber) {
  const raceClassesP3 = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };

  const selectedRaceP3 = document.getElementById(`floatingSelectRacePlayerThree`).value;
  const selectedClassP3 = document.getElementById(`floatingSelectClassPlayerThree`).value;

  const heroRaceImageP3 = document.getElementById(`hero-race-image-p3`);
  const imgTextP3 = document.getElementById("img-text");
  const imgLabelP3 = document.getElementById("img-label");

  const playerDataP3 = raceClassesP3[selectedRaceP3][selectedClassP3];

  if (playerDataP3) {
    if (playerDataP3.src) {
      heroRaceImageP3.src = playerDataP3.src;
    } else if (playerDataP3.display) {
      heroRaceImageP3.style.display = "none";
    }

    if (playerDataP3.text) {
      imgTextP3.innerHTML = playerDataP3.text;
    } else {
      imgTextP3.innerHTML = "";
    }

    if (playerDataP3.label) {
      imgLabelP3.innerHTML = playerDataP3.label;
    } else {
      imgLabelP3.innerHTML = "";
    }
  } else {
    heroRaceImageP3.src = "images/human.jpg";
    heroRaceImageP3.style.display = "block";
    imgTextP3.innerHTML = "";
    imgLabelP3.innerHTML = "";
  }
}

// PLAYER 4 CHANGING RACE AND CLASS
function changeRaceImageP4(playerNumber) {
  const raceClassesP4 = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };

  const selectedRaceP4 = document.getElementById(`floatingSelectRacePlayerFour`).value;
  const selectedClassP4 = document.getElementById(`floatingSelectClassPlayerFour`).value;

  const heroRaceImageP4 = document.getElementById(`hero-race-image-p4`);
  const imgTextP4 = document.getElementById("img-text");
  const imgLabelP4 = document.getElementById("img-label");

  const playerDataP4 = raceClassesP4[selectedRaceP4][selectedClassP4];

  if (playerDataP4) {
    if (playerDataP4.src) {
      heroRaceImageP4.src = playerDataP4.src;
    } else if (playerDataP4.display) {
      heroRaceImageP4.style.display = "none";
    }

    if (playerDataP4.text) {
      imgTextP4.innerHTML = playerDataP4.text;
    } else {
      imgTextP4.innerHTML = "";
    }

    if (playerDataP4.label) {
      imgLabelP4.innerHTML = playerDataP4.label;
    } else {
      imgLabelP4.innerHTML = "";
    }
  } else {
    heroRaceImageP4.src = "images/human.jpg";
    heroRaceImageP4.style.display = "block";
    imgTextP4.innerHTML = "";
    imgLabelP4.innerHTML = "";
  }
}

// PLAYER 5 CHANGING RACE AND CLASS
function changeRaceImageP5(playerNumber) {
  const raceClassesP5 = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };

  const selectedRaceP5 = document.getElementById(`floatingSelectRacePlayerFive`).value;
  const selectedClassP5 = document.getElementById(`floatingSelectClassPlayerFive`).value;

  const heroRaceImageP5 = document.getElementById(`hero-race-image-p5`);
  const imgTextP5 = document.getElementById("img-text");
  const imgLabelP5 = document.getElementById("img-label");

  const playerDataP5 = raceClassesP5[selectedRaceP5][selectedClassP5];

  if (playerDataP5) {
    if (playerDataP5.src) {
      heroRaceImageP5.src = playerDataP5.src;
    } else if (playerDataP5.display) {
      heroRaceImageP5.style.display = "none";
    }

    if (playerDataP5.text) {
      imgTextP5.innerHTML = playerDataP5.text;
    } else {
      imgTextP5.innerHTML = "";
    }

    if (playerDataP5.label) {
      imgLabelP5.innerHTML = playerDataP5.label;
    } else {
      imgLabelP5.innerHTML = "";
    }
  } else {
    heroRaceImageP5.src = "images/human.jpg";
    heroRaceImageP5.style.display = "block";
    imgTextP5.innerHTML = "";
    imgLabelP5.innerHTML = "";
  }
}

// PLAYER 6 CHANGING RACE AND CLASS
function changeRaceImageP6(playerNumber) {
  const raceClassesP6 = {
    "1": {
      "0": { src: "images/elf.jpg" },
      "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/elf-thief.jpg" },
      "3": { src: "images/elf-warrior.jpg" },
      "4": { src: "images/human-wizard.jpg" },
      // "5": { display: true }
    },
    "2": {
      // Add data for player two
      "0": { src: "images/hobbit-2.jpg" },
      "1": { src: "images/hobbit-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
      "2": { src: "images/hobbit-thief.jpg" },
      "3": { src: "images/warrior hobbit.jpg" },
      "4": { src: "images/hobbit-wizard.jpg" },
      // "5": { display: true }
    },
    "3": {
      // Add data for player three
      "0": { src: "images/dwarf.jpg" },
      "1": { src: "images/dwarf-cleric.jpg", text: "dwarf Cleric", label: "Resurrection:" },
      "2": { src: "images/dwarf-thief.jpg" },
      "3": { src: "images/dwarf-warrior.jpg" },
      "4": { src: "images/dwarf-wizard.jpg" },
      // "5": { display: true }
    },
    "4": {
      // Add data for player four
      "0": { src: "images/human.jpg" },
      "1": { src: "images/human-cleric.jpg", text: "human Cleric", label: "Resurrection:" },
      "2": { src: "images/human-thief.jpg" },
      "3": { src: "images/human-warrior.jpg" },
      "4": { src: "images/elf-wizard.jpg" },
      // "5": { display: true }
    }
    // ,
    // "5": {
    //   // Add data for player five
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // },
    // "6": {
    //   // Add data for player six
    //   "0": { src: "images/elf.jpg" },
    //   "1": { src: "images/elf-cleric.jpg", text: "Elf Cleric", label: "Resurrection:" },
    //   "2": { src: "images/elf-thief.jpg" },
    //   "3": { src: "images/elf-warrior.jpg" },
    //   "4": { src: "images/human-wizard.jpg" },
    //   "5": { display: true }
    // }
  };

  const selectedRaceP6 = document.getElementById(`floatingSelectRacePlayerSix`).value;
  const selectedClassP6 = document.getElementById(`floatingSelectClassPlayerSix`).value;

  const heroRaceImageP6 = document.getElementById(`hero-race-image-p6`);
  const imgTextP6 = document.getElementById("img-text");
  const imgLabelP6 = document.getElementById("img-label");

  const playerDataP6 = raceClassesP6[selectedRaceP6][selectedClassP6];

  if (playerDataP6) {
    if (playerDataP6.src) {
      heroRaceImageP6.src = playerDataP6.src;
    } else if (playerDataP6.display) {
      heroRaceImageP6.style.display = "none";
    }

    if (playerDataP6.text) {
      imgTextP6.innerHTML = playerDataP6.text;
    } else {
      imgTextP6.innerHTML = "";
    }

    if (playerDataP6.label) {
      imgLabelP6.innerHTML = playerDataP6.label;
    } else {
      imgLabelP6.innerHTML = "";
    }
  } else {
    heroRaceImageP6.src = "images/human.jpg";
    heroRaceImageP6.style.display = "block";
    imgTextP6.innerHTML = "";
    imgLabelP6.innerHTML = "";
  }
}

// Call the function initially for each player to set the default images
document.addEventListener("DOMContentLoaded", function () {
changeRaceImage(1);
changeRaceImageP2(2);
changeRaceImageP3(3);
changeRaceImageP4(4);
changeRaceImageP5(5);
changeRaceImageP6(6);
});


// CALCULATE STRENGTH PLAYER ONE
function calculateStrength() {
  let level = parseInt(document.getElementById("level").value) || 1;
  let weapons = parseInt(document.getElementById("weapons").value) || 0;
  let strength = level + weapons;
  document.getElementById("strength").value = strength;
}
calculateStrength();

// CALCULATE STRENGTH PLAYER TWO
function calculateStrengthP2() {
  let level = parseInt(document.getElementById("levelP2").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP2").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP2").value = strength;
}
calculateStrengthP2();

// CALCULATE STRENGTH PLAYER THREE
function calculateStrengthP3() {
  let level = parseInt(document.getElementById("levelP3").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP3").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP3").value = strength;
}
calculateStrengthP3();

// CALCULATE STRENGTH PLAYER FOUR
function calculateStrengthP4() {
  let level = parseInt(document.getElementById("levelP4").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP4").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP4").value = strength;
}
calculateStrengthP4();

// CALCULATE STRENGTH PLAYER FIVE
function calculateStrengthP5() {
  let level = parseInt(document.getElementById("levelP5").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP5").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP5").value = strength;
}
calculateStrengthP5();

// CALCULATE STRENGTH PLAYER SIX
function calculateStrengthP6() {
  let level = parseInt(document.getElementById("levelP6").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP6").value) || 0;
  let strength = level + weapons;
  document.getElementById("strengthP6").value = strength;
}
calculateStrengthP6();


// CARD COLOR PER PLAYER
function changeCardColor() {
  let cardColor = document.getElementById("cardColorInput").value;
  let cardColorP2 = document.getElementById("cardColorInputP2").value;
  let cardColorP3 = document.getElementById("cardColorInputP3").value;
  let cardColorP4 = document.getElementById("cardColorInputP4").value;
  let cardColorP5 = document.getElementById("cardColorInputP5").value;
  let cardColorP6 = document.getElementById("cardColorInputP6").value;
  
  let card = document.getElementById("card");
  card.style.backgroundColor = cardColor;

  let player2Card = document.getElementById("player2");
  player2Card.style.backgroundColor = cardColorP2;

  let player3Card = document.getElementById("player3");
  player3Card.style.backgroundColor = cardColorP3;

  let player4Card = document.getElementById("player4");
  player4Card.style.backgroundColor = cardColorP4;

  let player5Card = document.getElementById("player5");
  player5Card.style.backgroundColor = cardColorP5;

  let player6Card = document.getElementById("player6");
  player6Card.style.backgroundColor = cardColorP6;
}
changeCardColor();


// CARDS PER PLAYER
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
