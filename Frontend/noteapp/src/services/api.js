const BASE_URL = "http://localhost:8080";

export const fetchNotes = async () => {
    const res = await fetch(`${BASE_URL}/notes`);
    return res.json();
};

export const createNote = async (note) => {
    await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    });
};

export const deleteNote = async (index) => {
    await fetch(`${BASE_URL}/notes/${index}`, {
        method: "DELETE",
    });
};

export const updateNote = async (index, note) => {
    await fetch(`${BASE_URL}/notes/${index}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    });
};