// Fungsi untuk menampilkan alert hanya di perangkat dengan lebar ≤ 768px
function tampilkanAlert() {
    if (window.innerWidth <= 768) { // Cek ukuran layar
        var konfirmasi = confirm("Jika ingin menghubungi saya lewat WhatsApp, silakan klik OK. Jika ingin eksplor website, klik Cancel. Jika sudah eksplor dan ingin menghubungi saya, silahkan klik garis tiga dipojok kanan atas untuk langsung menuju Whatsapp.");

        if (konfirmasi) {
            window.location.href = "https://wa.me/6281945026286"; // Ganti dengan nomor WhatsApp kamu
        }
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = function() {
    tampilkanAlert();
};
