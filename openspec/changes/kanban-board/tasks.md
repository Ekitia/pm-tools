## 1. Project Setup & Foundation

- [ ] 1.1 [FE] Install dan konfigurasi shadcn/ui (init CLI, tambahkan base components: Button, Card, Dialog, Input, Textarea, Badge, Select)
- [ ] 1.2 [FE] Install `@dnd-kit/core` dan `@dnd-kit/sortable` sebagai dependency drag & drop
- [ ] 1.3 [FE] Buat type definitions di `types/index.ts` (Task, TaskStatus, Priority, Column interfaces)
- [ ] 1.4 [FE] Buat constants di `lib/constants.ts` (column definitions: Backlog, Todo, In Progress, Done; default values)
- [ ] 1.5 [FE] Buat utility functions di `lib/utils.ts` (generateId dengan crypto.randomUUID, date helpers)

## 2. Data Persistence Layer

- [ ] 2.1 [FE] Buat custom hook `hooks/use-local-storage.ts` untuk read/write local storage dengan key `pm-tools-board`, termasuk error handling untuk storage penuh dan data corrupt
- [ ] 2.2 [FE] Buat board state provider `hooks/use-board.ts` menggunakan React Context + useReducer dengan actions: ADD_TASK, UPDATE_TASK, DELETE_TASK, MOVE_TASK, REORDER_TASK
- [ ] 2.3 [FE] Integrasi `use-local-storage` ke dalam board context agar setiap state mutation otomatis ter-persist

## 3. Layout & App Shell

- [ ] 3.1 [FE] Buat komponen `components/layout/header.tsx` dengan app title "PM-Tools" dan tombol "Add Task"
- [ ] 3.2 [FE] Update `app/layout.tsx` untuk menggunakan Header component dan wrap children dengan BoardProvider
- [ ] 3.3 [FE] Update `app/globals.css` dengan theme tokens/CSS variables untuk color palette yang konsisten

## 4. Kanban Board Components

- [ ] 4.1 [FE] Buat komponen `components/kanban/kanban-board.tsx` dengan DndContext yang merender 4 kolom secara horizontal (desktop) dan vertikal (mobile)
- [ ] 4.2 [FE] Buat komponen `components/kanban/kanban-column.tsx` sebagai droppable area dengan header (nama kolom + task count) dan placeholder saat kosong
- [ ] 4.3 [FE] Buat komponen `components/kanban/task-card.tsx` sebagai draggable card yang menampilkan title, priority badge, dan assignee
- [ ] 4.4 [FE] Implementasi visual drag feedback: opacity/shadow pada card saat drag, highlight pada column saat dragover

## 5. Task Management (CRUD)

- [ ] 5.1 [FE] Buat komponen `components/task/task-form.tsx` dengan form fields: title (required), description, priority select, assignee input — menggunakan shadcn Dialog, Input, Textarea, Select
- [ ] 5.2 [FE] Implementasi create task flow: klik "Add Task" → buka dialog → isi form → submit → task masuk ke Backlog column
- [ ] 5.3 [FE] Implementasi edit task flow: klik task card → buka dialog dengan data pre-filled → edit → save → update task dan `updatedAt`
- [ ] 5.4 [FE] Implementasi delete task: tombol delete pada task card/detail → konfirmasi → hapus task dari board

## 6. Drag & Drop Logic

- [ ] 6.1 [FE] Implementasi cross-column drag & drop di `kanban-board.tsx`: handle `onDragEnd` untuk update task status saat pindah kolom
- [ ] 6.2 [FE] Implementasi in-column reorder menggunakan `@dnd-kit/sortable`: drag task ke posisi baru dalam kolom yang sama
- [ ] 6.3 [FE] Pastikan `updatedAt` di-update setiap kali task berpindah status atau di-reorder
- [ ] 6.4 [FE] Verifikasi keyboard accessibility: navigasi dengan Tab, pick up dengan Space/Enter, pindah dengan Arrow keys

## 7. Main Page Integration

- [ ] 7.1 [FE] Update `app/page.tsx` sebagai client component yang merender KanbanBoard sebagai halaman utama
- [ ] 7.2 [FE] Pastikan board responsive: 4 kolom horizontal di desktop, stack vertikal di mobile
- [ ] 7.3 [FE] Load existing data dari local storage saat page pertama kali di-load, tampilkan empty state jika tidak ada data
