import React, { useState } from 'react';
import { 
  Brain, 
  BookOpen, 
  Code, 
  CheckCircle, 
  Send, 
  AlertCircle, 
  Edit,
  Terminal,
  Activity,
  FileText,
  HelpCircle,
  Play
} from 'lucide-react';

// --- ICONS MAPPING ---
// Using Lucide icons directly in components.

// --- DATA ---
const materials = [
    { title: "Role (Peran)", icon: "🎭", desc: "Berikan identitas pada AI.", example: "'Bertindaklah sebagai Ahli Gizi...'" },
    { title: "Context (Konteks)", icon: "🌍", desc: "Jelaskan latar belakang masalah.", example: "'Saya sedang diet rendah gula...'" },
    { title: "Task (Tugas)", icon: "⚡", desc: "Instruksi spesifik yang harus dilakukan.", example: "'Buatkan menu makan malam...'" },
    { title: "Format (Bentuk)", icon: "📝", desc: "Bagaimana output ditampilkan.", example: "'Sajikan dalam bentuk tabel...'" },
];

const quizQuestions = [
    { q: "Apa kepanjangan dari RCTF dalam struktur prompt?", options: ["Role, Context, Task, Format", "Run, Code, Test, Fix", "Read, Create, Think, Fast", "Role, Chat, Text, File"], ans: 0 },
    { q: "Manakah contoh 'Role' yang baik?", options: ["Buatkan saya puisi.", "Saya lapar.", "Bertindaklah sebagai Chef profesional.", "Tuliskan resep."], ans: 2 },
    { q: "Mengapa kita perlu memberikan 'Context' pada AI?", options: ["Agar AI bingung.", "Agar jawaban lebih spesifik dan relevan.", "Agar AI bekerja lebih lambat.", "Tidak perlu, itu buang waktu."], ans: 1 },
    { q: "Instruksi: 'Sajikan dalam bentuk tabel'. Ini termasuk elemen?", options: ["Role", "Context", "Task", "Format"], ans: 3 },
    { q: "Sikap 'Mindful' saat menggunakan AI berarti...", options: ["Mengcopy paste tanpa membaca.", "Sadar penuh, cek fakta, dan beretika.", "Menggunakan AI untuk mencontek.", "Marah pada AI jika salah."], ans: 1 },
];

// --- COMPONENTS ---

const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 7</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Prompt Engineering</p>
        </div>
      </div>
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
            { id: 'home', label: 'Beranda', icon: Brain },
            { id: 'materi', label: 'Materi', icon: BookOpen },
            { id: 'lab', label: 'Lab', icon: Terminal },
            { id: 'lkpd', label: 'LKPD', icon: FileText },
            { id: 'kuis', label: 'Kuis', icon: HelpCircle },
        ].map((item) => (
            <button 
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${activePage === item.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
                <item.icon size={14} className="hidden sm:block" />
                {item.label}
            </button>
        ))}
      </nav>
    </div>
  </header>
);

const HomeSection = ({ setPage }: { setPage: (p: string) => void }) => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-10 animate-[fadeIn_0.5s] relative rounded-2xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-sm mb-4">
                Pertemuan 10 & 11 • Fase E
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Koding & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Kecerdasan Artifisial</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Selamat datang di era baru. Pelajari cara berkomunikasi dengan mesin melalui pendekatan <span className="text-white font-semibold">Deep Learning</span>: Mindful, Meaningful, & Joyful.
            </p>
            <div className="flex gap-4 justify-center">
                <button onClick={() => setPage('materi')} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/20">
                    Mulai Belajar
                </button>
                <button onClick={() => setPage('lab')} className="px-8 py-3 bg-slate-800/50 backdrop-blur hover:bg-slate-800 rounded-full font-bold transition-all border border-slate-600 text-white">
                    Coba Simulator
                </button>
            </div>
            
            <div className="mt-16 p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-emerald-500/20 max-w-lg mx-auto">
                <h3 className="text-emerald-400 font-bold mb-2 flex items-center justify-center gap-2">
                    <Activity size={18} /> Teknik STOP (Mindfulness)
                </h3>
                <p className="text-sm text-slate-300">
                    Sebelum mulai: <b>S</b>top sejenak, <b>T</b>ake a breath (tarik napas), <b>O</b>bserve (amati perasaanmu), <b>P</b>roceed (lanjutkan). Siapkan pikiranmu untuk menyerap ilmu baru.
                </p>
            </div>
        </div>
    </div>
);

