function updateTime() {
  const now = new Date();
  document.getElementById("datetime").innerHTML = now;
}
setInterval(updateTime, 1000);
function toggleFAQ(element) {
  let answer = element.nextElementSibling;
  answer.style.display =
    answer.style.display === "block" ? "none" : "block";
}

// Contact Popup
function confirmSubmit() {
  return confirm("Are you sure you want to submit?");
}