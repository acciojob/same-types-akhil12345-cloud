function isSameType(value1, value2) {
  // Convert string inputs to actual values
  const val1 = parseValue(value1);
  const val2 = parseValue(value2);

  // Check if both are NaN
  if (Number.isNaN(val1) && Number.isNaN(val2)) {
    return true;
  }

  // If only one is NaN
  if (Number.isNaN(val1) || Number.isNaN(val2)) {
    return false;
  }

  // Compare types
  return typeof val1 === typeof val2;
}

function parseValue(val) {
  // Try to convert to number if possible
  if (val.trim().toLowerCase() === "nan") return NaN;
  if (!isNaN(val)) return Number(val);
  return val;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
