function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    return money * 1.75 / 100;
}

const result = cashOut(1000);
console.log(result); 
