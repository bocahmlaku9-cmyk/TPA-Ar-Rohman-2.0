/* =========================================================
   app.js — shared module untuk seluruh halaman
   ========================================================= */

const STORE_KEY = 'tpa_ar_rahman_data_v1';
const SESSION_KEY = 'tpa_ar_rahman_session';

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
    { id:'p3', nip:'PG-0003', nama:'Ust. Citra', noHp:'0812 3456 7892', alamat:'Jl. Mawar No. 7', aktif:true },
    { id:'p4', nip:'PG-0004', nama:'Ust. Dewi',  noHp:'0812 3456 7893', alamat:'Jl. Mawar No. 8', aktif:true },
    { id:'p5', nip:'PG-0005', nama:'Ust. Fajar', noHp:'0812 3456 7894', alamat:'Jl. Mawar No. 9', aktif:true },
    { id:'p6', nip:'PG-0006', nama:'Ust. Siti',  noHp:'0812 3456 7895', alamat:'Jl. Mawar No.10', aktif:true },
  ],
  pengajarKelas: [
    { pengajarId:'p1', kelasId:'k1', peran:'Pengajar' },
    { pengajarId:'p2', kelasId:'k2', peran:'Pengajar' },
    { pengajarId:'p3', kelasId:'k3', peran:'Pengajar' },
    { pengajarId:'p4', kelasId:'k4', peran:'Pengajar' },
  ],
  santri: [
    { 
      id:'s1', nis:'TPA-2026-001', nama:'Ananda Putri Ramadhani', jenisKelamin:'P', golDarah:'-', 
      kelasId:'k4', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', 
      waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-05-12', 
      alamat:'Jl. Melati No. 12', fotoUrl:'' 
    },
    { 
      id:'s2', nis:'TPA-2026-002', nama:'Fiola Fahira', jenisKelamin:'P', golDarah:'-', 
      kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', 
      waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-03-08', 
      alamat:'Jl. Melati No. 13', fotoUrl:'' 
    },
    { 
      id:'s3', nis:'TPA-2026-003', nama:'Dafandra Athaya Zafran', jenisKelamin:'P', golDarah:'-', 
      kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', 
      waWali:'081234567890', tempatLahir:'Karanganyar', tanggalLahir:'2015-12-20', 
      alamat:'Jl. Melati No. 14', fotoUrl:'' 
    },
    { 
      id:'s4', nis:'TPA-2026-004', nama:'Akhtar Farzan Wijaya', jenisKelamin:'L', golDarah:'-', 
      kelasId:'k1', status:'Aktif', docKk:'Belum', docAkta:'Belum', namaWali:'Ayah Santri', 
      waWali:'081234567890', tempatLahir:'Sragen', tanggalLahir:'2016-07-03', 
      alamat:'Jl. Melati No. 15', fotoUrl:'' 
    },
    { 
      id:'s5', nis:'TPA-2026-005', nama:'Abdul Rahman', jenisKelamin:'L', golDarah:'O', 
      kelasId:'k3', status:'Aktif', docKk:'Sudah', docAkta:'Sudah', namaWali:'Bpk. Yusuf', 
      waWali:'081234567894', tempatLahir:'Sragen', tanggalLahir:'2016-01-11', 
      alamat:'Jl. Melati No. 16', fotoUrl:'' 
    },
    { 
      id:'s6', nis:'TPA-2026-006', nama:'Nabila Putri', jenisKelamin:'P', golDarah:'A', 
      kelasId:'k4', status:'Aktif', docKk:'Sudah', docAkta:'Belum', namaWali:'Bpk. Rudi', 
      waWali:'081234567895', tempatLahir:'Karanganyar', tanggalLahir:'2016-09-25', 
      alamat:'Jl. Melati No. 17', fotoUrl:'' 
    },
  ],
  jadwal: [
    { id:'j1', kelasId:'k1', hari:'senin', jamMulai:'16:00', jamSelesai:'17:00', toleransi:30, aktif:true },
    { id:'j2', kelasId:'k2', hari:'senin', jamMulai:'16:00', jamSelesai:'17:00', toleransi:30, aktif:true },
    { id:'j3', kelasId:'k3', hari:'senin', jamMulai:'16:00', jamSelesai:'17:00', toleransi:30, aktif:true },
    { id:'j4', kelasId:'k4', hari:'senin', jamMulai:'16:00', jamSelesai:'17:00', toleransi:30, aktif:true },
  ],
  presensi: [],
  pencapaian: [
    { id:'c1', santriId:'s1', tanggal:'2025-05-12', kategori:'Hafalan', materi:'An-Nas', nilai:95, catatan:'Sangat baik', pengajarId:'p1' },
    { id:'c2', santriId:'s1', tanggal:'2025-05-12', kategori:'Hafalan', materi:'Al-Falaq', nilai:95, catatan:'Lancar', pengajarId:'p1' },
    { id:'c3', santriId:'s2', tanggal:'2025-05-10', kategori:'Hafalan', materi:'Al-Ikhlas', nilai:90, catatan:'', pengajarId:'p1' },
  ],
  kas: [
    { id:'t1', tanggal:'2025-05-01', jenis:'masuk',  kategori:'Iuran', nominal:1500000, ket:'Iuran Mei', oleh:'u1' },
    { id:'t2', tanggal:'2025-05-05', jenis:'keluar', kategori:'Operasional', nominal:250000, ket:'Beli ATK', oleh:'u1' },
    { id:'t3', tanggal:'2025-05-10', jenis:'masuk',  kategori:'Donasi', nominal:500000, ket:'Donasi wali', oleh:'u1' },
  ],
  hariLibur: [],
};

