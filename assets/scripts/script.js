let playerTurn = true;
let statusDiv = document.getElementById("status");

let hero = {
  name: "Kevin",
  health: 100,
  attacks: {
    shank: "shank attack",
    gouge: "gouge attack",
    scratch: "scratch attack",
  },
  attack(name) {
    let damage = Math.ceil(Math.random() * 20);
    statusDiv.innerText = `${this.name} used his ${this.attacks[name]} to inflict ${damage} damage!`;
    return damage;
  },
};

let villain = {
  name: "Martin",
  health: 100,
  isAlive: true,
  attacks: ["sucker punch", "slap", "splash"],
  attack() {
    let rand = Math.floor(Math.random() * this.attacks.length);
    let chosenAttack = this.attacks[rand];
    let damage = Math.ceil(Math.random() * 20);
    statusDiv.innerText = `${this.name} used his ${chosenAttack} to inflict ${damage} damage!`;
    return damage;
  },
};

let heroHealthDiv = document.getElementById("hero-health");
heroHealthDiv.innerText = hero.health;

let villainHealthDiv = document.getElementById("villain-health");
villainHealthDiv.innerText = villain.health;

function villainTurn() {
  if (!playerTurn) {
    let damageToHero = villain.attack();
    hero.health -= damageToHero;
    heroHealthDiv.innerText = hero.health;
    playerTurn = true;
    checkEnd();
  }

}

function handleButtonClick(event) {
  checkEnd();
  if (playerTurn) {
    let attackId = event.target.dataset.attack;
    let villainHealthDamage = hero.attack(attackId);
    villain.health -= villainHealthDamage;
    villainHealthDiv.innerText = villain.health;
    playerTurn = false;
    setTimeout(villainTurn, 5000);
  }
}

let buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick);
}

function checkEnd() {
  if (villain.health <= 0) {
    statusDiv.innerText = `${villain.name} has been killed! ${hero.name} is triumphant!`;
    playerTurn = false;
  }
  else if (hero.health <= 0) {
    statusDiv.innerText = `${hero.name} has been killed! ${villain.name} is triumphant!`;
    playerTurn = false;
  }
}