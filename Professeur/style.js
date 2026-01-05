
const form = document.getElementById("profForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = [
        nom.value,
        prenom.value,
        matiere.value,
        niveau.value,
        frais.value,
        tel.value
        
    ];

    const row = document.createElement("tr");

    data.forEach(text => {
        const td = document.createElement("td");
        td.textContent = text;
        row.appendChild(td);
    });

    tableBody.appendChild(row);

    // petite animation JS
    row.style.opacity = "0";
    setTimeout(() => row.style.opacity = "1", 50);

    form.reset();
});
