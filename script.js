document.getElementById("btn").addEventListener("click", function () {
    const container = document.getElementById("heart-container");

    // إنشاء النص
    const p = document.createElement("p");
    p.textContent = "Dabdoba aya fost 9liyb";

    // تنسيق النص
    p.style.color = "red";
    p.style.fontSize = "24px";
    p.style.textAlign = "center";
    p.style.fontWeight = "bold";

    // إنشاء القلب خلف النص
    container.innerHTML = "❤️";
    container.style.fontSize = "50px";
    container.style.textAlign = "center";

    // إضافة النص فوق القلب
    container.appendChild(p);
});
