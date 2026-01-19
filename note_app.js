let readline = require('readline-sync');

let option = readline.question(`
    1. Add a note \n
    2. List all notes \n
    3. Read a note \n
    4. Delete a note \n
    5. Update a note \n
    6. Exit \n
    Enter your choice: `);

function readFile() {
    
}

function writeFile() {

}

    
function addNote () {
    let userTitle = readline.question("Enter note title: ");
    let userBody = readline.question("Enter note body: ")
    let userTime = new Date().toISOString();

    let newNote = {
        title : userTitle,
        body : userBody,
        time_added : userTime
    }

    const json = JSON.stringify(newNote, null, 2);


}