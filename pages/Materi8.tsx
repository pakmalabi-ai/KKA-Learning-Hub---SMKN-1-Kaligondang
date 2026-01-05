import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Ghost, 
  Scale, 
  Leaf, 
  Lightbulb, 
  Gamepad2, 
  Database, 
  ArrowRight, 
  X, 
  Minus,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 p-1.5 rounded-lg shadow-lg shadow-sky-500/20">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 8</h1>
          <p className="text-[10px] text-sky-400 font-medium hidden sm:block">Evaluasi AI</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Brain },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Simulasi', icon: Search },
          { id: 'kuis', label: 'Kuis', icon: CheckCircle },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20' 
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

// 1. HOME SECTION
const HomeSection = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="animate-[fadeIn_0.5s]">
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden py-10">
       <div className="inline-block px-4 py-1 rounded-full bg-sky-900/30 text-sky-400 text-sm font-medium mb-6 border border-sky-800">
        Pertemuan Ke-12: Deep Learning Approach
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
        Jangan Percaya AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">100%</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Kecerdasan Artifisial itu hebat, tapi bisa "berhalusinasi". 
        Mari belajar menjadi pengguna yang kritis, cerdas, dan beretika.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition mx-auto md:mx-0">
            <Leaf className="text-emerald-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Mindfull</h3>
            <p className="text-slate-400 text-sm">Belajar dengan kesadaran penuh. Fokus pada fakta, bukan sekadar kecepatan menyalin jawaban AI.</p>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition mx-auto md:mx-0">
            <Lightbulb className="text-amber-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Meaningfull</h3>
            <p className="text-slate-400 text-sm">Pahami konsep "Halusinasi AI" dan "Bias" agar relevan dengan tantangan dunia digital nyata.</p>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition mx-auto md:mx-0">
            <Gamepad2 className="text-rose-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Joyfull</h3>
            <p className="text-slate-400 text-sm">Simulasi interaktif sebagai "Detektif Fakta". Menemukan kesalahan AI dengan cara yang menyenangkan.</p>
          </div>
        </div>
      </div>

      <button onClick={() => setPage('materi')} className="group flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-500 transition shadow-lg shadow-sky-600/20 transform hover:-translate-y-1">
        Mulai Belajar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-sky-500 pl-4 text-white">Sisi Gelap Kecerdasan Artifisial</h2>

        <div className="space-y-6">
            {/* Concept 1 */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-l-4 border-l-rose-500 border border-slate-700">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-rose-900/30 rounded-full text-rose-400 mt-1">
                        <Ghost size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">1. Halusinasi AI</h3>
                        <p className="text-slate-300 leading-relaxed">
                            AI Generatif bekerja berdasarkan <strong>probabilitas</strong> kata, bukan database kebenaran mutlak. Halusinasi terjadi ketika AI menjawab dengan sangat percaya diri, namun informasinya <strong>salah total</strong> atau mengarang bebas.
                        </p>
                        <div className="mt-4 bg-slate-900 p-4 rounded-lg text-sm border border-slate-700">
                            <span className="text-xs text-rose-400 font-bold uppercase tracking-wider">Contoh Kasus:</span>
                            <p className="italic text-slate-400 mt-1">"Meminta AI membuat biografi tokoh fiktif, AI malah membuatkan tanggal lahir dan nama orang tua yang seolah-olah nyata."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Concept 2 */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-l-4 border-l-amber-500 border border-slate-700">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-900/30 rounded-full text-amber-400 mt-1">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">2. Bias Algoritma</h3>
                        <p className="text-slate-300 leading-relaxed">
                            AI dilatih menggunakan data dari internet yang dibuat manusia. Jika data latihannya mengandung prasangka (ras, gender, budaya), maka AI akan mewarisi prasangka tersebut.
                        </p>
                    </div>
                </div>
            </div>

            {/* Concept 3: SARING */}
            <div className="bg-gradient-to-br from-slate-800 to-indigo-900/40 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">Metode Evaluasi: S.A.R.I.N.G</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                        { l: 'S', t: 'Sumber', d: '(Ada referensi?)' },
                        { l: 'A', t: 'Akurasi', d: '(Cek angka/data)' },
                        { l: 'R', t: 'Relevansi', d: '(Sesuai Topik?)' },
                        { l: 'I', t: 'Independensi', d: '(Bebas Bias?)' },
                        { l: 'N', t: 'Nalar', d: '(Masuk Akal?)' },
                    ].map((item, idx) => (
                        <div key={idx} className={`text-center p-4 bg-slate-900/50 rounded-lg ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                            <div className="text-2xl font-bold text-sky-400 mb-2">{item.l}</div>
                            <div className="text-xs text-slate-300 font-bold">{item.t}</div>
                            <div className="text-[10px] text-slate-400">{item.d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="text-center mt-8">
            <button onClick={() => setPage('simulasi')} className="px-6 py-2 border border-sky-500 text-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition flex items-center gap-2 mx-auto">
                Lanjut ke Simulasi <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

// 3. SIMULASI SECTION
const SimulasiSection = () => {
  const articleData = [
    { text: "Purbalingga adalah sebuah kota metropolitan besar di ", id: 1, isError: false },
    { text: "Jawa Timur", id: 2, isError: true, correction: "Salah. Purbalingga berada di Provinsi Jawa Tengah." },
    { text: " yang terkenal dengan ", id: 3, isError: false },
    { text: "Candi Borobudur-nya.", id: 4, isError: true, correction: "Halusinasi. Candi Borobudur terletak di Magelang, bukan Purbalingga." },
    { text: " Penduduk asli Purbalingga mayoritas bekerja sebagai ", id: 5, isError: false },
    { text: "nelayan karena wilayahnya dikelilingi laut.", id: 6, isError: true, correction: "Salah. Purbalingga adalah wilayah daratan/pegunungan (Gunung Slamet), tidak punya laut." },
    { text: " Industri knalpot di sana baru dimulai tahun 2020 oleh investor asing, karena ", id: 7, isError: false },
    { text: "warga lokal kurang memiliki keterampilan logam.", id: 8, isError: true, correction: "Bias & Salah. Industri knalpot Purbalingga sudah melegenda sejak lama dan dikelola UMKM lokal yang terampil." }
  ];

  const totalErrors = articleData.filter(s => s.isError).length;
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const toggleSelection = (id: number) => {
    if (checked) return;
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getResults = () => {
    let correctFound = 0;
    let wrongGuesses = 0;
    
    selectedIds.forEach(id => {
        const segment = articleData.find(s => s.id === id);
        if (segment?.isError) correctFound++;
        else wrongGuesses++;
    });

    return { correctFound, wrongGuesses };
  };

  const { correctFound, wrongGuesses } = getResults();

  const resetSimulation = () => {
      setSelectedIds([]);
      setChecked(false);
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto h-full min-h-[600px]">
        
        {/* Left: Instructions & Tools */}
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl flex flex-col border border-slate-700 h-fit">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Search className="text-sky-400" /> Misi Detektif
            </h3>
            <p className="text-sm text-slate-400 mb-4">
                Anda adalah Quality Control untuk "Bot-X". Bot ini baru saja menulis artikel tentang <strong>Purbalingga</strong>, tapi penuh halusinasi dan bias.
            </p>
            
            <div className="bg-indigo-900/30 p-4 rounded-lg mb-4 border border-indigo-500/30">
                <h4 className="font-bold text-indigo-300 text-sm mb-2 flex items-center gap-2"><Database size={14}/> Database Fakta (Kunci Jawaban)</h4>
                <ul className="text-xs space-y-2 text-slate-300 list-disc pl-4">
                    <li>Lokasi: Jawa Tengah (Bukan Jatim).</li>
                    <li>Landmark: Owabong, Gunung Slamet. (Borobudur di Magelang).</li>
                    <li>Geografi: Dataran tinggi/pegunungan (Bukan laut).</li>
                    <li>Industri: Knalpot & Bulu Mata Palsu (Sudah lama ada, UMKM lokal).</li>
                </ul>
            </div>

            <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-300">Status Investigasi:</span>
                    <span className="text-xl font-bold text-sky-400">{checked ? correctFound : selectedIds.length}/{totalErrors}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4 overflow-hidden">
                    <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${checked ? 'bg-emerald-500' : 'bg-sky-500'}`} 
                        style={{ width: `${(checked ? (correctFound/totalErrors) : (selectedIds.length/totalErrors)) * 100}%` }}
                    ></div>
                </div>
                {!checked ? (
                    <button onClick={() => setChecked(true)} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition text-white flex items-center justify-center gap-2">
                        <Search size={18} /> Periksa Temuan
                    </button>
                ) : (
                    <button onClick={resetSimulation} className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 transition text-sm">
                        Reset Simulasi
                    </button>
                )}
            </div>
        </div>

        {/* Right: The Document */}
        <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur p-8 rounded-xl relative overflow-y-auto border border-slate-700">
            <div className="absolute top-4 right-4 bg-slate-900 px-3 py-1 rounded text-xs text-slate-500 font-mono border border-slate-700">
                Generated by Bot-X v1.0
            </div>

            <h2 className="text-2xl font-serif font-bold mb-6 text-white border-b border-slate-700 pb-4">
                Keindahan Kota Purbalingga
            </h2>

            <div className="text-lg leading-loose text-slate-300 font-serif">
                {articleData.map((segment) => {
                    let className = "px-0.5 rounded cursor-pointer transition ";
                    
                    if (checked) {
                        if (segment.isError) {
                            if (selectedIds.includes(segment.id)) {
                                className += "bg-emerald-500/20 border-b-2 border-emerald-500 text-emerald-200 "; // True Positive
                            } else {
                                className += "bg-rose-500/10 border-b-2 border-dashed border-rose-500 text-rose-300 "; // False Negative (Missed)
                            }
                        } else if (selectedIds.includes(segment.id)) {
                            className += "bg-slate-600 line-through text-slate-500 "; // False Positive (Wrong Guess)
                        }
                    } else {
                        if (selectedIds.includes(segment.id)) {
                            className += "bg-rose-500 text-white "; // Selected
                        } else {
                            className += "hover:bg-slate-700/50 "; // Hover
                        }
                    }

                    return (
                        <span 
                            key={segment.id}
                            onClick={() => toggleSelection(segment.id)}
                            className={className}
                        >
                            {segment.text}
                        </span>
                    );
                })}
            </div>

            {/* Feedback Area */}
            {checked && (
                <div className={`mt-6 p-6 border rounded-lg animate-[fadeIn_0.5s] ${correctFound === totalErrors && wrongGuesses === 0 ? 'bg-emerald-900/20 border-emerald-500' : 'bg-slate-900/80 border-slate-700'}`}>
                    <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
                        {correctFound === totalErrors && wrongGuesses === 0 
                            ? <><CheckCircle className="text-emerald-400"/> Investigasi Sempurna!</> 
                            : <><AlertTriangle className="text-amber-400"/> Hasil Analisis</>}
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {articleData.filter(s => s.isError).map(s => {
                            const isFound = selectedIds.includes(s.id);
                            return (
                                <li key={s.id} className={`flex items-start gap-2 ${isFound ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {isFound ? <CheckCircle size={16} className="mt-0.5 shrink-0"/> : <X size={16} className="mt-0.5 shrink-0"/>}
                                    <span>
                                        <strong>{isFound ? "Hebat!" : "Terlewat:"}</strong> "{s.text}" itu salah. {s.correction}
                                    </span>
                                </li>
                            )
                        })}
                        {selectedIds.filter(id => !articleData.find(s => s.id === id)?.isError).map(id => {
                             const segment = articleData.find(s => s.id === id);
                             return (
                                <li key={id} className="flex items-start gap-2 text-slate-400">
                                    <Minus size={16} className="mt-0.5 shrink-0"/>
                                    <span><strong>Kurang Tepat:</strong> "{segment?.text}" sebenarnya fakta yang benar.</span>
                                </li>
                             )
                        })}
                    </ul>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

// 4. KUIS SECTION
const KuisSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      q: "Apa yang dimaksud dengan 'Halusinasi AI'?",
      options: [
        { id: 'a', text: "AI melihat hantu." },
        { id: 'b', text: "AI menghasilkan informasi yang meyakinkan tapi faktanya salah." },
        { id: 'c', text: "AI menolak menjawab pertanyaan." }
      ],
      correct: 'b'
    },
    {
      id: 2,
      q: "Mengapa kita perlu menerapkan metode SARING?",
      options: [
        { id: 'a', text: "Agar kita tidak termakan hoaks atau informasi bias dari AI." },
        { id: 'b', text: "Agar komputer tidak cepat panas." },
        { id: 'c', text: "Untuk membantu AI belajar lebih cepat." }
      ],
      correct: 'a'
    }
  ];

  const handleSelect = (qid: number, optId: string) => {
      setAnswers(prev => ({...prev, [qid]: optId}));
  }

  const checkQuiz = () => {
      let currentScore = 0;
      questions.forEach(q => {
          if(answers[q.id] === q.correct) currentScore += 50;
      });
      setScore(currentScore);
      setShowResult(true);
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center animate-[fadeIn_0.5s] min-h-[60vh]">
        <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Uji Pemahaman</h2>
            
            {!showResult ? (
                <div className="space-y-8">
                    {questions.map((q, idx) => (
                        <div key={q.id}>
                            <p className="font-semibold text-lg mb-4 text-white">{idx + 1}. {q.q}</p>
                            <div className="space-y-3">
                                {q.options.map((opt) => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => handleSelect(q.id, opt.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                                            answers[q.id] === opt.id 
                                            ? 'bg-sky-600 border-sky-500 text-white' 
                                            : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                                        }`}
                                    >
                                        {opt.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={checkQuiz}
                        disabled={Object.keys(answers).length < questions.length}
                        className="w-full py-3 bg-sky-600 rounded-lg font-bold text-white hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        Lihat Nilai
                    </button>
                </div>
            ) : (
                <div className="text-center animate-[fadeIn_0.5s]">
                    <div className="text-6xl mb-4">
                        {score === 100 ? "🎉" : "📚"}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Nilai Anda: {score}</h3>
                    <p className="text-slate-400 mb-6">
                        {score === 100 ? "Luar biasa! Anda siap menjadi pengguna AI yang cerdas." : "Coba pelajari lagi materinya ya, semangat!"}
                    </p>
                    <button onClick={() => window.location.reload()} className="px-6 py-2 border border-slate-500 rounded-full hover:bg-slate-800 text-slate-300 transition">
                        Ulangi Pelajaran
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi8: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="text-slate-200 font-sans selection:bg-sky-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection setPage={setActivePage} />}
        {activePage === 'simulasi' && <SimulasiSection />}
        {activePage === 'kuis' && <KuisSection />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </div>
  );
};

export default Materi8;
