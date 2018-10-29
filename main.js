$(document).ready(function() {
    $('#loginButton').click(function () {
        let userName = localStorage.userName;
        let password = localStorage.password;
        let loginEmail = document.getElementById('loginEmail').value;
        let loginPass =  document.getElementById('loginPass').value;
        if (userName == loginEmail && password == loginPass) {
            window.location.href = 'trade.html';
        } else {
            alert('Login attempt failed, you shall not pass!');
        }
    });

    $('#signupButton').click(function () {
        localStorage.userName = document.getElementById('signupEmail').value;
        localStorage.password = document.getElementById('signupPass').value
        window.location.href = 'login.html';
    });
    
    
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