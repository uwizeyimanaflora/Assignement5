
// ===== PART B =====

const rawName = "  uWase GRACE  ";
const phone = "0788123456";
const monthlySaving = "15000";

// 1. Clean and capitalise the full name
const cleanName = rawName.trim().toLowerCase();
const nameParts = cleanName.split(" ");
const firstName = nameParts[1][0].toUpperCase() + nameParts[1].slice(1);
const lastName = nameParts[0][0].toUpperCase() + nameParts[0].slice(1);
const fullName = `${firstName} ${lastName}`;

console.log("Full name:", fullName);

// 2. Get initials
const initials = `${firstName[0]}.${lastName[0]}.`;
console.log("Initials:", initials);

// 3. Mask the phone number
const maskedPhone = `${phone.slice(0, 3)}****${phone.slice(-3)}`;
console.log("Masked phone:", maskedPhone);

// 4. Check type before and after conversion
console.log("Type before:", typeof monthlySaving);

const monthlySavingNumber = Number(monthlySaving);
console.log("Type after:", typeof monthlySavingNumber);

// 5. Calculate yearly savings
const yearlySaving = monthlySavingNumber * 12;
console.log("Yearly saving:", `${yearlySaving.toLocaleString("en-US")} RWF`);

// 6. Calculate yearly interest at 5%
const yearlyInterest = yearlySaving * 0.05;
console.log("Yearly interest:", `${yearlyInterest.toLocaleString("en-US")} RWF`);
