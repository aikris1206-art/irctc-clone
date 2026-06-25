const trains = [
    "12301 Rajdhani Express",
    "12004 Shatabdi Express",
    "12230 Lucknow Mail",
    "12561 Swatantrata Senani Express",
    "12419 Gomti Express"
];

function searchTrains() {
    const trainList = document.getElementById("trainList");

    trainList.innerHTML = "";

    trains.forEach(train => {
        const div = document.createElement("div");
        div.className = "train";
        div.textContent = train;
        trainList.appendChild(div);
    });
}
