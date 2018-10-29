$(document).ready(function() {
    function signup() {

    }

    function login() {
        alert("cliclked");
    }
    
    
    $("#symbols").click(function() {
        let stock = document.getElementById('stock').value;
        $.ajax({
            url: 'https://api.iextrading.com/1.0/stock/' + stock + '/book',
            dataType: 'JSON',
            method: 'GET',
            crossDomain: true,
            data: {

            },
            success: function (res) {
                console.log(res);
                console.log(res.quote.calculationPrice);
                console.log(res.quote.companyName);
                document.getElementById('output').value= res.quote.companyName + " " + res.quote.calculationPrice;
            },
            error: function() {
                console.log("you done goofed");
                console.log(stock);
            }
            
        });
    });

    
    function buy() {

    }

    function sell() {

    }

});