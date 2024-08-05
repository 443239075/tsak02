// script.js
const notes = [];
const createNoteForm = document.getElementById('create-note-form');
const createNoteBtn = document.getElementById('create-note-btn');

createNoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const note = {
        title,
        content,
        timestamp: new Date().getTime()
    };
    notes.push(note);
    displayNotes();
});

function displayNotes() {
    const notesList = document.querySelector('.notes-list');
    notesList.innerHTML = '';
    notes.forEach((note) => {
        const noteHTML = `
            <div class="note">
                <h2>${note.title}</h2>
                <p>${note.content.substring(0, 100)}...</p>
            </div>
        `;
        notesList.insertAdjacentHTML('beforeend', noteHTML);
    });
}