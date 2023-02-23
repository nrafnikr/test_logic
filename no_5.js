function numberToWords(num) {
    const words = [
      "", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", 
      "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas",
      "tujuh belas", "delapan belas", "sembilan belas"
    ];
    const tens = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
    
    if (num < 1 || num > 100) {
      return "Silahkan Masukkan Bilangan 1-100";
    }
    
    // Konversi bilangan menjadi kata-kata
    if (num < 20) {
      return words[num];
    }
    else if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + words[num % 10];
    }
    else {
      return "seratus";
    }
  }

  console.log(numberToWords(4));
  console.log(numberToWords(20));
  console.log(numberToWords(39));
  console.log(numberToWords(104));