const MateriSection = () => (
    <div className="container mx-auto px-4 animate-[fadeIn_0.5s]">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-white">Struktur Prompt Engineering</h2>
            <p className="text-slate-400">Rumus rahasia agar AI patuh padamu: <span className="text-indigo-400 font-bold">RCTF</span></p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl hover:bg-slate-800 transition-all group border-t-4 border-t-indigo-500 border border-slate-700/50">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                    <div className="bg-slate-900/50 p-3 rounded border border-dashed border-slate-700">
                        <span className="text-xs text-indigo-400 font-mono">Contoh:</span>
                        <p className="text-sm italic text-slate-300">"{item.example}"</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-slate-800/50 backdrop-blur p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-700">
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Meaningful Learning</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                    Kecerdasan Artifisial hanyalah "Kalkulator Kata". Kualitas jawaban yang kamu dapatkan (Output) sangat bergantung pada kualitas pertanyaan yang kamu berikan (Input). Inilah yang disebut prinsip <b className="text-white">Garbage In, Garbage Out</b>.
                </p>
                <p className="text-slate-300 leading-relaxed">
                    Di dunia kerja, kemampuan menyusun prompt (Prompt Engineering) adalah skill komunikasi abad 21 yang sangat mahal harganya.
                </p>
            </div>
            <div className="w-full md:w-1/3 bg-slate-900 p-4 rounded-xl border border-slate-700">
                <code className="text-xs text-emerald-400 font-mono block">
                    // Bad Prompt<br/>
                    Input: "Buatin surat."<br/>
                    Output: [Surat apa? Untuk siapa? Bahasa apa?]<br/><br/>
                    // Good Prompt (RCTF)<br/>
                    Input: "Sebagai HRD (R), buat surat penolakan lamaran (T) untuk pelamar magang (C) dengan nada sopan & menyemangati (F)."
                </code>
            </div>
        </div>
    </div>
);

