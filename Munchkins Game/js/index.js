console.log("Hello World");
// choosing race

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
    function calculateCardsPerPlayer() {
        let players = parseInt(document.getElementById("players").value) || 0;
        let cards = document.getElementById("cards");
        let cardsPerPlayer = players + cards;
        document.getElementById("cardsPerPlayer").value = cardsPerPlayer;
    }

