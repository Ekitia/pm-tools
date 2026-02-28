## ADDED Requirements

### Requirement: Drag task between columns

The system SHALL allow users to drag a task card from one column and drop it into another column. Upon drop, the task's status SHALL be updated to match the target column's status.

#### Scenario: Move task from Backlog to Todo
- **WHEN** user drags a task card from the Backlog column and drops it into the Todo column
- **THEN** the task's status changes to "todo", the card appears in the Todo column, and the card is removed from the Backlog column

#### Scenario: Move task from In Progress to Done
- **WHEN** user drags a task card from the In Progress column and drops it into the Done column
- **THEN** the task's status changes to "done" and the card appears in the Done column

### Requirement: Visual drag feedback

The system SHALL provide visual feedback during drag operations. The dragged card SHALL have a visual indicator (e.g., opacity change, shadow, or scale). The target column SHALL highlight when a card is being dragged over it.

#### Scenario: Card visual change while dragging
- **WHEN** user begins dragging a task card
- **THEN** the card displays a visual drag state (raised shadow and slight scale increase)

#### Scenario: Column highlights on dragover
- **WHEN** user drags a card over a target column
- **THEN** the target column displays a highlight effect (e.g., border color change or background tint)

### Requirement: Reorder tasks within a column

The system SHALL allow users to reorder tasks within the same column by dragging a card above or below other cards. The `order` property of affected tasks SHALL be updated accordingly.

#### Scenario: Reorder task within column
- **WHEN** user drags a task card to a different position within the same column
- **THEN** the card moves to the new position and all affected task `order` values are recalculated

### Requirement: Keyboard accessible drag and drop

The system SHALL support keyboard-based drag and drop. Users SHALL be able to pick up a card with Enter/Space, move it with arrow keys, and drop it with Enter/Space.

#### Scenario: Keyboard drag and drop
- **WHEN** user focuses a task card, presses Space to pick up, uses arrow keys to move, and presses Space to drop
- **THEN** the task is moved to the new position/column as if dragged with a mouse

### Requirement: Update timestamp on status change via drag

The system SHALL update the task's `updatedAt` timestamp whenever its status is changed through drag and drop.

#### Scenario: Timestamp updates on drag status change
- **WHEN** user drags a task from Backlog to In Progress
- **THEN** the task's `updatedAt` is set to the current timestamp
