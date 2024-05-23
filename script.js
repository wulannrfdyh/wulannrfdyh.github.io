function hitungLuas() {
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    if (alas && tinggi) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('hasil-luas').innerText = `Luas Segitiga: ${luas}`;
    } else {
        alert('Mohon masukkan nilai alas dan tinggi.');
    }
}

function hitungKeliling() {
    const sisi1 = document.getElementById('sisi1').value;
    const sisi2 = document.getElementById('sisi2').value;
    const sisi3 = document.getElementById('sisi3').value;
    if (sisi1 && sisi2 && sisi3) {
        const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
        document.getElementById('hasil-keliling').innerText = `Keliling Segitiga: ${keliling}`;
    } else {
        alert('Mohon masukkan nilai ketiga sisi.');
    }
}

function resetForm() {
    document.getElementById('luas-form').reset();
    document.getElementById('keliling-form').reset();
    document.getElementById('hasil-luas').innerText = '';
    document.getElementById('hasil-keliling').innerText = '';
}
