// Pastikan Animate.css sudah di-link di HTML
const headerSection = document.getElementById('header');

// Tambahkan kelas animasi setelah halaman selesai dimuat
window.onload = () => {
  headerSection.classList.add('animate__animated', 'animate__fadeIn');
};