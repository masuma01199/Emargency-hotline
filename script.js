let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartBtns = document.querySelectorAll('.heartBtn');
const copyBtns = document.querySelectorAll('.copyBtn');
const callBtns = document.querySelectorAll('.callBtn');
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');

// ❤️ Heart
heartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// 📋 Copy
copyBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const number = e.target.closest('.card').querySelector('p').textContent;
    navigator.clipboard.writeText(number);
    alert('Copied: ' + number);
    copyCount++;
    copyCountEl.textContent = copyCount;
  });
});

// 📞 Call
callBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const serviceName = card.querySelector('h3').textContent;
    const number = card.querySelector('p').textContent;

    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    alert(`Calling ${serviceName} at ${number}`);
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    const time = new Date().toLocaleTimeString();
    const li = document.createElement('li');
    li.textContent = `${serviceName} (${number}) - ${time}`;
    historyList.appendChild(li);
  });
});

// 🧹 Clear history
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = "";
});
