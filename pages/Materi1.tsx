import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Cpu, 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  Save, 
  Trash2, 
  Key, 
  Award,
  ArrowRight,
  BrainCircuit,
  LayoutGrid,
  X
} from 'lucide-react';

// --- DATA & CONTENT ---

const LEARNING_MATERIALS = [
  {
    id: 1,
    title: "Analogi Basis Data",
    icon: <LayoutGrid className="w-8 h-8 text-amber-400" />,
    content: "Bayangkan sebuah Lemari Arsip besar di ruang Tata Usaha. Basis Data (Database) adalah lemarinya. Tabel adalah laci-lacinya (misal laci 'Siswa' atau laci 'Guru'). Dokumen di dalamnya yang tersusun rapi adalah data yang siap diolah.",
    highlight: "Database = Lemari Arsip Digital"
  },
  {
    id: 2,
    title: "Struktur: Tabel & Field",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    content: "Tabel adalah tempat menyimpan data sejenis. Field (Kolom) adalah judul atau kategori data, seperti 'Nama', 'Kelas', atau 'Harga'. Field ibarat label pada formulir kosong.",
    highlight: "Field = Kolom (Atribut)"
  },
  {
    id: 3,
    title: "Record & Primary Key",
    icon: <Key className="w-8 h-8 text-red-400" />,
    content: "Record (Baris) adalah satu kesatuan data lengkap (misal data 1 siswa). Primary Key adalah data unik yang tidak boleh kembar, seperti NISN atau NIK. Nama orang bisa sama, tapi NIK pasti beda.",
    highlight: "Record = Baris, PK = Kunci Unik"
  },
  {
    id: 4,
    title: "Integrasi AI",
    icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
    content: "Kecerdasan Buatan (AI) seperti ChatGPT membutuhkan data yang terstruktur (Tabel) untuk belajar. Jika datanya berantakan, AI akan 'halusinasi'. Basis data yang rapi membuat AI semakin cerdas.",
    highlight: "Data Rapi = AI Cerdas"
  }
];

const QUIZ_DATA = [
  {
    question: "Manakah yang merupakan analogi paling tepat untuk 'Tabel' dalam kehidupan nyata?",
    options: ["Gudang besar", "Laci arsip spesifik", "Tumpukan sampah", "Sebuah gedung"],
    answer: 1
  },
  {
    question: "Data 'NISN' pada tabel siswa sangat cocok dijadikan sebagai...",
    options: ["Record", "Field Biasa", "Primary Key", "Judul Tabel"],
    answer: 2
  },
  {
    question: "Mengapa AI membutuhkan basis data yang terstruktur?",
    options: ["Agar terlihat rapi", "Agar komputer tidak panas", "Agar pola data dapat dipelajari dengan akurat", "Hanya untuk gaya"],
    answer: 2
  },
  {
    question: "Satu baris data lengkap yang berisi Nama, Kelas, dan Alamat disebut...",
    options: ["Column", "Record", "Field", "Key"],
    answer: 1
  }
];

// --- COMPONENTS ---

