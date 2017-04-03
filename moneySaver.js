/**
 * Created by benjaminxerri on 8/1/16.
 */


$(function () {
    var savings = 0;
    var intSavings;
    //hide add money forms until user enters name and savings
    $("#addMoney").hide();
    $("#addMoneySpent").hide();

    function displayInfo(){

        var isValid = fieldHasAttribute('signUp');

        if (!(isValid)){
            passWordmess.textContent ="**You need to fill out all fields to proceed";
        }
        else {
            var fName = document.getElementById("firstName").value;
            var lName = document.getElementById("lastName").value;
            savings = document.getElementById("userSavings").value; //global
            intSavings = parseInt(savings); //savings input string and must be converted to an Int


            var person = {
                name: fName,
                last: lName,
                amnt: intSavings,
                welcome: function () {
                    return this.name + " " + this.last;
                }
            };

            var fillGreet = document.getElementById("greetingMSG");
            fillGreet.textContent = "Welcome to savings calculator " + person.welcome();

            var today = new Date();
            var currSav = document.getElementById("currSavings");

            if (person.amnt > 0) {
                currSav.textContent = "Congratulations on saving $" + person.amnt + " as of " + today.toDateString();
            }
            else {
                currSav.textContent = "It looks like your in debt of $" + Math.abs(person.amnt) + " as of " + today.toDateString() +
                    ". Try not to worry about that, we can help give you an idea of what you can save!";
            }
            $(".niceBorder").addClass('jumbotron text-lg-center');
            $("#getName").fadeOut(1000);
            $("#addMoneySpent").show();

        }
    }



//jQuery .click function


    var total = 0; //total must be outside of function so that is global variable

    $('.calcMoney').click(function () {
        var formID = $(this).attr('dataButtonId'); //gave BOTH submit buttons a dataButtonID and set it equal to
                                                   //  the ID of the form the user will be filling out so when they click it,
                                                   // you will get that value
        var amt = $('#'+formID).val();

        var amtToInt = parseInt(amt); //user input is always a string

        if(isNaN(amtToInt)){ // prevent string input
            $('#amntSaved').textContent("You must enter a number");
            return;
        }

        var times = document.getElementById("frmAmnt").value;
        amt = (times * amt) * 52;
        total += amt;

        if (formID === 'form1') {
            $('#amntSaved').val("You spent " + amt + " yearly.");
            $('#form1').val("");
        }
        $('#totalSavings').text("Running total yearly total is: " + total);


    });

    function displaySummary(){
        $('#displaySummary').text(''); //first clear the text to prevent multiple appending of text
        $('#displaySummary').addClass('jumbotron text-lg-center');
        $('#displaySummary').text("Your savings could be $" + (intSavings + total));

    }
    var passWordmess = document.querySelector(".passwordMessage");



    var sumInfo = document.getElementById('sumUpInfo');
    sumInfo.addEventListener('click', displaySummary);
    var userInfo = document.getElementById('submitInfo');
    userInfo.addEventListener('click', displayInfo);


    function fieldHasAttribute(name){
        var form =  document.getElementById(name);
        for(i = 0; i < form.length ; i++){
            if(form[i].hasAttribute("required") && form[i].value === '')
                return false; //if it returns true, then fields with required are filled
        }
        return true;
    }


});




