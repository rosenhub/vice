function updateDisplay() {
    document.getElementById("totalMoney").innerHTML = score;
    document.getElementById("totalHealth").innerHTML = health;
}
function updateBuySellDisplay() {
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("walletSize").innerHTML = "Van Can Hold: " + maxQuantityUsed + "/" + wallet;
}
function updateBankDisplay() {
    document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalq);
    document.getElementById("totalDebt").innerHTML = debt;
    document.getElementById("totalSavings").innerHTML = savings;
    document.getElementById("interestBox").innerHTML = interest;
}
function updateTravelDisplay() {
    document.getElementById("dateArea").innerHTML = "day " + day + "/32";
}
function endGame() {
    document.getElementById("finalPop").style.left = "309px";
    document.getElementById("finalPop").style.visibility = "visible";
    document.getElementById("travelID").style.visibility = "hidden";
    document.getElementById("bankID").style.visibility = "hidden";
    document.getElementById("endGameBox").style.visibility = "hidden";
    document.getElementById("travelID").style.left = "0px";
    document.getElementById("bankID").style.left = "0px";
    document.getElementById("endGameBox").style.left = "0px";
    slideanim = new Tween(document.getElementById('finalPop').style, 'height', Tween.regularEaseOut, 100, 200, .25, 'px');
    slideanim2 = new Tween(document.getElementById('finalPop').style, 'top', Tween.regularEaseOut, 83, 30, .25, 'px');
    slideanim.start();
    slideanim2.start();
    slideanim.onMotionFinished = function() {
        document.getElementById("finalPopContent").style.visibility = "visible";
        document.getElementById("finalScoreBox").innerHTML = (score + savings) - debt;
        temp = (score + savings) - debt;
        if (temp < 99999) {
            document.getElementById("rankBox").innerHTML = rankArray[0][Math.ceil(Math.random() * 3)];
        } else if (temp >= 99999 && temp < 499999) {
            document.getElementById("rankBox").innerHTML = rankArray[1][Math.ceil(Math.random() * 3)];
        } else if (temp >= 499999) {
            document.getElementById("rankBox").innerHTML = rankArray[2][Math.ceil(Math.random() * 3)];
        }
    }
}
function onLoadDoThis() {
    document.getElementById("travelID").style.visibility = "hidden";
    document.getElementById("bankID").style.visibility = "hidden";
    document.getElementById("endGameBox").style.visibility = "hidden";
    document.getElementById("travelID").style.left = "0px";
    document.getElementById("bankID").style.left = "0px";
    document.getElementById("endGameBox").style.left = "0px";
    document.getElementById("gamemenu").style.visibility = "visible";
    document.getElementById("tabmarket").style.visibility = "visible";
    document.getElementById("tabmarketon").style.visibility = "hidden";
    document.getElementById("tabtravel").style.visibility = "visible";
    document.getElementById("tabtravelon").style.visibility = "hidden";
    document.getElementById("tabbank").style.visibility = "visible";
    document.getElementById("tabbankon").style.visibility = "hidden";
    document.getElementById("totalMoney").innerHTML = score;
    document.getElementById("totalHealth").innerHTML = health;
    document.getElementById('content').style.left = "8px";
}
function updateDisplay() {
    document.getElementById("totalMoney").innerHTML = score;
    document.getElementById("totalHealth").innerHTML = health;
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalq);
    document.getElementById("totalDebt").innerHTML = debt;
    document.getElementById("totalSavings").innerHTML = savings;
    document.getElementById("dateArea").innerHTML = "day " + day + "/32";
    document.getElementById("interestBox").innerHTML = interest;
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function loadmainmenu() {
    document.getElementById("travelID").style.visibility = "hidden";
    document.getElementById("bankID").style.visibility = "hidden";
    document.getElementById("endGameBox").style.visibility = "hidden";
    document.getElementById("finalPop").style.visibility = "hidden";
    document.getElementById("finalPopContent").style.visibility = "hidden";
    document.getElementById("travelID").style.left = "0px";
    document.getElementById("bankID").style.left = "0px";
    document.getElementById("endGameBox").style.left = "0px";
    document.getElementById("finalPop").style.left = "0px";
    closebuysell(false);
    buysell = "buy";
    section = "none";
    drugAlert = 2;
    tookLoan = 0;
    day = 1;
    score = 0;
    health = 100;
    ptotalmoney = 0;
    ptotalq = 0;
    debtinterest;
    savings = 0;
    randomDrugs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    portfolio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    drug0 = ["none", 0, 0];
    drug1 = ["none", 0, 0];
    drug2 = ["none", 0, 0];
    drug3 = ["none", 0, 0];
    drug4 = ["none", 0, 0];
    drug5 = ["none", 0, 0];
    drug6 = ["none", 0, 0];
    drug7 = ["none", 0, 0];
    loadUpMarket();
    updateDisplay();
    marketEvent();
    document.getElementById("gamemenu").style.visibility = "visible";
    document.getElementById("content").style.visibility = "hidden";
    document.getElementById("tabmarket").style.visibility = "visible";
    document.getElementById("tabmarketon").style.visibility = "hidden";
    document.getElementById("tabtravel").style.visibility = "visible";
    document.getElementById("tabtravelon").style.visibility = "hidden";
    document.getElementById("tabbank").style.visibility = "visible";
    document.getElementById("tabbankon").style.visibility = "hidden";
    document.getElementById('content').style.left = "8px";
}
function startGame(money, interest) {
    loadUpMarket();
    section = "market";
    debtinterest = interest;
    score = money;
    debt = money + 1500;
    setInterest();
    updateDisplay();
    document.getElementById("gamemenu").style.visibility = "hidden";
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("tabmarket").style.visibility = "hidden";
    document.getElementById("tabmarketon").style.visibility = "visible";
    document.getElementById("tabtravel").style.visibility = "visible";
    document.getElementById("tabtravelon").style.visibility = "hidden";
    document.getElementById("tabbank").style.visibility = "visible";
    document.getElementById("tabbankon").style.visibility = "hidden";
}
function marketEvent() {
    if (drugAlert == 2) {
        document.getElementById("alertBox").style.visibility = "visible";
        document.getElementById("alertText").innerHTML = drugAlertArray[2];
        return;
    }
    if (factorProbability() < frequency) {
        temp = drugEvent(factorProbability());
        for (i = 0; i < 8; i++) {
            if (randomDrugs[i] == temp) {
                specialDrug = druglist[temp][0];
                specialPriceLow = druglist[temp][1];
                specialPriceHigh = druglist[temp][2];
                document.getElementById("alertBox").style.visibility = "visible";
                document.getElementById("alertText").innerHTML = specialDrug + drugAlertArray[drugAlert];
                if (drugAlert == 0) {
                    specialPriceLow = specialPriceLow * 5;
                    specialPriceHigh = specialPriceHigh * 5;
                } else if (drugAlert == 1) {
                    specialPriceLow = specialPriceLow / 10;
                    specialPriceHigh = specialPriceHigh / 10;
                }
                window["drug" + i][1] = randomNumber(specialPriceLow, specialPriceHigh);
                document.getElementById("slot" + i).innerHTML = window["drug" + i][0] + " ($" + window["drug" + i][1] + ")";
                return;
            }
        }
    }
}
function factorProbability() {
    return (Math.random() * 99);
}
function drugEvent(ranNum) {
    if (ranNum < 8) {
        drugAlert = 1;
        return (7);
    } else if (ranNum >= 8 && ranNum < 15) {
        drugAlert = 0;
        return (9);
    } else if (ranNum >= 15 && ranNum < 32) {
        drugAlert = 1;
        return (4);
    } else if (ranNum >= 32 && ranNum < 53) {
        drugAlert = 1;
        return (6);
    } else if (ranNum >= 53 && ranNum < 63) {
        drugAlert = 0;
        return (8);
    } else if (ranNum >= 63 && ranNum < 76) {
        drugAlert = 0;
        return (5);
    } else if (ranNum >= 76 && ranNum < 89) {
        drugAlert = 0;
        return (1);
    } else if (ranNum >= 89) {
        drugAlert = 1;
        return (0);
    }
}
function loadUpMarket() {
    randomDrugs = shuffle(randomDrugs);
    for (i = 0; i < 8; i++) {
        window["drug" + i][0] = druglist[randomDrugs[i]][0];
        window["drug" + i][1] = randomNumber(druglist[randomDrugs[i]][1], druglist[randomDrugs[i]][2]);
        window["drug" + i][2] = randomQuantity(druglist[randomDrugs[i]][3]);
        document.getElementById("slot" + i).innerHTML = window["drug" + i][0] + " ($" + window["drug" + i][1] + ")";
        document.getElementById("q" + i).innerHTML = window["drug" + i][2];
        document.getElementById("p" + i).innerHTML = portfolio[randomDrugs[i]];
    }
    marketEvent();
}
function clearMarket() {
    drug0 = ["none", 0, 0];
    drug1 = ["none", 0, 0];
    drug2 = ["none", 0, 0];
    drug3 = ["none", 0, 0];
    drug4 = ["none", 0, 0];
    drug5 = ["none", 0, 0];
    drug6 = ["none", 0, 0];
    drug7 = ["none", 0, 0];
}
function newDay(templocation) {
    tookLoan = 0;
    vlocation = templocation;
    day++;
    debt = debt + Math.ceil(debt * debtinterest);
    savings = savings + Math.ceil(savings * (interest / 100));
    clearMarket();
    changeInterest();
    updateDisplay();
    updateTravelDisplay();
    document.getElementById("alertBox").style.visibility = "visible";
    document.getElementById("alertBox").style.left = "309px";
    if (factorProbability() < (frequency + 5)) {
        temp = travEvent(factorProbability());
        switch (temp) {
        case 1:
            document.getElementById("alertBox").style.visibility = "hidden";
            document.getElementById("claimGame").style.visibility = "visible";
            document.getElementById("claimGame").style.left = "309px";
            if (gun == false) {
                document.getElementById("alertText3").innerHTML = "Insurance claim is being disputed. You have no contract, will you mitigate or settle the claim?";
            } else {
                document.getElementById("alertText3").innerHTML = "The Adjuster is getting Involved to hold money back! You have proof it was from a flood and covered, will you mitigate or try to settle?";
            }
            break;
        case 2:
            drugofchoice = Math.floor(Math.random() * 9);
            quantityofchoice = Math.floor(Math.random() * 4) + 1;
            tempquant = addPortfolio();
            if (tempquant == wallet) {
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
            } else if (tempquant + quantityofchoice > wallet) {
                quantityofchoice = (wallet - tempquant);
                portfolio[drugofchoice] += quantityofchoice;
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". You find drugs on a homeless guy.<br/><br/>You got " + quantityofchoice + " units of " + druglist[drugofchoice][0];
            } else {
                portfolio[drugofchoice] += quantityofchoice;
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". You find drugs on a homeless guy.<br/><br/>You got " + quantityofchoice + " units of " + druglist[drugofchoice][0];
            }
            break;
        case 3:
            drugofchoice = Math.floor(Math.random() * 9);
            quantityofchoice = Math.floor(Math.random() * 6) + 3;
            tempquant = addPortfolio();
            if (tempquant == wallet) {
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
            } else if (tempquant + quantityofchoice > wallet) {
                quantityofchoice = (wallet - tempquant);
                portfolio[drugofchoice] += quantityofchoice;
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". A friend gave you some extra stuff.<br/><br/>You got " + quantityofchoice + " units of " + druglist[drugofchoice][0];
            } else {
                portfolio[drugofchoice] += quantityofchoice;
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". A friend gave you some extra stuff.<br/><br/>You got " + quantityofchoice + " units of " + druglist[drugofchoice][0];
            }
            break;
        case 4:
            if (gun == false) {
                guncost = Math.floor(Math.random() * 400) + 400;
                if (score > guncost) {
                    document.getElementById("alertBox").style.visibility = "hidden";
                    document.getElementById("blackMarket").style.visibility = "visible";
                    document.getElementById("blackMarket").style.left = "309px";
                    document.getElementById("alertText2").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". Would you like to purchase a gun for $" + guncost + "?";
                    drugAlert = 8;
                } else {
                    document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
                }
            } else {
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
            }
            break;
        case 5:
            temp = score;
            score = score - Math.floor(score * Math.random());
            loss = temp - score;
            document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". You got mugged on the subway.<br/><br/>You lost $" + loss + ".";
            break;
        case 6:
            pwallet = Math.ceil(wallet * .5);
            if (score > 300) {
                document.getElementById("alertBox").style.visibility = "hidden";
                document.getElementById("blackMarket").style.visibility = "visible";
                document.getElementById("blackMarket").style.left = "309px";
                document.getElementById("alertText2").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". Your coat only has " + wallet + " pockets. Tailor Your Jacket for " + pwallet + " more pockets? ($300)";
                drugAlert = 9;
            } else {
                document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
            }
            break;
        }
    } else {
        document.getElementById("alertText").innerHTML = "Welcome to " + vlocation + ". Today is day " + day + ". " + drugAlertArray[Math.ceil(Math.random() * 5) + 3];
    }
}
function travEvent(ranNum) {
    if (ranNum < 5.6) {
        return (1);
    } else if (ranNum >= 5.6 && ranNum < 16.7) {
        return (2);
    } else if (ranNum >= 16.7 && ranNum < 22.3) {
        return (3);
    } else if (ranNum >= 22.3 && ranNum < 39) {
        return (4);
    } else if (ranNum >= 39 && ranNum < 55.7) {
        return (5);
    } else if (ranNum >= 55.7) {
        return (6);
    }
}
function closeTravelPop() {
    document.getElementById("alertBox").style.visibility = "hidden";
    document.getElementById("alertBox").style.left = "5px";
    loadUpMarket();
    updateDisplay();
    section = "market";
    document.getElementById("tabmarket").style.visibility = "hidden";
    document.getElementById("tabmarketon").style.visibility = "visible";
    document.getElementById("tabtravel").style.visibility = "visible";
    document.getElementById("tabtravelon").style.visibility = "hidden";
    document.getElementById("tabbank").style.visibility = "visible";
    document.getElementById("tabbankon").style.visibility = "hidden";
    slideanim = new Tween(document.getElementById('content').style, 'left', Tween.regularEaseOut, parseFloat(document.getElementById('content').style.left), 8, .25, 'px');
    slideanim.start();
    slideanim.onMotionFinished = function() {
        document.getElementById("travelID").style.visibility = "hidden";
        document.getElementById("bankID").style.visibility = "hidden";
        document.getElementById("travelID").style.left = "0px";
        document.getElementById("bankID").style.left = "0px";
        document.getElementById("endGameBox").style.visibility = "hidden";
        document.getElementById("endGameBox").style.left = "0px";
        document.getElementById("bankID").style.visibility = "hidden";
        document.getElementById("bankID").style.left = "0px";
        document.getElementById("finalPop").style.visibility = "hidden";
        document.getElementById("finalPopContent").style.visibility = "hidden";
        document.getElementById("finalPop").style.left = "0px";
    }
}
function closeblackMarket(method) {
    if (drugAlert == 9) {
        if (method == true) {
            score -= 300;
            wallet += Math.ceil(wallet * .5);
        }
    } else if (drugAlert == 8) {
        if (method == true) {
            score -= guncost;
            gun = true;
        }
    }
    document.getElementById("blackMarket").style.visibility = "hidden";
    document.getElementById("blackMarket").style.left = "5px";
    document.getElementById("alertBox").style.left = "5px";
    loadUpMarket();
    updateDisplay();
    section = "market";
    document.getElementById("tabmarket").style.visibility = "hidden";
    document.getElementById("tabmarketon").style.visibility = "visible";
    document.getElementById("tabtravel").style.visibility = "visible";
    document.getElementById("tabtravelon").style.visibility = "hidden";
    document.getElementById("tabbank").style.visibility = "visible";
    document.getElementById("tabbankon").style.visibility = "hidden";
    slideanim = new Tween(document.getElementById('content').style, 'left', Tween.regularEaseOut, parseFloat(document.getElementById('content').style.left), 8, .25, 'px');
    slideanim.start();
    slideanim.onMotionFinished = function() {
        document.getElementById("travelID").style.visibility = "hidden";
        document.getElementById("bankID").style.visibility = "hidden";
        document.getElementById("travelID").style.left = "0px";
        document.getElementById("bankID").style.left = "0px";
    }
}
function closeclaimGame(method) {
    if (method == false) {
        temp = Math.random() * 99;
        if (temp < 60) {
            document.getElementById("claimGame").style.visibility = "hidden";
            document.getElementById("claimGame").style.left = "5px";
            document.getElementById("alertText").innerHTML = "You mitigate the claim! You get paid...";
            document.getElementById("alertBox").style.visibility = "visible";
            return;
        } else {
            temp = Math.ceil(Math.random() * 15);
            if (temp <= 10) {
                document.getElementById("alertText3").innerHTML = "The adjuster is too good. You won't get paid from that job!<br/><br/>You were sued by AllRate Insurance! You lost " + temp + "% of your reputation.";
                health -= temp;
                if (health <= 0) {
                    health = 0;
                    alert("You were killed. Game Over");
                    document.getElementById("copFight").style.visibility = "hidden";
                    document.getElementById("copFight").style.left = "5px";
                    loadmainmenu();
                }
                updateDisplay();
            } else {
                document.getElementById("alertText3").innerHTML = "The adjuster was too good. You couldn't settle or mitigate or anything!";
            }
            return;
        }
    } else if (method == true) {
        temp = Math.random() * 99;
        if (gun == true) {
            copprob = 40;
        } else if (gun == false) {
            copprob = 10;
        }
        if (temp <= copprob) {
            tempcops = Math.ceil(Math.random() * 3);
            tempcash = tempcops * Math.ceil(Math.random() * 750);
            document.getElementById("claimGame").style.visibility = "hidden";
            document.getElementById("claimGame").style.left = "5px";
            document.getElementById("alertText").innerHTML = "You schooled " + tempcops + " adjusters(s). You made $" + tempcash + "!";
            document.getElementById("alertBox").style.visibility = "visible";
            score += tempcash;
            return;
        } else {
            temp = Math.ceil(Math.random() * 15);
            if (temp <= 10) {
                document.getElementById("alertText3").innerHTML = "The client freaked and wants to settle!<br/><br/>You couldn't take them out of it! You lost " + temp + "% of your reputation.";
                health -= temp;
                if (health <= 0) {
                    health = 0;
                    alert("You were banned for life. Game Over");
                    document.getElementById("claimGame").style.visibility = "hidden";
                    document.getElementById("claimGame").style.left = "5px";
                    loadmainmenu();
                }
                updateDisplay();
            } else {
                document.getElementById("alertText3").innerHTML = "The adjuster is holding up the claim. You can't get paid!";
            }
            return;
        }
    }
}
function setInterest() {
    interest = (Math.ceil(Math.random() * 45) / 10) + 2.5;
}
function changeInterest() {
    interest = Math.ceil((interest * 10) + (Math.random() * 10) - 5) / 10;
    if (interest > 7) {
        interest = 7;
    } else if (interest < 2.5) {
        interest = 2.5;
    }
}
function setScore(money) {
    return (score - money);
    document.getElementById("totalMoney").innerHTML = score;
}
function randomQuantity(mult) {
    return ((Math.ceil(Math.random() * maxRandomQuantity) * mult) + maxRandomQuantity);
}
function shuffle(array) {
    var clone = array;
    for (var i = 0; i < clone.length; i++) {
        var j = i;
        while (j == i) {
            j = Math.floor(Math.random() * clone.length);
        }
        var contents = clone[i];
        clone[i] = clone[j];
        clone[j] = contents;
    }
    return clone;
}
function randomNumber(low, high) {
    return (Math.ceil(Math.random() * (high - low)) + low);
}
function marketclick() {
    if (section != "market") {
        if (section == "none") {
            return;
        }
        section = "market";
        endBank();
        document.getElementById("tabmarket").style.visibility = "hidden";
        document.getElementById("tabmarketon").style.visibility = "visible";
        document.getElementById("tabtravel").style.visibility = "visible";
        document.getElementById("tabtravelon").style.visibility = "hidden";
        document.getElementById("tabbank").style.visibility = "visible";
        document.getElementById("tabbankon").style.visibility = "hidden";
        slideanim = new Tween(document.getElementById('content').style, 'left', Tween.regularEaseOut, parseFloat(document.getElementById('content').style.left), 8, .25, 'px');
        slideanim.start();
        slideanim.onMotionFinished = function() {
            document.getElementById("travelID").style.visibility = "hidden";
            document.getElementById("bankID").style.visibility = "hidden";
            document.getElementById("travelID").style.left = "0px";
            document.getElementById("bankID").style.left = "0px";
            document.getElementById("endGameBox").style.visibility = "hidden";
            document.getElementById("endGameBox").style.left = "0px";
            document.getElementById("bankID").style.visibility = "hidden";
            document.getElementById("bankID").style.left = "0px";
            document.getElementById("finalPop").style.visibility = "hidden";
            document.getElementById("finalPopContent").style.visibility = "hidden";
            document.getElementById("finalPop").style.left = "0px";
        }
    }
}
function travelclick() {
    if (section != "travel") {
        if (section == "none") {
            return;
        }
        section = "travel";
        endBank();
        endMarket();
        document.getElementById("tabtravel").style.visibility = "hidden";
        document.getElementById("tabtravelon").style.visibility = "visible";
        document.getElementById("tabmarket").style.visibility = "visible";
        document.getElementById("tabmarketon").style.visibility = "hidden";
        document.getElementById("tabbank").style.visibility = "visible";
        document.getElementById("tabbankon").style.visibility = "hidden";
        if (day < 32) {
            updateTravelDisplay();
            document.getElementById("travelID").style.left = "304px";
            document.getElementById("travelID").style.visibility = "visible";
        } else {
            document.getElementById("endGameBox").style.left = "309px";
            document.getElementById("endGameBox").style.visibility = "visible";
        }
        slideanim = new Tween(document.getElementById('content').style, 'left', Tween.regularEaseOut, parseFloat(document.getElementById('content').style.left), -296, .25, 'px');
        slideanim.start();
        slideanim.onMotionFinished = function() {
            document.getElementById("bankID").style.visibility = "hidden";
            document.getElementById("bankID").style.left = "0px";
        }
    }
}
function bankclick() {
    if (section != "bank") {
        if (section == "none") {
            return;
        }
        section = "bank";
        endMarket();
        document.getElementById("tabbank").style.visibility = "hidden";
        document.getElementById("tabbankon").style.visibility = "visible";
        document.getElementById("tabmarket").style.visibility = "visible";
        document.getElementById("tabmarketon").style.visibility = "hidden";
        document.getElementById("tabtravel").style.visibility = "visible";
        document.getElementById("tabtravelon").style.visibility = "hidden";
        document.getElementById("endGameBox").style.left = "309px";
        if (day < 32) {
            document.getElementById("travelID").style.left = "304px";
            document.getElementById("travelID").style.visibility = "visible";
        } else {
            document.getElementById("endGameBox").style.left = "309px";
            document.getElementById("endGameBox").style.visibility = "visible";
        }
        updateBankDisplay();
        document.getElementById("bankID").style.left = "608px";
        document.getElementById("bankID").style.visibility = "visible";
        slideanim = new Tween(document.getElementById('content').style, 'left', Tween.regularEaseOut, parseFloat(document.getElementById('content').style.left), -600, .25, 'px');
        slideanim.start();
    }
}
function pushbuyoff() {
    buysell = "buy";
    minQuantity();
    document.getElementById("buybutton").style.visibility = "visible";
    document.getElementById("buybuttonoff").style.visibility = "hidden";
    document.getElementById("sellbutton").style.visibility = "hidden";
    document.getElementById("sellbuttonoff").style.visibility = "visible";
}
function pushselloff() {
    buysell = "sell";
    minQuantity();
    document.getElementById("buybutton").style.visibility = "hidden";
    document.getElementById("buybuttonoff").style.visibility = "visible";
    document.getElementById("sellbutton").style.visibility = "visible";
    document.getElementById("sellbuttonoff").style.visibility = "hidden";
}
function openbuysell(slot) {
    updateBuySellDisplay();
    activedrug = slot;
    temp = wallet - addPortfolio();
    maxQuantityUsed = addPortfolio();
    maxbuy = Math.floor(score / window["drug" + slot][1]);
    if (maxbuy > window["drug" + slot][2]) {
        maxbuy = window["drug" + slot][2];
    }
    if (maxbuy > temp) {
        maxbuy = temp;
    }
    maxsell = portfolio[randomDrugs[slot]];
    buysell = "buy";
    document.getElementById("buysellpop").style.visibility = "visible";
    document.getElementById("buybutton").style.visibility = "visible";
    document.getElementById("sellbuttonoff").style.visibility = "visible";
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function closebuysell(method) {
    if (method == true) {
        if (buysell == "buy") {
            score = score - ptotalmoney;
            portfolio[randomDrugs[activedrug]] = portfolio[randomDrugs[activedrug]] + ptotalq;
            window["drug" + activedrug][2] = window["drug" + activedrug][2] - ptotalq;
        } else if (buysell == "sell") {
            score = score + ptotalmoney;
            portfolio[randomDrugs[activedrug]] = portfolio[randomDrugs[activedrug]] - ptotalq;
            window["drug" + activedrug][2] = window["drug" + activedrug][2] + ptotalq;
        }
        minQuantity();
        maxbuy = 0;
        maxsell = 0;
        buysell = "buy";
        document.getElementById("totalMoney").innerHTML = score;
        document.getElementById("p" + activedrug).innerHTML = portfolio[randomDrugs[activedrug]];
        document.getElementById("q" + activedrug).innerHTML = window["drug" + activedrug][2];
        document.getElementById("buysellpop").style.visibility = "hidden";
        document.getElementById("buybutton").style.visibility = "hidden";
        document.getElementById("buybuttonoff").style.visibility = "hidden";
        document.getElementById("sellbutton").style.visibility = "hidden";
        document.getElementById("sellbuttonoff").style.visibility = "hidden";
    } else if (method == false) {
        minQuantity();
        maxbuy = 0;
        maxsell = 0;
        buysell = "buy";
        document.getElementById("buysellpop").style.visibility = "hidden";
        document.getElementById("buybutton").style.visibility = "hidden";
        document.getElementById("buybuttonoff").style.visibility = "hidden";
        document.getElementById("sellbutton").style.visibility = "hidden";
        document.getElementById("sellbuttonoff").style.visibility = "hidden";
    }
}
function upQuantity() {
    ptotalq++;
    if (buysell == "buy") {
        if (ptotalq > maxbuy) {
            ptotalq = maxbuy;
        }
        maxQuantityUsed = addPortfolio() + ptotalq;
    } else if (buysell == "sell") {
        if (ptotalq > maxsell) {
            ptotalq = maxsell;
        }
        maxQuantityUsed = addPortfolio() - ptotalq;
    }
    ptotalmoney = ptotalq * (window["drug" + activedrug][1]);
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function downQuantity() {
    ptotalq--;
    if (ptotalq < 0) {
        ptotalq = 0;
    }
    maxQuantityUsed = addPortfolio() + ptotalq;
    ptotalmoney = ptotalq * (window["drug" + activedrug][1]);
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function maxQuantity() {
    if (buysell == "buy") {
        ptotalq = maxbuy;
        maxQuantityUsed = addPortfolio() + ptotalq;
    } else if (buysell == "sell") {
        ptotalq = maxsell;
        maxQuantityUsed = addPortfolio() - ptotalq;
    }
    ptotalmoney = ptotalq * (window["drug" + activedrug][1]);
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function minQuantity() {
    ptotalq = 0;
    ptotalmoney = 0;
    maxQuantityUsed = addPortfolio() + ptotalq;
    document.getElementById("buyselltotal").innerHTML = ptotalmoney;
    document.getElementById("buysellquantity").innerHTML = ptotalq;
    document.getElementById("walletSize").innerHTML = "Max Quantity: " + maxQuantityUsed + "/" + wallet;
}
function setIncAmmt(ammt) {
    switch (ammt) {
    case 10:
        temp = "164px";
        break;
    case 100:
        temp = "142px";
        break;
    case 1000:
        temp = "120px";
        break;
    case 10000:
        temp = "98px";
        break;
    }
    incrementammt = ammt;
    document.getElementById("arrowIndicator").style.left = temp;
    return;
}
function bankdec() {
    if (document.getElementById('bankID').style.top == "-204px") {
        if (buysell != "buy") {
            ptotalmoney -= incrementammt;
            if (ptotalmoney < 0) {
                ptotalmoney = 0;
            }
            document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalmoney);
            document.getElementById("totalDebt").innerHTML = debt;
            document.getElementById("totalSavings").innerHTML = savings;
        }
    }
}
function bankinc() {
    if (document.getElementById('bankID').style.top == "-204px") {
        if (buysell != "buy") {
            ptotalmoney += incrementammt;
            if (ptotalmoney > maxbuy) {
                ptotalmoney = maxbuy;
            }
            document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalmoney);
            document.getElementById("totalDebt").innerHTML = debt;
            document.getElementById("totalSavings").innerHTML = savings;
        }
    }
}
function bankmax() {
    if (document.getElementById('bankID').style.top == "-204px") {
        ptotalmoney = maxbuy;
        document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalmoney);
        document.getElementById("totalDebt").innerHTML = debt;
        document.getElementById("totalSavings").innerHTML = savings;
    }
}
function bankmin() {
    if (document.getElementById('bankID').style.top == "-204px") {
        ptotalmoney = 0;
        document.getElementById("bankingArea").innerHTML = adjustZeros(ptotalmoney);
        document.getElementById("totalDebt").innerHTML = debt;
        document.getElementById("totalSavings").innerHTML = savings;
    }
}
function adjustZeros(numero) {
    if (numero == 0) {
        return ("00000");
    } else if (numero <= 99) {
        return ("000" + numero);
    } else if (numero <= 999) {
        return ("00" + numero);
    } else if (numero <= 9999) {
        return ("0" + numero);
    } else if (numero <= 99999) {
        return (numero);
    }
}
function slideup(verb) {
    switch (verb) {
    case "payback":
        if (score < debt) {
            maxbuy = score;
        } else if (score > debt) {
            maxbuy = debt;
        }
        if (maxbuy > 99999) {
            maxbuy = 99999;
        }
        break;
    case "loan":
        if (tookLoan >= 10000) {
            return;
        }
        maxbuy = 10000 - tookLoan;
        break;
    case "deposit":
        if (score > 99999) {
            maxbuy = 99999;
        } else if (score < 99999) {
            maxbuy = score;
        }
        break;
    case "withdraw":
        if (savings > 99999) {
            maxbuy = 99999;
        } else if (savings < 99999) {
            maxbuy = savings;
        }
        break;
    }
    document.getElementById('bankbottom').style.opacity = "1";
    buysell = verb;
    slideanim = new Tween(document.getElementById('bankID').style, 'top', Tween.regularEaseOut, 0, -204, .25, 'px');
    slideanim.start();
}
function slidedown(verb) {
    if (document.getElementById('bankID').style.top == "-204px") {
        document.getElementById('bankbottom').style.opacity = ".5";
        if (verb == true) {
            switch (buysell) {
            case "payback":
                score = score - ptotalmoney;
                debt = debt - ptotalmoney;
                break;
            case "loan":
                score = score + ptotalmoney;
                debt = debt + ptotalmoney + (Math.ceil(ptotalmoney * .1))
                tookLoan += ptotalmoney;
                break;
            case "deposit":
                savings = savings + ptotalmoney;
                score = score - ptotalmoney;
                break;
            case "withdraw":
                score = score + ptotalmoney;
                savings = savings - ptotalmoney;
                break;
            }
        }
        buysell = "buy";
        ptotalmoney = 0;
        updateDisplay();
        slideanim = new Tween(document.getElementById('bankID').style, 'top', Tween.regularEaseOut, -204, 0, .25, 'px');
        slideanim.start();
    }
}
function endBank() {
    buysell = "buy";
    ptotalmoney = 0;
    updateDisplay();
    document.getElementById('bankID').style.top = "0px";
    return;
}
function endMarket() {
    ptotalq = 0;
    ptotalmoney = 0;
    maxbuy = 0;
    maxsell = 0;
    buysell = "buy";
    document.getElementById("buysellpop").style.visibility = "hidden";
    document.getElementById("buybutton").style.visibility = "hidden";
    document.getElementById("buybuttonoff").style.visibility = "hidden";
    document.getElementById("sellbutton").style.visibility = "hidden";
    document.getElementById("sellbuttonoff").style.visibility = "hidden";
}
function closeAlert() {
    if (document.getElementById("alertBox").style.left == "309px") {
        closeTravelPop();
        return;
    }
    document.getElementById("alertBox").style.visibility = "hidden";
    drugAlert = 9;
}
function addPortfolio() {
    sum = 0;
    for (i = 0; i < 10; i++) {
        sum += portfolio[i];
    }
    return (sum);
}
function submitScore() {
    document.highscore.winscore.value = (score + savings) - debt;
    document.highscore.submit();
    loadmainmenu();
}
function viewScore() {
    document.viewhighscore.submit();
    loadmainmenu();
}
function openHelp() {
    document.getElementById("Helpdiv").style.visibility = "visible";
    slideanim = new Tween(document.getElementById('Helpdiv').style, 'top', Tween.regularEaseOut, -400, 8, .25, 'px');
    slideanim.start();
}
function closeHelp() {
    slideanim = new Tween(document.getElementById('Helpdiv').style, 'top', Tween.regularEaseOut, 8, -400, .25, 'px');
    slideanim.start();
    slideanim.onMotionFinished = function() {
        document.getElementById("Helpdiv").style.visibility = "hidden";
        document.getElementById("Helpdiv").style.top = "8px";
    }
}