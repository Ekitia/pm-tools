import SecondContent from "./SecondContent";
import KanbanBoard from "../Kanban/KanbanBoard";

export default function MainContent() {
    return (
        <main className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <SecondContent />
            <div className="bg-slate-100 w-full h-full">
                <KanbanBoard />
            </div>
        </main>
    );
}