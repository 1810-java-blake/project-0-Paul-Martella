$(document).ready(function() {
    function signup() {

    }

    function login() {
        alert("cliclked");
    }
    
    
    $("#symbols").click(function() {
        let stock = document.getElementById('stock').value;
        $.ajax({
            url: 'https://api.iextrading.com/1.0/stock/' + stock + '/quote',
            dataType: 'JSON',
            method: 'GET',
            crossDomain: true,
            data: {

            },
            success: function (res) {
                console.log(res);
                console.log(res.latestPrice);
                console.log(res.companyName);
                document.getElementById('output').value= res.companyName + " " + res.latestPrice;
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