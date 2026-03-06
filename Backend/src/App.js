//creating the server
const express = require('express');
const cors = require('cors');

const app = express();

/*now you see running this command will get you an undefined value in terminal as sending req from postman requires 
a middleware to see the actual desired outcome of the req.body and that is express.json() which is a built in middleware
in express to parse incoming json data and put it in req.body */

app.use(cors({
      origin: "http://localhost:5173"

}));              // FIRST
app.use(express.json());

//to create a note user must add or input a title and a discription of the note
const notes = [];


//this command post or send data to the server
app.post('/notes', (req, res) => {
    const { title, discription } = req.body;

    if (!title || !discription) {
        return res.status(400).json({ message: "Title and description required" });
    }

    notes.push({ title, discription });

    res.status(201).json({ message: "Note created successfully" });
});

//now this command will get all the notes created by the user from the server
app.get('/notes', (req, res)=>{
    res.status(200).json({
        notes : notes,
        message : "notes fetched successfully"
    })
});

//now this is command we use for deleting a note using the index of the note in the array of notes
/*we are using /notes/:index here so colon here is used to define a route parameter 
means basically to define that the index is dynamic value*/ 
app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: "Note not found" });
    }

    notes.splice(index, 1);

    res.status(200).json({ message: "Note deleted successfully" });
});

/*now to update description of the note created*/
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const discription = req.body.discription;

    const title = req.body.title;
    
    notes[index].discription = discription;
    notes[index].title = title;

    res.status(200).json({
        message :"note updated successfully"
    })

})

module.exports = app;