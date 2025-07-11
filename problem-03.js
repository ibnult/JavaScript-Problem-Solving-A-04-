function electionResult(votes) {

    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    
    let mangoCount = 0;
    let bananaCount = 0;

    for (let i = 0; i < votes.length; i++) {
        const vote = String(votes[i]).toLowerCase(); 
        
        if (vote === "mango") {
            mangoCount++;
        } else if (vote === "banana") {
            bananaCount++;
        }
    }
  
    if (mangoCount > bananaCount) {
        return "Mango";
    } else if (bananaCount > mangoCount) {
        return "Banana";
    } else {
        return "Draw";
    }
}

const votes = ["Mango", "Banana", "Mango", "banana", "Mango"];
const result = electionResult(votes);
console.log(result); 
