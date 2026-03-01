'use client';

import { Circle, Maximize2, Plus } from "lucide-react";
import { Button } from "../button";
import KanbanItem from "./KanbanItem";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

export interface KanbanColumnProps {
    id: string | number;
    items: {
        id: string | number;
        content?: string;
    }[];
}

function KanbanColumn({ id, items }: KanbanColumnProps) {
    const { ref } = useDroppable({
        id,
        type: 'column',
        accept: ['item'],
        collisionPriority: CollisionPriority.Low,
    });

    const titles = {
        backlog: 'Backlog',
        todo: 'To Do',
        inProgress: 'In Progress',
        done: 'Done'
    }

    return <div className="kanban-column w-sm px-1 shrink-0" ref={ref}>
        <div className="kanban-column-header flex items-center justify-between p-2">
            <div className="kanban-column-header-left flex items-center gap-2">
                <Circle className="w-4" />
                <h3 className="kanban-column-title font-bold">{titles[id]}</h3>
                <span>{items.length}</span>
            </div>
            <div className="kanban-column-header-right flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Maximize2 />
                </Button>
                <Button variant="ghost" size="icon">
                    <Plus />
                </Button>
            </div>
        </div>
        <div className="kanban-column-content mt-2 flex flex-col gap-4">
            {items.map((item, index) => <KanbanItem
                key={item.id}
                id={item.id}
                column={id}
                index={index}
                content={item.content}
            />)}
        </div>
    </div>
}

export default KanbanColumn;