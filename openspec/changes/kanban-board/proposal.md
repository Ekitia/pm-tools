## Why

Tim membutuhkan tools sederhana untuk mengelola task secara visual menggunakan Kanban board. Saat ini belum ada system yang membantu tim melihat status pekerjaan secara sekilas dan memindahkan task antar tahapan dengan mudah. Kanban board dengan drag & drop memungkinkan workflow yang intuitif dan efisien.

## What Changes

- **Kanban board UI** — Tampilan board dengan 4 kolom status: Backlog, Todo, In Progress, Done
- **Task card** — Komponen card yang menampilkan informasi task (title, description, priority, assignee)
- **Drag & drop** — Kemampuan memindahkan task antar kolom untuk mengubah status
- **Task CRUD** — Membuat, melihat, mengedit, dan menghapus task
- **Data persistence** — Menyimpan data task di local storage untuk MVP
- **Layout & navigation** — App shell dengan header dan navigasi dasar

## Capabilities

### New Capabilities
- `kanban-board`: Tampilan Kanban board dengan 4 kolom status dan layout responsif
- `task-management`: CRUD operations untuk task (create, read, update, delete) termasuk form input dan validasi
- `drag-and-drop`: Kemampuan drag & drop task card antar kolom untuk mengubah status
- `data-persistence`: Penyimpanan data task menggunakan local storage, siap migrasi ke database

### Modified Capabilities
_Tidak ada — ini adalah fitur pertama yang dibangun dari scratch._

## Impact

- **Code**: Menambah komponen baru di `components/`, custom hooks di `hooks/`, type definitions di `types/`, dan halaman utama di `app/`
- **Dependencies**: Perlu menambahkan library drag & drop (e.g., `@dnd-kit/core`) dan shadcn/ui components
- **Existing code**: Mengganti default Next.js landing page dengan Kanban board sebagai halaman utama
