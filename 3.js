
// ===== PART D: FUNCTIONS AND PROBLEM-SOLVING =====

// 1. Format savings as RWF
function formatRwf(amount) {
  return `${amount.toLocaleString("en-US")} RWF`;
}

// 2. Mask a phone number
function maskPhone(phone) {
  return `${phone.slice(0, 3)}****${phone.slice(-3)}`;
}

// 3. Calculate total contributions
function memberTotal(contributions) {
  let total = 0;

  for (const amount of contributions) {
    total += amount;
  }

  return total;
}

// 4. Determine savings status
function getStatus(total) {
  if (total >= 60000) {
    return "On track";
  } else if (total >= 30000) {
    return "Behind";
  } else {
    return "At risk";
  }
}

// 5. Calculate loan limit
function loanLimit(total, multiplier = 3) {
  return Math.min(total * multiplier, 500000);
}

// 6. Check if a member is on track
const isOnTrack = (total) => getStatus(total) === "On track";

// 7. Count members who pass a test
function countMembers(list, test) {
  let count = 0;

  for (const member of list) {
    const total = memberTotal(member.contributions);

    if (test(total)) {
      count++;
    }
  }

  return count;
}

// 8. Print the savings report using the functions above
function printReport(list) {
  let groupTotal = 0;
  let topSaver = "";
  let topSaving = 0;

  for (const member of list) {
    if (member.contributions.length === 0) {
      console.log(`${member.name}: no contributions yet.`);
      continue;
    }

    const total = memberTotal(member.contributions);
    const status = getStatus(total);

    groupTotal += total;

    console.log(
      `${member.name}: ${formatRwf(total)}, ${status}`
    );

    if (total > topSaving) {
      topSaving = total;
      topSaver = member.name;
    }
  }

  console.log(`Group total: ${formatRwf(groupTotal)}`);
  console.log(`Members On track: ${countMembers(list, isOnTrack)}`);
  console.log(`Top saver: ${topSaver} (${formatRwf(topSaving)})`);
}

// ===== TEST THE FUNCTIONS =====

console.log("Test 1:", formatRwf(15000));
console.log("Test 2:", maskPhone("0788123456"));
console.log("Test 3:", memberTotal([10000, 20000, 5000]));
console.log("Test 4:", getStatus(60000));
console.log("Test 5:", loanLimit(80000));
console.log("Test 6:", isOnTrack(60000));
console.log("Test 7:", countMembers(members, isOnTrack));

// Rebuild the report using the functions
printReport(members);
