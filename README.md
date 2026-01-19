# Note Organizer App

A simple command-line note-taking application built with Node.js that allows you to create, read, update, and delete notes.

## Features

- **Add Notes**: Create new notes with a title and body
- **List All Notes**: View all your saved notes with their details
- **Read Specific Note**: Search and view a specific note by its title
- **Update Notes**: Modify the content of existing notes
- **Delete Notes**: Remove notes you no longer need
- **Persistent Storage**: Notes are saved to a JSON file for persistence between sessions

## Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:anastasiafoth/Note_Organizer_App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Note_Organizer_App
   ```

3. Install dependencies:
   ```bash
   npm install readline-sync
   ```

## Usage

1. Run the application:
   ```bash
   node note_app.js
   ```

2. Follow the on-screen menu to perform actions:
   - **1**: Add a new note
   - **2**: List all notes
   - **3**: Read a specific note
   - **4**: Update a note
   - **5**: Delete a note
   - **6**: Exit the application

## Data Storage

All notes are stored in the `data/notes.json` file in JSON format. The file is automatically created when you add your first note.

## Example

```
1. Add a note
2. List all notes
3. Read a note
4. Update a note
5. Delete a note
6. Exit

Enter your choice: 1
Enter note title: Shopping List
Enter note body: Milk, Eggs, Bread
Note added successfully!
```

## License

This project is open source and available under the [MIT License](LICENSE).