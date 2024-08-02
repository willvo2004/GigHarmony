import { createClient } from "../utils/supabase/client";

const supabase = createClient();

export async function signInWithSpotify() {
  await supabase.auth.signInWithOAuth({
    provider: "spotify",
    options: {
      redirectTo: `http://localhost:3000/dashboard`,
    },
  });
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  location.assign("/"); // okay idk why next redirect sucks so bad
}

export async function checkUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
