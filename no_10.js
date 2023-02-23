const input = tahunKabisat => {
    if (tahunKabisat % 4 === 0) {
        console.log(`${tahunKabisat} adalah Tahun Kabisat`);
    } else {
        console.log(`${tahunKabisat} bukan Tahun Kabisat`);
    }
}

input(2021);
input(2024);