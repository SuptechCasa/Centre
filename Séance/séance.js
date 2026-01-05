function afficherAbsences() {
    let absents = [];
    document.querySelectorAll('.students input').forEach(e => {
        if (!e.checked) absents.push(e.value);
    });

    let jour = document.getElementById("jour").value;
    let heure = document.getElementById("heure").value;
    let duree = document.getElementById("duree").value;

    let html = `
        <strong>Séance :</strong> ${jour} à ${heure} (${duree}h)<br><br>
        <strong>Absents :</strong><br>
    `;

    html += absents.length ? absents.join(" , ") : "Aucun absent ✅";

    document.getElementById("result").innerHTML = html;
}
