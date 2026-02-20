// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('header')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
});

function joinNow() {
  alert('Terima kasih! Tim kami akan menghubungi kamu. 💪');
}

const counters = [
  { id: 'member', target: 1200 },
  { id: 'trainer', target: 15 },
  { id: 'years', target: 8 }
];

counters.forEach(counter => {
  let count = 0;
  const el = document.getElementById(counter.id);
  const interval = setInterval(() => {
    count++;
    el.textContent = count;
    if (count === counter.target) clearInterval(interval);
  }, 20);
});

function hitungBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert('Mohon masukkan tinggi dan berat badan yang valid!');
    return;
  }

  // Konversi cm ke meter
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Tentukan kategori
  let category = '';
  if (bmi < 18.5) {
    category = 'Kurang Berat';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Tampilkan hasil
  document.getElementById('bmi-value').textContent = bmi.toFixed(1);
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-result').style.display = 'block';
}

// Izinkan Enter untuk menghitung BMI
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const activeElement = document.activeElement;
    if (activeElement.id === 'height' || activeElement.id === 'weight') {
      hitungBMI();
    }
  }
});
document.getElementById('konsultasiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil data dari form
  const nama = document.getElementById('nama').value;
  const usia = document.getElementById('usia').value;
  const email = document.getElementById('email').value;
  const whatsapp = document.getElementById('whatsapp').value;

  // Nomor WhatsApp pemilik (format internasional: 62 + nomor tanpa 0)
  const ownerWhatsApp = '6281511186366';

  // Buat pesan
  const pesan = `Hallo, saya ingin konsultasi gratis.%0ANama: ${nama}%0AUsia: ${usia}%0AEmail: ${email}%0ANo. WhatsApp: ${whatsapp}`;

  // Redirect ke WhatsApp
  window.location.href = `https://wa.me/${ownerWhatsApp}?text=${pesan}`;
});

