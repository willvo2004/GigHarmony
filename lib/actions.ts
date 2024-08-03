import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Profile } from "./types";

export async function updateProfile() {
  async function updateBackgroundFile(formData: FormData) {
    "use server";
    const file = formData.get("file");
    if (file instanceof File) {
    }
  }

  async function updateBackgroundUrl(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return { updateBackgroundFile, updateBackgroundUrl };
}

export async function getProfile() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: user } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", user.user?.id);
  return profile as Profile;
}
