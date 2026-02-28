## Context

PM-Tools adalah aplikasi project management baru yang dibangun dari scratch menggunakan Next.js 16 (App Router). Saat ini project hanya memiliki boilerplate default Next.js. Change ini akan membangun fitur Kanban board sebagai fitur utama pertama, dengan 4 kolom status (Backlog, Todo, In Progress, Done) dan kemampuan drag & drop untuk memindahkan task antar status.

Constraint utama:
- Monolith architecture (single Next.js app)
- MVP menggunakan local storage untuk data persistence
- shadcn/ui sebagai component library
- Harus responsive dan accessible

## Goals / Non-Goals

**Goals:**
- Membangun Kanban board yang fungsional dengan 4 kolom status
- Task CRUD (create, read, update, delete) dengan form yang user-friendly
- Drag & drop task antar kolom yang smooth dan intuitif
- Data persistence di local storage agar data tidak hilang saat refresh
- UI yang responsive (desktop & mobile) dan accessible
- Arsitektur yang bersih dan mudah di-extend untuk fitur masa depan

**Non-Goals:**
- Multi-user / real-time collaboration (future scope)
- Backend API / database (local storage saja untuk MVP)
- Authentication & authorization
- Multiple boards / projects (single board untuk MVP)
- Task comments, attachments, atau activity log
- Search & filter tasks

## Decisions

### 1. Drag & Drop Library: `@dnd-kit/core`

**Pilihan**: `@dnd-kit/core` + `@dnd-kit/sortable`
**Alternatif dipertimbangkan**:
- `react-beautiful-dnd` — deprecated, tidak di-maintain lagi
- `react-dnd` — lebih low-level, boilerplate lebih banyak
- HTML5 Drag and Drop API — inkonsisten antar browser, accessibility buruk

**Rationale**: `@dnd-kit` adalah library drag & drop modern yang lightweight, accessible by default (keyboard support), dan memiliki performance bagus. Mendukung sortable lists dan cross-container dragging yang kita butuhkan.

### 2. State Management: React Context + useReducer

**Pilihan**: React Context API dengan `useReducer` untuk board state
**Alternatif dipertimbangkan**:
- Zustand — overkill untuk MVP dengan single board
- Redux — terlalu complex untuk use case ini
- React state di page level — kurang scalable saat komponen bertambah

**Rationale**: Context + useReducer cukup untuk mengelola board state yang perlu diakses oleh multiple komponen (board, columns, cards). Pattern reducer membuat state mutations predictable dan mudah di-debug.

### 3. Data Layer: Local Storage dengan Custom Hook

**Pilihan**: Custom hook `useLocalStorage` yang sync state ke local storage
**Alternatif dipertimbangkan**:
- In-memory only — data hilang saat refresh
- IndexedDB — terlalu complex untuk MVP
- External state library (e.g., Zustand persist) — menambah dependency

**Rationale**: Local storage simpel, synchronous, dan cukup untuk MVP. Custom hook `useLocalStorage` mengenkapsulasi logic sync sehingga mudah diganti dengan API calls di masa depan.

### 4. Component Architecture

```
app/
├── page.tsx                    # Main Kanban board page (client component)
├── layout.tsx                  # App shell with header
├── globals.css                 # Tailwind v4 imports + theme tokens

components/
├── ui/                         # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── badge.tsx
│   └── select.tsx
├── kanban/
│   ├── kanban-board.tsx         # Board with DndContext, renders columns
│   ├── kanban-column.tsx        # Single column (droppable area)
│   └── task-card.tsx            # Draggable task card
├── task/
│   ├── task-form.tsx            # Create/edit task form (in Dialog)
│   └── task-detail.tsx          # Task detail view
└── layout/
    └── header.tsx               # App header with title + add task button

hooks/
├── use-board.ts                 # Board state management (Context provider)
├── use-local-storage.ts         # Local storage sync hook
└── use-task-actions.ts          # Task CRUD actions

types/
└── index.ts                     # Task, Column, Board, Priority types

lib/
├── constants.ts                 # Column definitions, default values
└── utils.ts                     # Helper functions (generateId, etc.)
```

### 5. Task Data Model

```typescript
type Priority = "low" | "medium" | "high";
type TaskStatus = "backlog" | "todo" | "in-progress" | "done";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assignee: string;
  createdAt: string;  // ISO 8601
  updatedAt: string;  // ISO 8601
  order: number;       // Position within column for sorting
}
```

### 6. Halaman Utama sebagai Client Component

**Pilihan**: `app/page.tsx` sebagai `"use client"` component
**Rationale**: Kanban board sepenuhnya interaktif (drag & drop, form, state). Tidak ada keuntungan signifikan dari Server Components untuk halaman ini. Seluruh board di-render di client.

## Risks / Trade-offs

- **[Local storage limit ~5MB]** → Cukup untuk ratusan task. Jika data membesar, migrasi ke database sesuai rencana.
- **[No real-time sync]** → Single user saja untuk MVP. Multi-user memerlukan backend + websockets.
- **[Client-side rendering]** → SEO tidak relevan untuk app internal. Performance cukup karena data kecil.
- **[Single board]** → Arsitektur siap untuk multiple boards (board ID di URL), tapi tidak diimplementasi di MVP.
- **[@dnd-kit bundle size]** → ~15KB gzipped, acceptable untuk fitur utama ini.
