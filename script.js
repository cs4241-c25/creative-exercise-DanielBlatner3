

const revealXray = () => {
    let xrayables = Array.from(document.getElementsByClassName("xray"));
    xrayables.map((xray) => { xray.classList.remove("xray"); xray.classList.add("revealed"); });
    let scaler = document.getElementById("scaler");
    scaler.setAttribute("r","20");

}