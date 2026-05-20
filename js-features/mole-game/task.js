const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let countDead = 0;
let countLost = 0;

getHole = index => document.getElementById(`hole${index}`);

for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);
    
    hole.addEventListener('click', function() {
       if (hole.classList.contains('hole_has-mole')) {
            countDead++;
            dead.textContent = countDead;
        } else {
            countLost++;
            lost.textContent = countLost;
        }
        
        if (countDead == 10) {
          alert('ура!');
          dead.textContent = 0;
          lost.textContent = 0;
       
        } else if (countLost == 5) {
          alert('упс, проиграли');
          dead.textContent = 0;
          lost.textContent = 0;
      
    }
    });
}
