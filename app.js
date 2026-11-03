/* ---------------- Seed data awal ---------------- */
const DEFAULT_DATA = {
  users: [
    { id:'u1', username:'admin',      password:'admin',    nama:'Administrator',  role:'admin',      aktif:true },
    { id:'u2', username:'pengajar1',  password:'pengajar', nama:'Ust. Ahmad',     role:'pengajar',   pengajarId:'p1', aktif:true },
    { id:'u3', username:'walikelas1', password:'wali',     nama:'Ust. Citra',     role:'wali_kelas', kelasId:'k1', aktif:true },
    { id:'u4', username:'wali1',      password:'wali',     nama:'Budi Santoso',   role:'walisantri', santriIds:['s1'], aktif:true },
  ],
  kelas: [
    { id:'k1', kode:'A1', nama:'Kelas A1', aktif:true },
    { id:'k2', kode:'A2', nama:'Kelas A2', aktif:true },
    { id:'k3', kode:'B',  nama:'Kelas B',  aktif:true },
    { id:'k4', kode:'C',  nama:'Kelas C',  aktif:true },
  ],
  pengajar: [
    { id:'p1', nip:'PG-0001', nama:'Ust. Ahmad', noHp:'0812 3456 7890', alamat:'Jl. Mawar No. 5', aktif:true },
    { id:'p2', nip:'PG-0002', nama:'Ust. Budi',  noHp:'0812 3456 7891', alamat:'Jl. Mawar No. 6', aktif:true },
  ],
  pengajarKelas: [
    { pengajarId:'p1', kelasId:'k1', peran:'Pengajar' },
    { pengajarId:'p2', kelasId:'k2', peran:'Pengajar' },
  ],
  santri: [
    { id:'s1', nis:'TPA-2026-001', nama:'Ananda Putri Ramadhani', jenisKelamin:'P', golDarah:'-', kelasId:'k4', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-05-12' },
    { id:'s2', nis:'TPA-2026-002', nama:'Fiola Fahira',           jenisKelamin:'P', golDarah:'-', kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-03-08' },
    { id:'s3', nis:'TPA-2026-003', nama:'Dafandra Athaya Zafran', jenisKelamin:'P', golDarah:'-', kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', waWali:'081234567890', tempatLahir:'Karanganyar', tanggalLahir:'2015-12-20' },
    { id:'s4', nis:'TPA-2026-004', nama:'Akhtar Farzan Wijaya',   jenisKelamin:'L', golDarah:'-', kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-07-03' },
    { id:'s5', nis:'TPA-2026-005', nama:'Abdul Rahman',           jenisKelamin:'L', golDarah:'O', kelasId:'k3', status:'Aktif', docKk:'Sudah', docAkta:'Sudah', namaWali:'Bpk. Yusuf', waWali:'081234567894', tempatLahir:'Sragen', tanggalLahir:'2016-01-11' },
    { id:'s6', nis:'TPA-2026-006', nama:'Nabila Putri',           jenisKelamin:'P', golDarah:'A', kelasId:'k4', status:'Aktif', docKk:'Sudah', docAkta:'Belum', namaWali:'Bpk. Rudi', waWali:'081234567895', tempatLahir:'Karanganyar', tanggalLahir:'2016-09-25' },
  ],
  jadwal: [], presensi: [], pencapaian: [], kas: [], hariLibur: [],
};
