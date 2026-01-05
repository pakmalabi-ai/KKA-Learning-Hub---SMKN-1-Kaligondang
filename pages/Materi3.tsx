import React, { useState, useEffect } from 'react';
import { Database, Play, BookOpen, CheckCircle, Terminal, Cpu, Users, Award, ChevronRight, RefreshCcw, Save, Trash2 } from 'lucide-react';

// --- DATA & KONSTANTA ---

const INITIAL_STUDENTS = [
  { id: 1, nama: "Budi Santoso", kelas: "X DKV 3", nilai: 85 },
  { id: 2, nama: "Siti Aminah", kelas: "X AKL 1", nilai: 90 },
  { id: 3, nama: "Rudi Hartono", kelas: "X DKV 3", nilai: 78 },
];

const PAGES = {
  HOME: 'home',
  MATERI: 'materi',
  SIMULASI: 'simulasi',
  ASESMEN: 'asesmen'
};

// --- KOMPONEN UI ---

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = "button" }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600",
    danger: "bg-rose-600 hover:bg-rose-700 text-white",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white",
    outline: "border border-indigo-500 text-indigo-400 hover:bg-indigo-950"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon: Icon, className = "" }) => (
  <div className={`bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl ${className}`}>
    <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
      {Icon && <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Icon size={24} /></div>}
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
    </div>
    <div className="text-slate-300">
      {children}
    </div>
  </div>
);

// --- KOMPONEN HALAMAN ---

const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
          <Cpu className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 3</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">SQL & Database</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: PAGES.HOME, label: 'Beranda', icon: Database },
          { id: PAGES.MATERI, label: 'Materi', icon: BookOpen },
          { id: PAGES.SIMULASI, label: 'Lab SQL', icon: Terminal },
          { id: PAGES.ASESMEN, label: 'Kuis', icon: Award },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-slate-800 text-indigo-400 border border-slate-700' 
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <item.icon size={14} className="hidden sm:block" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

// 1. HALAMAN BERANDA (MINDFULL)
const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="space-y-12 py-8 animate-[fadeIn_0.5s]">
    {/* Hero Section */}
    <section className="text-center space-y-6 py-12 px-4 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
      <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20 mb-4">
        Pertemuan 4 & 5: Analisis Data
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
        Kuasai Data dengan <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">SQL & AI Integration</span>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        Pelajari cara mengelola ribuan data siswa SMK Negeri 1 Kaligondang dengan mudah, cepat, dan akurat menggunakan perintah dasar basis data.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button onClick={() => setPage(PAGES.MATERI)} className="text-lg px-8 py-4 justify-center">
          Mulai Belajar <ChevronRight size={20} />
        </Button>
        <Button onClick={() => setPage(PAGES.SIMULASI)} variant="outline" className="text-lg px-8 py-4 justify-center">
          Coba Simulator
        </Button>
      </div>
    </section>

    {/* Learning Path */}
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <Card title="Mindfull" icon={Users} className="bg-slate-800/50 backdrop-blur">
        <p>Membangun kesadaran akan pentingnya data yang valid dan terstruktur di era digital.</p>
      </Card>
      <Card title="Meaningfull" icon={Database} className="bg-slate-800/50 backdrop-blur">
        <p>Memahami konsep CRUD (Create, Read, Update, Delete) yang relevan dengan dunia kerja.</p>
      </Card>
      <Card title="Joyfull" icon={Terminal} className="bg-slate-800/50 backdrop-blur">
        <p>Praktik coding yang menyenangkan dengan simulator interaktif dan bantuan asisten AI.</p>
      </Card>
    </div>
  </div>
);

