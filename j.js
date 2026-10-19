const members = ["Aline", "Eric", "Grace"];
let total = 0;

for (let i = 0; i < members.length; i++) {
  if (members[i] === "Eric") {
    total += 1;
  }
}

console.log(`Found ${total}`);