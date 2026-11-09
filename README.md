# CASTER X LEGION

**Legends Never Die.**

Landing page resmi untuk komunitas Discord CASTER X LEGION. Kenali komunitasnya, lihat apa yang tersedia di server, dan temui tim di baliknya.

[Gabung ke Discord](https://discord.gg/NvwectuqMh)

## Tentang komunitas

CASTER X LEGION adalah tempat berkumpul bagi pemain dan kreator. Ceritakan game yang kamu suka, cari teman untuk match berikutnya, dan kenali anggota komunitas.

## Isi halaman

- **Home** memperkenalkan CASTER X LEGION dan menyediakan tautan untuk masuk ke Discord.
- **Community** menampilkan cara anggota bertemu, bermain, dan berbagi minat.
- **Inside the server** merangkum moderasi, verifikasi anggota, leveling dan hadiah role, musik, serta kegiatan komunitas.
- **The team** memperkenalkan pengurus dan tautan ke profil sosial mereka.

## Teknologi

Project ini menggunakan React, Vite, Framer Motion, React Icons, dan CSS Modules.

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah tersedia, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan di terminal.

Untuk membuat dan melihat build production:

```bash
npm run build
npm run preview
```

Untuk memeriksa kode dengan ESLint:

```bash
npm run lint
```

## Mengubah konten

- Tautan undangan Discord ada di `src/components/Navbar/Navbar.jsx`, `src/components/Hero/Hero.jsx`, dan `src/components/CTA/CTA.jsx`.
- Teks komunitas ada di `src/components/About/About.jsx`; informasi server ada di `src/components/Features/Features.jsx`.
- Profil tim ada di `src/components/Team/Team.jsx`.
- Warna, tipografi, dan aturan global ada di `src/styles/globals.css`.
- Logo utama yang tampil di situs ada di `public/CASTER.png`.

## Struktur utama

```text
public/
  CASTER.png
src/
  components/
    About/
    BackToTop/
    CTA/
    Features/
    Footer/
    Hero/
    Navbar/
    Team/
  Hooks/
    useScrollSpy.js
  styles/
    globals.css
  App.jsx
  index.css
  main.jsx
```