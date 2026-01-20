// Auto year
document.getElementById("year").innerText = new Date().getFullYear();

// Date for "Updated"
const options = { year: "numeric", month: "short", day: "numeric" };
document.getElementById("todayDate").innerText =
  new Date().toLocaleDateString("en-IN", options);

document.getElementById("year").innerText = new Date().getFullYear();