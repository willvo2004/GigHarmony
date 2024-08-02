import { useState, useEffect } from "react";
import { checkUser } from "../auth";
import { User } from "@supabase/supabase-js";

export function useHeader() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser().then((result) => setUser(result));
  }, []);

  return { user };
}
