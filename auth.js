// رسالة الترحيب عند فتح الصفحة
window.onload = function () {
  speak("من فضلك اضغط على كلمة دخول");
};

function speak(text) {
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang = "ar-SA";
  speechSynthesis.speak(msg);
}

document.getElementById("loginBtn").addEventListener("click", () => {
  // اختيار الكوت
  let kot = prompt("اختر الكوت (kot1, kot2, kot3, kot4)");
  if(["kot1","kot2","kot3","kot4"].includes(kot)){
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userKot", kot);
    speak("أهلاً وسهلاً، موقع النجم التعليمي");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2500);
  } else {
    alert("الكوت غير صحيح!");
  }
});
