# ARCHITECTURE.md

Penjelasan bagaimana bagian-bagian proyek ini saling terhubung. Tujuan dokumen ini: siapa pun (manusia atau agent) yang mengubah satu bagian tahu apa yang mungkin ikut terdampak.

## 1. Rendering Strategy

- **Beranda (`/`)**: rendered statis di build time (Next.js App Router default untuk halaman tanpa data dinamis per-request).
- **Katalog proyek (`/projects`)**: statis, membaca data agregat dari `data/projects/index.ts`.
- **Detail proyek (`/projects/[slug]`)**: **SSG** — setiap slug di-generate di build time lewat `generateStaticParams()`. Menambah proyek baru = menambah entri di `data/projects/index.ts`, lalu build ulang.

Implikasi: **tidak ada database, tidak ada CMS**. Semua konten (proyek, skills, experience, values) adalah data TypeScript statis di `data/`. Mengubah konten = mengubah kode + build ulang, bukan mengedit lewat dashboard.

## 2. Alur Data

```
data/projects/*.ts  ──┐
data/experience.ts   ─┼─→  app/page.tsx (Beranda, import langsung)
data/skills.ts       ─┤
data/values.ts       ─┘

data/projects/index.ts ──→ app/projects/page.tsx (grid katalog)
                        ──→ app/projects/[slug]/page.tsx (generateStaticParams + detail)

types/index.ts  ──→  dipakai oleh semua file di atas untuk shape data (Project, ProjectFeature, dll.)
```

Tidak ada state management global (Redux/Zustand/dll.) karena data bersifat statis — state yang ada hanya state lokal komponen (form, animasi, UI interaktif).

## 3. Animation Pipeline (urutan eksekusi penting)

```
1. SmoothScrollProvider (Lenis)
   → mengambil alih native scroll browser
   → loop requestAnimationFrame

2. GSAP ScrollTrigger (dipakai di components/ui/AnimateSection.tsx)
   → mendengarkan posisi scroll dari Lenis
   → trigger animasi fade/slide/scale per section

3. Framer Motion (PageTransitionProvider)
   → animasi transisi SAAT route berubah (mis. Beranda → /projects)
   → berjalan di layer terpisah dari scroll animation

4. React Spring
   → dipakai lokal di komponen interaktif tertentu (bukan scroll-driven)
```

**Catatan kritis**: Lenis harus diinisialisasi sebelum GSAP ScrollTrigger membaca posisi scroll, dan harus di-cleanup (destroy) saat provider unmount — kebocoran di sini menyebabkan scroll listener menumpuk dan halaman jadi berat setelah beberapa kali navigasi client-side.

## 4. Server Action — Contact Form

```
ContactForm.tsx (client)
   → submit → app/actions/send-email.ts ("use server")
        → cek field honeypot
            → terisi (bot)   → return sukses palsu, TIDAK kirim email
            → kosong (manusia) → cek env SMTP_*
                → ada        → kirim via Nodemailer ke CONTACT_RECEIVER
                → tidak ada  → log ke console sebagai [SMTP SIMULATION], return sukses
```

Server Action ini adalah satu-satunya titik "backend" di proyek — tidak ada API route terpisah untuk email.

## 5. Styling

- Tailwind CSS v4 lewat plugin PostCSS (`postcss.config.mjs`) — bukan config `tailwind.config.js` model lama.
- Custom styling tambahan (di luar utility classes) ada di `app/globals.css`.
- Komponen visual tambahan dari Phantom UI (`@aejkatappaja/phantom-ui`) — library eksternal khusus, bukan dibangun dari nol, jadi styling-nya mengikuti API package tersebut, bukan Tailwind murni.

## 6. Metadata & SEO

- `app/icon.tsx` men-generate favicon/icon secara dinamis (Next.js Metadata File Convention).
- Setiap route sebaiknya mengekspor `generateMetadata()` sendiri (title, description, Open Graph image) — terutama halaman detail proyek, karena ini yang paling sering dibagikan sebagai link individual.

## 7. Dependency Map Singkat

| Layer | Tools |
|---|---|
| Rendering | Next.js App Router + Turbopack |
| Type Safety | TypeScript |
| Styling | Tailwind CSS v4 |
| Scroll | Lenis |
| Scroll Animation | GSAP + ScrollTrigger |
| Route/Element Transition | Framer Motion |
| Micro-interaction | React Spring |
| Email | Nodemailer via Server Action |