let inputPesanan1
let inputPesanan2
let totalPesanan
let card1
let card2
let totalHarga
let namaProduk = document.querySelectorAll('.nama-produk')[0].textContent;
let namaProduk2 = document.querySelectorAll('.nama-produk')[1].textContent;
const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    const btnPlus = card.querySelector('.plus')
    let input = card.querySelector('.input-pesanan');
    btnPlus.addEventListener('click', function () {
        input.value = parseInt(input.value) + 1;
        inputPesanan1 = parseInt(document.querySelector('#pesanan1').value);
        inputPesanan2 = parseInt(document.querySelector('#pesanan2').value);
        totalPesanan = inputPesanan1 + inputPesanan2;
        const harga1 = inputPesanan1 * 10;
        const harga2 = inputPesanan2 * 5;
       
        totalHarga = harga1 + harga2 + 'K';

        card1 = `${namaProduk} : ${inputPesanan1}`;
        card2 = `${namaProduk2} : ${inputPesanan2}`;
        console.log(totalHarga);
    })
})

function SendMessage() {

    if(inputPesanan1==null||inputPesanan2==null){
        alert('pilih pesanan terlebih dahulu');
        return false;
    }

    const nama = document.getElementById('name').value;
    const jurusan = document.getElementById('jurusan').value;
    const kelas = document.getElementById('kelas').value;
    const catatan = document.getElementById('textarea').value;

    const url = `https://api.whatsapp.com/send?phone=6287864802104&text=*Data%20%3A*%0ANama%20%3A%20${nama}%0AKelas%20%3A%20${kelas}%0AJurusan%20%3A%20${jurusan}%0ACatatan%20%3A%20${catatan}%0A%0A*Pesanan%20%3A*%0A${card1}%0A${card2}%0A%0A*Total%20pesanan%20%3A%20${totalPesanan}*%0A*Total%20harga%20%3A%20${totalHarga}*%0A%0A*Terima%20kasih%20atas%20pesanannya%2C%20semoga%20rezeki%20anda%20di%20lancarkan*`;

    window.open(url);
}









