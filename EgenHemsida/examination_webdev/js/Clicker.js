function example() {


//Min knapp
var cummies = 0;
var uppgrades = 0;
var autoUppgrade = 0;
var multiplier = 1;
var uppgradeClickCostMultiplier = 2;
var uppgradeAutoCostMultiplier = 1.1;
let nameElement = document.getElementById("boy");

//Auto * 10
var test02 = 0
var test01 = uppgradeAutoCostMultiplier;




//clicker
let button = document.createElement("Button")
button.textContent = "Click"
button.className = "HugoButton"


let buttonClick = function()
{
cummies += multiplier;
objectEl.textContent = "Points: " + cummies.toString();
}
button.addEventListener("click", buttonClick)
nameElement.appendChild(button)

//click uppgrade
let upgrade = document.createElement("Button")
upgrade.textContent = "Click Uppgrade: " + 10 * uppgradeClickCostMultiplier; 
upgrade.className = "UppgradeButton"

let Uppgrade = function()
{
    if(cummies >= 10 * uppgradeClickCostMultiplier ){
        cummies -= 10 * uppgradeClickCostMultiplier;
        uppgrades += 1;
        multiplier = multiplier * 2;
        uppgradeClickCostMultiplier = uppgradeClickCostMultiplier * 5;
        upgrade.textContent = "Click Uppgrade: " + 10 * uppgradeClickCostMultiplier; 
        objectEl.textContent = "Points: " + cummies.toString();
    }
}
upgrade.addEventListener("click", Uppgrade)
nameElement.appendChild(upgrade)

//Autoclick uppgrade
let autoUpgrade = document.createElement("Button")
autoUpgrade.textContent = "Auto Uppgrade: " + Math.round(uppgradeAutoCostMultiplier * 10);
autoUpgrade.className = "UppgradeButtonAuto"

let BuyAutoUppgrade = function()
{
    if(cummies >= Math.round(uppgradeAutoCostMultiplier * 10)){
        cummies -= Math.round(uppgradeAutoCostMultiplier * 10);
        autoUppgrade += 1;
        uppgradeAutoCostMultiplier = uppgradeAutoCostMultiplier * 1.5;
        objectEl.textContent = "Points: " + cummies.toString();
        autoUpgrade.textContent = "Auto Uppgrade: " + Math.round(uppgradeAutoCostMultiplier * 10);

        test01 = Math.round(uppgradeAutoCostMultiplier);
        for (var i = 0; i < 10; i++) {
        test01 = test01 * 1.5;
        test02 += test01 * 10;
    }


    
    }
    autoUpgrade10.textContent = "10 Auto Uppgrades: " + Math.round(test02);

}
autoUpgrade.addEventListener("click", BuyAutoUppgrade)
nameElement.appendChild(autoUpgrade)

//Autoclick uppgrade * 10
test01 = uppgradeAutoCostMultiplier;
test02=Math.round(uppgradeAutoCostMultiplier * 10)+1;
for (var i = 0; i < 10; i++) {
    test01 = test01 * 1.5;
test02 += test01 * 10;

}

let autoUpgrade10 = document.createElement("Button")
autoUpgrade10.textContent = "10 Auto Uppgrades: " + Math.round(test02);
autoUpgrade10.className = "UppgradeButtonAuto10"

let BuyAutoUppgrade10 = function()
{  
    for (var i = 0; i < 10; i++) {
        BuyAutoUppgrade();
      }


}
autoUpgrade10.addEventListener("click", BuyAutoUppgrade10)
nameElement.appendChild(autoUpgrade10)


//Auto Uppgrade
let AutoUppgrade = function()
{
    cummies += autoUppgrade;
    objectEl.textContent = "Points: " + cummies.toString();
}

window.setInterval(AutoUppgrade, 1000);

let objectEl = document.createElement("h3");
objectEl.textContent = "Points: " + cummies.toString();
objectEl.className = "PointText"
nameElement.appendChild(objectEl);

let impostor = document.getElementById("sussybaka")
let SussyBaka = function(){
    if(cummies == 489 || cummies == 666 || cummies > 734 && cummies < 746 || cummies > 863) {
        impostor.className = "sus";
    } else{
        impostor.className = "sus hide";
    }
}

window.setInterval(SussyBaka, 1);

let phase02 = function(){
location.href = "test1.html"
}
impostor.addEventListener("click", phase02)
}

example();