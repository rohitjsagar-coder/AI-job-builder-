"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Note } from "@/hooks/useNotes";
import styles from "@/styles/dashboard.module.css";
import { useParams } from "next/navigation";

export default function SharePage() {
  const { id } = useParams();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const docRef = doc(db, "notes", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as Note;
          if (data.isPublic) {
            setNote({ ...data, id: docSnap.id });
          } else {
            setError("This note is private.");
          }
        } else {
          setError("Note not found.");
        }
      } catch (err: unknown) {
        if (err instanceof Error) setError("Error fetching note.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchNote();
  }, [id]);

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>{error}</div>;

  return (
    <div className={styles.container} style={{ background: note?.color }}>
      <div className={styles.card} style={{ maxWidth: "800px", background: "rgba(0,0,0,0.4)" }}>
        <h1 className={styles.title}>{note?.title}</h1>
        <div 
          className={styles.noteContent} 
          style={{ whiteSpace: "pre-wrap", color: "white", opacity: 1, fontSize: "1.1rem" }}
        >
          {note?.content}
        </div>
        <div className={styles.footer} style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
          Shared via NoteSaver
        </div>
      </div>
    </div>
  );
}
