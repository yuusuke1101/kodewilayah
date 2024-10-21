const kecamatanData = {
    "01": [  // Kabupaten Pringsewu
        { nama: "Pagelaran", kode: "01" },
        { nama: "Adiluwih", kode: "02" },
        { nama: "Ambarawa", kode: "03" },
        { nama: "Banyumas", kode: "04" },
        { nama: "Gading Rejo", kode: "05" },
        { nama: "Pringsewu", kode: "06" },
        { nama: "Sukoharjo", kode: "07" },
        { nama: "Pagelaran Utara", kode: "08" }
    ],
    "07": [  // Kabupaten Tanggamus
        { nama: "Blimbing", kode: "09" },
        { nama: "Cukuh Balak", kode: "10" },
        { nama: "Gisting", kode: "11" },
        { nama: "Kota Agung", kode: "12" },
        { nama: "Kota Agung Barat", kode: "13" },
        { nama: "Kota Agung Timur", kode: "14" },
        { nama: "Pugung", kode: "15" },
        { nama: "Pulau Panggung", kode: "16" },
        { nama: "Semaka", kode: "17" },
        { nama: "Sumber Jaya", kode: "18" },
        { nama: "Way Ratai", kode: "19" },
        { nama: "Wonosobo", kode: "20" }
    ],
    "06": [  // Kabupaten Lampung Utara
        { nama: "Abung Barat", kode: "21" },
        { nama: "Abung Selatan", kode: "22" },
        { nama: "Abung Semuli", kode: "23" },
        { nama: "Abung Surakarta", kode: "24" },
        { nama: "Bunga Mayang", kode: "25" },
        { nama: "Kotabumi", kode: "26" },
        { nama: "Kota Bumi", kode: "27" },
        { nama: "Kota Gajah", kode: "28" },
        { nama: "Napa", kode: "29" },
        { nama: "Panjang", kode: "30" },
        { nama: "Sukoharjo", kode: "31" },
        { nama: "Tanjung Raja", kode: "32" }
    ],
    "08": [  // Kabupaten Pesawaran
        { nama: "Gedong Tataan", kode: "33" },
        { nama: "Kedondong", kode: "34" },
        { nama: "Marga Punduh", kode: "35" },
        { nama: "Pesawaran", kode: "36" },
        { nama: "Way Lima", kode: "37" }
    ],
    "09": [  // Kabupaten Way Kanan
        { nama: "Baradatu", kode: "38" },
        { nama: "Banjit", kode: "39" },
        { nama: "Buay Bahuga", kode: "40" },
        { nama: "Buay Pematang Rwa", kode: "41" },
        { nama: "Kasui", kode: "42" },
        { nama: "Negeri Agung", kode: "43" },
        { nama: "Panjang Jaya", kode: "44" },
        { nama: "Way Tuba", kode: "45" },
        { nama: "Way Kanan", kode: "46" },
        { nama: "Way Serdang", kode: "47" }
    ],
    "10": [  // Kabupaten Mesuji
        { nama: "Mesuji", kode: "48" },
        { nama: "Panca Jaya", kode: "49" },
        { nama: "Tanjung Raya", kode: "50" }
    ],
    "11": [  // Kabupaten Tulang Bawang
        { nama: "Banjar Agung", kode: "51" },
        { nama: "Menggala", kode: "52" },
        { nama: "Mesarit", kode: "53" },
        { nama: "Penawar Tama", kode: "54" },
        { nama: "Tulang Bawang", kode: "55" },
        { nama: "Tulang Bawang Barat", kode: "56" }
    ],
    "12": [  // Kabupaten Tulang Bawang Barat
        { nama: "Gunung Terang", kode: "57" },
        { nama: "Tulang Bawang", kode: "58" },
        { nama: "Tulang Bawang Barat", kode: "59" }
    ],
    "13": [  // Kota Bandar Lampung
        { nama: "Kedaton", kode: "60" },
        { nama: "Langkapura", kode: "61" },
        { nama: "Rajabasa", kode: "62" },
        { nama: "Tanjung Karang Pusat", kode: "63" },
        { nama: "Tanjung Karang Timur", kode: "64" },
        { nama: "Tanjung Karang Barat", kode: "65" },
        { nama: "Kota Baru", kode: "66" },
        { nama: "Bumiratu Nuban", kode: "67" }
    ],
    "14": [  // Kota Metro
        { nama: "Metro Barat", kode: "68" },
        { nama: "Metro Center", kode: "69" },
        { nama: "Metro Timur", kode: "70" },
        { nama: "Metro Selatan", kode: "71" },
        { nama: "Metro Utara", kode: "72" }
    ]
};

function updateKecamatan() {
    const kabupatenSelect = document.getElementById('kabupaten');
    const kecamatanSelect = document.getElementById('kecamatan');
    const kodeWilayahDiv = document.getElementById('kode-wilayah');

    // Kosongkan dropdown kecamatan
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    kodeWilayahDiv.innerHTML = ''; // Kosongkan div kode wilayah

    const selectedKabupaten = kabupatenSelect.value;

    if (selectedKabupaten && kecamatanData[selectedKabupaten]) {
        kecamatanData[selectedKabupaten].forEach(kecamatan => {
            const option = document.createElement('option');
            option.value = kecamatan.kode;
            option.textContent = kecamatan.nama;
            kecamatanSelect.appendChild(option);
        });
    }
}

const kecamatanSelect = document.getElementById('kecamatan');

kecamatanSelect.onchange = function () {
    const selectedKecamatan = kecamatanSelect.options[kecamatanSelect.selectedIndex];
    const kodeWilayah = selectedKecamatan.value;
    const kecamatanName = selectedKecamatan.textContent;

    if (kodeWilayah) {
        // Menampilkan output sesuai format yang diinginkan
        const output = `1. Kode Wilayah: {${kodeWilayah}}<br>2. Contoh: ${kodeWilayah}RAHMAD`;
        document.getElementById('kode-wilayah').innerHTML = output;
    } else {
        document.getElementById('kode-wilayah').innerHTML = '';
    }
};
