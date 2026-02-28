## ADDED Requirements

### Requirement: Board layout with four status columns

The system SHALL display a Kanban board with exactly four columns arranged horizontally: Backlog, Todo, In Progress, and Done. Each column SHALL display its name as a header and show

 the count of tasks within it.

#### Scenario: Board renders all four columns
- **WHEN** user opens the Kanban board page
- **THEN** the board displays four columns in order: Backlog, Todo, In Progress, Done

#### Scenario: Column shows task count
- **WHEN** a column contains tasks
- **THEN** the column header displays the number of tasks (e.g., "Todo (3)")

### Requirement: Responsive board layout

The system SHALL render the board responsively. On desktop (≥768px), columns SHALL be displayed side-by-side horizontally. On mobile (<768px), columns SHALL stack vertically.

#### Scenario: Desktop horizontal layout
- **WHEN** viewport width is 768px or greater
- **THEN** all four columns are displayed side-by-side in a horizontal row

#### Scenario: Mobile vertical layout
- **WHEN** viewport width is less than 768px
- **THEN** columns are stacked vertically and scrollable

### Requirement: Task cards displayed within columns

The system SHALL render each task as a card within its corresponding status column. Cards SHALL display the task title, priority badge, and assignee.

#### Scenario: Task card displays essential info
- **WHEN** a task exists with title "Implement login", priority "high", assignee "Alice"
- **THEN** the card shows the title "Implement login", a "high" priority badge, and assignee "Alice"

#### Scenario: Empty column shows placeholder
- **WHEN** a column has zero tasks
- **THEN** the column displays a placeholder message (e.g., "No tasks")

### Requirement: App header with board title

The system SHALL display an app header containing the application title "PM-Tools" and a button to create a new task.

#### Scenario: Header renders with app title and action button
- **WHEN** user opens the application
- **THEN** a header is visible with "PM-Tools" title and an "Add Task" button
