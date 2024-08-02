import { Header } from "@/components/Header";
import { checkProfile } from "@/lib/data";

export default async function Home() {
  const profile = await checkProfile();
  return (
    <main className="h-screen">
      <div className="wrapper-header sticky top-0 py-6 px-24 w-full bg-slate-50 dark:bg-gray-950 border-b">
        <Header />
      </div>
    </main>
  );
}
