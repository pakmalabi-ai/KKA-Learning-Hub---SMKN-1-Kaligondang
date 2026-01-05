import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Shield, 
  Users, 
  HelpCircle, 
  Brain, 
  Menu, 
  X, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle, 
  Scale, 
  Lock, 
  Play, 
  Pause, 
  RotateCcw,
  MessageSquare
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 6</h1>
          <p className="text-[10px] text-amber-400 font-medium hidden sm:block">Etika & Literasi AI</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Brain },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Simulasi', icon: Cpu },
          { id: 'debat', label: 'Debat', icon: MessageSquare }, // Using MessageSquare for Debate
          { id: 'kuis', label: 'Evaluasi', icon: CheckCircle },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20' 
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
       <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
        Pertemuan 8 & 9: Literasi dan Etika KA
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
        Menjadi Manusia Bijak <br /> di Era <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Kecerdasan Artifisial</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Pelajari dampak sosial, pahami bias data, dan eksplorasi dilema etis teknologi masa depan melalui pendekatan Deep Learning.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition">
            <Users className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Mindfull</h3>
          <p className="text-slate-400 text-sm">Sadar penuh akan dampak teknologi terhadap kemanusiaan dan privasi diri.</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/40 transition">
            <BookOpen className="text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Meaningfull</h3>
          <p className="text-slate-400 text-sm">Pembelajaran bermakna yang relevan dengan kasus nyata dan hukum di Indonesia.</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/40 transition">
            <Cpu className="text-amber-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Joyfull</h3>
          <p className="text-slate-400 text-sm">Pengalaman belajar menyenangkan melalui simulasi interaktif dan debat tim.</p>
        </div>
      </div>

      <button onClick={() => setPage('materi')} className="group flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition shadow-[0_0_20px_rgba(245,158,11,0.3)]">
        Mulai Belajar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const topics = [
    {
      title: "Bias Data (Algorithmic Bias)",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <div className="space-y-4 animate-[fadeIn_0.5s]">
          <h3 className="text-2xl font-bold text-white">Mengapa AI Bisa Pilih Kasih?</h3>
          <p className="text-slate-300 leading-relaxed">
            AI belajar dari data sejarah. Jika data tersebut mengandung prasangka manusia (rasisme, seksisme), maka AI akan meniru prasangka tersebut. Ini disebut <strong className="text-amber-400">Garbage In, Garbage Out</strong>.
          </p>
          <div className="bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-400 mb-2">Contoh Nyata:</h4>
            <p className="text-sm text-slate-300">Sistem rekrutmen otomatis sebuah perusahaan besar pernah menolak pelamar wanita secara sistematis karena selama 10 tahun terakhir data pelamar didominasi pria.</p>
          </div>
        </div>
      )
    },
    {
      title: "Privasi & Keamanan",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-4 animate-[fadeIn_0.5s]">
          <h3 className="text-2xl font-bold text-white">Datamu adalah Hartamu</h3>
          <p className="text-slate-300 leading-relaxed">
            Di era digital, data pribadi (nama, lokasi, kebiasaan belanja) adalah komoditas berharga. Praktik <strong className="text-blue-400">Data Mining</strong> dan <strong className="text-blue-400">Deepfake</strong> menjadi ancaman serius.
          </p>
          <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-400 mb-2">Landasan Hukum (Indonesia):</h4>
            <p className="text-sm text-slate-300"><strong>UU PDP (Perlindungan Data Pribadi)</strong> menjamin hak warga negara atas keamanan data mereka. Perusahaan wajib meminta persetujuan (consent) sebelum mengelola data.</p>
          </div>
        </div>
      )
    },
    {
      title: "Dilema Etis (Trolley Problem)",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <div className="space-y-4 animate-[fadeIn_0.5s]">
          <h3 className="text-2xl font-bold text-white">Siapa yang Bertanggung Jawab?</h3>
          <p className="text-slate-300 leading-relaxed">
            Dalam situasi kritis, mesin harus mengambil keputusan. Contoh: Mobil otonom. Jika rem blong, apakah harus menabrak 1 nenek atau membanting setir menabrak tembok (membunuh penumpang)?
          </p>
          <div className="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-400 mb-2">Social Scoring:</h4>
            <p className="text-sm text-slate-300">Sistem penilaian perilaku sosial warga oleh AI. Jika nilai rendah, akses publik dibatasi. Apakah ini ketertiban atau pelanggaran HAM?</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Eksplorasi Konsep</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Sidebar Menu */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-amber-600 text-white shadow-lg translate-x-2' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {topic.icon}
                <span className="font-semibold">{topic.title}</span>
              </button>
            ))}
          </div>
          
          {/* Content Area */}
          <div className="w-full md:w-2/3 bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-xl border border-slate-700 min-h-[400px]">
            {topics[activeTab].content}
          </div>
        </div>
    </div>
  );
};

