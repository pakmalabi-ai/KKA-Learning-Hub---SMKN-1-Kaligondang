import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Brain, 
  Code, 
  Lightbulb, 
  Users, 
  CheckCircle, 
  Award, 
  ChevronRight, 
  Cpu, 
  Search, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  
  const navItems = [
    { id: 'home', label: 'Beranda', icon: BookOpen },
    { id: 'materi', label: 'Materi', icon: Brain },
    { id: 'simulasi', label: 'Lab Design', icon: Code },
    { id: 'evaluasi', label: 'Evaluasi', icon: CheckCircle },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
      <div className="container mx-auto h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-1.5 rounded-lg text-slate-900">
            <Cpu size={16} />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 9</h1>
            <p className="text-[10px] text-amber-400 font-medium hidden sm:block">Design Thinking AI</p>
          </div>
        </div>

        <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-amber-500 text-slate-900 shadow-md shadow-amber-500/20' 
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
};

// --- VIEWS ---

const HomeView = ({ onStart }: { onStart: () => void }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 mb-8">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-600 text-amber-400 text-xs font-bold mb-6 tracking-widest uppercase">
          Fase E - SMK Kelas X
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Merancang Masa Depan <br/> dengan <span className="text-amber-400">Kecerdasan Artifisial</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Selamat datang di media pembelajaran interaktif. Mari belajar dengan pendekatan 
          <span className="font-semibold text-white"> Mindful, Meaningful, & Joyful</span>. 
          Kembangkan solusi cerdas untuk masalah di sekitarmu.
        </p>
        <button 
          onClick={onStart}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 flex items-center mx-auto space-x-2"
        >
          <span>Mulai Belajar</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>

    {/* Values Section */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Mindful", desc: "Belajar dengan kesadaran penuh dan fokus.", icon: <Brain className="text-indigo-500" size={32} /> },
          { title: "Meaningful", desc: "Materi relevan dengan masalah nyata di sekolah.", icon: <Lightbulb className="text-amber-500" size={32} /> },
          { title: "Joyful", desc: "Pengalaman belajar yang menyenangkan dan interaktif.", icon: <Award className="text-pink-500" size={32} /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-sm border border-slate-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors border border-slate-700">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const MateriView = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Empathize (Empati)",
      desc: "Langkah pertama bukan coding, tapi merasakan. Pahami apa yang dirasakan pengguna.",
      detail: "Lakukan observasi dan wawancara. Contoh: 'Kenapa antrian kantin selalu panjang?' atau 'Kenapa siswa sering lupa jadwal?'",
      icon: <Users className="text-blue-500" size={40} />,
      color: "border-blue-500/50 bg-blue-900/10"
    },
    {
      title: "2. Define (Definisi)",
      desc: "Menentukan akar masalah dari hasil empati.",
      detail: "Buat pernyataan masalah (Problem Statement). Contoh: 'Siswa membutuhkan cara cepat memesan makanan karena waktu istirahat sangat singkat.'",
      icon: <Search className="text-purple-500" size={40} />,
      color: "border-purple-500/50 bg-purple-900/10"
    },
    {
      title: "3. Ideate (Ideasi)",
      desc: "Mencari ide solusi sebanyak mungkin tanpa batas.",
      detail: "Brainstorming! Jangan takut salah. 'Bagaimana kalau ada chatbot?' atau 'Bagaimana kalau pakai kamera AI?'",
      icon: <Lightbulb className="text-amber-500" size={40} />,
      color: "border-amber-500/50 bg-amber-900/10"
    },
    {
      title: "4. Prototype (Purwarupa)",
      desc: "Membuat model sederhana dari ide terpilih.",
      detail: "Bisa berupa sketsa di kertas, desain di Canva, atau mockup aplikasi. Tujuannya untuk memvisualisasikan ide.",
      icon: <Code className="text-emerald-500" size={40} />,
      color: "border-emerald-500/50 bg-emerald-900/10"
    },
    {
      title: "5. Test (Uji Coba)",
      desc: "Mencoba prototype kepada pengguna dan meminta feedback.",
      detail: "Tanyakan: 'Apakah ini membantu?' atau 'Apa yang kurang?'. Gunakan feedback untuk memperbaiki solusi.",
      icon: <MessageSquare className="text-rose-500" size={40} />,
      color: "border-rose-500/50 bg-rose-900/10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Design Thinking & AI</h2>
        <p className="text-slate-400">Metode berpikir kreatif untuk menciptakan solusi Artificial Intelligence yang berdampak.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="md:col-span-4 space-y-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                activeStep === idx 
                  ? 'bg-slate-800 text-white border-amber-500/50 shadow-lg' 
                  : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-amber-400/50 hover:bg-slate-800'
              }`}
            >
              <span className="font-semibold">{step.title}</span>
              {activeStep === idx && <ChevronRight className="text-amber-400" size={20} />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-8">
          <div className={`h-full p-8 rounded-2xl border-2 ${steps[activeStep].color} shadow-sm transition-all duration-500 backdrop-blur-sm`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-full shadow-sm border border-slate-700">
                {steps[activeStep].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-200">{steps[activeStep].title}</h3>
            </div>
            
            <p className="text-lg font-medium text-slate-300 mb-4">{steps[activeStep].desc}</p>
            <hr className="border-slate-700 my-6" />
            
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700">
              <h4 className="font-bold text-slate-400 mb-2 uppercase text-sm tracking-wider">Aktivitas & Contoh:</h4>
              <p className="text-slate-300 leading-relaxed">{steps[activeStep].detail}</p>
            </div>

            <div className="mt-8 flex justify-end">
               <button 
                 onClick={() => setActiveStep(prev => (prev + 1) % steps.length)}
                 className="text-sm font-semibold text-slate-400 hover:text-white flex items-center space-x-1"
               >
                 <span>Lanjut Langkah Berikutnya</span>
                 <ChevronRight size={16} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimulasiView = () => {
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useState({
    masalah: '',
    user: '',
    solusi: '',
    teknologi: 'Chatbot (NLP)'
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProjectData({ ...projectData, [field]: value });
  };

  const generatePrototype = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setStep(4);
      setIsGenerating(false);
    }, 2000);
  };

  const resetSim = () => {
    setStep(1);
    setProjectData({ masalah: '', user: '', solusi: '', teknologi: 'Chatbot (NLP)' });
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Lab Design Thinking <span className="text-amber-500">AI</span></h2>
        <p className="text-slate-400">Simulasikan perancangan solusi AI untuk masalah di sekolahmu.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between mb-12 relative max-w-2xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -z-10 transform -translate-y-1/2 rounded-full"></div>
        {['Empathize', 'Define', 'Ideate', 'Prototype'].map((label, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 border-4 ${step > idx + 1 ? 'bg-emerald-500 text-white border-emerald-600' : step === idx + 1 ? 'bg-amber-500 text-slate-900 border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
              {step > idx + 1 ? <CheckCircle size={20} /> : idx + 1}
            </div>
            <span className="text-xs font-semibold mt-2 text-slate-400 uppercase tracking-wide hidden sm:block">{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-xl border border-slate-700 overflow-hidden min-h-[400px]">
        {/* Step 1: Empathize */}
        {step === 1 && (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="mr-3 text-blue-500" /> Tahap 1: Empathize
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Siapa target penggunamu di sekolah?</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Siswa', 'Guru', 'Staff TU'].map((role) => (
                    <button
                      key={role}
                      onClick={() => handleInputChange('user', role)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${projectData.user === role ? 'border-amber-500 bg-amber-900/20 text-amber-400 font-bold' : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-500 hover:text-white'}`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Apa keluhan utama mereka? (Observasi)</label>
                <textarea 
                  className="w-full p-4 rounded-xl bg-slate-900 border border-slate-600 focus:border-amber-500 focus:outline-none h-32 resize-none text-white placeholder-slate-500"
                  placeholder="Contoh: Siswa sering mengeluh antrian perpustakaan terlalu lama saat jam istirahat..."
                  value={projectData.masalah}
                  onChange={(e) => handleInputChange('masalah', e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  disabled={!projectData.user || !projectData.masalah}
                  onClick={() => setStep(2)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Lanjut ke Define
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Define & Ideate Combined for Flow */}
        {step === 2 && (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="mr-3 text-amber-500" /> Tahap 2 & 3: Define & Ideate
            </h3>
            <div className="bg-slate-900/50 p-4 rounded-lg mb-6 border border-slate-700">
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Masalah User:</p>
              <p className="font-medium text-slate-300 italic">"{projectData.masalah}"</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nama Solusi / Aplikasi AI Kamu:</label>
                <input 
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-amber-500 outline-none text-white"
                  placeholder="Contoh: KantinPintar Bot"
                  value={projectData.solusi}
                  onChange={(e) => handleInputChange('solusi', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Teknologi AI yang digunakan:</label>
                <select 
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-amber-500 outline-none text-white"
                  value={projectData.teknologi}
                  onChange={(e) => handleInputChange('teknologi', e.target.value)}
                >
                  <option value="Chatbot (NLP)">Natural Language Processing (Chatbot/Suara)</option>
                  <option value="Computer Vision">Computer Vision (Kamera Cerdas/Scan Wajah)</option>
                  <option value="Data Prediction">Data Analytics (Prediksi Tren/Nilai)</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white font-medium">Kembali</button>
                <button 
                  disabled={!projectData.solusi}
                  onClick={() => setStep(3)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-500 disabled:opacity-50 transition"
                >
                  Lanjut ke Prototype
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Loading/Generating */}
        {step === 3 && (
          <div className="p-12 flex flex-col items-center justify-center text-center h-[400px]">
            {!isGenerating ? (
               <div className="animate-fade-in w-full max-w-md">
                 <h3 className="text-2xl font-bold text-white mb-4">Siap Membuat Prototype?</h3>
                 <p className="text-slate-400 mb-8">Sistem akan menyusun kartu konsep berdasarkan input data yang kamu berikan.</p>
                 <button 
                  onClick={generatePrototype}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
                 >
                   <Cpu size={24} />
                   <span>Generate Konsep AI</span>
                 </button>
               </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-amber-900/30 border-t-amber-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-amber-400 font-medium animate-pulse">Menghubungkan neuron artificial...</p>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && (
          <div className="p-0 md:flex h-full">
            {/* Left Side: Summary */}
            <div className="md:w-1/2 p-8 bg-slate-900/50 border-r border-slate-700 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wide mb-2">Prototype Selesai</span>
                <h3 className="text-3xl font-bold text-white">{projectData.solusi}</h3>
                <p className="text-slate-400 mt-1">Solusi AI untuk {projectData.user}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-slate-800 p-2 rounded shadow-sm mr-3 border border-slate-700"><Users size={16} className="text-blue-400"/></div>
                  <div><p className="text-xs text-slate-500 uppercase">User Problem</p><p className="text-sm font-medium text-slate-300">{projectData.masalah}</p></div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-800 p-2 rounded shadow-sm mr-3 border border-slate-700"><Cpu size={16} className="text-amber-400"/></div>
                  <div><p className="text-xs text-slate-500 uppercase">Technology</p><p className="text-sm font-medium text-slate-300">{projectData.teknologi}</p></div>
                </div>
              </div>

              <button onClick={resetSim} className="w-full border border-slate-600 text-slate-400 font-bold py-3 rounded-lg hover:bg-slate-800 hover:text-white transition">
                Buat Proyek Baru
              </button>
            </div>

            {/* Right Side: Visual Mockup */}
            <div className="md:w-1/2 bg-slate-900 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              {/* Phone Mockup */}
              <div className="bg-slate-800 border-4 border-slate-700 w-64 h-[400px] rounded-[2rem] shadow-2xl overflow-hidden relative z-10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl border-b border-x border-slate-700"></div>
                
                {/* Screen Content */}
                <div className="h-full bg-slate-100 flex flex-col">
                  {/* App Header */}
                  <div className="bg-amber-500 h-20 flex items-center justify-center pt-4 shadow-sm">
                    <h4 className="text-slate-900 font-bold px-2 text-center text-sm">{projectData.solusi}</h4>
                  </div>
                  
                  {/* App Body */}
                  <div className="flex-1 p-4 flex flex-col items-center justify-center space-y-4">
                    {projectData.teknologi.includes('Chatbot') ? (
                      <>
                         <div className="w-full bg-white p-3 rounded-lg rounded-tl-none text-xs text-slate-600 shadow-sm border border-slate-200">Halo! Ada yang bisa saya bantu?</div>
                         <div className="w-full bg-amber-100 p-3 rounded-lg rounded-tr-none text-xs text-slate-800 self-end text-right shadow-sm border border-amber-200">Saya mau tanya jadwal ujian.</div>
                         <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg"><MessageSquare size={20}/></div>
                      </>
                    ) : projectData.teknologi.includes('Vision') ? (
                      <>
                        <div className="w-full h-32 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-400 relative">
                           <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-16 h-16 border-2 border-green-500 rounded flex items-center justify-center animate-pulse"></div>
                           </div>
                           <span className="text-xs text-slate-500">Scanning Object...</span>
                        </div>
                        <div className="w-full bg-green-100 p-2 rounded text-center text-green-800 text-xs font-bold border border-green-200">Teridentifikasi: Seragam Lengkap</div>
                      </>
                    ) : (
                      <>
                         <div className="w-full h-24 flex items-end justify-center space-x-2 pb-2 border-b border-slate-300">
                           <div className="w-4 h-10 bg-blue-300 rounded-t"></div>
                           <div className="w-4 h-16 bg-blue-500 rounded-t"></div>
                           <div className="w-4 h-8 bg-blue-400 rounded-t"></div>
                         </div>
                         <p className="text-center text-xs text-slate-500">Analisis Data Siswa</p>
                      </>
                    )}
                  </div>

                  {/* App Footer */}
                  <div className="h-12 bg-slate-200 border-t border-slate-300 flex justify-around items-center">
                    <div className="w-8 h-1 bg-slate-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EvaluasiView = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      q: "Tahapan pertama dalam Design Thinking adalah...",
      options: ["Define", "Prototype", "Empathize", "Coding"],
      correct: 2
    },
    {
      q: "Apa tujuan dari tahapan 'Prototype'?",
      options: ["Menjual produk", "Membuat model visual sederhana", "Membuat kode program final", "Mencari investor"],
      correct: 1
    },
    {
      q: "Manakah yang merupakan contoh penerapan AI Computer Vision di sekolah?",
      options: ["Chatbot informasi PR", "Prediksi nilai siswa", "Kamera pendeteksi masker/seragam", "Excel rumus otomatis"],
      correct: 2
    },
    {
      q: "Pendekatan 'Joyful Learning' berarti...",
      options: ["Belajar yang menegangkan", "Belajar sambil bermain game saja", "Belajar yang menyenangkan dan bermakna", "Belajar tanpa guru"],
      correct: 2
    }
  ];

  const handleAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    if (idx === questions[currentQ].correct) {
      setScore(score + 25);
    }
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-2xl min-h-[60vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Evaluasi Pemahaman</h2>
        <p className="text-slate-400">Seberapa jauh kamu memahami materi hari ini?</p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-slate-700">
        {!showResult ? (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-slate-400">Soal {currentQ + 1} dari {questions.length}</span>
              <span className="px-3 py-1 bg-amber-900/30 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">Skor: {score}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-8 leading-relaxed">{questions[currentQ].q}</h3>
            
            <div className="space-y-3">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all ${
                    selectedAnswer === idx 
                      ? idx === questions[currentQ].correct 
                        ? 'bg-emerald-900/30 border-emerald-500 text-emerald-400' 
                        : 'bg-rose-900/30 border-rose-500 text-rose-400'
                      : 'border-slate-700 bg-slate-900/50 hover:border-amber-500/50 hover:text-white text-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="mb-6 inline-flex p-4 bg-amber-900/20 text-amber-500 rounded-full border border-amber-500/30">
              <Award size={48} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Selesai!</h3>
            <p className="text-slate-400 mb-6">Kamu telah menyelesaikan kuis evaluasi.</p>
            
            <div className="text-5xl font-extrabold text-white mb-8">{score}<span className="text-2xl text-slate-500 font-normal">/100</span></div>
            
            <button 
              onClick={resetQuiz}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition shadow-lg"
            >
              Coba Lagi
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi9: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 -mt-4">
      {/* Navigation */}
      <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activeTab === 'home' && <HomeView onStart={() => setActiveTab('materi')} />}
        {activeTab === 'materi' && <MateriView />}
        {activeTab === 'simulasi' && <SimulasiView />}
        {activeTab === 'evaluasi' && <EvaluasiView />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
       `}</style>
    </div>
  );
};

export default Materi9;
