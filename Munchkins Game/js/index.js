console.log("Hello to me");
// choosing race
// document.addEventListener('DOMContentLoaded', function() {
//     // chooseing classes
//     function changeHeroImage() {
//       let selectedClass = document.getElementById("floatingSelectClass").value;
//       let heroImage = document.getElementById("hero-image");
  
//       if (selectedClass === "1") { // Cleric
//         heroImage.src = "images/priest_2822364 (3).png";
//       } else if (selectedClass === "2") { // Thief
//         heroImage.src = "";
//       } else if (selectedClass === "3") { // Warrior
//         heroImage.src = "images/swordsman_2822374.png";
//       } else if (selectedClass === "4") { // Wizard
//         heroImage.src = "images/wizard_2822377.png";
//       }
//     }
  
//     // calculate strength
//     function calculateStrength() {
//       let level = parseInt(document.getElementById("level").value) || 0;
//       let weapons = parseInt(document.getElementById("weapons").value) || 0;
//       let strength = level + weapons;
//       document.getElementById("strength").value = strength;
//     }
  
//     // card color
//     function changeCardColor() {
//       let cardColor = document.getElementById("cardColorInput").value;
//       let card = document.getElementById("card");
//       card.style.backgroundColor = cardColor;
//     }
  
//     // cards per player
//     // Get the selected number of players element
//     var selectedNumberElement = document.getElementById('selectedNumber');
  
//     // Add an event listener to detect changes in the selected number
//     selectedNumberElement.addEventListener('change', function() {
//       // Get the selected number of players
//       var selectedNumber = parseInt(selectedNumberElement.value);
  
//       // Get the player cards container element
//       var playerCardsContainer = document.getElementById('player-cards');
  
//       // Clear the previous cards, if any
//       playerCardsContainer.innerHTML = '';
  
//       // Create and append the new cards
//       for (var i = 1; i <= selectedNumber; i++) {
//         var cardElement = document.createElement('div');
//         cardElement.classList.add('player-card');
//         cardElement.textContent = 'Player ' + i;
//         playerCardsContainer.appendChild(cardElement);
//       }
//     });
//   });
  


// chooseing classes
    function changeHeroImage() {
        let selectedClass = document.getElementById("floatingSelectClass").value;
        let heroImage = document.getElementById("hero-image");

        if (selectedClass === "1") { // Cleric
            heroImage.src = "images/priest_2822364 (3).png";            
        } else if (selectedClass === "2") { // Thief
            heroImage.src = "";
        } else if (selectedClass === "3") { // Warrior
            heroImage.src = "images/swordsman_2822374.png";
        } else if (selectedClass === "4") { // Wizard
            heroImage.src = "images/wizard_2822377.png";
        }
    }

// calculate strength
    function calculateStrength() {
        let level = parseInt(document.getElementById("level").value) || 0;
        let weapons = parseInt(document.getElementById("weapons").value) || 0;
        let strength = level + weapons;
        document.getElementById("strength").value = strength;
    }

// card color
    function changeCardColor() {
        let cardColor = document.getElementById("cardColorInput").value;
        let card = document.getElementById("card");
        card.style.backgroundColor = cardColor;
    }

// cards per player 

function selectNumberOfPlayers() {
    let selectedNumber = document.getElementById("selectedNumber").value;
    const playerTwo = document.getElementById("player2");
    const playerThree = document.getElementById("player3");
    const playerFour = document.getElementById("player4");
    const playerFive = document.getElementById("player5");
    const playerSix = document.getElementById("player6");
    if (selectedNumber === "2") { // 2 player
        playerTwo.style.display = "block";
        playerThree.style.display = "none";
        playerFour.style.display = "none";
        playerFive.style.display = "none";
        playerSix.style.display = "none";
    } else if (selectedNumber === "3") { // 3 player
        playerTwo.style.display = "block";
        playerThree.style.display = "block";
        playerFour.style.display = "none";
        playerFive.style.display = "none";
        playerSix.style.display = "none";
    } else if (selectedNumber === "4") { // 4 player    
        playerTwo.style.display = "block";
        playerThree.style.display = "block";
        playerFour.style.display = "block";
        playerFive.style.display = "none";
        playerSix.style.display = "none";
    } else if (selectedNumber === "5") { // 5 player
        playerTwo.style.display = "block";
        playerThree.style.display = "block";
        playerFour.style.display = "block";
        playerFive.style.display = "block";
        playerSix.style.display = "none";
    } else if (selectedNumber === "6") { // 6 player
        playerTwo.style.display = "block";
        playerThree.style.display = "block";
        playerFour.style.display = "block";
        playerFive.style.display = "block";
        playerSix.style.display = "block";
}
}
selectNumberOfPlayers();


