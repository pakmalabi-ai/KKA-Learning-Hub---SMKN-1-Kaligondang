import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Wind, 
  Bot, 
  Eye, 
  Mic, 
  Cpu, 
  Trash2, 
  Wand2, 
  User, 
  CheckCircle, 
  ChevronRight, 
  ArrowRight,
  Activity
} from 'lucide-react';

// --- DATA & CONSTANTS ---

const GRID_SIZE = 5;

const PATTERNS: Record<string, number[]> = {
    // HURUF A-Z
    'A': [0,1,1,1,0, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1],
    'B': [1,1,1,1,0, 1,0,0,0,1, 1,1,1,1,0, 1,0,0,0,1, 1,1,1,1,0],
    'C': [0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 0,1,1,1,1],
    'D': [1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0],
    'E': [1,1,1,1,1, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,1,1,1,1],
    'F': [1,1,1,1,1, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0],
    'G': [0,1,1,1,1, 1,0,0,0,0, 1,0,1,1,1, 1,0,0,0,1, 0,1,1,1,0],
    'H': [1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1],
    'I': [0,1,1,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,1,0],
    'J': [0,0,1,1,1, 0,0,0,1,0, 0,0,0,1,0, 1,0,0,1,0, 0,1,1,0,0],
    'K': [1,0,0,0,1, 1,0,0,1,0, 1,1,1,0,0, 1,0,0,1,0, 1,0,0,0,1],
    'L': [1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,1],
    'M': [1,0,0,0,1, 1,1,0,1,1, 1,0,1,0,1, 1,0,0,0,1, 1,0,0,0,1],
    'N': [1,0,0,0,1, 1,1,0,0,1, 1,0,1,0,1, 1,0,0,1,1, 1,0,0,0,1],
    'O': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
    'P': [1,1,1,1,0, 1,0,0,0,1, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0],
    'Q': [0,1,1,1,0, 1,0,0,0,1, 1,0,1,0,1, 1,0,0,1,0, 0,1,1,0,1],
    'R': [1,1,1,1,0, 1,0,0,0,1, 1,1,1,1,0, 1,0,0,1,0, 1,0,0,0,1],
    'S': [0,1,1,1,1, 1,0,0,0,0, 0,1,1,1,0, 0,0,0,0,1, 1,1,1,1,0],
    'T': [1,1,1,1,1, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
    'U': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
    'V': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0],
    'W': [1,0,0,0,1, 1,0,0,0,1, 1,0,1,0,1, 1,1,0,1,1, 1,0,0,0,1],
    'X': [1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0, 0,1,0,1,0, 1,0,0,0,1],
    'Y': [1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
    'Z': [1,1,1,1,1, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 1,1,1,1,1],
    
    // ANGKA 0-9
    '0': [0,1,1,1,0, 1,0,0,1,1, 1,0,1,0,1, 1,1,0,0,1, 0,1,1,1,0],
    '1': [0,0,1,0,0, 0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,1,0],
    '2': [0,1,1,1,0, 1,0,0,0,1, 0,0,1,1,0, 0,1,0,0,0, 1,1,1,1,1],
    '3': [1,1,1,1,0, 0,0,0,0,1, 0,0,1,1,0, 0,0,0,0,1, 1,1,1,1,0],
    '4': [1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 0,0,0,0,1, 0,0,0,0,1],
    '5': [1,1,1,1,1, 1,0,0,0,0, 1,1,1,1,0, 0,0,0,0,1, 1,1,1,1,0],
    '6': [0,1,1,1,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,1, 0,1,1,1,0],
    '7': [1,1,1,1,1, 0,0,0,0,1, 0,0,0,1,0, 0,0,1,0,0, 0,0,1,0,0],
    '8': [0,1,1,1,0, 1,0,0,0,1, 0,1,1,1,0, 1,0,0,0,1, 0,1,1,1,0],
    '9': [0,1,1,1,0, 1,0,0,0,1, 0,1,1,1,1, 0,0,0,0,1, 0,1,1,1,0]
};

const QUIZ_DATA = [
    {
        q: "Apa nama proses mesin 'belajar' dari data gambar?",
        options: ["Coding Manual", "Machine Learning", "Data Mining", "Photo Editing"],
        correct: 1 // Index
    },
    {
        q: "Faktor apa yang paling mempengaruhi akurasi pengenalan gambar?",
        options: ["Harga Kamera", "Pencahayaan & Kualitas Data", "Merk Laptop", "Kecepatan Internet"],
        correct: 1
    },
    {
        q: "Aplikasi Google untuk melatih model AI sederhana disebut...",
        options: ["Google Maps", "Teachable Machine", "Google Classroom", "Google Drive"],
        correct: 1
    },
    {
        q: "Komputer melihat sebuah gambar sebagai...",
        options: ["Grid Angka (Pixel)", "Kanvas Lukisan", "Warna-warni", "Teks"],
        correct: 0
    }
];

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 4</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Computer Vision</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Activity },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Simulasi AI', icon: Eye },
          { id: 'kuis', label: 'Kuis', icon: CheckCircle },
          { id: 'guru', label: 'Profil Guru', icon: User },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
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
const HomeSection = ({ setPage, openMindfulness }: { setPage: (p: string) => void, openMindfulness: () => void }) => (
  <section className="animate-[fadeIn_0.5s]">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-[60vh]">
        <div className="md:w-1/2">
            <span className="bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">Pertemuan Ke-6</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">Mengenal Cara Mesin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">"Melihat"</span></h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Selamat datang di media pembelajaran interaktif Koding & Kecerdasan Artifisial. 
                Mari kita pelajari konsep Computer Vision dengan pendekatan <i>Mindfull, Meaningfull, & Joyfull</i>.
            </p>
            <div className="flex flex-wrap gap-4">
                <button onClick={() => setPage('materi')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-500 transition flex items-center font-semibold">
                    <BookOpen size={18} className="mr-2"/> Mulai Belajar
                </button>
                <button onClick={openMindfulness} className="bg-slate-800 border border-slate-700 text-indigo-400 px-6 py-3 rounded-xl hover:bg-slate-700 transition flex items-center font-semibold">
                    <Wind size={18} className="mr-2"/> Fokus Sejenak
                </button>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl relative z-10 border border-slate-700/50">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center"><Activity className="text-indigo-500 mr-2" /> Tujuan Pembelajaran</h3>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-start"><CheckCircle className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" size={16}/> Menjelaskan prinsip kerja Machine Learning.</li>
                        <li className="flex items-start"><CheckCircle className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" size={16}/> Memahami konsep Computer Vision.</li>
                        <li className="flex items-start"><CheckCircle className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" size={16}/> Melakukan eksperimen pengenalan pola sederhana.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="animate-[fadeIn_0.5s] max-w-5xl mx-auto py-8">
    <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Materi Pembelajaran</h2>
        <p className="text-slate-400">Konsep Dasar Machine Learning & Computer Vision</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-500/50 transition duration-300 group">
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Bot className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Apa itu Machine Learning?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                Cabang kecerdasan artifisial di mana mesin "belajar" dari data, bukan dari aturan yang diprogram secara kaku.
                <br/><br/>
                <strong className="text-slate-200">Analogi:</strong> Seperti anak kecil belajar membedakan kucing dan anjing dengan melihat ratusan foto, bukan dengan menghafal ciri-ciri fisik secara manual.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:border-indigo-500/50 transition duration-300 group">
            <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Eye className="text-indigo-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Computer Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                Kemampuan komputer untuk "melihat" dan memahami gambar digital.
                <br/><br/>
                <strong className="text-slate-200">Cara Kerja:</strong> Komputer melihat gambar sebagai kumpulan angka (pixel). Setiap warna diubah menjadi nilai numerik, lalu AI mencari pola dari angka-angka tersebut.
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:border-purple-500/50 transition duration-300 group">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4 group-hover:bg-purple-500/20 transition-colors">
              <Mic className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Speech Recognition</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                Teknologi yang memungkinkan komputer mengenali dan menerjemahkan bahasa lisan menjadi teks.
                <br/><br/>
                <strong className="text-slate-200">Contoh:</strong> Google Assistant, Siri, atau fitur Voice Typing di WhatsApp.
            </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:border-pink-500/50 transition duration-300 group">
            <div className="p-3 bg-pink-500/10 rounded-xl w-fit mb-4 group-hover:bg-pink-500/20 transition-colors">
              <Cpu className="text-pink-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Proses Pelatihan (Training)</h3>
            <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                <li><strong className="text-slate-200">Gather:</strong> Mengumpulkan data (foto/suara).</li>
                <li><strong className="text-slate-200">Train:</strong> Komputer mencari pola dari data.</li>
                <li><strong className="text-slate-200">Test:</strong> Menguji model dengan data baru.</li>
            </ul>
        </div>
    </div>

    <div className="mt-12 text-center">
        <button onClick={() => setPage('simulasi')} className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition animate-bounce font-bold flex items-center mx-auto">
            Lanjut ke Simulasi <ArrowRight className="ml-2" size={18} />
        </button>
    </div>
  </section>
);

// 3. SIMULASI SECTION
const SimulasiSection = () => {
  const [gridData, setGridData] = useState<number[]>(Array(25).fill(0));
  const [logs, setLogs] = useState<string[]>(['> Menunggu input data...']);
  const [prediction, setPrediction] = useState<{char: string, conf: number} | null>(null);

  const togglePixel = (idx: number) => {
    const newData = [...gridData];
    newData[idx] = newData[idx] === 0 ? 1 : 0;
    setGridData(newData);
  };

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `> ${msg}`]);
  };

  const clearGrid = () => {
    setGridData(Array(25).fill(0));
    setPrediction(null);
    addLog("Grid dibersihkan.");
  };

  const calculateSimilarity = (input: number[], template: number[]) => {
    let matches = 0;
    let totalActive = 0;
    
    for(let i=0; i<input.length; i++) {
        if(template[i] === 1) totalActive++; // Count pixels in template
        if(input[i] === template[i] && template[i] === 1) {
            matches++; // Hit match
        }
        // Penalize wrong pixels slightly
        if(input[i] === 1 && template[i] === 0) {
           matches -= 0.5;
        }
    }
    // Normalize
    let score = (matches / totalActive) * 100;
    return Math.max(0, Math.min(100, score)); // Clamp 0-100
  };

  const predictPattern = () => {
    addLog("Memindai data pixel...");
    
    setTimeout(() => {
        let bestMatch = "?";
        let highestScore = 0;
        
        // Iterate through all templates
        for (const [char, template] of Object.entries(PATTERNS)) {
            const score = calculateSimilarity(gridData, template);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = char;
            }
        }
        
        addLog(`Kecocokan tertinggi: ${bestMatch} (${highestScore.toFixed(1)}%)`);

        setPrediction({ char: bestMatch, conf: highestScore });
        
        let resultMsg = highestScore > 65 ? `Pola: ${bestMatch}` : highestScore > 40 ? `Mungkin ${bestMatch}?` : "Pola Tidak Jelas";
        addLog(`KESIMPULAN: ${resultMsg}`);
    }, 800);
  };

  return (
    <section className="animate-[fadeIn_0.5s] max-w-5xl mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Simulation Control */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-2">Simulasi Pengenalan Pola</h2>
                <p className="text-slate-400 text-sm mb-6">
                    Komputer melihat gambar sebagai grid pixel. Cobalah gambar <strong className="text-white">Huruf (A-Z)</strong> atau <strong className="text-white">Angka (0-9)</strong> pada grid di bawah ini, lalu minta AI menebaknya.
                </p>

                <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                    <div className="grid grid-cols-5 gap-2 mb-8 w-fit mx-auto">
                      {gridData.map((val, i) => (
                        <div 
                          key={i} 
                          onClick={() => togglePixel(i)}
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-md cursor-pointer transition-all duration-200 border border-slate-600 ${
                            val ? 'bg-indigo-500 scale-90 shadow-inner shadow-black/50' : 'bg-slate-700 hover:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                        <button onClick={clearGrid} className="px-6 py-2.5 text-sm font-semibold text-slate-300 bg-slate-700 rounded-lg hover:bg-slate-600 flex items-center gap-2">
                            <Trash2 size={16}/> Hapus
                        </button>
                        <button onClick={predictPattern} className="px-8 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 flex items-center gap-2">
                            <Wand2 size={16}/> Tebak Pola
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: AI Brain/Result */}
            <div className="md:w-1/2">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-inner h-full font-mono text-sm relative overflow-hidden flex flex-col">
                    <div className="absolute top-4 right-6 text-xs text-slate-500 tracking-widest">MWS_AI_ENGINE_V1.0</div>
                    <h3 className="text-indigo-400 font-bold mb-4 border-b border-slate-800 pb-2 flex items-center gap-2"><Cpu size={16}/> Analisis Sistem</h3>
                    
                    <div className="space-y-2 h-48 overflow-y-auto mb-4 text-emerald-500/80 font-mono text-xs p-2 bg-black/20 rounded">
                        {logs.map((log, i) => (
                            <p key={i}>{log}</p>
                        ))}
                    </div>

                    {prediction && (
                      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center animate-[fadeIn_0.5s] mt-auto">
                          <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Prediksi AI</p>
                          <h2 className={`text-4xl font-bold mb-2 ${
                            prediction.conf < 50 ? 'text-red-400' : prediction.conf < 75 ? 'text-amber-400' : 'text-emerald-400'
                          }`}>
                             {prediction.conf > 40 ? prediction.char : '?'}
                          </h2>
                          <div className="w-full bg-slate-700 h-2 rounded-full mt-2 overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  prediction.conf < 50 ? 'bg-red-500' : prediction.conf < 75 ? 'bg-amber-500' : 'bg-emerald-500'
                                }`} 
                                style={{ width: `${prediction.conf}%` }}
                              ></div>
                          </div>
                          <p className="text-xs text-right mt-2 text-slate-400">{prediction.conf.toFixed(0)}% Akurat</p>
                      </div>
                    )}
                    
                    <div className="mt-4 text-[10px] text-slate-600 italic">
                        *Catatan: Ini adalah simulasi logika pencocokan pola sederhana (template matching).
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

// 4. KUIS SECTION
const KuisSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIdx: number) => {
    if (selectedIdx === QUIZ_DATA[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const finalScore = (score / QUIZ_DATA.length) * 100;
    return (
      <div className="max-w-xl mx-auto py-12 text-center animate-[fadeIn_0.5s]">
         <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="text-6xl mb-6">{finalScore === 100 ? '🏆' : finalScore >= 75 ? '🎉' : '📚'}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Skor Kamu: <span className="text-indigo-400">{finalScore}</span>/100</h3>
            <p className="text-slate-400 mb-8">
              {finalScore === 100 ? "Sempurna! Anda calon ahli AI masa depan." : finalScore >= 75 ? "Hebat! Pemahaman yang sangat baik." : "Jangan menyerah, coba pelajari materi lagi."}
            </p>
            <button onClick={resetQuiz} className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 font-bold transition">Ulangi Kuis</button>
         </div>
      </div>
    );
  }

  const data = QUIZ_DATA[currentQuestion];
  return (
    <section className="animate-[fadeIn_0.5s] max-w-2xl mx-auto py-8">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border-t-8 border-indigo-600 border-x border-b border-slate-700">
          <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Kuis Pemahaman</h2>
              <p className="text-slate-400 text-sm mt-1">Uji pengetahuanmu tentang Machine Learning</p>
          </div>

          <div className="mb-4 text-sm text-indigo-400 font-bold">Pertanyaan {currentQuestion + 1}/{QUIZ_DATA.length}</div>
          <h3 className="text-xl font-semibold mb-6 text-white leading-relaxed">{data.q}</h3>
          
          <div className="space-y-3">
              {data.options.map((opt, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(idx)} 
                    className="w-full text-left p-4 rounded-xl border border-slate-600 bg-slate-700/50 hover:bg-indigo-900/30 hover:border-indigo-500 text-slate-200 hover:text-white transition duration-200 flex justify-between items-center group"
                  >
                      <span>{opt}</span>
                      <ChevronRight size={18} className="text-slate-500 group-hover:text-indigo-400" />
                  </button>
              ))}
          </div>
      </div>
    </section>
  );
}

// 5. GURU SECTION
const GuruSection = () => (
  <section className="animate-[fadeIn_0.5s] max-w-3xl mx-auto py-8">
      <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-700">
          <div className="md:w-1/3 bg-indigo-900/50 flex items-center justify-center p-8 border-r border-slate-700/50">
              <div className="text-center">
                  <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white border-4 border-indigo-500/30">
                      <User size={40} />
                  </div>
                  <h3 className="text-white font-bold text-lg">Malabi Wibowo Susanto</h3>
                  <p className="text-indigo-300 text-sm font-medium">S.Kom.</p>
              </div>
          </div>
          <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Profil Pengajar</h2>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  Guru mata pelajaran Koding dan Kecerdasan Artifisial di SMK Negeri 1 Kaligondang. 
                  Berdedikasi untuk mengembangkan pembelajaran yang berpusat pada siswa dengan integrasi teknologi terkini.
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm mt-6">
                  <div>
                      <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Mata Pelajaran</span>
                      <span className="font-semibold text-slate-200">Koding & AI</span>
                  </div>
                  <div>
                      <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Kelas</span>
                      <span className="font-semibold text-slate-200">Fase E (Kelas X)</span>
                  </div>
                  <div>
                      <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Pendekatan</span>
                      <span className="font-semibold text-slate-200">Deep Learning</span>
                  </div>
                  <div>
                      <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Sekolah</span>
                      <span className="font-semibold text-slate-200">SMK N 1 Kaligondang</span>
                  </div>
              </div>
          </div>
      </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---

const Materi4: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mindfulnessOpen, setMindfulnessOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activeTab} setPage={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative">
        {activeTab === 'home' && <HomeSection setPage={setActiveTab} openMindfulness={() => setMindfulnessOpen(true)} />}
        {activeTab === 'materi' && <MateriSection setPage={setActiveTab} />}
        {activeTab === 'simulasi' && <SimulasiSection />}
        {activeTab === 'kuis' && <KuisSection />}
        {activeTab === 'guru' && <GuruSection />}

        {/* Mindfulness Modal */}
        {mindfulnessOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm animate-[fadeIn_0.3s]">
                <div className="text-center text-white relative p-8">
                    <div className="w-64 h-64 bg-indigo-500/20 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse ring-4 ring-indigo-500/10">
                        <Wind className="text-indigo-400 opacity-80" size={64} />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Tarik Napas...</h2>
                    <p className="text-indigo-200 mb-8">Tenangkan pikiran sebelum belajar.</p>
                    <button onClick={() => setMindfulnessOpen(false)} className="border border-white/20 bg-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition font-medium backdrop-blur-md">
                        Saya Siap Belajar
                    </button>
                </div>
            </div>
        )}
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

export default Materi4;