import { createClient } from "@/utils/supabase/server";
import { MetaData } from "./types";
import { cookies } from "next/headers";
import { User } from "@supabase/supabase-js";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export async function checkUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function checkProfile() {
  const user = await checkUser();

  if (!user) {
    console.log("no user");
    return;
  }

  let { data: profile, error } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", user?.id);

  if (!profile || profile.length === 0) {
    console.log("creating profile");
    createProfile(user);
    return null;
  }
  console.log("profile returned", profile);
  return profile;
}
// if signed user does not have a row containing a their user id, create a profile

export async function createProfile(user: User | null) {
  const metaData = user?.user_metadata as MetaData;
  const { data, error } = await supabase
    .from("profile")
    .insert([
      {
        display_name: metaData.name,
        avatar: metaData.avatar_url,
        background_image:
          "https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/02/gnome-3.36-wallpaper-night.jpg",
        bio: null,
        user_id: user?.id,
      },
    ])
    .select();
  console.log(data, error);
}