const LabSection = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "ai", text: "Halo! Saya AI Simulator MWS. Silakan masukkan prompt untuk saya uji kualitasnya." }
    ]);
    const [analysis, setAnalysis] = useState<{score: number, hasRole: boolean, hasContext: boolean, hasTask: boolean, hasFormat: boolean, feedback: string} | null>(null);

    const checkPrompt = () => {
        if (!input.trim()) return;

        // Simple keyword analysis logic (Simulasi)
        const lower = input.toLowerCase();
        const hasRole = lower.includes("sebagai") || lower.includes("bertindak") || lower.includes("peran");
        const hasContext = lower.includes("karena") || lower.includes("untuk") || lower.includes("sedang") || lower.includes("latar");
        const hasTask = lower.includes("buat") || lower.includes("tulis") || lower.includes("jelaskan") || lower.includes("susun");
        const hasFormat = lower.includes("tabel") || lower.includes("daftar") || lower.includes("poin") || lower.includes("surat") || lower.includes("paragraf");

        const score = [hasRole, hasContext, hasTask, hasFormat].filter(Boolean).length;
        
        let feedback = "";
        let aiResponse = "";

        if (score <= 1) {
            feedback = "Prompt terlalu sederhana. Coba tambahkan Peran (Role) dan Format yang jelas.";
            aiResponse = "Maaf, saya kurang paham konteksnya. Bisa diperjelas permintaan Anda?";
        } else if (score <= 3) {
            feedback = "Sudah cukup baik, tapi bisa lebih spesifik lagi agar hasilnya sempurna.";
            aiResponse = "Oke, saya mengerti sebagian instruksi Anda. Ini draf kasarnya...";
        } else {
            feedback = "Sempurna! Struktur RCTF terpenuhi.";
            aiResponse = "Tentu! Berikut adalah hasil lengkap sesuai permintaan spesifik Anda dengan gaya bahasa yang diminta.";
        }

        const newMsgUser = { sender: "user", text: input };
        const newMsgAi = { sender: "ai", text: aiResponse };

        setMessages(prev => [...prev, newMsgUser, newMsgAi]);
        setAnalysis({ score, hasRole, hasContext, hasTask, hasFormat, feedback });
        setInput("");
    };

    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s] h-[calc(100vh-200px)] flex flex-col">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Laboratorium Prompt Engineering</h2>
                <p className="text-sm text-slate-400">Latih skill-mu di sini (Joyful Learning)</p>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden min-h-0">
                {/* Chat Area */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur rounded-2xl flex flex-col overflow-hidden border border-slate-700">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                                    <strong>{msg.sender === 'user' ? 'Kamu' : 'AI'}:</strong> {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-slate-900 border-t border-slate-700 flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && checkPrompt()}
                            placeholder="Ketik prompt di sini (misal: Bertindaklah sebagai...)"
                            className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <button onClick={checkPrompt} className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-lg transition-colors text-white">
                            <Send size={20}/>
                        </button>
                    </div>
                </div>

                {/* Analysis Panel */}
                <div className="w-full md:w-80 bg-slate-800/50 backdrop-blur rounded-2xl p-6 border-l-4 border-indigo-500 overflow-y-auto h-full">
                    <h3 className="font-bold mb-4 flex items-center gap-2 text-white"> <Terminal size={18}/> Analisis Prompt</h3>
                    {analysis ? (
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className={`text-4xl font-bold ${analysis.score === 4 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                    {analysis.score}/4
                                </div>
                                <p className="text-xs text-slate-400 mt-1">Skor RCTF</p>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                                <div className={`flex justify-between p-2 rounded ${analysis.hasRole ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'}`}>
                                    <span>Role</span> <span>{analysis.hasRole ? '✔' : '✘'}</span>
                                </div>
                                <div className={`flex justify-between p-2 rounded ${analysis.hasContext ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'}`}>
                                    <span>Context</span> <span>{analysis.hasContext ? '✔' : '✘'}</span>
                                </div>
                                <div className={`flex justify-between p-2 rounded ${analysis.hasTask ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'}`}>
                                    <span>Task</span> <span>{analysis.hasTask ? '✔' : '✘'}</span>
                                </div>
                                <div className={`flex justify-between p-2 rounded ${analysis.hasFormat ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'}`}>
                                    <span>Format</span> <span>{analysis.hasFormat ? '✔' : '✘'}</span>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-600">
                                <p className="text-xs italic text-slate-300">"{analysis.feedback}"</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500 italic text-center mt-10">
                            Kirim prompt untuk melihat analisis RCTF secara otomatis.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

const LKPDSection = () => {
    const [formData, setFormData] = useState({
        nama: '',
        kelas: '',
        promptAwal: '',
        revisi: '',
        refleksi: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Data LKPD berhasil disimpan (Simulasi). Silakan screenshot halaman ini untuk laporan.");
    };

    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s]">
            <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                    <h2 className="text-2xl font-bold text-white">LKPD Digital</h2>
                    <span className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded text-xs">Pertemuan 10</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Nama Siswa / Kelompok</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-2 focus:border-indigo-500 focus:outline-none text-white" 
                                value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} required/>
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-1">Kelas</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-2 focus:border-indigo-500 focus:outline-none text-white" 
                                value={formData.kelas} onChange={(e) => setFormData({...formData, kelas: e.target.value})} required/>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1 font-bold">Tantangan 1: Prompt Awal</label>
                        <p className="text-xs text-slate-500 mb-2">Tuliskan prompt kasar yang belum menggunakan teknik RCTF.</p>
                        <textarea rows={3} className="w-full bg-slate-900 border border-slate-600 rounded p-2 focus:border-indigo-500 focus:outline-none text-white"
                            value={formData.promptAwal} onChange={(e) => setFormData({...formData, promptAwal: e.target.value})}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1 font-bold">Tantangan 2: Iterasi (Perbaikan)</label>
                        <p className="text-xs text-slate-500 mb-2">Ubah prompt di atas menggunakan struktur Role, Context, Task, Format.</p>
                        <textarea rows={3} className="w-full bg-slate-900 border border-emerald-600/50 rounded p-2 focus:border-emerald-500 focus:outline-none text-white"
                            value={formData.revisi} onChange={(e) => setFormData({...formData, revisi: e.target.value})}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1 font-bold">Refleksi</label>
                        <p className="text-xs text-slate-500 mb-2">Apa perbedaan hasil output antara prompt awal dan revisi?</p>
                        <textarea rows={2} className="w-full bg-slate-900 border border-slate-600 rounded p-2 focus:border-indigo-500 focus:outline-none text-white"
                            value={formData.refleksi} onChange={(e) => setFormData({...formData, refleksi: e.target.value})}></textarea>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2">
                            <CheckCircle size={18} /> Simpan LKPD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const QuizSection = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (idx: number) => {
        if (idx === quizQuestions[currentQ].ans) {
            setScore(score + 20);
        }
        
        if (currentQ < quizQuestions.length - 1) {
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
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s] flex items-center justify-center min-h-[60vh]">
            <div className="max-w-xl w-full bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
                {!showResult ? (
                    <>
                        <div className="flex justify-between text-xs text-indigo-400 uppercase tracking-widest mb-6">
                            <span>Soal {currentQ + 1} dari {quizQuestions.length}</span>
                            <span>Asesmen Formatif</span>
                        </div>
                        <h3 className="text-xl font-bold mb-8 text-white">{quizQuestions[currentQ].q}</h3>
                        <div className="space-y-3">
                            {quizQuestions[currentQ].options.map((opt, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => handleAnswer(idx)}
                                    className="w-full text-left p-4 rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-700 hover:border-indigo-500"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 h-1 w-full bg-slate-800 rounded-full">
                            <div className="h-1 bg-indigo-500 rounded-full transition-all duration-300" style={{width: `${((currentQ)/quizQuestions.length)*100}%`}}></div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="mb-6 inline-block p-6 rounded-full bg-slate-800 border-4 border-indigo-500">
                            <span className="text-5xl font-bold text-indigo-400">{score}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                            {score === 100 ? "Luar Biasa! 🎉" : score >= 80 ? "Hebat! 👍" : "Belajar Lagi Yuk! 💪"}
                        </h3>
                        <p className="text-slate-400 mb-8">Nilai Penguasaan Konsep Prompting Anda.</p>
                        <button onClick={resetQuiz} className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-bold text-white transition-colors">
                            Coba Lagi
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- MAIN COMPONENT ---

const Materi7: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection />}
        {activePage === 'lab' && <LabSection />}
        {activePage === 'lkpd' && <LKPDSection />}
        {activePage === 'kuis' && <QuizSection />}
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

export default Materi7;
