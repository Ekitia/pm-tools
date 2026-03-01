'use client';

import { useSortable } from "@dnd-kit/react/sortable";

interface KanbanItemProps {
    id: string | number;
    index: number;
    column: string | number;
    content?: string;
}

function KanbanItem({ id, index, column, content }: KanbanItemProps) {
    const { ref } = useSortable({
        id,
        index,
        group: column,
        type: 'Item',
        accept: ['item'],
    })
    return <div ref={ref} className="kanban-item bg-white py-2 px-4 rounded-md shadow">{content}</div>
}

export default KanbanItem;