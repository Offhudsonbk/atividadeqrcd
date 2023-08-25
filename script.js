const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr-code img");
let preValeu;

generateBtn.addEvenntLener("click",() => {
    let qrValue =  qrInput.valeu.trim();
    if(!qrValue || prevaleceu === qrValue) return;
    preValeu = qrValue;
    generateBtn.innerText = "Generating QR code...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code";
    });
});

qrInput.addEventlistener("keyup", () => {})