// text changer

const textChanger = document.getElementById("changeText");

const checkerBtn = document.getElementById("btn");
const input = document.getElementById("inputClass");
const refresh = document.getElementById("btn-refresh");

checkerBtn.addEventListener("click", (event) => {
  event = "";

  let today = new Date(Date.now());

  const todayLong = today.toLocaleDateString("en-EN", { weekday: "long" });
  const daysLeft = 6 - today.getDay();
  if (input.value === "") {
    textChanger.textContent = "Please enter your Name";
  } else {
    textChanger.textContent = `Hello ${input.value}. Today is ${todayLong}. Only ${daysLeft} day(s) until weekend!`;
  }

  input.value = "";
});
