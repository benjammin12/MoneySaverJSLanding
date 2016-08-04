/**
 * Created by benjaminxerri on 8/1/16.
 */




function displayInfo(){

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
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
/*
plus = document.getElementById('addForm');
plus.addEventListener('click', add);

function add(){
   var button = document.getElementById('addForm');
    document.body.appendChild('<form class="form-inline">' +
                                '<div class="form-group">' +
                                '<label class="sr-only" for="Amount">Amount (in dollars)</label>'+
                                '<div class="input-group">' +
                                '<div class="input-group-addon">$</div>' +
                                '<input type="text" class="form-control" id="Amount" placeholder="Daily Amount">' +
                                '</div>'+
                                '</div>'+
                                '<button class="isClicked" type="button" onclick="calcYearly()" class="btn btn-primary">Submit</button>'+
                                '</form>'+


                                '</section>'+
                                '<button type="button" class="btn btn-default" id="addForm" aria-label="Right Align">'+
                                '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'+
                                '</button>'
)}
*/
$('#addForm').click(function(){
    $('#newForm').append('<form class="form-inline">' +
        '<div class="form-group">' +
        '<label class="sr-only" for="Amount">Amount (in dollars)</label>'+
        '<div class="input-group">' +
        '<div class="input-group-addon">$</div>' +
        '<input type="text" class="form-control" id="Amount" placeholder="Daily Amount">' +
        '</div>'+
        '</div>'+
        '<button class="isClicked" type="button" onclick="calcYearly()" class="btn btn-primary">Submit</button>'+
        '</form>'

/*
        '</section>'+
        '<button type="button" class="btn btn-default" id="addForm" aria-label="Right Align">'+
        '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'+
        '</button>'

  add button along with form?      */
    )});