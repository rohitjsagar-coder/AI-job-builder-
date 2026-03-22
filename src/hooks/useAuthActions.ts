"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const useAuthActions = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, pass: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: pass,
        options: {
          data: {
            full_name: name
          }
        }
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, pass: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signInWithGoogle, signUp, signIn, error, loading };
};

