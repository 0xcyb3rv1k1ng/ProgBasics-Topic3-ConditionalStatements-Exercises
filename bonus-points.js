function main(num1) {
    var bonusPoints = 0;
    var totalPoints = 0;
    totalPoints = num1 + bonusPoints;
    if (num1 <= 100) {
        bonusPoints = 5;
    } else if (num1 > 100 && num1 <= 1000) {
        bonusPoints = num1 * 0.20;
    } else if (num1 > 1000) {
        bonusPoints = num1 * 0.10;
    }
    if (num1 % 2 == 0) {
        bonusPoints = bonusPoints + 1;
    } else if (num1 % 10 == 5) {
        bonusPoints = bonusPoints + 2;
    }
    console.log(bonusPoints);
    console.log(bonusPoints + totalPoints);
}
main(20);