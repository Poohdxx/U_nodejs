const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var theNote = notes.filter((n) => {
        return n.title === title
    });
    return theNote[0];
};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((n) => n.title !== title);
    // save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    // Break on this line and use repl to output note
    // Use read command with --title
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    // addNote: addNote
    addNote,     //ES6
    getAll,
    getNote,
    removeNote,
    logNote
};