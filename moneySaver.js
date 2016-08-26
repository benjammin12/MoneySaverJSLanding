/**
 * Created by benjaminxerri on 8/1/16.
 */


$(function () {
    var savings = 0;

    //hide add money forms until user enters name and savings
    $("#addMoney").hide();
    $("#addMoneySpent").hide();

    function displayInfo(){

        var fName = document.getElementById("firstName").value;
        var lName = document.getElementById("lastName").value;
        savings = document.getElementById("userSavings").value; //global

     //   Math.floor(savings);

        var person = {
            name:fName,
            last:lName,
            amnt: savings,
            welcome: function(){
                return this.name + " " + this.last;
            }
        };

        console.log(fName);
        console.log(person.last);

        var fillGreet = document.getElementById("greetingMSG");
        fillGreet.textContent = "Welcome to savings calculator " + person.welcome();

        var today = new Date();
        var currSav = document.getElementById("currSavings");
        currSav.textContent = "Congratulations on saving $" + person.amnt + " as of " + today.toDateString();

        console.log(person.amnt);
    }



//jQuery .click function
    $(".getN").click(function(){
        $(".niceBorder").addClass('jumbotron text-lg-center');
        $("#getName").fadeOut(1000);
        $("#addMoneySpent").show();

    });


    var total = 0; //total must be outside of function so that is global variable

    $('.calcMoney').click(function () {
        var formID = $(this).attr('dataButtonId'); //gave BOTH submit buttons a dataButtonID and set it equal to
                                                   //  the ID of the form the user will be filling out so when they click it,
                                                   // you will get that value
        var amt = $('#'+formID).val();

        if(isNaN(amt)){ // prevent string input
            $('#amntSaved').textContent("You must enter a number");
            return;
        }
        amt = amt * 260;
        total += amt;


        if (formID === 'form1') {
            $('#amntSaved').text("You spent " + amt + " yearly.");
        }else if (formID === 'form2'){
            $('#moreSavings').text("You spent " + amt + " yearly.");
        }

         savings += total;

        $('#totalSavings').text("Running total is: " + total);


    });


    $('#addForm').click(function(){  //makes second form show
        $("#addMoney").show();

    });
    
    
    function displaySummary(){
        console.log('Your savings could be ' + (savings + total));
    }

    var userInfo = document.getElementById('submitInfo');
    userInfo.addEventListener('click', displayInfo);

    var sumInfo = document.getElementById('sumUpInfo');
    sumInfo.addEventListener('click', displaySummary);


});






/*
 $('#newForm').append('<form class="form-inline">' +
 '<div class="form-group">' +
 '<label class="sr-only" for="Amount">Amount (in dollars)</label>'+
 '<div class="input-group">' +
 '<div class="input-group-addon">$</div>' +
 '<input type="text" class="form-control" id="Amount" placeholder="Daily Amount">' +
 '</div>'+
 '</div>'+
 '<button class="isClicked" type="button" class="btn btn-primary">Submit</button>'+
 '</form>'+
 '<br>'
 )

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

 

 */