// Internal Navigation for this module
const ModuleNav = ({ page, setPage }: { page: string, setPage: (p: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 1: <span className="text-blue-400">Konsep Data</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 1</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'Kuis'].map((item) => (
          <button 
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
              page === item.toLowerCase() 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Hero = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative rounded-2xl overflow-hidden mx-0 md:mx-4">
    <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold tracking-wider mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
        MODUL PEMBELAJARAN FASE E
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0">
        Koding & <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Kecerdasan Artifisial
        </span>
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
        Pelajari fondasi Analisis Data. Ubah data mentah menjadi informasi berharga, dan pahami bagaimana AI berpikir menggunakan struktur data.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
        <button 
          onClick={() => setPage('materi')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BookOpen className="w-5 h-5" /> Mulai Belajar
        </button>
        <button 
          onClick={() => setPage('simulasi')}
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Cpu className="w-5 h-5" /> Coba Simulasi
        </button>
      </div>
    </div>
  </section>
);

const Materials = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="pt-8 pb-12 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Konsep Fundamental</h2>
          <p className="text-slate-400">Memahami bahasa data sebelum berbicara dengan AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card Navigation */}
          <div className="space-y-4">
            {LEARNING_MATERIALS.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setActiveCard(idx)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center gap-4 ${
                  activeCard === idx 
                  ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-900/20 translate-x-2' 
                  : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className={`p-3 rounded-full bg-slate-900 border border-slate-700`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeCard === idx ? 'text-white' : 'text-slate-300'}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.highlight}</p>
                </div>
                {activeCard === idx && <ChevronRight className="ml-auto text-blue-500" />}
              </div>
            ))}
          </div>

          {/* Content Preview */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 animate-[fadeIn_0.5s] key={activeCard}">
              <div className="mb-6 inline-block p-4 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner">
                {LEARNING_MATERIALS[activeCard].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">{LEARNING_MATERIALS[activeCard].title}</h3>
              <p className="text-lg text-slate-300 leading-loose">
                {LEARNING_MATERIALS[activeCard].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Simulation = () => {
  const [data, setData] = useState([
    { id: '101', item: 'Buku Tulis', price: 5000, qty: 2 },
    { id: '102', item: 'Pulpen', price: 3000, qty: 1 }
  ]);
  
  const [newItem, setNewItem] = useState({ id: '', item: '', price: '', qty: '' });
  const [error, setError] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');

  const handleAdd = () => {
    if (!newItem.id || !newItem.item || !newItem.price) {
      setError("Semua field harus diisi!");
      return;
    }
    // Check Primary Key
    if (data.some(d => d.id === newItem.id)) {
      setError(`Error: ID Barang '${newItem.id}' sudah ada! Primary Key harus unik.`);
      return;
    }

    setData([...data, { ...newItem, price: parseInt(newItem.price), qty: parseInt(newItem.qty) }]);
    setNewItem({ id: '', item: '', price: '', qty: '' });
    setError('');
    setAiAnalysis(''); // Reset analysis
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  const runAIAnalysis = () => {
    const total = data.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const mostExpensive = data.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    
    setAiAnalysis(`
      🤖 Analisis AI Selesai!
      
      Berdasarkan tabel data di atas:
      1. Total transaksi senilai Rp ${total.toLocaleString()}.
      2. Terdapat ${data.length} jenis barang (Records).
      3. Barang termahal adalah ${mostExpensive.item}.
      
      Kesimpulan: Data terstruktur memudahkan saya menghitung statistik ini secara instan.
    `);
  };

  return (
    <div className="pt-8 pb-12 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Input Panel */}
          <div className="w-full lg:w-1/3 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg h-fit">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              Input Data (Kasir)
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 uppercase font-bold ml-1">ID Barang <span className="text-red-400">(Primary Key)</span></label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
                  <input 
                    type="text" 
                    placeholder="Contoh: 103"
                    value={newItem.id}
                    onChange={(e) => setNewItem({...newItem, id: e.target.value})}
                    className="w-full bg-slate-900 text-white pl-10 pr-4 py-3 rounded-xl border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 uppercase font-bold ml-1">Nama Barang (Field)</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Pensil"
                  value={newItem.item}
                  onChange={(e) => setNewItem({...newItem, item: e.target.value})}
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl border border-slate-700 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-2">
                <div className="w-2/3">
                  <label className="text-xs text-slate-400 uppercase font-bold ml-1">Harga</label>
                  <input 
                    type="number" 
                    placeholder="Rp"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                    className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl border border-slate-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="w-1/3">
                  <label className="text-xs text-slate-400 uppercase font-bold ml-1">Qty</label>
                  <input 
                    type="number" 
                    placeholder="1"
                    value={newItem.qty}
                    onChange={(e) => setNewItem({...newItem, qty: e.target.value})}
                    className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl border border-slate-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm flex items-center gap-2">
                  <X className="w-4 h-4" /> {error}
                </div>
              )}

              <button 
                onClick={handleAdd}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all mt-2"
              >
                <Save className="w-4 h-4" /> Simpan ke Database
              </button>
            </div>
          </div>

          {/* Table Visualization */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" />
                  Tabel: db_penjualan
                </h3>
                <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full">
                  {data.length} Records
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 text-sm uppercase">
                      <th className="p-4 font-bold text-amber-400 flex items-center gap-1"><Key className="w-3 h-3"/> ID_Barang (PK)</th>
                      <th className="p-4 font-bold">Nama_Barang</th>
                      <th className="p-4 font-bold">Harga</th>
                      <th className="p-4 font-bold">Jumlah</th>
                      <th className="p-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {data.map((row) => (
                      <tr key={row.id} className="text-slate-200 hover:bg-slate-700/50 transition-colors group">
                        <td className="p-4 font-mono text-amber-300">{row.id}</td>
                        <td className="p-4">{row.item}</td>
                        <td className="p-4">Rp {row.price.toLocaleString()}</td>
                        <td className="p-4">{row.qty}</td>
                        <td className="p-4 text-center">
                          <button onClick={() => handleDelete(row.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {data.length === 0 && (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-500 italic">
                          Database kosong. Silakan input data.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Action */}
            <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                   <h4 className="text-lg font-bold text-white flex items-center gap-2">
                     <BrainCircuit className="w-6 h-6 text-pink-400" />
                     Kecerdasan Artifisial (AI Agent)
                   </h4>
                   <button 
                    onClick={runAIAnalysis}
                    disabled={data.length === 0}
                    className="bg-pink-600 hover:bg-pink-500 disabled:bg-slate-700 disabled:text-slate-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
                   >
                     Analisis Data <ArrowRight className="w-4 h-4" />
                   </button>
                 </div>
                 
                 <div className="bg-slate-950/50 rounded-xl p-4 min-h-[100px] border border-indigo-500/20">
                   {aiAnalysis ? (
                     <pre className="whitespace-pre-wrap font-sans text-slate-300 text-sm leading-relaxed typing-effect">
                       {aiAnalysis}
                     </pre>
                   ) : (
                     <p className="text-slate-500 text-sm">Menunggu data untuk dianalisis...</p>
                   )}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === QUIZ_DATA[currentQ].answer) {
      setScore(score + 25);
    }
    
    setTimeout(() => {
      if (currentQ < QUIZ_DATA.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="pt-8 pb-12 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {!showResult ? (
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Pertanyaan {currentQ + 1}/{QUIZ_DATA.length}
              </span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                Kuis Analisis Data
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 leading-snug">
              {QUIZ_DATA[currentQ].question}
            </h3>

            <div className="space-y-3">
              {QUIZ_DATA[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left p-5 rounded-xl border font-medium transition-all ${
                    selected === idx 
                      ? idx === QUIZ_DATA[currentQ].answer 
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-red-500/20 border-red-500 text-red-300'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {opt}
                    {selected === idx && (
                      idx === QUIZ_DATA[currentQ].answer 
                        ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                        : <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl text-center">
            <Award className="w-20 h-20 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-2">Kuis Selesai!</h3>
            <p className="text-slate-400 mb-8">Kamu telah menyelesaikan tantangan ini.</p>
            
            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
              {score}
              <span className="text-2xl text-slate-500 font-normal">/100</span>
            </div>

            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
            >
              Ulangi Kuis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi1: React.FC = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="text-slate-200 font-sans selection:bg-blue-500 selection:text-white -mt-4">
      {/* Internal Navigation for this module */}
      <ModuleNav page={page} setPage={setPage} />
      
      <main className="animate-[fadeIn_0.5s]">
        {page === 'home' && <Hero setPage={setPage} />}
        {page === 'materi' && <Materials />}
        {page === 'simulasi' && <Simulation />}
        {page === 'kuis' && <Quiz />}
      </main>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .typing-effect {
          border-right: 2px solid #6366f1;
          animation: blink 0.75s step-end infinite;
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #6366f1; }
        }
      `}</style>
    </div>
  );
};

export default Materi1;