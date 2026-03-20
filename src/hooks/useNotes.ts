"use client";

import { useState, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  onSnapshot,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  template: string;
  isPublic: boolean;
  userId: string;
  createdAt: any;
  updatedAt: any;
}

export const useNotes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setNotes([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "notes"),
      where("userId", "==", user.uid),
      orderBy("updatedAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Note[];
      setNotes(notesData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching notes:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const addNote = async (title: string, content: string, color = "#6366f1", template = "default") => {
    if (!user) return;
    try {
      await addDoc(collection(db, "notes"), {
        title,
        content,
        color,
        template,
        isPublic: false,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const updateNote = async (id: string, updates: Partial<Note>) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  const togglePublic = async (id: string, isPublic: boolean) => {
    await updateNote(id, { isPublic });
  };

  return { notes, loading, addNote, updateNote, deleteNote, togglePublic };
};
