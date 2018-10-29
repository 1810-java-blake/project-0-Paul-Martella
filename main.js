$(document).ready(function() {
    function signup() {

    }

    function login() {
        alert("cliclked");
    }

    $("#symbols").click(function() {
        $.ajax({
            url: 'https://api.iextrading.com/1.0/stock/aapl/book',
            dataType: 'JSON',
            method: 'GET',
            crossDomain: true,
            data: {

            },
            success: function (res) {
                console.log(res);
            },
            error: function() {
                console.log("you done goofed");
            }
            
        });
    });

    
    function buy() {

    }

    function sell() {

    }

});