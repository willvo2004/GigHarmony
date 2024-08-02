import { Header } from "@/components/Header";
import { checkUser } from "@/lib/data";
import Image from "next/image";
import { EditBackground } from "@/components/Modals/BackgroundImageModal";

export default async function Home() {
  const user = await checkUser();

  return (
    <main className="h-screen">
      <div className="wrapper-header sticky top-0 py-6 px-24 w-full bg-slate-50 dark:bg-gray-950 border-b">
        <Header />
      </div>
      <section className="profile-banner container flex flex-col flex-1 px-24 py-6 w-full">
        <div className="avatar w-full h-[15rem] border-2 rounded-lg bg-center relative bg-cover bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg')]">
          <Image
            className="rounded-full border-2 border-black dark:border-white shadow-xl absolute top-36"
            src={user?.user_metadata.picture}
            alt="what"
            width={160}
            height={20}
          />
          <span className="absolute top-0 right-0">
            <EditBackground />
          </span>
        </div>

        <div className="background flex flex-col items-end md:items-start gap-4 w-full">
          <div className="title">
            <h1 className="text-6xl font-semibold pt-2 md:px-56 px-32">
              {user?.user_metadata.name}
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
