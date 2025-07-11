function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];
    }

    let hour = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    let minute = Math.floor(remainingSeconds / 60);
    let second = remainingSeconds % 60;

    return { hour: hour, minute: minute, second: second };
}

const timesArray = [3600, 1800, 45];
const result = calculateWatchTime(timesArray);
console.log(result);
//
