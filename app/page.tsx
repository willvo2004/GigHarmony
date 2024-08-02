import { Header } from "@/components/Header";
import { HeroContent } from "@/components/HeroContent";

export default async function Home() {
  return (
    <main className="h-screen">
      <div className="wrapper-header sticky top-0 py-6 px-24 w-full bg-slate-50 dark:bg-gray-950 border-b">
        <Header />
      </div>
      <HeroContent />
    </main>
  );
}
