//
$(document).ready(function () {
    console.log("jQuery is alive");
    //
    $("#total-button").click(function () {

        //
        // values into jS = string
        var userValue = $("#expense").val();

        //
        console.log(userValue.charAt());
        
        if (userValue.charAt(0) == "") {
            
            $("#results").html("Please enter a valid number.");
            
            return;

        }

        //
        userValue = parseFloat(userValue);
        
        //
        var californiaRate = .0725;
        
        //
        var taxAmount = userValue * californiaRate;

        //
        taxAmount = taxAmount.toFixed(2);

        //
        var sentence = "The CA Sales Tax for a purchase amount of $" + userValue + " is $" + taxAmount + ".";

        //
        $("#results").html(sentence);

        console.log(userValue);
        console.log(californiaRate);
        console.log(taxAmount);
        console.log(sentence);

    });

    setTimeout(function () {
        $("#results").html("");
    }, 3200);

    setTimeout(function () {
        console.clear();
    }, 5600);





});
