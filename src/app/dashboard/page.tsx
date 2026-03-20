"use client";

import { useState } from "react";
import styles from "@/styles/dashboard.module.css";
import { useAuth } from "@/context/AuthContext";
import { useNotes, Note } from "@/hooks/useNotes";
import { 
  Plus, 
  Search, 
  LogOut, 
  Trash2, 
  Share2, 
  X
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Partial<Note> | null>(null);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const openNewNote = () => {
    setSelectedNote({ title: "", content: "", color: "#6366f1" });
    setIsModalOpen(true);
  };

  const openEditNote = (note: Note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (selectedNote) {
      if (selectedNote.id) {
        await updateNote(selectedNote.id, {
          title: selectedNote.title,
          content: selectedNote.content,
          color: selectedNote.color,
          template: selectedNote.template,
          isPublic: selectedNote.isPublic,
        });
      } else {
        await addNote(
          selectedNote.title || "Untitled", 
          selectedNote.content || "", 
          selectedNote.color,
          selectedNote.template || "default"
        );
      }
      setIsModalOpen(false);
      setSelectedNote(null);
    }
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) || 
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  const colors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];
  const templates = ["default", "modern", "minimal", "glass"];

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.logo}>NoteSaver</div>
        <div className={styles.userMenu}>
          <span className={styles.userName}>{user?.displayName || user?.email}</span>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={16} />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.controls}>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search notes..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className={styles.addBtn} onClick={openNewNote}>
            <Plus size={20} />
            New Note
          </button>
        </div>

        <div className={styles.grid}>
          {filteredNotes.map(note => (
            <motion.div 
              layout
              key={note.id} 
              className={`${styles.noteCard} ${styles[note.template || 'default']}`}
              onClick={() => openEditNote(note)}
            >
              <div 
                className={styles.colorBadge} 
                style={{ backgroundColor: note.color }}
              />
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p className={styles.noteContent}>{note.content}</p>
              <div className={styles.noteFooter}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span className={styles.noteDate}>
                    {note.updatedAt?.toDate().toLocaleDateString()}
                  </span>
                  {note.isPublic && (
                    <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 600 }}>PUBLIC</span>
                  )}
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.actionBtn} 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!note.isPublic) {
                        alert("Enable public sharing first!");
                        return;
                      }
                      navigator.clipboard.writeText(`${window.location.origin}/share/${note.id}`);
                      alert("Share link copied!");
                    }}
                  >
                    <Share2 size={14} />
                  </button>
                  <button 
                    className={`${styles.actionBtn} ${styles.delete}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Delete this note?")) deleteNote(note.id);
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={styles.modal} 
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2>{selectedNote?.id ? "Edit Note" : "New Note"}</h2>
                <button className={styles.actionBtn} onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.publicToggle} onClick={() => setSelectedNote({...selectedNote!, isPublic: !selectedNote?.isPublic})}>
                  <div className={`${styles.toggleSwitch} ${selectedNote?.isPublic ? styles.active : ""}`}>
                    <div className={styles.toggleCircle} />
                  </div>
                  <span className={styles.toggleLabel}>Publicly Sharable</span>
                </div>

                <input 
                  className={`${styles.modalInput} ${styles.titleInput}`}
                  placeholder="Note Title"
                  value={selectedNote?.title}
                  onChange={(e) => setSelectedNote({...selectedNote!, title: e.target.value})}
                />
                
                <div className={styles.templatePicker}>
                  {templates.map(t => (
                    <div 
                      key={t}
                      className={`${styles.templateOption} ${selectedNote?.template === t ? styles.active : ""}`}
                      onClick={() => setSelectedNote({...selectedNote!, template: t})}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </div>
                  ))}
                </div>

                <textarea 
                  className={`${styles.modalInput} ${styles.contentInput}`}
                  placeholder="Start writing..."
                  value={selectedNote?.content}
                  onChange={(e) => setSelectedNote({...selectedNote!, content: e.target.value})}
                />
              </div>
              <div className={styles.modalFooter}>
                <div className={styles.colorPicker}>
                  {colors.map(color => (
                    <div 
                      key={color}
                      className={`${styles.colorOption} ${selectedNote?.color === color ? styles.active : ""}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedNote({...selectedNote!, color})}
                    />
                  ))}
                </div>
                <button className={styles.addBtn} onClick={handleSave}>
                  Save Note
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
