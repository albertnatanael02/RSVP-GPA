const scriptURL = 'https://script.google.com/macros/s/AKfycbzZunaSAh82TDbvKVyze8wuTrh_AlirSr7KmpONWZNNIis3jul7LOrLgnyODbqFEGaTMA/exec'; 

const form = document.getElementById('rsvpForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = 'Mengirim...';

    const formData = new URLSearchParams(new FormData(form));

    fetch(scriptURL, { 
        method: 'POST', 
        body: formData 
    })
    .then(response => {
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
    })
    .catch(error => {
        alert('Terjadi kesalahan saat mengunggah data!');
        submitBtn.disabled = false;
        submitBtn.innerText = 'Kirim Konfirmasi';
    });
});