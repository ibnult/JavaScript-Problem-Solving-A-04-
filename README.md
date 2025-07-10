# 🧠 Assignment 04 – JavaScript Problem Solving

> ⚠️ Follow all rules strictly. Any violation (like global variables, invalid return types, or console logging) will result in a zero.

---

## 🔹 Problem 01: Calculate the Cash-Out Charge

### 📄 Description
Write a function `cashOut()` that calculates a 1.75% cash-out charge based on the input amount.

### 📥 Input
- A **positive number**: the amount to cash out

### 🚀 Output
- Returns the **cash-out charge** as a decimal number (1.75% of the input)
- If input is not a number or not positive, return `"Invalid"`

### 📌 Constraints
- Must use the **function name** `cashOut`
- Must return result, not print

### 🧪 Sample Inputs & Outputs

| Input     | Output     |
|-----------|------------|
| 2000      | 35         |
| 100       | 1.75       |
| -350      | "Invalid"  |
| 0         | 0          |
| "101"     | "Invalid"  |
| "mewauu"  | "Invalid"  |

---

## 🔹 Problem 02: Validate Email

### 📄 Description  
Write a function `validEmail()` that takes a string and checks if it's a valid email.

### 📥 Input  
A string representing an email

### 🚀 Output  
- Return `true` if email is valid, else `false`  
- Return `"Invalid"` if input is not a string

### ✅ Validity Rules  
- Email **must not** start with `.`, `-`, `_`, `+`, or `@`  
- Email **must** contain `@`  
- Email **must not** contain any **spaces**  
- Email **must** end with `.com`

### 📌 Constraints  
- Must return a **boolean** (`true`/`false`)  
- Must only `return` (do not use `console.log()`)

### 🧪 Sample Inputs & Outputs  

| Input                        | Output     |
|------------------------------|------------|
| `"ferdous@gmail.com"`        | `true`     |
| `"-king@yahoo.com"`          | `false`    |
| `["jhankar@hero.com"]`       | `"Invalid"`|
| `"programming-hero.com"`     | `false`    |
| `true`                       | `"Invalid"`|

### 🧾 Function Signature
function validEmail(email) {
// Your code here
}

---

## 🔹 Problem 03: Who Will Win? (🥭 Mango / 🍌 Banana)

### 📄 Description  
Write a function `electionResult()` that takes an array of votes and determines the winner between "mango" and "banana".

### 📥 Input  
An array of strings, where each string represents a vote.  
Example: `["mango", "banana", "Na-Vote", "mango"]`

### 🚀 Output  
- Return `"Mango"` if mango has more votes  
- Return `"Banana"` if banana has more votes  
- Return `"Draw"` if both have the same number of votes  
- Return `"Invalid"` if input is not an array

### 📌 Constraints  
- Only count votes that exactly match `"mango"` or `"banana"` (case-sensitive)  
- Must `return` the result — **do not use `console.log()`**

### 🧪 Sample Inputs & Outputs  

| Input                                                | Output     |
|------------------------------------------------------|------------|
| `["mango", "banana", "mango"]`                       | `"Mango"`  |
| `["banana", "banana", "age e valo chilam", "no"]`    | `"Banana"` |
| `["mango", "banana", "jaker party", "no"]`           | `"Draw"`   |
| `[]`                                                 | `"Draw"`   |
| `{result: "mango"}`                                  | `"Invalid"`|
| `"mango, banana"`                                    | `"Invalid"`|
| `["mango", "BananA", "na vote", "na vote"]`          | `"Mango"`  |

---

## 🔹 Problem 04: Detect the Perfect Best Friend

### 📄 Description  
Write a function `isBestFriend()` that determines if two individuals are truly best friends based on their roll numbers and best friend references.

### 📥 Input  
Two **objects**, each containing the following properties:  
- `name`: a `string`  
- `roll`: a `number`  
- `bestFriend`: a `number` (refers to another person's roll)

### 🚀 Output  
- Return `true` if:  
  - `f1.bestFriend === f2.roll` **and**  
  - `f2.bestFriend === f1.roll`  
- Return `false` if they don't match this condition  
- Return `"Invalid"` if **either input is not an object**

### 📌 Constraints  
- Inputs must be valid objects  
- Return a boolean or `"Invalid"` — **do not use `console.log()`**

### 🧪 Sample Inputs & Outputs  

| Input                                                                                   | Output      |
|-----------------------------------------------------------------------------------------|-------------|
| `{ name: "hashem", roll: 1, bestFriend: 2 }, { name: "kashem", roll: 2, bestFriend: 1 }` | `true`      |
| `{ name: "hashem", roll: 21, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 2 }`| `false`     |
| `"hashem", { name: "kashem", roll: 2, bestFriend: 11 }`                                  | `"Invalid"` |
| `{ name: "hashem", roll: 1, bestFriend: 1 }, { name: "kashem", roll: 1, bestFriend: 1 }` | `true`      |
