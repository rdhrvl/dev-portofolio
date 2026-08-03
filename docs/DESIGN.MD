# DESIGN.md

Panduan visual dan verbal (copywriting) untuk menjaga konsistensi setiap kali ada perubahan — oleh manusia maupun AI agent.

> **Catatan**: Bagian § Design Tokens di bawah ini adalah **template kosong**. Nilai aktual (warna, font, spacing) harus diambil langsung dari `app/globals.css` dan diisi ke sini — dokumen ini tidak menebak nilai tersebut karena tidak ada di dokumentasi sumber. Ini penting diisi supaya agent tidak "mengarang" warna/font baru saat diminta membuat komponen baru.

---

## 1. Design Tokens (isi dari `app/globals.css`)

```css
/* Warna */
--color-primary: #4338CA;      /* indigo-700 — CTA, link, brand accent */
--color-secondary: #64748B;    /* slate-500 — aksi sekunder, border aktif */
--color-background: #F8FAFC;   /* sudah ada */
--color-foreground: #0F172A;   /* slate-900 — ganti #171717 biar satu keluarga sama slate */
--color-muted: #94A3B8;        /* slate-400 — teks sekunder/placeholder */
--color-accent: #EEF2FF;       /* indigo-50 — background tint utk badge/highlight */

/* Semantic (tambahan, dipisah dari brand accent) */
--color-success: #16A34A;      /* green-600 — HANYA untuk status berhasil */
--color-danger: #DC2626;       /* red-600 */
--color-warning: #D97706;      /* amber-600 */

/* Tipografi */
--font-heading: var(--font-geist-sans);
--font-body: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);   /* status code, tech badge, log-style microcopy */

/* Spacing / Radius */
--radius-base: 6px;            /* sedikit tajam, kesan teknis — bukan 12px+ yang terlalu "app-y" */
--spacing-section: 6rem;
```

**Aturan untuk agent**: sebelum membuat komponen baru dengan warna/ukuran font, cek dulu apakah token di atas sudah punya nilai yang sesuai. Jangan menambah warna hex baru langsung di className kecuali token yang ada memang tidak mencukupi — dan jika terpaksa, tambahkan sebagai token baru di sini, bukan hanya di satu komponen.

## 2. Prinsip Animasi

- Semua animasi scroll-driven **harus** punya jalur alternatif untuk `prefers-reduced-motion: reduce` (fade instan tanpa transform, bukan animasi dipercepat).
- Durasi transisi standar: gunakan easing dan durasi yang sudah dipakai di `lib/animations.ts` — jangan mendefinisikan easing baru per komponen kecuali ada alasan kuat (mis. seksi Hero butuh emphasis berbeda).
- Hierarki animasi: elemen di atas fold (Hero) animasi masuknya lebih cepat/subtle; elemen di bawah fold (Experience, Values) boleh lebih dramatis karena user sudah dalam mode scroll aktif.

## 3. Voice & Copywriting

Ini bagian paling sering dilanggar agent kalau tidak ditulis eksplisit. Semua teks baru (headline, deskripsi proyek, About, microcopy tombol) **wajib** mengikuti aturan berikut.

### 3.1 Prinsip Umum

- **Spesifik, bukan generik.** Dilarang menggunakan frasa template seperti: "passionate developer", "cutting-edge technology", "seamless experience", "clean and efficient code", "meningkatkan efisiensi" tanpa angka/konteks.
- **Hasil dulu, fitur belakangan.** Setiap klaim teknis sebaiknya diikuti dampaknya. Bukan "menggunakan Next.js dan Laravel", tapi "dibangun dengan Next.js + Laravel supaya [dampak konkret]".
- **Aktif, bukan pasif.** "Saya membangun..." lebih kuat dari "Sistem ini dibangun untuk...".

### 3.2 Hero Headline

Formula: **[Apa yang dikerjakan] + [untuk siapa/apa] + [hasil/dampak]**.

Hindari headline yang hanya menyebut jabatan ("Full-Stack Web Developer") sebagai kalimat utama — itu boleh jadi subheading/label, bukan hook utama.

CTA harus spesifik terhadap tindakan: "Lihat Studi Kasus", "Diskusikan Proyekmu" — bukan generik "Contact Me" / "Learn More" sendirian.

### 3.3 Struktur Deskripsi Proyek (WAJIB untuk semua entri di `data/projects/`)

Setiap proyek baru harus mengisi 4 blok ini (boleh sebagai field terpisah di data atau paragraf terstruktur):

1. **Konteks** — situasi/masalah sebelum proyek ini ada.
2. **Tantangan Teknis** — kendala spesifik yang dihadapi, bukan daftar fitur.
3. **Solusi** — keputusan teknis penting yang diambil dan alasannya.
4. **Hasil** — dampak konkret. Kalau ada angka (waktu, jumlah transaksi, dsb.) pakai angka. Kalau tidak ada data kuantitatif, gunakan kalimat kualitatif yang spesifik terhadap proyek itu, bukan template ("berhasil meningkatkan efisiensi" dilarang tanpa konteks lanjutan).

### 3.4 About Section

Hindari narasi umum. Sertakan: kenapa masuk web dev (cerita, bukan template), area yang benar-benar diobsesi (performa? UX? arsitektur backend?), dan bukti konkret (jumlah proyek, jenis klien/industri, tools yang dikuasai mendalam — bukan sekadar daftar logo).

### 3.5 Kata/Frasa yang Dilarang Tanpa Modifikasi

Agent yang menemukan atau menulis frasa berikut wajib menggantinya dengan versi spesifik sebelum dianggap selesai:

- "passionate about..."
- "cutting-edge" / "state-of-the-art"
- "seamless experience"
- "clean, maintainable code" (tanpa contoh konkret)
- "meningkatkan efisiensi/performa" tanpa angka atau konteks pembanding

---

## 4. Checklist Sebelum Merge Perubahan Konten/Desain

- [ ] Tidak ada frasa terlarang di §3.5.
- [ ] Deskripsi proyek baru mengikuti struktur §3.3.
- [ ] Warna/font baru memakai token di §1, bukan nilai hardcoded.
- [ ] Animasi baru punya fallback `prefers-reduced-motion`.
- [ ] `generateMetadata` terisi untuk halaman/route baru.

## 5. Pola UI yang Dilarang Tanpa Modifikasi

- Checkmark bulat besar + badge pill berwarna sebagai pola utama notifikasi/toast — ganti dengan format status-line (mono, ringkas, ala output terminal/HTTP response).
- Border-radius besar (>8px) dikombinasikan dengan glow/shadow berwarna pada card notifikasi — situs ini pakai `--radius-base` yang tajam, bukan gaya "app konsumer".
- Warna hijau (`--color-success`) dipakai di luar konteks status berhasil (jangan dipakai sebagai warna brand/CTA umum).
- Microcopy notifikasi berbentuk kalimat panjang formal ("Pesan Anda berhasil dikirim ke...") — ganti gaya ringkas/log-style sesuai §3.1 (aktif, spesifik).