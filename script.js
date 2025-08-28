// Select counters
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Initial values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Heart button click → increase count
document.querySelectorAll(".heartBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// Copy button click → copy number + increase count
document.querySelectorAll(".copyBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white");
    const number = card.querySelector(".text-2xl").textContent.trim();

    navigator.clipboard.writeText(number).then(() => {
      alert("Copied: " + number);
      copyCount++;
      copyCountEl.textContent = copyCount;
    });
  });
});

// Call button click → alert, deduct coins, add to history
document.querySelectorAll(".callBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white");
    const serviceName = card.querySelector("h3").textContent.trim();
    const number = card.querySelector(".text-2xl").textContent.trim();

    if (coinCount < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    coinCount -= 20;
    coinCountEl.textContent = coinCount;
    alert(`Calling ${serviceName} at ${number}`);

    // Add to call history
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

    li.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-gray-500 text-xs">${number}</p>
      </div>
      <span class="text-xs">${time}</span>
    `;
    historyList.appendChild(li);
  });
});

// Clear history button
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
