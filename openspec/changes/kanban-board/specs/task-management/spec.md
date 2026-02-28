## ADDED Requirements

### Requirement: Create a new task

The system SHALL allow users to create a new task via a dialog form. The form SHALL include fields for title (required), description (optional), priority (low/medium/high, default: medium), and assignee (optional). New tasks SHALL be created with status "backlog" by default.

#### Scenario: Successfully create a task
- **WHEN** user clicks "Add Task" button and fills in title "Design homepage" with priority "high"
- **THEN** a new task is created with title "Design homepage", priority "high", status "backlog", and appears in the Backlog column

#### Scenario: Validation prevents empty title
- **WHEN** user submits the task form without a title
- **THEN** the form displays a validation error "Title is required" and does not create the task

#### Scenario: Dialog closes after creation
- **WHEN** user successfully creates a task
- **THEN** the dialog closes and the new task card is visible in the Backlog column

### Requirement: Edit an existing task

The system SHALL allow users to edit a task by clicking on its card. The edit form SHALL pre-populate all fields with the current task data. Saving SHALL update the task and its `updatedAt` timestamp.

#### Scenario: Open task for editing
- **WHEN** user clicks on a task card
- **THEN** a dialog opens with the task form pre-filled with the task's current data

#### Scenario: Save edited task
- **WHEN** user changes the title from "Design homepage" to "Design landing page" and saves
- **THEN** the task title is updated to "Design landing page" and `updatedAt` is refreshed

### Requirement: Delete a task

The system SHALL allow users to delete a task. Deletion SHALL require confirmation before removing the task permanently.

#### Scenario: Delete with confirmation
- **WHEN** user clicks the delete button on a task and confirms the action
- **THEN** the task is removed from the board and no longer appears in any column

#### Scenario: Cancel deletion
- **WHEN** user clicks the delete button but cancels the confirmation
- **THEN** the task remains unchanged on the board

### Requirement: Task data model

Each task SHALL have the following properties:
- `id` (string, auto-generated UUID)
- `title` (string, required)
- `description` (string, optional, default: "")
- `status` (enum: "backlog" | "todo" | "in-progress" | "done", default: "backlog")
- `priority` (enum: "low" | "medium" | "high", default: "medium")
- `assignee` (string, optional, default: "")
- `createdAt` (ISO 8601 string, auto-set on creation)
- `updatedAt` (ISO 8601 string, auto-set on creation and mutation)
- `order` (number, position within column)

#### Scenario: Auto-generated fields on creation
- **WHEN** a new task is created with title "Setup CI/CD"
- **THEN** the task has a unique `id`, `createdAt` set to current time, `updatedAt` equal to `createdAt`, and `order` set to the next position in the Backlog column
