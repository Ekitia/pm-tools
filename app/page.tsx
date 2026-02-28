import MainSidebar from "@/components/ui/MainSidebar";
import MainContent from "@/components/ui/MainContent";
import { Button } from "@/components/button";
export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-300 py-4 pr-4">
      <MainSidebar />
      <MainContent />
      <Button>Button</Button>
    </div>
  );
}