// import {cleric} from "./classes.js";

console.log("index.js loaded");

// CHANGING IMAGE FOR RACE AND CLASS PLAYER ONE
function changeRaceImage(playerNumber) {
  const raceClasses = {
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRace = document.getElementById(
    `floatingSelectRacePlayerOne`
  ).value;
  const selectedClass = document.getElementById(
    `floatingSelectClassPlayerOne`
  ).value;

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
function changeRaceImageP2() {
  const raceClassesP2 = {
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRaceP2 = document.getElementById(
    `floatingSelectRacePlayerTwo`
  ).value;
  const selectedClassP2 = document.getElementById(
    `floatingSelectClassPlayerTwo`
  ).value;

  const heroRaceImageP2 = document.getElementById(`hero-race-image-p2`);
  const imgTextP2 = document.getElementById("img-text-p2");
  const imgLabelP2 = document.getElementById("img-label-p2");

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
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRaceP3 = document.getElementById(
    `floatingSelectRacePlayerThree`
  ).value;
  const selectedClassP3 = document.getElementById(
    `floatingSelectClassPlayerThree`
  ).value;

  const heroRaceImageP3 = document.getElementById(`hero-race-image-p3`);
  const imgTextP3 = document.getElementById("img-text-p3");
  const imgLabelP3 = document.getElementById("img-label-p3");

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
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRaceP4 = document.getElementById(
    `floatingSelectRacePlayerFour`
  ).value;
  const selectedClassP4 = document.getElementById(
    `floatingSelectClassPlayerFour`
  ).value;

  const heroRaceImageP4 = document.getElementById(`hero-race-image-p4`);
  const imgTextP4 = document.getElementById("img-text-p4");
  const imgLabelP4 = document.getElementById("img-label-p4");

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
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRaceP5 = document.getElementById(
    `floatingSelectRacePlayerFive`
  ).value;
  const selectedClassP5 = document.getElementById(
    `floatingSelectClassPlayerFive`
  ).value;

  const heroRaceImageP5 = document.getElementById(`hero-race-image-p5`);
  const imgTextP5 = document.getElementById("img-text-p5");
  const imgLabelP5 = document.getElementById("img-label-p5");

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
    1: {
      0: {
        src: "images/elf.jpg",
        text: "+1 to Run Away. You go up a level for every monster you help someone kill.",
        label: "Elf",
      },
      1: {
        src: "images/elf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/elf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/elf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/human-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    2: {
      // Add data for player two
      0: {
        src: "images/hobbit-2.jpg",
        text: "You may sell one item each turn for double price (other items are at normal price). If you fail you initial Run Away roll, you may discard a card and try once more.",
        label: "Hobbit",
      },
      1: {
        src: "images/hobbit-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/hobbit-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/warrior hobbit.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/hobbit-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    3: {
      // Add data for player three
      0: {
        src: "images/dwarf.jpg",
        text: "You may carry any number of Big items. You may have 6 cards in your hand.",
        label: "Dwarf",
      },
      1: {
        src: "images/dwarf-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/dwarf-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/dwarf-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/dwarf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
    4: {
      // Add data for player four
      0: {
        src: "images/human.jpg",
        text: "Just an ordinary human.",
        label: "Human",
      },
      1: {
        src: "images/human-cleric.jpg",
        text: "Resurrection: When it is time for you to draw cards face-up, you may instead take some or all from the top of the appropriate discard pile. You must thendicard one card from your hand for each card so drawn. Turning: You may dicard up to three cards in combat against an Undead creature. Each discard gives you a +3 bonus.",
        label: "Cleric",
      },
      2: {
        src: "images/human-thief.jpg",
        text: "Backstab: You may discard a card to backstab another player (-2 in combat). You may do this only once per victim per combat, but if two players are fighting a monster together, you may backstab each of them. Theft: You may dicard a card to try to steal a small item carried by another player. Roll a die; 4 or more succeds. Otherwise, you get whatcked an dlose a level.",
        label: "Thief",
      },
      3: {
        src: "images/human-warrior.jpg",
        text: "Berserking: You may discard up to three cards in any combat. Each card gives you a +1 bonus. You win ties in combat.",
        label: "Warrior",
      },
      4: {
        src: "images/elf-wizard.jpg",
        text: "Flight Spell: You may discard up to 3 cards after rolling the die to Run Away; each on gives you a +1 bonus to flee. Charm Spell: You may discard your whole hand (minimum 3 cards) to charm a single Monster instead of fighting it. Discard the Monster and take its Treasures, but don't gain levels. If there are other monsters in the combat, fight them normally.",
        label: "Wizard",
      },
      // "5": { display: true }
    },
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

  const selectedRaceP6 = document.getElementById(
    `floatingSelectRacePlayerSix`
  ).value;
  const selectedClassP6 = document.getElementById(
    `floatingSelectClassPlayerSix`
  ).value;

  const heroRaceImageP6 = document.getElementById(`hero-race-image-p6`);
  const imgTextP6 = document.getElementById("img-text-p6");
  const imgLabelP6 = document.getElementById("img-label-p6");

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
// Buttons for "playerLevelUp" and "playerLevelDown" for player one
const playerLevelUpButton = document.getElementById("playerLevelUp");
const playerLevelDownButton = document.getElementById("playerlevelDown");

// Add event listeners to the buttons
playerLevelUpButton.addEventListener("click", increaseBattleLevel);
playerLevelDownButton.addEventListener("click", decreaseBattleLevel);

function increaseBattleLevel() {
  let levelInput = document.getElementById("level");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrength();
}

function decreaseBattleLevel() {
  let levelInput = document.getElementById("level");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrength();
}

// Buttons for "playerGearUp" and "playerGearDown" for player one
const playerGearUpButton = document.getElementById("playerGearUp");
const playerGearDownButton = document.getElementById("playerGearDown");

// Add event listeners to the buttons
playerGearUpButton.addEventListener("click", increaseLevel);
playerGearDownButton.addEventListener("click", decreaseLevel);

function increaseLevel() {
  let levelInput = document.getElementById("weapons");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrength();
}

function decreaseLevel() {
  let levelInput = document.getElementById("weapons");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrength();
}

function calculateStrength() {
  let level = parseInt(document.getElementById("level").value) || 1;
  let weapons = parseInt(document.getElementById("weapons").value) || 0;
  let strength = level + weapons;
  let combatStrength = document.getElementById("playerTotalStrength");
  combatStrength.innerHTML = strength;
  document.getElementById("strength").value = strength;
}
calculateStrength();

//BUTTONS FOR MONSTER LEVEL UP AND DOWN PLAYER ONE
const monsterLevelUpButton = document.getElementById("monsterLevelUp");
const monsterLevelDownButton = document.getElementById("monsterLevelDown");

// Add event listeners to the buttons
monsterLevelUpButton.addEventListener("click", increaseMonsterLevel);
monsterLevelDownButton.addEventListener("click", decreaseMonsterLevel);

function increaseMonsterLevel() {
  let levelInput = document.getElementById("monsterLevel"); 
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);  

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

// Calculate strength whenever the level is changed
calculateMonsterStrength();
}

function calculateMonsterStrength() {
  let monsterLevel = parseInt(document.getElementById("monsterLevel").value) || 1;
  let monsterModifier = parseInt(document.getElementById("monsterModifier").value) || 0;
  let monsterStrength = monsterLevel + monsterModifier;
  let monsterCombatStrength = document.getElementById("monsterTotalStrength");
  monsterCombatStrength.innerHTML = monsterStrength;
  document.getElementById("monsterTotalStrength").value = monsterStrength;
}
calculateMonsterStrength();

function decreaseMonsterLevel() {
  let levelInput = document.getElementById("monsterLevel");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateMonsterStrength();
}

//BUTTONS FOR MONSTER MODIFIER UP AND DOWN PLAYER ONE
const monsterModifierUpButton = document.getElementById("monsterModifierUp");
const monsterModifierDownButton = document.getElementById("monsterModifierDown");

// Add event listeners to the buttons
monsterModifierUpButton.addEventListener("click", increaseMonsterModifier);
monsterModifierDownButton.addEventListener("click", decreaseMonsterModifier);

function increaseMonsterModifier() {
  let levelInput = document.getElementById("monsterModifier");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateMonsterStrength();
}

function decreaseMonsterModifier() {
  let levelInput = document.getElementById("monsterModifier");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateMonsterStrength();
}

// CALCULATE STRENGTH PLAYER TWO
const playerTwoLevelUpButton = document.getElementById("playerTwoLevelUp");
const playerTwoLevelDownButton = document.getElementById("playerTwoLevelDown");

// Add event listeners to the buttons player two
playerTwoLevelUpButton.addEventListener("click", increaseLevelP2);  
playerTwoLevelDownButton.addEventListener("click", decreaseLevelP2);

function increaseLevelP2() {
  let levelInput = document.getElementById("levelP2");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrengthP2();
}

function decreaseLevelP2() {
  let levelInput = document.getElementById("levelP2");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrengthP2();
}

function calculateStrengthP2() {
  let level = parseInt(document.getElementById("levelP2").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsPlayerTwo").value) || 0;
  let strength = level + weapons;
  let combatStrength = document.getElementById("playerTwoTotalStrength");
  combatStrength.innerHTML = strength;
  document.getElementById("strengthP2").value = strength;
}
calculateStrengthP2();

// Buttons for "playerGearUp" and "playerGearDown" for player two
const playerTwoGearUpButton = document.getElementById("playerTwoGearUp");
const playerTwoGearDownButton = document.getElementById("playerTwoGearDown");

// Add event listeners to the buttons player two
playerTwoGearUpButton.addEventListener("click", increaseGearP2);
playerTwoGearDownButton.addEventListener("click", decreaseGearP2);

function increaseGearP2() {
  let gearInput = document.getElementById("weaponsPlayerTwo");
  let currentGear = parseInt(gearInput.value) || 0;
  let maxGear = parseInt(gearInput.getAttribute("max")) || 20;

  // Increment the current gear
  currentGear = Math.min(currentGear + 1, maxGear);

  // Update the "GEAR" input field
  gearInput.value = currentGear;

  // Calculate strength whenever the gear is changed
  calculateStrengthP2();
}

function decreaseGearP2() {
  let gearInput = document.getElementById("weaponsPlayerTwo");
  let currentGear = parseInt(gearInput.value) || 0;
  let minGear = parseInt(gearInput.getAttribute("min")) || 0;

  // Decrement the current gear
  currentGear = Math.max(currentGear - 1, minGear);

  // Update the "GEAR" input field
  gearInput.value = currentGear;

  // Calculate strength whenever the gear is changed
  calculateStrengthP2();
}

//BUTTONS FOR MONSTER LEVEL UP AND DOWN PLAYER TWO
const monsterLevelUpButtonPlayerTwo = document.getElementById("playerTwoMonsterLevelUp");
const monsterLevelDownButtonPlayerTwo = document.getElementById("playerTwoMonsterLevelDown");

// Add event listeners to the buttons player two
monsterLevelUpButtonPlayerTwo.addEventListener("click", increaseMonsterLevelP2);
monsterLevelDownButtonPlayerTwo.addEventListener("click", decreaseMonsterLevelP2);

function increaseMonsterLevelP2() {
  let levelInput = document.getElementById("playerTwoMonsterLevel");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculatePlayerTwoMonsterStrength();
}

function decreaseMonsterLevelP2() {
  let levelInput = document.getElementById("playerTwoMonsterLevel");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculatePlayerTwoMonsterStrength();
}

// CALCULATE STRENGTH MONSTER PLAYER TWO
function calculatePlayerTwoMonsterStrength() {
  let monsterLevel = parseInt(document.getElementById("playerTwoMonsterLevel").value) || 1;
  let monsterModifier = parseInt(document.getElementById("playerTwoMonsterModifier").value) || 0;
  let monsterStrength = monsterLevel + monsterModifier;
  let monsterCombatStrength = document.getElementById("playerTwoMonsterTotalStrength");
  monsterCombatStrength.innerHTML = monsterStrength;
  document.getElementById("playerTwoMonsterTotalStrength").value = monsterStrength;
}
calculatePlayerTwoMonsterStrength();

// BUTTONS FOR MONSTER MODIFIER UP AND DOWN PLAYER TWO
const monsterModifierUpButtonPlayerTwo = document.getElementById("playerTwoMonsterModifierUp");
const monsterModifierDownButtonPlayerTwo = document.getElementById("playerTwoMonsterModifierDown");

// Add event listeners to the buttons player two
monsterModifierUpButtonPlayerTwo.addEventListener("click", increaseMonsterModifierP2);
monsterModifierDownButtonPlayerTwo.addEventListener("click", decreaseMonsterModifierP2);

function increaseMonsterModifierP2() {
  let modifierInput = document.getElementById("playerTwoMonsterModifier");
  let currentModifier = parseInt(modifierInput.value) || 0;
  let maxModifier = parseInt(modifierInput.getAttribute("max")) || 20;

  // Increment the current modifier
  currentModifier = Math.min(currentModifier + 1, maxModifier);

  // Update the "MODIFIER" input field
  modifierInput.value = currentModifier;

  // Calculate strength whenever the modifier is changed
  calculatePlayerTwoMonsterStrength();
}

function decreaseMonsterModifierP2() {
  let modifierInput = document.getElementById("playerTwoMonsterModifier");
  let currentModifier = parseInt(modifierInput.value) || 0;
  let minModifier = parseInt(modifierInput.getAttribute("min")) || 0;

  // Decrement the current modifier
  currentModifier = Math.max(currentModifier - 1, minModifier);

  // Update the "MODIFIER" input field
  modifierInput.value = currentModifier;

  // Calculate strength whenever the modifier is changed
  calculatePlayerTwoMonsterStrength();
}

// CALCULATE STRENGTH PLAYER THREE
function calculateStrengthP3() {
  let level = parseInt(document.getElementById("levelP3").value) || 1;
  let weapons = parseInt(document.getElementById("weaponsP3").value) || 0;
  let strength = level + weapons;
  let combatStrength = document.getElementById("playerThreeTotalStrength");
  combatStrength.innerHTML = strength;
  document.getElementById("strengthP3").value = strength;
}
calculateStrengthP3();

// BUTTONS FOR LEVEL UP AND DOWN PLAYER THREE
const levelUpButtonP3 = document.getElementById("playerThreeLevelUp");
const levelDownButtonP3 = document.getElementById("playerThreeLevelDown");

// Add event listeners to the buttons player three
levelUpButtonP3.addEventListener("click", increaseLevelP3);
levelDownButtonP3.addEventListener("click", decreaseLevelP3);

function increaseLevelP3() {
  let levelInput = document.getElementById("levelP3");
  let currentLevel = parseInt(levelInput.value) || 1;
  let maxLevel = parseInt(levelInput.getAttribute("max")) || 20;

  // Increment the current level
  currentLevel = Math.min(currentLevel + 1, maxLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrengthP3();
}

function decreaseLevelP3() {
  let levelInput = document.getElementById("levelP3");
  let currentLevel = parseInt(levelInput.value) || 1;
  let minLevel = parseInt(levelInput.getAttribute("min")) || 1;

  // Decrement the current level
  currentLevel = Math.max(currentLevel - 1, minLevel);

  // Update the "LEVEL" input field
  levelInput.value = currentLevel;

  // Calculate strength whenever the level is changed
  calculateStrengthP3();
}

// BUTTONS FOR GEAR UP AND DOWN PLAYER THREE
const playerThreeGearUpButton = document.getElementById("playerThreeGearUp");
const playerThreeGearDownButton = document.getElementById("playerThreeGearDown");

// Add event listeners to the buttons player three
playerThreeGearUpButton.addEventListener("click", increaseGearP3);
playerThreeGearDownButton.addEventListener("click", decreaseGearP3);

function increaseGearP3() {
  let gearInput = document.getElementById("weaponsP3");
  let currentGear = parseInt(gearInput.value) || 0;
  let maxGear = parseInt(gearInput.getAttribute("max")) || 20;

  // Increment the current gear
  currentGear = Math.min(currentGear + 1, maxGear);

  // Update the "GEAR" input field
  gearInput.value = currentGear;

  // Calculate strength whenever the gear is changed
  calculateStrengthP3();
}

function decreaseGearP3() {
  let gearInput = document.getElementById("weaponsP3");
  let currentGear = parseInt(gearInput.value) || 0;
  let minGear = parseInt(gearInput.getAttribute("min")) || 0;

  // Decrement the current gear
  currentGear = Math.max(currentGear - 1, minGear);

  // Update the "GEAR" input field
  gearInput.value = currentGear;

  // Calculate strength whenever the gear is changed
  calculateStrengthP3();
}

//BUTTONS FOR MONSTER LEVEL UP AND DOWN PLAYER THREE
const monsterLevelUpButtonPlayerThree = document.getElementById("playerThreeMonsterLevelUp");
const monsterLevelDownButtonPlayerThree = document.getElementById("playerThreeMonsterLevelDown");

// Add event listeners to the buttons player three
monsterLevelUpButtonPlayerThree.addEventListener("click", increaseMonsterLevelP3);
monsterLevelDownButtonPlayerThree.addEventListener("click", decreaseMonsterLevelP3);

function increaseMonsterLevelP3() {
  let monsterLevelInput = document.getElementById("playerThreeMonsterLevel");
  let currentMonsterLevel = parseInt(monsterLevelInput.value) || 1;
  let maxMonsterLevel = parseInt(monsterLevelInput.getAttribute("max")) || 20;

  // Increment the current monster level
  currentMonsterLevel = Math.min(currentMonsterLevel + 1, maxMonsterLevel);

  // Update the "MONSTER LEVEL" input field
  monsterLevelInput.value = currentMonsterLevel;

  // Calculate strength whenever the monster level is changed
  calculatePlayerThreeMonsterStrength();
}

function decreaseMonsterLevelP3() {
  let monsterLevelInput = document.getElementById("playerThreeMonsterLevel");
  let currentMonsterLevel = parseInt(monsterLevelInput.value) || 1;
  let minMonsterLevel = parseInt(monsterLevelInput.getAttribute("min")) || 1;

  // Decrement the current monster level
  currentMonsterLevel = Math.max(currentMonsterLevel - 1, minMonsterLevel);

  // Update the "MONSTER LEVEL" input field
  monsterLevelInput.value = currentMonsterLevel;

  // Calculate strength whenever the monster level is changed
  calculatePlayerThreeMonsterStrength();
}

// BUTTONS FOR MONSTER MODIFIER UP AND DOWN PLAYER THREE  
const monsterModifierUpButtonPlayerThree = document.getElementById("playerThreeMonsterModifierUp");
const monsterModifierDownButtonPlayerThree = document.getElementById("playerThreeMonsterModifierDown");

// Add event listeners to the buttons player three
monsterModifierUpButtonPlayerThree.addEventListener("click", increaseMonsterModifierP3);
monsterModifierDownButtonPlayerThree.addEventListener("click", decreaseMonsterModifierP3);

function increaseMonsterModifierP3() {
  let monsterModifierInput = document.getElementById("playerThreeMonsterModifier");
  let currentMonsterModifier = parseInt(monsterModifierInput.value) || 0;
  let maxMonsterModifier = parseInt(monsterModifierInput.getAttribute("max")) || 20;

  // Increment the current monster modifier
  currentMonsterModifier = Math.min(currentMonsterModifier + 1, maxMonsterModifier);

  // Update the "MONSTER MODIFIER" input field
  monsterModifierInput.value = currentMonsterModifier;

  // Calculate strength whenever the monster modifier is changed
  calculatePlayerThreeMonsterStrength();
}

function decreaseMonsterModifierP3() {
  let monsterModifierInput = document.getElementById("playerThreeMonsterModifier");
  let currentMonsterModifier = parseInt(monsterModifierInput.value) || 0;
  let minMonsterModifier = parseInt(monsterModifierInput.getAttribute("min")) || 0;

  // Decrement the current monster modifier
  currentMonsterModifier = Math.max(currentMonsterModifier - 1, minMonsterModifier);

  // Update the "MONSTER MODIFIER" input field
  monsterModifierInput.value = currentMonsterModifier;

  // Calculate strength whenever the monster modifier is changed
  calculatePlayerThreeMonsterStrength();
}

// CALCULATE MONSTER STRENGTH PLAYER THREE
function calculatePlayerThreeMonsterStrength() {
  let monsterLevel = parseInt(document.getElementById("playerThreeMonsterLevel").value) || 1;
  let monsterModifier = parseInt(document.getElementById("playerThreeMonsterModifier").value) || 0;
  let monsterStrength = monsterLevel + monsterModifier;
  let monsterCombatStrength = document.getElementById("playerThreeMonsterTotalStrength");
  monsterCombatStrength.innerHTML = monsterStrength;
  document.getElementById("playerThreeMonsterTotalStrength").value = monsterStrength;
}
calculatePlayerThreeMonsterStrength();





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

// DICE FUNCTION SECTION
function createDice(number) {
	const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

    const dice = document.createElement("div");
    dice.classList.add("dice");

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement("div");
        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        
        dice.appendChild(dot);
    }

    return dice;
}

function randomizedDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";

    for (let i = 0; i < numberOfDice; i++) {
        const dice = createDice(Math.floor(Math.random() * 6) + 1);
        diceContainer.appendChild(dice);
    }
};

const NUMBER_OF_DICE = 1;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

randomizedDice(diceContainer, NUMBER_OF_DICE);

btnRollDice.addEventListener("click", () => {
    // randomizedDice(diceContainer, NUMBER_OF_DICE);
    const interval = setInterval(() => {
        randomizedDice(diceContainer, NUMBER_OF_DICE);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 800);
});

// BATTLE BUTTON FUNCTION SECTION
// PLAYER ONE BATTLE BUTTON
const battleBtn = document.getElementById("playerOneBattleBtn");
const battleStats = document.getElementById("battleStats");
const removeImg = document.getElementById("hero-race-image");
const removeImgLabel = document.getElementById("img-label")
const removeImgText = document.getElementById("img-text")
const removeInputs = document.getElementById("form-inputs")
battleBtn.addEventListener("click", function() {
  if (battleStats.classList.contains("d-none")) {
    battleStats.classList.remove("d-none");
    battleStats.classList.add("d-block");
    removeImg.classList.add("d-none");
    removeImgLabel.classList.add("d-none");
    removeImgText.classList.add("d-none");
    removeInputs.classList.add("d-none");
  } else {
    battleStats.classList.remove("d-block");
    battleStats.classList.add("d-none");
    removeImg.classList.remove("d-none");
    removeImgLabel.classList.remove("d-none");
    removeImgText.classList.remove("d-none");
    removeInputs.classList.remove("d-none");
  }
});

// PLAYER TWO BATTLE BUTTON
const battleBtnTwo = document.getElementById("playerTwoBattleBtn");
const battleStatsTwo = document.getElementById("battleStatsTwo");
const removeImgPlayerTwo = document.getElementById("hero-race-image-p2")
const removeImgLabelPlayerTwo = document.getElementById("img-label-p2")
const removeImgTextPlayerTwo = document.getElementById("img-text-p2")
const removeInputsPlayerTwo = document.getElementById("form-inputs-p2")
battleBtnTwo.addEventListener("click", function() {
  if (battleStatsTwo.classList.contains("d-none")) {
    battleStatsTwo.classList.remove("d-none");
    battleStatsTwo.classList.add("d-block");
    removeImgPlayerTwo.classList.add("d-none");
    removeImgLabelPlayerTwo.classList.add("d-none");
    removeImgTextPlayerTwo.classList.add("d-none");
    removeInputsPlayerTwo.classList.add("d-none");
  } else {
    battleStatsTwo.classList.remove("d-block");
    battleStatsTwo.classList.add("d-none");
    removeImgPlayerTwo.classList.remove("d-none");
    removeImgLabelPlayerTwo.classList.remove("d-none");
    removeImgTextPlayerTwo.classList.remove("d-none");
    removeInputsPlayerTwo.classList.remove("d-none");
  }
});

// PLAYER THREE BATTLE BUTTON
const battleBtnThree = document.getElementById("playerThreeBattleBtn");
const battleStatsThree = document.getElementById("battleStatsThree");
const removeImgPlayerThree = document.getElementById("hero-race-image-p3")
const removeImgLabelPlayerThree = document.getElementById("img-label-p3")
const removeImgTextPlayerThree = document.getElementById("img-text-p3")
const removeInputsPlayerThree = document.getElementById("form-inputs-p3")
battleBtnThree.addEventListener("click", function() {
  if (battleStatsThree.classList.contains("d-none")) {
    battleStatsThree.classList.remove("d-none");
    battleStatsThree.classList.add("d-block");
    removeImgPlayerThree.classList.add("d-none");
    removeImgLabelPlayerThree.classList.add("d-none");
    removeImgTextPlayerThree.classList.add("d-none");
    removeInputsPlayerThree.classList.add("d-none");
  } else {
    battleStatsThree.classList.remove("d-block");
    battleStatsThree.classList.add("d-none");
    removeImgPlayerThree.classList.remove("d-none");
    removeImgLabelPlayerThree.classList.remove("d-none");
    removeImgTextPlayerThree.classList.remove("d-none");
    removeInputsPlayerThree.classList.remove("d-none");
  }
});



