function validEmail(email) {

    if (typeof email !== "string") {
        return "Invalid";
    }

    if (email.includes(" ")) {
        return false;
    }

    const firstChar = email.charAt(0);
    if (".-_+@".includes(firstChar)) {
        return false;
    }

    const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {
        return false;
    }
    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}

console.log(validEmail("test@example.com"));     
console.log(validEmail(" test@example.com"));     
console.log(validEmail("test@ex ample.com"));     
console.log(validEmail("test@example.org"));    
console.log(validEmail("@test@example.com"));    
console.log(validEmail("test@@example.com"));   
console.log(validEmail(12345));                  
