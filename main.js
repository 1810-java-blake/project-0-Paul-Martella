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
        console.log("request fired");
        let stock = document.getElementById('stock').value;
        $.ajax({
            url: 'https://api.iextrading.com/1.0/stock/' + stock + '/quote',
            dataType: 'JSON',
            method: 'GET',
            crossDomain: true,
            success: function (res) {
                lateststock = stock;
                lateprice = res.latestPrice;
                document.getElementById('output').value= "Company name: " + res.companyName + "\n" + "Sector: " + res.sector + "\n" + "Price: $" + res.latestPrice;
            },
            error: function() {
                console.log("you done goofed");
            }
            
        });
    });

    function setCash() {

    }
    
    $("#runTest").click(function() {
        let priceChange;
        console.log("test fired");
        $.ajax({
            url: 'https://api.iextrading.com/1.0/stock/' + lateststock + '/stats',
            dataType: 'JSON',
            method: 'GET',
            crossDomain: true,
            success: function (res) {
                console.log(res.ytdChangePercent);
                if (sessionStorage.time == "ytdChangePercent" )
                priceChange = res.ytdChangePercent;
                console.log("price change is: " + priceChange);
                priceCalc = Math.round(priceChange) * 100;
                document.getElementById('output').value= "Change over time: %" + priceCalc;
            },
            error: function() {
                console.log("you done goofed");
            }
        });
    });


});