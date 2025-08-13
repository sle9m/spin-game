const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

document.getElementById('spinBtn').addEventListener('click', () => {
  // نتيجة عشوائية بسيطة
  const prizes = [0, 5, 10, 20, 50];
  const pick = prizes[Math.floor(Math.random()*prizes.length)];
  const payload = JSON.stringify({ result: pick });

  // ابعت النتيجة للبوت
  if (tg?.sendData) tg.sendData(payload);

  // اقفل الويب آب (اختياري)
  tg?.close && tg.close();
});