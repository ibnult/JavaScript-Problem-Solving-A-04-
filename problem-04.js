function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || f1 === null || Array.isArray(f1)) {
        return "Invalid";
    }
    if (typeof f2 !== "object" || f2 === null || Array.isArray(f2)) {
        return "Invalid";
    }

    if (
        !("name" in f1) || !("roll" in f1) || !("bestFriend" in f1) ||
        !("name" in f2) || !("roll" in f2) || !("bestFriend" in f2)
    ) {
        return "Invalid";
    }

    if (typeof f1.bestFriend !== "number" || typeof f1.roll !== "number" ||
        typeof f2.bestFriend !== "number" || typeof f2.roll !== "number") {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}

const friend1 = { name: "Alice", roll: 1, bestFriend: 2 };
const friend2 = { name: "Bob", roll: 2, bestFriend: 1 };

console.log(isBestFriend(friend1, friend2)); 
