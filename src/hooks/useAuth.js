import { useRecoilState } from 'recoil';
import { userState } from '../recoil/userState';
import { supabase } from '../api/supabaseClient';
import { useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => authListener?.unsubscribe();
  }, []);

  return user;
};
