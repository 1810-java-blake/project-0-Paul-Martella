let cash = 100000;

$(document).ready(function() {
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

    $("#setCash").click (function() {
        document.getElementById("usd").innerHTML = "$" + $('#cash').val();
        cash = $('#cash').val();
    });
    
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
                if (sessionStorage.time == "ytdChangePercent") {
                    priceChange = res.ytdChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "year5ChangePercent") {
                    priceChange = res.year5ChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "year2ChangePercent") {
                    priceChange = res.year2ChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "year1ChangePercent") {
                    priceChange = res.year1ChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "month6ChangePercent") {
                    priceChange = res.month6ChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "month3ChangePercent") {
                    priceChange = res.month3ChangePercent;
                    console.log("price change is: " + priceChange);
                } else if (sessionStorage.time == "month1ChangePercent") {
                    priceChange = res.month1ChangePercent;
                    console.log("price change is: " + priceChange);
                } else {
                    priceChange = res.day5PercentChange;
                    console.log("price cahnge is: " + priceChange);
                }
                
                priceCalc = Math.round(priceChange * 100);
                document.getElementById('output').value= "Change over time: %" + priceCalc;
                let newCash = cash * priceCalc
                document.getElementById("usd").innerHTML = newCash;
                
            },
            error: function() {
                console.log("you done goofed");
            }
        });
    });


});