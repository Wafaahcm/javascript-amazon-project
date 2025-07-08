import { formatCurrency } from "../scripts/utils/money.js";

//Basic test case
if (formatCurrency(2029) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

//Edge test case
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}
