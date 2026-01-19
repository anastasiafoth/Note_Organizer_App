let readline = require('readline-sync');
const fs = require("fs");

// absolute path for notes.json
const path = require("path");
const FILEPATH = path.resolve("data", "notes.json");


let option = readline.question(`
    1. Add a note \n
    2. List all notes \n
    3. Read a note \n
    4. Delete a note \n
    5. Update a note \n
    6. Exit \n
    Enter your choice: `);

function readFile() {
    let notesData = fs.readFileSync(FILEPATH, "utf8");
    let notesParsed = JSON.parse(notesData);
    return notesParsed;
}

function writeFile(notes) {
    const json = JSON.stringify(notes, null, 2);
    fs.writeFileSync(FILEPATH, json);
    console.log("Note added successfully!");
}

    
function addNote () {
    let userTitle = readline.question("Enter note title: ");
    let userBody = readline.question("Enter note body: ");
    let userTime = new Date().toISOString();

    let newNote = {
        title : userTitle,
        body : userBody,
        time_added : userTime
    };

    let notes = readFile();
    notes.push(newNote);

    writeFile(notes);  
};


function listNotes() {
    let notes = readFile();

    for (let [index, note] of Object.entries(notes)) {
        index = Number(index) + 1
        console.log(
            `${index}. Title: ${note.title} \n`+
            `   Body: ${note.body} \n`+
            `   Added on: ${note.time_added} \n`)
    };
};

listNotes()