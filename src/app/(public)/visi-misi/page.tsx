export const metadata = { title: "Visi & Misi — PW GP Ansor Jawa Barat" };

const misi = [
  "Menguatkan kaderisasi yang berlandaskan Islam Ahlussunnah wal Jama'ah An-Nahdliyah.",
  "Mengembangkan jiwa kepeloporan dan kemandirian pemuda NU di Jawa Barat.",
  "Menjaga persatuan umat dan keutuhan Negara Kesatuan Republik Indonesia.",
  "Mendorong pemberdayaan sosial-ekonomi kader dan masyarakat.",
  "Membangun jejaring lintas organisasi kepemudaan dan kemasyarakatan.",
];

export default function VisiMisiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
        Visi &amp; Misi
      </h1>
      <div className="motif-divider mb-8 w-24" />

      <div className="mb-10 rounded-lg border-l-4 border-gold-500 bg-ansor-50 p-6 dark:bg-ansor-900/40">
        <h2 className="mb-2 font-display text-xl font-bold text-ansor-800 dark:text-gold-400">
          Visi
        </h2>
        <p className="text-ansor-700 dark:text-ansor-100">
          Terwujudnya kader Gerakan Pemuda Ansor Jawa Barat yang teguh dan
          mandiri sebagai pengawal eksistensi Islam Ahlussunnah wal
          Jama&apos;ah dan Negara Kesatuan Republik Indonesia.
        </p>
      </div>

      <h2 className="mb-4 font-display text-xl font-bold text-ansor-800 dark:text-ansor-50">
        Misi
      </h2>
      <ol className="space-y-3">
        {misi.map((item, i) => (
          <li key={i} className="flex gap-3 rounded-md border border-ansor-100 p-4 dark:border-ansor-800">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ansor-700 text-sm font-bold text-white dark:bg-ansor-600">
              {i + 1}
            </span>
            <span className="text-ansor-700 dark:text-ansor-200">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
