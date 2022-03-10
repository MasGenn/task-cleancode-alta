class Kendaraan {
  constructor(totalRoda, kecepatanPerjam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerjam = kecepatanPerjam;
  }
  berjalan() {
    return this.totalRoda, this.kecepatanPerjam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalRoda, kecepatanPerjam, tambahKecepatan) {
    super(totalRoda, kecepatanPerjam);
    this.tambahKecepatan;
  }
  berjalan() {
    return this.totalRoda, this.kecepatanPerjam, this.tambahKecepatan;
  }
}
const mobilCepat = new Mobil();
mobilCepat.berjalan();

const mobilLamban = new Mobil();
mobilLamban.berjalan();
