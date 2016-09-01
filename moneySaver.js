/**
 * Created by benjaminxerri on 8/1/16.
 */


$(function () {
    console.log("Change fonts, textsize of bottom jumbotron")
    var savings = 0;
    var intSavings;
    //hide add money forms until user enters name and savings
    $("#addMoney").hide();
    $("#addMoneySpent").hide();

    function displayInfo(){

        var fName = document.getElementById("firstName").value;
        var lName = document.getElementById("lastName").value;
        savings = document.getElementById("userSavings").value; //global

        intSavings = parseInt(savings); //savings input string and must be converted to an Int


        var person = {
            name:fName,
            last:lName,
            amnt: intSavings,
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

        var amtToInt = parseInt(amt);

        if(isNaN(amtToInt)){ // prevent string input
            $('#amntSaved').textContent("You must enter a number");
            return;
        }
        amt = amt * 260;
        total += amt;


        if (formID === 'form1') {
            $('#amntSaved').val("You spent " + amt + " yearly.");
            $('#form1').val("");
        }else if (formID === 'form2'){
            $('#moreSavings').text("You spent " + amt + " yearly.");
            $('#form2').val("");
        }
        $('#totalSavings').text("Running total is: " + total);


    });


    $('#addForm').click(function(){  //makes second form show
        $("#addMoney").show();

    });
    
    
    function displaySummary(){
        $('#displaySummary').text(''); //first clear the text to prevent multiple appending of text
        $('#displaySummary').addClass('jumbotron text-lg-center');
        $('#displaySummary').append("You would have saved a total of " + (intSavings + total));

    }

    var userInfo = document.getElementById('submitInfo');
    userInfo.addEventListener('click', displayInfo);

    var sumInfo = document.getElementById('sumUpInfo');
    sumInfo.addEventListener('click', displaySummary);


});



