let lateststock;
let lateprice;

$(document).ready(function() {
    console.log(localStorage.userName);
        console.log(localStorage.password);
    $('#loginButton').click(function () {
        let userName = localStorage.userName;
        let password = localStorage.password;
        let loginEmail = $('#loginEmail').val();
        let loginPass =  $('#loginPass').val();
        if (userName == loginEmail && password == loginPass) {
            window.location = 'trade.html';
        } else {
            alert('Login attempt failed, you shall not pass!');
        }
        return false;
    });

    $('#signupButton').click(function () {
        localStorage.userName = $('#signupEmail').val();
        localStorage.password = $('#signupPass').val();
        console.log(localStorage.userName);
        console.log(localStorage.password);
        window.location = 'login.html';
        return false;
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
                lateststock = res.companyName;
                lateprice = res.latestPrice;
                document.getElementById('output').value= res.companyName + "\n" + res.sector + "\n" + res.latestPrice;
            },
            error: function() {
                console.log("you done goofed");
                console.log(stock);
            }
            
        });
    });

    
    function test() {

    }


});