/**
 * Created by benjaminxerri on 8/1/16.
 */




function displayInfo(){

    var fName = document.getElementById("firstName").value;
    fName.toString();
    var lName = document.getElementById("lastName").value;
    lName.toString();

    var savings = document.getElementById("userSavings").value;


    var person = {
        name:fName,
        last:lName,
        amnt: savings,
        welcome: function(){
            return this.name + " " + this.last;
        }
    };

    console.log(person.name);
    console.log(person.last);

    var fillGreet = document.getElementById("greetingMSG");
    fillGreet.textContent = "Welcome to savings calculator " + person.welcome();

    var currSav = document.getElementById("currSavings");
    currSav.textContent = "Congratulations on saving $" + person.amnt + " so far";

    console.log(person.amnt);
}



//jQuery .click function
$(".getN").click(function(){
    $("#getName").fadeOut(1000);
});


function calcYearly() {
    var amt = document.getElementById("Amount").value;
    if (isNaN(amt)) {
        document.getElementById('amntSaved').innerHTML = "You must enter a number";
        return;
    }
    amt = amt * 260;
    document.getElementById('amntSaved').innerHTML = "You spend " + amt + " yearly.";
    var ele = document.getElementById('posSavings');
    ele.innerHTML = "You could have save " + (amt/2) + " per year, if you purchase this item every other day";
}