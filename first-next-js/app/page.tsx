import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-7xl font-serif">Jayavel</h1>
      <Link href="/dashboard" className="ml-4 bg-amber-300 text-black px-4 py-2 rounded-md hover:bg-amber-400 transition-colors">
        Go to Dashboard
      </Link>
    </div>
  );
}
