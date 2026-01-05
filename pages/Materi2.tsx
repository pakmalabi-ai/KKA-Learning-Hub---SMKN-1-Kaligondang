import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Activity, 
  Share2, 
  Layers, 
  Cpu, 
  Brain, 
  Database, 
  Plus, 
  Link as LinkIcon, 
  CheckCircle, 
  Play, 
  Pause, 
  ChevronRight
} from 'lucide-react';

// --- TIPE DATA ---
type Entity = {
  id: number;
  name: string;
  attributes: string[];
  x: number;
  y: number;
};

type Relation = {
  id: number;
  from: number;
  to: number;
  type: string; // 1:1, 1:N, M:N
};

// --- SUB-COMPONENTS ---

function HomeSection({ changeTab }: { changeTab: (t: string) => void }) {
  const [breathing, setBreathing] = useState(false);
  const [message, setMessage] = useState("Siap untuk belajar?");

  useEffect(() => {
    let interval: any;
    if (breathing) {
      setMessage("Tarik napas... (Inhale)");
      setTimeout(() => setMessage("Tahan sejenak... (Hold)"), 3000);
      setTimeout(() => setMessage("Hembuskan perlahan... (Exhale)"), 6000);
      interval = setInterval(() => {
        setMessage("Tarik napas... (Inhale)");
        setTimeout(() => setMessage("Tahan sejenak... (Hold)"), 3000);
        setTimeout(() => setMessage("Hembuskan perlahan... (Exhale)"), 6000);
      }, 9000);
    } else {
      setMessage("Tekan tombol untuk memulai mindfulness.");
    }
    return () => clearInterval(interval);
  }, [breathing]);

  return (
    <div className="max-w-4xl mx-auto pt-4">
      {/* Hero Section */}
      <div className="text-center mb-16 pt-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">
          Analisis Data & AI
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Selamat datang di portal pembelajaran masa depan. Mari kita pelajari bagaimana 
          data membentuk dunia digital kita melalui pendekatan 
          <span className="text-indigo-400 font-semibold"> Deep Learning</span>.
        </p>
      </div>

      {/* Mindfulness Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Brain size={100} />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-indigo-400" />
              Zona Mindfull
            </h3>
            <p className="text-slate-400 mb-6">
              Sebelum masuk ke materi teknis, mari kita tenangkan pikiran sejenak agar fokus meningkat.
              Teknik STOP (Stop, Take a breath, Observe, Proceed).
            </p>
            <button 
              onClick={() => setBreathing(!breathing)}
              className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                breathing 
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500 hover:bg-rose-500/30' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {breathing ? <><Pause size={18}/> Stop</> : <><Play size={18}/> Mulai Fokus</>}
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className={`relative flex items-center justify-center w-40 h-40 rounded-full transition-all duration-[3000ms] ${breathing ? 'scale-125 bg-indigo-500/20' : 'bg-slate-700/30'}`}>
              <div className={`absolute w-32 h-32 rounded-full bg-indigo-500/30 blur-xl transition-all duration-[3000ms] ${breathing ? 'scale-150 opacity-100' : 'scale-90 opacity-0'}`}></div>
              <Brain size={48} className={`text-indigo-300 transition-all duration-[3000ms] ${breathing ? 'scale-110' : 'scale-100'}`} />
            </div>
            <p className="mt-6 text-indigo-300 font-medium animate-pulse">{message}</p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div onClick={() => changeTab('materi')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <BookOpen className="text-blue-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Materi Dasar</h3>
          <p className="text-slate-400 text-sm">Pelajari konsep Basis Data, ERD, Entitas dan Atribut secara bermakna.</p>
        </div>

        <div onClick={() => changeTab('simulasi')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
            <Share2 className="text-purple-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Laboratorium ERD</h3>
          <p className="text-slate-400 text-sm">Simulasi interaktif merancang struktur database sekolah dan toko.</p>
        </div>

        <div onClick={() => changeTab('kuis')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
            <CheckCircle className="text-emerald-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Tantangan Kuis</h3>
          <p className="text-slate-400 text-sm">Uji pemahamanmu dengan kuis gamifikasi yang menyenangkan.</p>
        </div>
      </div>
    </div>
  );
}

function MateriSection() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Apa itu Basis Data?",
      icon: <Database className="text-indigo-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p>Bayangkan <strong>Lemari Arsip Raksasa</strong>. Basis data adalah versi digitalnya yang terorganisir, memungkinkan kita menyimpan, mengubah, dan mencari informasi dengan sangat cepat.</p>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm font-bold text-slate-400 mb-2">CONTOH NYATA:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li><span className="text-indigo-400">Instagram:</span> Menyimpan foto, like, komen, dan profilmu agar tidak tertukar.</li>
              <li><span className="text-indigo-400">Mobile Legends:</span> Menyimpan data hero, skin, dan rank pemain.</li>
              <li><span className="text-indigo-400">Perpustakaan:</span> Mencatat siapa meminjam buku apa.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Mengenal ERD (Peta Data)",
      icon: <Share2 className="text-pink-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p><strong>Entity Relationship Diagram (ERD)</strong> adalah denah arsitektur sebelum kita membuat database. Ada 3 komponen utama:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-slate-700/50 p-4 rounded border border-slate-600 text-center">
              <div className="w-12 h-8 border-2 border-indigo-400 mx-auto mb-2 bg-indigo-900/30"></div>
              <h4 className="font-bold text-white">Entitas</h4>
              <p className="text-xs text-slate-400 mt-1">Objek nyata (Orang, Benda). Contoh: Siswa, Buku.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded border border-slate-600 text-center">
              <div className="w-12 h-8 border-2 border-emerald-400 rounded-[50%] mx-auto mb-2 bg-emerald-900/30"></div>
              <h4 className="font-bold text-white">Atribut</h4>
              <p className="text-xs text-slate-400 mt-1">Ciri-ciri penjelas. Contoh: Nama, NIS, Harga.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded border border-slate-600 text-center">
              <div className="w-8 h-8 border-2 border-orange-400 rotate-45 mx-auto mb-4 mt-2 bg-orange-900/30"></div>
              <h4 className="font-bold text-white">Relasi</h4>
              <p className="text-xs text-slate-400 mt-1">Hubungan antar entitas. Contoh: Meminjam.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Studi Kasus: Toko & Sekolah",
      icon: <Layers className="text-cyan-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p>Mari kita bedah kasus <strong>Sistem Pendaftaran Ekstrakurikuler</strong>.</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
              <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">1</span>
              <div>
                <p className="font-bold text-white">Entitas Apa Saja?</p>
                <p className="text-sm text-slate-400">Kita butuh data <strong>Siswa</strong> dan data <strong>Ekstrakurikuler</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
              <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">2</span>
              <div>
                <p className="font-bold text-white">Apa Hubungannya?</p>
                <p className="text-sm text-slate-400">Siswa <strong>Mendaftar</strong> Ekstrakurikuler.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
              <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">3</span>
              <div>
                <p className="font-bold text-white">Kardinalitas (Jumlah)</p>
                <p className="text-sm text-slate-400">Satu siswa bisa ikut BANYAK ekskul. Satu ekskul punya BANYAK siswa. (Many to Many).</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pt-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Materi Pembelajaran</h2>
        <div className="text-slate-400 text-sm">Halaman {slide + 1} dari {slides.length}</div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 min-h-[400px] shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
            <div className="p-3 bg-slate-900 rounded-lg">{slides[slide].icon}</div>
            <h3 className="text-2xl font-bold text-indigo-400">{slides[slide].title}</h3>
          </div>
          
          <div className="text-slate-300 leading-relaxed text-lg mb-8">
            {slides[slide].content}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-slate-700/50 mt-auto">
          <button 
            disabled={slide === 0}
            onClick={() => setSlide(s => s - 1)}
            className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
          >
            Kembali
          </button>
          <button 
            disabled={slide === slides.length - 1}
            onClick={() => setSlide(s => s + 1)}
            className="px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            Lanjut <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ERDSimulator() {
  const [entities, setEntities] = useState<Entity[]>([
    { id: 1, name: "Siswa", attributes: ["NIS", "Nama", "Kelas"], x: 50, y: 50 },
    { id: 2, name: "Buku", attributes: ["Kode Buku", "Judul", "Pengarang"], x: 350, y: 50 }
  ]);
  
  // State for dragging
  const [draggedEntity, setDraggedEntity] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [relations, setRelations] = useState<Relation[]>([]);
  const [isAddingRel, setIsAddingRel] = useState(false);
  const [selectedForRel, setSelectedForRel] = useState<number | null>(null);

  const [newEntityName, setNewEntityName] = useState("");
  const [newAttr, setNewAttr] = useState("");
  const [activeEntityId, setActiveEntityId] = useState<number | null>(null); // For adding attributes modal

  const svgRef = useRef<SVGSVGElement>(null);

  // Dragging Logic
  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    if (isAddingRel) return;
    const entity = entities.find(ent => ent.id === id);
    if (!entity) return;
    
    // Calculate offset relative to the entity's position
    setOffset({
      x: e.clientX - entity.x,
      y: e.clientY - entity.y
    });
    setDraggedEntity(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedEntity !== null) {
      setEntities(prev => prev.map(ent => {
        if (ent.id === draggedEntity) {
          // Constrain within the box roughly
          return { ...ent, x: e.clientX - offset.x, y: e.clientY - offset.y };
        }
        return ent;
      }));
    }
  };

  const handleMouseUp = () => {
    setDraggedEntity(null);
  };

  const addEntity = () => {
    if (!newEntityName) return;
    const newId = Date.now();
    setEntities([...entities, {
      id: newId,
      name: newEntityName,
      attributes: ["ID"],
      x: 100, // Default pos
      y: 100
    }]);
    setNewEntityName("");
  };

  const addAttribute = () => {
    if (!newAttr || !activeEntityId) return;
    setEntities(prev => prev.map(ent => {
      if (ent.id === activeEntityId) {
        return { ...ent, attributes: [...ent.attributes, newAttr] };
      }
      return ent;
    }));
    setNewAttr("");
  };

  const handleEntityClick = (id: number) => {
    if (isAddingRel) {
      if (selectedForRel === null) {
        setSelectedForRel(id);
      } else {
        if (selectedForRel !== id) {
          // Create Relation
          setRelations([...relations, {
            id: Date.now(),
            from: selectedForRel,
            to: id,
            type: "1:N" // Default
          }]);
          setIsAddingRel(false);
          setSelectedForRel(null);
        }
      }
    } else {
      setActiveEntityId(id); // Open inspector/add attribute
    }
  };

  const resetLab = () => {
    setEntities([
      { id: 1, name: "Siswa", attributes: ["NIS", "Nama"], x: 50, y: 50 },
      { id: 2, name: "Ekskul", attributes: ["Kode", "Nama Ekskul"], x: 350, y: 50 }
    ]);
    setRelations([]);
  };

  return (
    <div className="max-w-6xl mx-auto h-[80vh] flex flex-col pt-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="text-indigo-400" /> Laboratorium ERD
          </h2>
          <p className="text-slate-400 text-sm">Drag entitas, tambahkan atribut, dan hubungkan relasi.</p>
        </div>
        <div className="flex gap-2">
           <button 
            onClick={resetLab}
            className="px-4 py-2 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 text-sm"
          >
            Reset
          </button>
          <button 
            onClick={() => { setIsAddingRel(!isAddingRel); setSelectedForRel(null); }}
            className={`px-4 py-2 rounded text-white font-medium flex items-center gap-2 transition-colors ${
              isAddingRel ? 'bg-amber-500 animate-pulse' : 'bg-indigo-600 hover:bg-indigo-500'
            }`}
          >
            <LinkIcon size={16} /> {isAddingRel ? 'Pilih Entitas Tujuan...' : 'Hubungkan Entitas'}
          </button>
        </div>
      </div>

      <div className="flex gap-4 flex-grow overflow-hidden">
        {/* SIDEBAR TOOLS */}
        <div className="w-64 bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col gap-6">
          
          {/* Add Entity Tool */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Buat Entitas Baru</h3>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Nama (Mis: Guru)" 
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-indigo-500"
                value={newEntityName}
                onChange={(e) => setNewEntityName(e.target.value)}
              />
              <button onClick={addEntity} className="bg-emerald-600 text-white p-1 rounded hover:bg-emerald-500">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Inspector Tool */}
          <div className="flex-grow bg-slate-900/50 rounded p-3 border border-slate-700/50">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Inspektor</h3>
             {activeEntityId ? (
               <div>
                 <p className="font-bold text-indigo-400 mb-2">
                   {entities.find(e => e.id === activeEntityId)?.name}
                 </p>
                 <ul className="text-xs text-slate-300 mb-4 list-disc list-inside">
                   {entities.find(e => e.id === activeEntityId)?.attributes.map((attr, idx) => (
                     <li key={idx}>{attr}</li>
                   ))}
                 </ul>
                 <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="+ Atribut" 
                      className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs text-white"
                      value={newAttr}
                      onChange={(e) => setNewAttr(e.target.value)}
                    />
                    <button onClick={addAttribute} className="bg-blue-600 text-white p-1 rounded hover:bg-blue-500">
                      <Plus size={14} />
                    </button>
                 </div>
               </div>
             ) : (
               <p className="text-xs text-slate-500 italic">Klik pada salah satu entitas di kanvas untuk mengedit atributnya.</p>
             )}
          </div>
          
          <div className="p-3 bg-indigo-900/20 rounded border border-indigo-500/30 text-xs text-indigo-300">
            <p><strong>Tips:</strong> Tarik kotak untuk memindahkan posisi. Klik "Hubungkan" lalu klik 2 entitas berbeda untuk membuat garis relasi.</p>
          </div>

        </div>

        {/* CANVAS AREA */}
        <div className="flex-grow bg-slate-900 relative rounded-xl border border-slate-700 overflow-hidden cursor-crosshair shadow-inner" style={{backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
          
          {/* SVG Layer for Lines */}
          <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
              </marker>
            </defs>
            {relations.map(rel => {
              const start = entities.find(e => e.id === rel.from);
              const end = entities.find(e => e.id === rel.to);
              if (!start || !end) return null;
              
              // Calculate center points (approximate based on box size)
              const x1 = start.x + 64; // half width
              const y1 = start.y + 40; // half height
              const x2 = end.x + 64;
              const y2 = end.y + 40;

              return (
                <g key={rel.id}>
                  <line 
                    x1={x1} y1={y1} x2={x2} y2={y2} 
                    stroke="#6366f1" 
                    strokeWidth="2" 
                    markerEnd="url(#arrowhead)"
                  />
                  {/* Label in middle */}
                  <rect x={(x1+x2)/2 - 15} y={(y1+y2)/2 - 10} width="30" height="20" rx="4" fill="#1e293b" stroke="#6366f1" />
                  <text x={(x1+x2)/2} y={(y1+y2)/2 + 4} textAnchor="middle" fill="white" fontSize="10">{rel.type}</text>
                </g>
              );
            })}
            {isAddingRel && selectedForRel && (
               /* Temporary line for visual feedback could go here, omitting for brevity */
               <text x="50%" y="20" textAnchor="middle" fill="#fbbf24" fontSize="14">Pilih entitas kedua...</text>
            )}
          </svg>

          {/* Render Entities */}
          {entities.map(ent => (
            <div
              key={ent.id}
              onMouseDown={(e) => handleMouseDown(e, ent.id)}
              onClick={(e) => { e.stopPropagation(); handleEntityClick(ent.id); }}
              className={`absolute w-32 bg-slate-800 border-2 rounded-lg shadow-lg z-10 select-none group transition-shadow ${
                activeEntityId === ent.id ? 'border-indigo-400 shadow-indigo-500/20' : 'border-slate-600'
              } ${selectedForRel === ent.id ? 'ring-2 ring-amber-500 border-amber-500' : ''}`}
              style={{ 
                left: ent.x, 
                top: ent.y,
                cursor: isAddingRel ? 'pointer' : 'grab'
              }}
            >
              <div className="bg-slate-700 px-2 py-1 text-center font-bold text-xs text-white border-b border-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">
                {ent.name}
              </div>
              <div className="p-2 space-y-1">
                {ent.attributes.slice(0, 3).map((attr, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-amber-400' : 'bg-slate-400'}`}></div>
                    <span className="text-[10px] text-slate-300 truncate">{attr}</span>
                  </div>
                ))}
                {ent.attributes.length > 3 && <div className="text-[10px] text-slate-500 italic">+ {ent.attributes.length - 3} more</div>}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

function KuisSection() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<null | boolean>(null);

  const questions = [
    {
      q: "Dalam studi kasus Perpustakaan, manakah yang termasuk ENTITAS?",
      options: ["Nama Siswa", "Tanggal Pinjam", "Buku", "Meminjam"],
      ans: 2
    },
    {
      q: "Simbol persegi panjang dalam ERD menunjukkan...",
      options: ["Atribut", "Entitas", "Relasi", "Proses"],
      ans: 1
    },
    {
      q: "Atribut unik yang membedakan satu data dengan data lain disebut...",
      options: ["Foreign Key", "Primary Key", "Unique Key", "Master Key"],
      ans: 1
    },
    {
      q: "Hubungan 'Satu Siswa bisa ikut Banyak Ekskul' disebut...",
      options: ["One to One", "One to Many", "Many to Many", "Many to One"],
      ans: 2
    },
    {
      q: "Kenapa kita perlu memodelkan data sebelum membuat aplikasi?",
      options: ["Agar terlihat keren", "Agar komputer tidak bingung", "Agar data terstruktur dan efisien", "Perintah guru"],
      ans: 2
    }
  ];

  const handleAnswer = (idx: number) => {
    const isCorrect = idx === questions[currentQ].ans;
    setFeedback(isCorrect);
    
    if (isCorrect) setScore(score + 20);

    setTimeout(() => {
      setFeedback(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setStarted(false);
    setFinished(false);
    setScore(0);
    setCurrentQ(0);
  };

  if (!started) {
    return (
      <div className="max-w-xl mx-auto text-center pt-10">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 shadow-2xl">
          <div className="w-20 h-20 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Brain size={40} className="text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Tantangan Koding</h2>
          <p className="text-slate-400 mb-8">Uji pemahamanmu tentang ERD dan Basis Data. Ada 5 pertanyaan seru menantimu!</p>
          <button 
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
          >
            Mulai Kuis
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto text-center pt-10">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 shadow-2xl relative overflow-hidden">
          {score === 100 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
               <div className="w-96 h-96 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-3xl"></div>
            </div>
          )}
          <h2 className="text-3xl font-bold text-white mb-2">Hasil Akhir</h2>
          <p className="text-slate-400 mb-6">Skor Kamu:</p>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-600 mb-8">
            {score}
          </div>
          <div className="mb-8">
            {score === 100 ? (
              <span className="text-emerald-400 font-bold text-lg">Luar Biasa! Sempurna! 🎉</span>
            ) : score >= 80 ? (
              <span className="text-indigo-400 font-bold text-lg">Kerja Bagus! 👍</span>
            ) : (
              <span className="text-slate-400 text-lg">Jangan menyerah, coba lagi ya! 💪</span>
            )}
          </div>
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
          >
            Main Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-slate-400 font-mono text-sm">Pertanyaan {currentQ + 1}/{questions.length}</span>
        <div className="text-indigo-400 font-bold">Skor: {score}</div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-indigo-500 h-full transition-all duration-500" 
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-8 leading-relaxed">
          {questions[currentQ].q}
        </h3>

        <div className="grid gap-4">
          {questions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              disabled={feedback !== null}
              onClick={() => handleAnswer(idx)}
              className={`text-left p-4 rounded-xl border transition-all ${
                feedback !== null
                  ? idx === questions[currentQ].ans 
                    ? 'bg-emerald-900/50 border-emerald-500 text-emerald-200'
                    : 'bg-slate-800 border-slate-700 opacity-50'
                  : 'bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-indigo-500 hover:text-indigo-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {feedback !== null && idx === questions[currentQ].ans && <CheckCircle size={20} className="text-emerald-400"/>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 2: <span className="text-indigo-400">ERD & Relasi</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 2</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'Kuis'].map((item) => (
          <button 
            key={item}
            onClick={() => setActiveTab(item.toLowerCase())}
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
              activeTab === item.toLowerCase() 
              ? 'bg-indigo-600 text-white' 
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

const Materi2: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-100 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
       <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
       <div className="animate-fade-in">
        {activeTab === 'home' && <HomeSection changeTab={setActiveTab} />}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'simulasi' && <ERDSimulator />}
        {activeTab === 'kuis' && <KuisSection />}
       </div>

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

export default Materi2;