// 2. HALAMAN MATERI (MEANINGFUL)
const Materi = () => (
  <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 animate-[fadeIn_0.5s]">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">Konsep Dasar Basis Data</h2>
      <p className="text-slate-400">Mengapa kita perlu beralih dari Spreadsheet ke Database SQL?</p>
    </div>

    {/* Analogy Section */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <div className="flex items-center gap-3 mb-4 text-emerald-400">
          <Database size={28} />
          <h3 className="text-xl font-bold">Database (SQL)</h3>
        </div>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1"/> Aman dan terstruktur rapi.</li>
          <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1"/> Bisa menangani jutaan data.</li>
          <li className="flex items-start gap-2"><CheckCircle size={18} className="text-emerald-500 mt-1"/> Multi-user secara bersamaan.</li>
        </ul>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 opacity-70">
        <div className="flex items-center gap-3 mb-4 text-slate-400">
          <Save size={28} />
          <h3 className="text-xl font-bold">Spreadsheet (Excel)</h3>
        </div>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">x</span> Rawan duplikasi data.</li>
          <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">x</span> Berat jika data terlalu banyak.</li>
          <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">x</span> Sulit untuk aplikasi kompleks.</li>
        </ul>
      </div>
    </div>

    {/* CRUD Cards */}
    <h3 className="text-2xl font-bold text-white mt-12 mb-6">Operasi CRUD</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { code: 'INSERT', name: 'Create', desc: 'Menambahkan data baru.', color: 'text-emerald-400', syntax: "INSERT INTO siswa (nama) VALUES ('Budi');" },
        { code: 'SELECT', name: 'Read', desc: 'Melihat/Membaca data.', color: 'text-blue-400', syntax: "SELECT * FROM siswa;" },
        { code: 'UPDATE', name: 'Update', desc: 'Mengubah data yang ada.', color: 'text-amber-400', syntax: "UPDATE siswa SET kelas='XI' WHERE id=1;" },
        { code: 'DELETE', name: 'Delete', desc: 'Menghapus data.', color: 'text-rose-400', syntax: "DELETE FROM siswa WHERE id=1;" },
      ].map((item) => (
        <div key={item.code} className="bg-slate-900 border border-slate-700 rounded-lg p-5 hover:border-indigo-500 transition-colors">
          <div className="flex justify-between items-center mb-2">
            <h4 className={`text-xl font-mono font-bold ${item.color}`}>{item.code}</h4>
            <span className="text-xs font-bold bg-slate-800 px-2 py-1 rounded text-slate-400">{item.name}</span>
          </div>
          <p className="text-slate-400 mb-4">{item.desc}</p>
          <div className="bg-black/50 p-3 rounded font-mono text-sm text-slate-300 border-l-4 border-indigo-500 overflow-x-auto">
            {item.syntax}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 3. HALAMAN SIMULASI (JOYFULL - CORE FEATURE)
const Simulasi = () => {
  const [data, setData] = useState(INITIAL_STUDENTS);
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<{type: string, msg: string}[]>([{ type: 'info', msg: 'System Ready. Database loaded.' }]);
  
  // Fungsi Helper untuk logging
  const addLog = (type: string, msg: string) => {
    setLogs(prev => [{ type, msg }, ...prev]);
  };

  // Engine SQL Sederhana (Fake Parser)
  const runQuery = () => {
    const q = query.trim();
    if (!q) return;

    const lowerQ = q.toLowerCase();

    // 1. SELECT
    if (lowerQ.startsWith('select')) {
      addLog('success', `Query OK. Menampilkan ${data.length} baris.`);
    } 
    // 2. INSERT (Regex sederhana: INSERT INTO siswa VALUES ('Nama', 'Kelas', Nilai))
    else if (lowerQ.startsWith('insert')) {
      try {
        // Mencoba mengambil nilai dalam kurung. Contoh: ('Budi', 'XII', 90)
        const match = q.match(/\(([^)]+)\)/);
        if (match) {
          const values = match[1].split(',').map(item => item.trim().replace(/['"]/g, '')); // Hapus quote
          if (values.length >= 3) {
            const newId = data.length > 0 ? Math.max(...data.map(s => s.id)) + 1 : 1;
            const newStudent = {
              id: newId,
              nama: values[0],
              kelas: values[1],
              nilai: parseInt(values[2]) || 0
            };
            setData([...data, newStudent]);
            addLog('success', `Query OK. 1 baris ditambahkan. (ID: ${newId})`);
          } else {
            addLog('error', 'Error: Jumlah kolom tidak sesuai. Format: (Nama, Kelas, Nilai)');
          }
        } else {
          addLog('error', 'Syntax Error pada VALUES.');
        }
      } catch (e) {
        addLog('error', 'Gagal memproses query INSERT.');
      }
    }
    // 3. DELETE (Sederhana: DELETE FROM siswa WHERE id=X)
    else if (lowerQ.startsWith('delete')) {
      if (lowerQ.includes('where id=')) {
        const idToDelete = parseInt(lowerQ.split('id=')[1].replace(';', '').trim());
        const exists = data.find(s => s.id === idToDelete);
        if (exists) {
          setData(data.filter(s => s.id !== idToDelete));
          addLog('warning', `Query OK. Data ID ${idToDelete} dihapus.`);
        } else {
          addLog('error', `Data dengan ID ${idToDelete} tidak ditemukan.`);
        }
      } else {
        addLog('error', 'Demi keamanan simulasi, harap gunakan WHERE id=... untuk menghapus.');
      }
    }
    // 4. UPDATE (Sederhana: UPDATE siswa SET nilai=100 WHERE id=X)
    else if (lowerQ.startsWith('update')) {
       // Logika sederhana hanya untuk demo update nilai
       if (lowerQ.includes('set nilai=') && lowerQ.includes('where id=')) {
          const parts = lowerQ.split('where id=');
          const idToUpdate = parseInt(parts[1].replace(';', '').trim());
          const valPart = parts[0].split('set nilai=')[1].trim();
          const newVal = parseInt(valPart);

          const index = data.findIndex(s => s.id === idToUpdate);
          if (index !== -1) {
            const newData = [...data];
            newData[index].nilai = newVal;
            setData(newData);
            addLog('success', `Query OK. Data ID ${idToUpdate} diperbarui.`);
          } else {
             addLog('error', 'ID tidak ditemukan.');
          }
       } else {
         addLog('error', 'Simulasi Update hanya mendukung: SET nilai=... WHERE id=...');
       }
    }
    else {
      addLog('error', 'Perintah tidak dikenali atau belum didukung simulator ini.');
    }
  };

  const setExample = (type: string) => {
    switch(type) {
      case 'SELECT': setQuery("SELECT * FROM siswa;"); break;
      case 'INSERT': setQuery("INSERT INTO siswa VALUES ('Dewi Sartika', 'X DKV 1', 88);"); break;
      case 'UPDATE': setQuery("UPDATE siswa SET nilai=100 WHERE id=1;"); break;
      case 'DELETE': setQuery("DELETE FROM siswa WHERE id=3;"); break;
      default: setQuery('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 grid lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s] h-[calc(100vh-140px)]">
      {/* Kiri: Console & Controls */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex-1 flex flex-col shadow-lg">
          <div className="flex justify-between items-center mb-3">
             <h3 className="text-indigo-400 font-bold flex items-center gap-2">
               <Terminal size={18}/> SQL Editor
             </h3>
             <span className="text-xs bg-indigo-900 text-indigo-300 px-2 py-1 rounded">db: sekolah</span>
          </div>
          
          <textarea 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-black/40 border border-slate-700 rounded-lg p-3 font-mono text-sm text-emerald-400 focus:outline-none focus:border-indigo-500 resize-none mb-3"
            placeholder="Ketik query SQL di sini..."
          />
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button onClick={() => setExample('INSERT')} className="text-xs bg-slate-800 text-slate-300 py-1 rounded hover:bg-slate-700 border border-slate-600">Contoh INSERT</button>
            <button onClick={() => setExample('UPDATE')} className="text-xs bg-slate-800 text-slate-300 py-1 rounded hover:bg-slate-700 border border-slate-600">Contoh UPDATE</button>
            <button onClick={() => setExample('DELETE')} className="text-xs bg-slate-800 text-slate-300 py-1 rounded hover:bg-slate-700 border border-slate-600">Contoh DELETE</button>
            <button onClick={() => setData(INITIAL_STUDENTS)} className="text-xs bg-slate-800 text-slate-300 py-1 rounded hover:bg-slate-700 border border-slate-600 flex items-center justify-center gap-1"><RefreshCcw size={12}/> Reset DB</button>
          </div>

          <Button onClick={runQuery} className="w-full justify-center">
            <Play size={16} /> Jalankan Query
          </Button>
        </div>

        {/* AI Assistant Box */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2 text-indigo-300 font-bold">
            <Cpu size={18} /> AI Assistant
          </div>
          <p className="text-sm text-slate-300 italic">
            "Ingat, perintah <b>DELETE</b> tanpa <b>WHERE</b> akan menghapus seluruh isi tabelmu. Selalu hati-hati dalam mengelola data!"
          </p>
        </div>
      </div>

      {/* Kanan: Result Table & Logs */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {/* Table View */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg flex-1">
          <div className="bg-slate-900/50 p-3 border-b border-slate-700 flex justify-between items-center">
             <span className="font-mono text-sm text-slate-400">Table: siswa</span>
             <span className="text-xs text-slate-500">{data.length} records found</span>
          </div>
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/30 text-slate-400 text-sm">
                  <th className="p-3 border-b border-slate-700 w-16">ID</th>
                  <th className="p-3 border-b border-slate-700">Nama Lengkap</th>
                  <th className="p-3 border-b border-slate-700">Kelas</th>
                  <th className="p-3 border-b border-slate-700 text-right">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {data.map((student) => (
                  <tr key={student.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors text-slate-200">
                    <td className="p-3 font-mono text-slate-500">{student.id}</td>
                    <td className="p-3">{student.nama}</td>
                    <td className="p-3"><span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs">{student.kelas}</span></td>
                    <td className="p-3 text-right font-mono">{student.nilai}</td>
                  </tr>
                ))}
                {data.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500 italic">Data kosong. Gunakan INSERT untuk menambah data.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Console Logs */}
        <div className="h-32 bg-black/80 border border-slate-700 rounded-xl p-3 font-mono text-xs overflow-y-auto">
           {logs.map((log, i) => (
             <div key={i} className={`mb-1 ${log.type === 'error' ? 'text-rose-400' : log.type === 'warning' ? 'text-amber-400' : log.type === 'success' ? 'text-emerald-400' : 'text-slate-400'}`}>
               <span className="opacity-50">[{new Date().toLocaleTimeString()}]</span> {log.msg}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// 4. HALAMAN ASESMEN
const Asesmen = () => {
  const [score, setScore] = useState<number | null>(null);
  
  const questions = [
    {
      q: "Perintah SQL manakah yang digunakan untuk mengambil data dari tabel?",
      options: ["GET", "OPEN", "SELECT", "EXTRACT"],
      ans: 2
    },
    {
      q: "Jika kita ingin menghapus data siswa dengan ID 5, perintah yang benar adalah...",
      options: [
        "DELETE FROM siswa WHERE id=5",
        "REMOVE siswa WHERE id=5",
        "DELETE id=5 FROM siswa",
        "DROP siswa WHERE id=5"
      ],
      ans: 0
    },
    {
      q: "Apa resiko menjalankan perintah 'UPDATE siswa SET kelas=XI' tanpa WHERE?",
      options: [
        "Tidak akan terjadi apa-apa",
        "Hanya data pertama yang berubah",
        "Akan terjadi error",
        "Semua data siswa akan berubah menjadi kelas XI"
      ],
      ans: 3
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let correct = 0;
    const formData = new FormData(e.currentTarget);
    questions.forEach((q, i) => {
      const answer = formData.get(`q${i}`);
      if (answer && parseInt(answer.toString()) === q.ans) correct++;
    });
    setScore((correct / questions.length) * 100);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 animate-[fadeIn_0.5s]">
      <Card title="Evaluasi Pemahaman" icon={Award}>
        {score === null ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q, i) => (
              <div key={i} className="space-y-3 pb-6 border-b border-slate-700/50 last:border-0">
                <p className="font-medium text-lg text-white">{i+1}. {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-700 cursor-pointer border border-transparent hover:border-indigo-500 transition-all">
                      <input type="radio" name={`q${i}`} value={j} required className="accent-indigo-500 w-4 h-4"/>
                      <span className="text-slate-300">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button type="submit" className="w-full justify-center text-lg mt-4">Kirim Jawaban</Button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border-4 border-indigo-500 mb-4">
              <span className="text-3xl font-bold text-white">{Math.round(score)}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {score > 70 ? "Luar Biasa!" : "Tetap Semangat!"}
            </h3>
            <p className="text-slate-400">
              {score > 70 
                ? "Kamu sudah memahami konsep dasar CRUD dengan baik." 
                : "Coba pelajari kembali materi dan praktikkan di simulator ya."}
            </p>
            <Button onClick={() => setScore(null)} variant="outline" className="mx-auto mt-4">
              Coba Lagi
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const Materi3: React.FC = () => {
  const [activePage, setActivePage] = useState(PAGES.HOME);

  // Efek transisi sederhana saat ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case PAGES.HOME: return <Home setPage={setActivePage} />;
      case PAGES.MATERI: return <Materi />;
      case PAGES.SIMULASI: return <Simulasi />;
      case PAGES.ASESMEN: return <Asesmen />;
      default: return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      <main className="min-h-[calc(100vh-200px)]">
        {renderContent()}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </div>
  );
}

export default Materi3;