// 3. SIMULASI SECTION
const SimulasiSection = () => {
  const [activeSim, setActiveSim] = useState('trolley');
  
  // Trolley Logic
  const [trolleyDecision, setTrolleyDecision] = useState<string | null>(null); // null, 'straight', 'switch'
  
  // Bias Logic
  const [candidate, setCandidate] = useState({ gender: 'Laki-laki', gpa: 3.8, exp: 5 });
  const [aiScore, setAiScore] = useState<string | null>(null);
  
  const calculateBias = () => {
    // Simulasi Bias: Jika Wanita, skor dikurangi secara tidak adil untuk mendemonstrasikan bias sejarah
    let baseScore = (candidate.gpa * 10) + (candidate.exp * 5);
    if (candidate.gender === 'Perempuan') {
      baseScore -= 15; // Penalty bias tersembunyi
    }
    setAiScore(baseScore.toFixed(1));
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Laboratorium Simulasi AI</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveSim('trolley')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'trolley' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            The Moral Machine
          </button>
          <button 
            onClick={() => setActiveSim('bias')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'bias' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            Recruitment Bias Detector
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden border border-slate-700">
          
          {/* TROLLEY PROBLEM SIMULATION */}
          {activeSim === 'trolley' && (
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white"><AlertTriangle className="text-red-500" /> Kasus Mobil Otonom</h3>
              <p className="text-slate-300 mb-6">Sebuah mobil otonom mengalami rem blong. Di jalur utama ada 5 orang pejalan kaki. Di jalur alternatif ada 1 orang pekerja. Apa yang harus dilakukan AI?</p>
              
              <div className="relative h-64 bg-slate-700 rounded-xl mb-6 overflow-hidden flex items-center justify-center border-4 border-slate-600">
                {/* Visual Representation Simplifikasi */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-16 h-10 bg-blue-600 rounded shadow-lg text-white text-xs flex items-center justify-center z-20 font-bold">
                  Mobil AI
                </div>
                
                {/* Tracks */}
                <div className="absolute w-full h-2 bg-slate-500 top-1/2 -translate-y-1/2"></div>
                <div className="absolute w-1/2 h-2 bg-slate-500 top-1/2 -translate-y-1/2 right-0 rotate-12 origin-left translate-y-8"></div>
                
                {/* Victims */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-8 bg-red-500 rounded-full mx-1"></div>)}
                </div>
                <div className="absolute right-10 bottom-10 w-4 h-8 bg-green-600 rounded-full"></div>

                {trolleyDecision && (
                   <div className="absolute inset-0 bg-slate-900/90 z-30 flex items-center justify-center flex-col text-white p-6 text-center animate-[fadeIn_0.5s]">
                     <h4 className="text-2xl font-bold mb-2">{trolleyDecision === 'straight' ? 'Utilitarianism Fail?' : 'Active Action Taken'}</h4>
                     <p className="text-slate-300 mb-4">{trolleyDecision === 'straight' ? 'Anda membiarkan mobil lurus. 5 Orang terkorban. Secara pasif Anda tidak mengubah takdir, tapi korban lebih banyak.' : 'Anda membelokkan mobil. 1 Orang terkorban. Anda menyelamatkan 5 orang, tapi Anda secara aktif memilih untuk mengorbankan 1 orang yang tidak bersalah.'}</p>
                     <button onClick={() => setTrolleyDecision(null)} className="px-4 py-2 bg-amber-500 text-slate-900 rounded font-bold hover:bg-amber-400">Reset</button>
                   </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setTrolleyDecision('straight')}
                  className="p-4 bg-slate-800 hover:bg-red-900/30 border-2 border-slate-600 hover:border-red-500 rounded-xl transition text-center group"
                >
                  <span className="block font-bold text-lg mb-1 text-white group-hover:text-red-400">Tetap Lurus</span>
                  <span className="text-sm text-slate-400">Korban: 5 Orang</span>
                </button>
                <button 
                  onClick={() => setTrolleyDecision('switch')}
                  className="p-4 bg-slate-800 hover:bg-green-900/30 border-2 border-slate-600 hover:border-green-500 rounded-xl transition text-center group"
                >
                  <span className="block font-bold text-lg mb-1 text-white group-hover:text-green-400">Pindah Jalur</span>
                  <span className="text-sm text-slate-400">Korban: 1 Orang</span>
                </button>
              </div>
            </div>
          )}

          {/* BIAS SIMULATION */}
          {activeSim === 'bias' && (
            <div className="p-8">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white"><Scale className="text-blue-500" /> AI Perekrutan Karyawan</h3>
               <p className="text-slate-300 mb-6">Uji coba algoritma AI sederhana ini. Lihat apakah ada kejanggalan pada skor akhir berdasarkan input data pelamar.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">Jenis Kelamin</label>
                      <select 
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded"
                        value={candidate.gender}
                        onChange={(e) => setCandidate({...candidate, gender: e.target.value})}
                      >
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">IPK (0-4.0)</label>
                      <input 
                        type="number" step="0.1" max="4"
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded"
                        value={candidate.gpa}
                        onChange={(e) => setCandidate({...candidate, gpa: parseFloat(e.target.value)})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">Pengalaman (Tahun)</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded"
                        value={candidate.exp}
                        onChange={(e) => setCandidate({...candidate, exp: parseInt(e.target.value)})}
                      />
                    </div>
                    <button 
                      onClick={calculateBias}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Hitung Skor AI
                    </button>
                 </div>

                 <div className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-6 border border-slate-700">
                    {aiScore ? (
                      <div className="text-center animate-[fadeIn_0.5s]">
                        <span className="text-sm text-slate-500 uppercase tracking-widest">Skor Kecocokan</span>
                        <div className={`text-6xl font-black my-4 ${Number(aiScore) > 50 ? 'text-green-500' : 'text-amber-500'}`}>
                          {aiScore}
                        </div>
                        <div className="bg-slate-800 p-4 rounded text-left text-sm shadow-sm border border-red-500/30">
                          <p className="font-bold text-red-400 mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Analisis Bias:</p>
                          <p className="text-slate-300">
                            Jika Anda mengubah gender menjadi <strong>Laki-laki</strong> dengan data IPK/Pengalaman yang sama, skornya akan lebih tinggi 15 poin. 
                            <br/><br/>
                            <em className="text-slate-400">Ini adalah simulasi bagaimana data historis yang timpang bisa membuat AI menjadi diskriminatif.</em>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-slate-500 text-center">
                        <Cpu className="w-16 h-16 mx-auto mb-2 opacity-30" />
                        <p>Masukkan data pelamar untuk melihat keputusan AI.</p>
                      </div>
                    )}
                 </div>
               </div>
            </div>
          )}

        </div>
    </div>
  );
};

// 4. DEBAT SECTION
const DebatSection = () => {
  const [timer, setTimer] = useState(180); // 3 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-slate-700">
          <div className="bg-slate-900 text-white p-6 text-center border-b border-slate-700">
            <h2 className="text-3xl font-bold">Arena Debat & LKPD Digital</h2>
            <p className="text-amber-400 mt-2">Topik: "Penggunaan AI untuk Memantau Produktivitas Karyawan"</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Timer Section */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Pengatur Waktu Debat</h3>
                <div className="text-7xl font-mono font-black text-white mb-6">
                  {formatTime(timer)}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition ${isRunning ? 'bg-amber-900/50 text-amber-500 border border-amber-500' : 'bg-green-600 text-white hover:bg-green-500'}`}
                  >
                    {isRunning ? <Pause /> : <Play />}
                  </button>
                  <button 
                    onClick={() => { setIsRunning(false); setTimer(180); }}
                    className="w-14 h-14 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center hover:bg-slate-600 transition"
                  >
                    <RotateCcw />
                  </button>
                </div>
              </div>

              {/* LKPD Prompt */}
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-400 mb-1">Tugas Tim Pencari Fakta (LKPD)</h4>
                  <p className="text-sm text-slate-300">Gunakan smartphone kalian. Validasi argumen lawan bicara dengan mencari:</p>
                  <ul className="list-disc list-inside text-sm text-slate-400 mt-2 ml-2">
                    <li>Dasar Hukum (UU Ketenagakerjaan/PDP)</li>
                    <li>Statistik Efektivitas Pemantauan AI</li>
                    <li>Studi Kasus Pelanggaran Privasi</li>
                  </ul>
                </div>
                <div className="bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500">
                   <h4 className="font-bold text-amber-400 mb-1">Mosi Debat</h4>
                   <p className="text-sm italic text-slate-300">"Dewan ini percaya bahwa perusahaan diperbolehkan menggunakan AI canggih (CCTV biometrik, keystroke logger) untuk memantau produktivitas karyawan secara total."</p>
                </div>
              </div>
            </div>

            {/* Assessment Rubric Preview */}
            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Rubrik Penilaian Debat (Real-time)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <div className="font-bold text-slate-200 mb-2">1. Kualitas Argumen (HOTS)</div>
                  <div className="text-sm text-slate-400">Data valid, logis, tidak sekedar opini.</div>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <div className="font-bold text-slate-200 mb-2">2. Etika (Afektif)</div>
                  <div className="text-sm text-slate-400">Bahasa santun, tidak memotong pembicaraan, menghargai lawan.</div>
                </div>
                <div className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                  <div className="font-bold text-slate-200 mb-2">3. Kerjasama (Gotong Royong)</div>
                  <div className="text-sm text-slate-400">Distribusi peran merata dalam tim.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

// 5. KUIS SECTION
const KuisSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa yang dimaksud dengan 'Garbage In, Garbage Out' dalam konteks Bias AI?",
      opts: [
        "AI membersihkan sampah data secara otomatis.",
        "Jika data latih buruk/bias, hasil keputusan AI juga akan bias.",
        "AI tidak membutuhkan data untuk belajar.",
        "Komputer akan rusak jika diisi data sampah."
      ],
      a: 1
    },
    {
      q: "Manakah contoh dilema etis 'Trolley Problem' dalam teknologi modern?",
      opts: [
        "Keputusan mobil otonom saat kecelakaan tak terhindarkan.",
        "Cara kerja mesin pencari Google.",
        "Kecepatan prosesor komputer gaming.",
        "Kualitas kamera pada smartphone."
      ],
      a: 0
    },
    {
      q: "Di Indonesia, hak privasi data warga negara dilindungi oleh...",
      opts: [
        "UU ITE",
        "Hukum Adat",
        "UU PDP (Perlindungan Data Pribadi)",
        "Peraturan Sekolah"
      ],
      a: 2
    },
    {
      q: "Apa bahaya utama dari teknologi Deepfake?",
      opts: [
        "Membuat internet menjadi lambat.",
        "Penyebaran hoaks dan manipulasi identitas visual/audio.",
        "Menghabiskan baterai HP.",
        "Membuat foto menjadi buram."
      ],
      a: 1
    }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[currentQ].a) {
      setScore(score + 25);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center animate-[fadeIn_0.5s]">
        <div className="bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden max-w-2xl mx-auto border border-slate-700 w-full">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform rotate-12 scale-150"></div>
            <h2 className="text-3xl font-bold relative z-10">Kuis Pemahaman</h2>
          </div>
          
          <div className="p-8">
            {!showResult ? (
              <div>
                <div className="flex justify-between text-sm text-slate-400 mb-4 font-bold uppercase tracking-wider">
                  <span>Soal {currentQ + 1} dari {questions.length}</span>
                  <span>Proses</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full mb-8">
                  <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-8">{questions[currentQ].q}</h3>
                
                <div className="space-y-3">
                  {questions[currentQ].opts.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-amber-500 hover:bg-amber-900/20 transition font-medium text-slate-300 hover:text-white"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center animate-[fadeIn_0.5s]">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Evaluasi Selesai!</h3>
                <p className="text-slate-400 mb-6">Skor Akhir Anda:</p>
                <div className="text-6xl font-black text-white mb-8">{score}</div>
                
                <p className="text-sm text-slate-400 mb-8">
                  {score === 100 ? "Luar biasa! Kamu memahami etika AI dengan sangat baik." : "Teruslah belajar untuk menjadi pengguna teknologi yang bijak."}
                </p>
                
                <button onClick={resetQuiz} className="px-8 py-3 bg-amber-500 text-slate-900 rounded-full font-bold hover:bg-amber-400 transition">
                  Ulangi Kuis
                </button>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi6: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection />}
        {activePage === 'simulasi' && <SimulasiSection />}
        {activePage === 'debat' && <DebatSection />}
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

export default Materi6;