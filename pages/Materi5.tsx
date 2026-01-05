import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Scale, 
  Users, 
  ChevronRight, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Award, 
  Activity,
  Briefcase
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'materi', label: 'Materi Profesi' },
        { id: 'simulasi', label: 'Simulasi Agensi' },
        { id: 'kuis', label: 'Evaluasi' },
    ];

    return (
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
            <div className="container mx-auto h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
                        <Brain className="text-white" size={16} />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 5</h1>
                        <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Profesi AI</p>
                    </div>
                </div>

                <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                                activeTab === item.id 
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

// 1. Hero/Home Section
const HomeSection = ({ onStart }: { onStart: () => void }) => (
    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden animate-[fadeIn_0.5s]">
        {/* Abstract Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="text-center max-w-4xl px-6 relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800/50 backdrop-blur-md text-indigo-300 text-sm font-medium border border-indigo-500/30">
                Pertemuan 7: Literasi & Etika KA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Membangun Masa Depan dengan <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Kecerdasan Artifisial</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Jelajahi karir sebagai AI Engineer, Data Scientist, hingga AI Ethicist. 
                Temukan potensi terbaikmu melalui pembelajaran mendalam yang bermakna.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={onStart} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
                    Mulai Belajar
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

// 2. Materi Section
const MateriSection = () => {
    const professions = [
        {
            title: "AI Engineer",
            icon: <Code size={40} className="text-blue-400" />,
            desc: "Sang Arsitek Sistem. Membangun, menguji, dan memelihara model AI agar dapat bekerja dalam aplikasi nyata.",
            skills: ["Python & Java", "TensorFlow/PyTorch", "Cloud Computing", "Algoritma"],
            color: "border-blue-500/30 bg-blue-900/10 hover:border-blue-500/60"
        },
        {
            title: "Data Scientist",
            icon: <Terminal size={40} className="text-emerald-400" />,
            desc: "Sang Detektif Data. Mengolah data mentah menjadi wawasan strategi menggunakan statistik dan machine learning.",
            skills: ["Statistika & Probabilitas", "Visualisasi Data (Tableau)", "SQL & NoSQL", "Analisis Bisnis"],
            color: "border-emerald-500/30 bg-emerald-900/10 hover:border-emerald-500/60"
        },
        {
            title: "AI Ethicist",
            icon: <Scale size={40} className="text-rose-400" />,
            desc: "Sang Penjaga Moral. Memastikan AI adil, tidak bias, aman, dan mematuhi hukum serta norma kemanusiaan.",
            skills: ["Filsafat & Etika", "Hukum Teknologi", "Sosiologi", "Pemahaman Bias Algoritma"],
            color: "border-rose-500/30 bg-rose-900/10 hover:border-rose-500/60"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Profesi Masa Depan</h2>
                <p className="text-slate-400">Pilih jalur karir yang sesuai dengan minat dan bakatmu.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {professions.map((prof, idx) => (
                    <div key={idx} className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${prof.color}`}>
                        <div className="mb-6 p-4 rounded-full bg-slate-900/50 w-fit border border-slate-700/50">
                            {prof.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{prof.title}</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed text-sm h-auto md:h-24">
                            {prof.desc}
                        </p>
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Skill Wajib:</p>
                            <div className="flex flex-wrap gap-2">
                                {prof.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1 bg-slate-900/80 rounded-md text-xs font-medium text-slate-300 border border-slate-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Simulasi (Interactive Game)
const SimulasiSection = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<{ type: string, msg: string } | null>(null);

    const cases = [
        {
            client: "Bank Nasional",
            problem: "Kami punya data nasabah 10 tahun terakhir. Kami ingin tahu pola nasabah mana yang kemungkinan besar akan macet kreditnya bulan depan.",
            correctRole: "Data Scientist",
            options: [
                { role: "AI Engineer", action: "Membangun server baru." },
                { role: "Data Scientist", action: "Analisis Prediktif Data." },
                { role: "AI Ethicist", action: "Audit keamanan data." }
            ]
        },
        {
            client: "Aplikasi Media Sosial",
            problem: "Algoritma rekomendasi kami secara tidak sengaja memblokir postingan dari kelompok minoritas tertentu padahal tidak melanggar aturan.",
            correctRole: "AI Ethicist",
            options: [
                { role: "AI Engineer", action: "Menambah kapasitas RAM server." },
                { role: "Data Scientist", action: "Membuat visualisasi grafik user." },
                { role: "AI Ethicist", action: "Audit Bias Algoritma." }
            ]
        },
        {
            client: "Start-up Logistik",
            problem: "Model AI untuk rute pengiriman sudah jadi, tapi kami butuh sistem ini bisa berjalan otomatis 24 jam di cloud dan terhubung ke aplikasi kurir.",
            correctRole: "AI Engineer",
            options: [
                { role: "AI Engineer", action: "Deployment & System Integration." },
                { role: "Data Scientist", action: "Membersihkan data alamat." },
                { role: "AI Ethicist", action: "Membuat aturan privasi kurir." }
            ]
        }
    ];

    const handleChoice = (selectedRole: string) => {
        if (selectedRole === cases[step].correctRole) {
            setFeedback({ type: 'success', msg: `Tepat! ${cases[step].correctRole} adalah ahli yang dibutuhkan.` });
            setScore(score + 100);
        } else {
            setFeedback({ type: 'error', msg: `Kurang tepat. Kasus ini lebih cocok untuk ${cases[step].correctRole}.` });
        }
    };

    const nextStep = () => {
        setFeedback(null);
        setStep(step + 1);
    };

    const resetSim = () => {
        setStep(0);
        setScore(0);
        setFeedback(null);
    }

    if (step >= cases.length) {
        return (
            <div className="py-12 px-6 container mx-auto text-center animate-[fadeIn_0.5s]">
                <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur p-10 rounded-2xl border border-indigo-500/30">
                    <Award size={64} className="mx-auto text-yellow-400 mb-6" />
                    <h2 className="text-3xl font-bold mb-4 text-white">Simulasi Selesai!</h2>
                    <p className="text-xl mb-8 text-slate-200">Skor Kinerja Kamu: <span className="text-indigo-400 font-bold">{score}</span> / 300</p>
                    <p className="text-slate-400 mb-8">
                        {score === 300 ? "Luar biasa! Kamu memiliki pemahaman mendalam tentang peran di dunia AI." : "Bagus! Terus pelajari perbedaan setiap profesi agar makin paham."}
                    </p>
                    <button onClick={resetSim} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors">
                        Main Lagi
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2 text-white">Simulasi: AI Talent Agency</h2>
                    <p className="text-slate-400">Kamu adalah manajer. Pilih ahli yang tepat untuk menyelesaikan masalah klien.</p>
                </div>

                {/* Game Board */}
                <div className="bg-slate-800/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-700 relative min-h-[400px]">
                    {/* Header Board */}
                    <div className="bg-slate-900/50 p-6 border-b border-slate-700 flex justify-between items-center">
                        <span className="text-sm font-mono text-indigo-400">KASUS #{step + 1}</span>
                        <span className="font-bold text-white">Score: {score}</span>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                                <Users size={32} className="text-slate-300"/>
                            </div>
                            <div className="bg-slate-900/80 p-6 rounded-r-xl rounded-bl-xl text-slate-200 w-full border border-slate-700/50 relative">
                                <div className="absolute -left-2 top-6 w-4 h-4 bg-slate-900 border-l border-b border-slate-700/50 transform rotate-45"></div>
                                <h4 className="font-bold text-indigo-300 mb-2">{cases[step].client}</h4>
                                <p className="text-lg leading-relaxed">"{cases[step].problem}"</p>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {cases[step].options.map((opt, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => !feedback && handleChoice(opt.role)}
                                    disabled={!!feedback}
                                    className={`p-4 rounded-xl border text-left transition-all ${
                                        feedback 
                                        ? (opt.role === cases[step].correctRole ? 'bg-emerald-900/40 border-emerald-500' : 'bg-slate-800/50 border-slate-700 opacity-50')
                                        : 'bg-slate-800/50 border-slate-700 hover:border-indigo-500 hover:bg-indigo-900/20 text-slate-300 hover:text-white'
                                    }`}
                                >
                                    <span className="block font-bold mb-1">{opt.role}</span>
                                    <span className="text-sm text-slate-400">{opt.action}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Feedback Overlay */}
                    {feedback && (
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6 animate-[fadeIn_0.3s]">
                            <div className="text-center max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${feedback.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                                    {feedback.type === 'success' ? <CheckCircle size={32} /> : <AlertTriangle size={32} />}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">{feedback.type === 'success' ? 'Kerja Bagus!' : 'Ups...'}</h3>
                                <p className="text-slate-300 mb-6">{feedback.msg}</p>
                                <button onClick={nextStep} className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-colors shadow-lg">
                                    Lanjut
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// 4. Quiz Section
const QuizSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            q: "Manakah kombinasi hard skill yang paling tepat untuk seorang AI Engineer?",
            opts: [
                "Public Speaking & Desain Grafis",
                "Python, TensorFlow & Algoritma",
                "Akuntansi & Excel",
                "Sosiologi & Hukum"
            ],
            correct: 1 // Index of correct answer
        },
        {
            id: 2,
            q: "Siapa yang bertanggung jawab memastikan AI tidak rasis atau bias?",
            opts: [
                "Data Scientist",
                "AI Engineer",
                "AI Ethicist",
                "Cloud Architect"
            ],
            correct: 2
        },
        {
            id: 3,
            q: "Seorang Data Scientist bekerja seperti...",
            opts: [
                "Detektif yang mencari pola dalam data",
                "Tukang bangunan yang merakit server",
                "Polisi yang mengawasi hukum",
                "Seniman yang menggambar robot"
            ],
            correct: 0
        }
    ];

    const handleSelect = (qId: number, optIdx: number) => {
        setAnswers({...answers, [qId]: optIdx});
    };

    const handleSubmit = () => {
        let currentScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) currentScore += 1;
        });
        setScore(currentScore);
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2 text-white">Evaluasi Pemahaman</h2>
                    <p className="text-slate-400">Jawab pertanyaan berikut untuk menguji pengetahuanmu.</p>
                </div>

                <div className="space-y-6">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
                            <h4 className="text-lg font-semibold mb-4 text-white"><span className="text-indigo-400 mr-2">{idx + 1}.</span> {q.q}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {q.opts.map((opt, oIdx) => (
                                    <button
                                        key={oIdx}
                                        disabled={submitted}
                                        onClick={() => handleSelect(q.id, oIdx)}
                                        className={`p-3 text-left rounded-lg text-sm border transition-all ${
                                            answers[q.id] === oIdx 
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                            : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white'
                                        } ${submitted && oIdx === q.correct ? '!bg-emerald-600 !border-emerald-500 !text-white' : ''}
                                          ${submitted && answers[q.id] === oIdx && oIdx !== q.correct ? '!bg-rose-600 !border-rose-500 !text-white' : ''}
                                        `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {!submitted ? (
                    <div className="mt-8 text-center">
                        <button 
                            onClick={handleSubmit}
                            disabled={Object.keys(answers).length < questions.length}
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Kirim Jawaban
                        </button>
                    </div>
                ) : (
                    <div className="mt-8 p-6 bg-slate-800/50 border border-indigo-500/50 rounded-xl text-center animate-bounce-in">
                        <h3 className="text-2xl font-bold mb-2 text-white">Hasil Evaluasi</h3>
                        <p className="text-lg text-slate-300">Kamu menjawab benar <span className="text-emerald-400 font-bold">{score}</span> dari {questions.length} soal.</p>
                        <div className="mt-4">
                            {score === questions.length 
                                ? <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Sempurna! Kamu siap jadi ahli AI.</span> 
                                : <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Coba pelajari materi lagi ya.</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---

const Materi5: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activeTab === 'home' && <HomeSection onStart={() => setActiveTab('materi')} />}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'simulasi' && <SimulasiSection />}
        {activeTab === 'kuis' && <QuizSection />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
       `}</style>
    </div>
  );
};

export default Materi5;