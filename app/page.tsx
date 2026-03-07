"use client"
import MainSidebar from "@/components/ui/MainSidebar";
import MainContent from "@/components/ui/MainContent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex h-screen bg-zinc-300 py-4 pr-4">
      <MainSidebar />
      <MainContent />
    </div>
  );
}