/* ---------------- Store ---------------- */
function loadData() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) { saveData(DEFAULT_DATA, true); return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  try { return JSON.parse(raw); } catch { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData(data, silent) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
  if (!silent) window.dispatchEvent(new CustomEvent('tpa:data-changed'));
}
function updateData(fn) {
  const d = loadData();
  fn(d);
  saveData(d);
  return d;
}

/* Sinkron lintas tab & listener internal */
window.addEventListener('storage', (e) => {
  if (e.key === STORE_KEY) window.dispatchEvent(new CustomEvent('tpa:data-changed'));
  if (e.key === SESSION_KEY) location.reload();
});

/* ---------------- Auth ---------------- */
function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}
function setSession(s) {
  if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  else localStorage.removeItem(SESSION_KEY);
}
function login(username, password) {
  const u = loadData().users.find(x =>
    (x.username === username) && x.password === password && x.aktif);
  if (!u) return null;
  const sess = { userId:u.id, nama:u.nama, role:u.role,
    pengajarId:u.pengajarId, kelasId:u.kelasId, santriIds:u.santriIds || [] };
  setSession(sess);
  return sess;
}
function logout() {
  if (!confirm('Keluar dari akun?')) return;
  setSession(null);
  location.href = 'index.html';
}
function requireAuth(roles) {
  const s = getSession();
  if (!s) { location.href = 'index.html'; return null; }
  if (roles && !roles.includes(s.role)) { location.href = 'dashboard.html'; return null; }
  return s;
}

/* ---------------- UI helpers ---------------- */
function esc(str){ return String(str ?? '').replace(/[&<>"']/g,
  c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtRp(n){ return 'Rp ' + (Number(n)||0).toLocaleString('id-ID'); }
function fmtDate(iso){
  if(!iso) return '-';
  const d = new Date(iso);
  return d.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});
}
function uid(prefix){ return (prefix||'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function roleLabel(r){
  return ({admin:'Admin', pengajar:'Pengajar', wali_kelas:'Wali Kelas', walisantri:'Walisantri'})[r] || r;
}

function toast(msg, type=''){
  let wrap = document.querySelector('.toast-wrap');
  if(!wrap){
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateY(10px)';
    t.style.transition='.3s'; setTimeout(()=>t.remove(), 300); }, 2200);
}

const NAV_ITEMS = [
  { href:'dashboard.html',  icon:'🏠', label:'Dashboard',  roles:['admin','pengajar','wali_kelas','walisantri'] },
  { href:'santri.html',     icon:'👥', label:'Santri',     roles:['admin','wali_kelas'] },
  { href:'pengajar.html',   icon:'👨‍🏫', label:'Pengajar',   roles:['admin'] },
  { href:'presensi.html',   icon:'📋', label:'Presensi',   roles:['admin','pengajar','wali_kelas'] },
  { href:'pencapaian.html', icon:'🏆', label:'Pencapaian', roles:['admin','pengajar','wali_kelas','walisantri'] },
  { href:'kas.html',        icon:'💰', label:'Kas TPA',    roles:['admin'] },
  { href:'kartu.html',      icon:'🪪', label:'Kartu',      roles:['admin','pengajar','wali_kelas','walisantri'] },
  { href:'laporan.html',    icon:'📊', label:'Laporan',    roles:['admin'] },
  { href:'pengaturan.html', icon:'⚙️', label:'Pengaturan', roles:['admin'] },
];

function mountPage(title, html){
  const sess = getSession();
  const active = location.pathname.split('/').pop() || 'dashboard.html';
  const items = NAV_ITEMS.filter(n => n.roles.includes(sess.role));
  document.getElementById('app').innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <!-- LOGO BARU (Sidebar) -->
          <div class="brand-logo" style="background:#fff; padding:4px; overflow:hidden;">
            <img src="https://lh3.googleusercontent.com/d/1F6GqnKh5sEGXFMIeFob5a3jib1CbhpHv" alt="Logo" style="width:100%; height:100%; object-fit:contain;">
          </div>
          <!-- END LOGO -->
          <div>
            <div class="brand-title">TPA Ar Rahman</div>
            <div class="brand-sub">Jogonalan Lor</div>
          </div>
        </div>
        <nav class="nav">
          ${items.map(n=>`
            <a href="${n.href}" class="nav-item ${n.href===active?'active':''}">
              <span class="nav-icon">${n.icon}</span><span>${n.label}</span>
            </a>`).join('')}
        </nav>
        <div class="sidebar-foot">
          <div class="user-chip">
            <div class="avatar">${esc(sess.nama.charAt(0).toUpperCase())}</div>
            <div class="user-info">
              <div class="user-name">${esc(sess.nama)}</div>
              <div class="user-role">${roleLabel(sess.role)}</div>
            </div>
          </div>
          <button class="btn btn-ghost btn-block btn-sm" onclick="logout()">Keluar</button>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          <button class="menu-btn" onclick="document.querySelector('.sidebar').classList.toggle('open')">☰</button>
          <h1>${esc(title)}</h1>
        </header>
        <main class="page">${html}</main>
        <nav class="bottom-nav">
          ${items.slice(0,5).map(n=>`
            <a href="${n.href}" class="${n.href===active?'active':''}">
              <span class="nav-icon">${n.icon}</span><span>${n.label}</span>
            </a>`).join('')}
        </nav>
      </div>
    </div>
  `;
}

/* Reload data saat berubah (dari halaman lain atau tab lain) */
function onDataChange(fn){
  window.addEventListener('tpa:data-changed', () => fn());
}

/* Expose global */
window.tpa = { loadData, saveData, updateData, getSession, login, logout,
  requireAuth, mountPage, toast, esc, fmtRp, fmtDate, uid, roleLabel,
  onDataChange, NAV_ITEMS };
