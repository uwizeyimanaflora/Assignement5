
// ===== PART C: CONDITIONS AND LOOPS =====

const members = [
  { name: "Aline", level: "G", contributions: [20000, 20000, 15000, 25000] },
  { name: "Eric", level: "S", contributions: [10000, 5000, 10000, 5000] },
  { name: "Grace", level: "G", contributions: [] },
  { name: "Jean", level: "S", contributions: [15000, 15000, 15000, 15000] },
  { name: "Diane", level: "G", contributions: [30000, 25000, 20000, 30000] },
  { name: "Patrick", level: "B", contributions: [5000, 10000, 5000, 0] }
];

let groupTotal = 0;
let onTrackCount = 0;
let topSaver = "";
let topSaving = 0;

for (const member of members) {
  if (member.contributions.length === 0) {
    console.log(`${member.name}: no contributions yet.`);
    continue;
  }

  let total = 0;

  for (const contribution of member.contributions) {
    total += contribution;
  }

  groupTotal += total;

  let status;

  if (total >= 60000) {
    status = "On track";
    onTrackCount++;
  } else if (total >= 30000) {
    status = "Behind";
  } else {
    status = "At risk";
  }

  let levelName;

  switch (member.level) {
    case "G":
      levelName = "Gold";
      break;
    case "S":
      levelName = "Silver";
      break;
    case "B":
      levelName = "Bronze";
      break;
    default:
      levelName = "Unknown";
  }

  console.log(
    `${member.name} (${levelName}): ${total.toLocaleString("en-US")} RWF, ${status}`
  );

  let stars = "";

  for (let i = 0; i < Math.floor(total / 10000); i++) {
    stars += "*";
  }

  console.log(stars);

  if (total > topSaving) {
    topSaving = total;
    topSaver = member.name;
  }
}

console.log(`Group total: ${groupTotal.toLocaleString("en-US")} RWF`);
console.log(`Members On track: ${onTrackCount}`);
console.log(`Top saver: ${topSaver} (${topSaving.toLocaleString("en-US")} RWF)`);

const weeklyAddition = groupTotal / 4;
let projectedTotal = groupTotal;
let weeks = 0;

while (projectedTotal < 1000000) {
  projectedTotal += weeklyAddition;
  weeks++;
}

console.log(
  `Weeks to reach 1,000,000 RWF: ${weeks} weeks (adding ${weeklyAddition.toLocaleString("en-US")} RWF per week)`
);
