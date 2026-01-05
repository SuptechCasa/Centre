const btnAjoute = document.getElementById('btn-ajoute');
const formProf = document.getElementById('profForm');

btnAjoute.addEventListener('click', async (e) => {
    e.preventDefault();
    const formData = new FormData(formProf);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await fetch('http://localhost:3000/professeurs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.text();
    console.log(result);
});

