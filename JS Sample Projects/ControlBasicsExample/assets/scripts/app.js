
const maxHelthLevel = 100,
    playerAttackPower=10,
    monsterAttackPower =14,
    playerStrongAttackPower = 30,
    HEAL_VALUE =20;
    

let playerHealthLevel = maxHelthLevel,
    monsterHealthLevel = maxHelthLevel
    hasBonuusValue = true,
    gameLogentries = [];

try{
     getUserInput();
}
catch(error){
    console.log(error.message);
    playerHealthLevel =  monsterHealthLevel=100;
}

adjustHealthBars(playerHealthLevel); 

function getUserInput(){
    let healthLevel = prompt('Please eneter Player health level');
    healthLevel = parseInt(healthLevel);
    if(Number.isNaN(healthLevel) && !healthLevel){
        throw {message : 'Please eneter a valid health level'};
    }
    playerHealthLevel =  monsterHealthLevel= healthLevel;
}

function endRound(){
    let initialPlayerHealthLevel = playerHealthLevel;     
    let playerDamage = dealPlayerDamage(monsterAttackPower);
    playerHealthLevel -= playerDamage;
    //logging
    addGameLoggs('Moster_Attack',
    initialPlayerHealthLevel,
    playerHealthLevel,playerDamage);

    if(playerHealthLevel<=0 && hasBonuusValue){
        hasBonuusValue = false;
        removeBonusLife();
        playerHealthLevel=initialPlayerHealthLevel;
        setPlayerHealth(playerHealthLevel);
    }

    if(playerHealthLevel <= 0 && monsterHealthLevel > 0)
    {
        alert('You loose the game')
    }
    else if(monsterHealthLevel<=0 && playerHealthLevel > 0)
    {
        alert('you win the Game');
    }
    else if(monsterHealthLevel<=0 && playerHealthLevel <= 0){
        alert('Game is end in tie');
    }

    if(monsterHealthLevel<= 0 || playerHealthLevel<= 0  ){
        addGameLoggs('GAME_OVER',0,0,0);
        onLogging();
        gameLogentries = [];
        reset();
    }
}

function attackMonster(mode){
    let attckPower,attackEvent,
        initialMosterHealth = monsterHealthLevel;

    attckPower = (mode === 'Strong') 
                ? playerStrongAttackPower
                : playerAttackPower;
                
    attackEvent = (mode === 'Strong')
                ? 'Player_Strong_Attack'
                : 'Player_Attack';
    
    let MonsterDamage = dealMonsterDamage(attckPower);
    monsterHealthLevel -= MonsterDamage;
    //logging
    addGameLoggs(attackEvent,initialMosterHealth,
        monsterHealthLevel,MonsterDamage);

    endRound();
}

function onAttack(){
 attackMonster('Attack');
}

function onstrongAttck(){
    attackMonster('Strong');
}
function reset(){
    getUserInput();
    adjustHealthBars(playerHealthLevel); 
 }

function onHeal(){
    let healvalue;
    if(playerHealthLevel >= maxHelthLevel - healvalue){
        alert(`You can't heal yourself at this point`);
        healvalue = 0;
    }
    {
        healvalue = HEAL_VALUE;
    }
    playerHealthLevel += healvalue;
    increasePlayerHealth(healvalue);
    endRound();
}

function addGameLoggs(event, initalhealth, currenthealth,damage){
    let logEntry = {
        eventName:event,
        healthBeforeAttack:initalhealth,
        healthafterattack:currenthealth,
        damageCaused:damage
    };

  gameLogentries.push(logEntry);
}

function onLogging(){
    //console.log(gameLogentries);
    let i=1;
    for(const gameEntry of gameLogentries){
        console.log(`#${i}`);
        for(const key in gameEntry ){
            console.log(`${key} : ${gameEntry[key]}`);
        }
        i++;
    }
}

attackBtn.addEventListener('click',onAttack);
strongAttackBtn.addEventListener('click',onstrongAttck)
healBtn.addEventListener('click',onHeal);
logBtn.addEventListener('click',onLogging);