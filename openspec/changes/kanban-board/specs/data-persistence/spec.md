## ADDED Requirements

### Requirement: Persist board data to local storage

The system SHALL automatically persist all task data to the browser's local storage. Data SHALL be stored under the key `pm-tools-board`. Any mutation (create, update, delete, reorder, status change) SHALL trigger a save to local storage.

#### Scenario: Data saved on task creation
- **WHEN** user creates a new task
- **THEN** the complete task list is serialized to JSON and saved to local storage under key `pm-tools-board`

#### Scenario: Data saved on task status change
- **WHEN** user drags a task to a different column
- **THEN** the updated task list is saved to local storage

### Requirement: Restore board data on page load

The system SHALL restore board data from local storage when the application loads. If no data exists in local storage, the system SHALL initialize with an empty board (no tasks).

#### Scenario: Restore existing data
- **WHEN** user opens the application and local storage contains previously saved tasks
- **THEN** the board renders with all previously saved tasks in their correct columns and order

#### Scenario: Initialize empty board
- **WHEN** user opens the application for the first time (no local storage data)
- **THEN** the board renders with four empty columns and no tasks

### Requirement: Data integrity on storage errors

The system SHALL handle local storage errors gracefully (e.g., storage full, private browsing restrictions). If a save fails, the in-memory state SHALL remain intact and the user SHALL not lose data during the session.

#### Scenario: Handle storage write failure
- **WHEN** local storage write fails (e.g., quota exceeded)
- **THEN** the application continues to work with in-memory data without crashing

#### Scenario: Handle corrupted data
- **WHEN** local storage contains invalid or corrupted JSON data
- **THEN** the application initializes with an empty board instead of crashing
