# revaldev Portfolio

Web portofolio pribadi **Ridho Revaldy Saputra (Reval)** — Full-Stack Web Developer (Next.js, Laravel, Livewire, React, TypeScript).

Dibangun dengan performa tinggi, animasi halus, SSG, dan dukungan SEO sebagai prioritas utama.

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 16.2.9 (App Router, Turbopack, Server Actions, SSG) |
| UI Library | React 19.2.4 |
| Bahasa | TypeScript 5.x |
| Styling | Tailwind CSS 4.x (`@tailwindcss/postcss`) |
| Komponen Khusus | Phantom UI (`@aejkatappaja/phantom-ui`) |
| Smooth Scroll | Lenis 1.3.25 |
| Scroll Animation | GSAP 3.15.0 (ScrollTrigger) |
| Page/Element Transition | Framer Motion 12.42.0 |
| Physics Animation | React Spring (`@react-spring/web` 10.1.2) |
| Email Transport | Nodemailer 9.0.1 (via Server Action) |

## Struktur Direktori

```text
dev-portofolio/
├── app/                # Routes & Layouts (App Router)
│   ├── actions/         # Server Actions (send-email.ts)
│   ├── projects/        # /projects & /projects/[slug]
│   ├── layout.tsx
│   └── page.tsx          # Beranda
├── components/
│   ├── layout/           # Header, Footer, Logobar
│   ├── providers/        # SmoothScrollProvider, PageTransitionProvider
│   ├── sections/         # Hero, About, Experience, Skills, dst.
│   └── ui/               # Komponen atomik (Card, Loader, dll.)
├── data/                 # Sumber konten statis (projects, skills, values, experience)
├── lib/                  # Helper (animations.ts)
├── types/                # Interface TypeScript
└── public/               # Aset statis
```

Detail arsitektur lengkap ada di [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
Panduan visual & copywriting ada di [`docs/DESIGN.md`](./docs/DESIGN.md).
Aturan kerja untuk AI coding agent ada di [`docs/AGENTS.md`](./docs/AGENTS.md).

## Menjalankan Proyek

```bash
npm install
npm run dev      # http://localhost:3000
```

Perintah lain:

```bash
npm run build    # Type-check + build produksi
npm run start    # Jalankan build produksi
npm run lint      # ESLint
```

## Environment Variables

Buat `.env.local` (tidak wajib untuk development — tanpa ini, sistem otomatis masuk **Mode Simulasi SMTP**):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=emailanda@gmail.com
SMTP_PASS=app_password_anda
CONTACT_RECEIVER=ridhorevaldysaputra@gmail.com
```

> Tanpa variabel SMTP di atas, `app/actions/send-email.ts` **tidak boleh error** — ia harus fallback ke mode simulasi dan mencatat isi pesan di console. Ini adalah perilaku yang disengaja, bukan bug — lihat [`AGENTS.md`](./AGENTS.md) untuk detail kenapa ini penting untuk tidak diubah tanpa sengaja.

## Menambah Proyek Baru ke Portofolio

1. Buat file baru di `data/projects/<slug>.ts` mengikuti interface `Project` di `types/index.ts`.
2. Daftarkan di `data/projects/index.ts` (agregator).
3. Next.js akan otomatis men-generate halaman statis `/projects/<slug>` lewat `generateStaticParams()`.
4. Ikuti struktur copywriting Konteks → Tantangan → Solusi → Hasil (lihat `DESIGN.md` § Voice & Copywriting).

## Catatan Git

`AGENTS.md`, `CLAUDE.md`, dan `DOCUMENTATION.md` sengaja ada di `.gitignore` — ini adalah dokumen kerja internal/agent, bukan bagian dari source of truth publik repo.