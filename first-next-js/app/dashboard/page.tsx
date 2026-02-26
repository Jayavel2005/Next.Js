"use client"
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-amber-300 text-7xl font-serif">
        Dashboard
      </h1>
      <button
        onClick={() => router.push("/dashboard/settings")}
        className="bg-amber-300 text-black px-4 py-2 rounded-md hover:bg-amber-400 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
}
