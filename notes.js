const { Console } = require('console')
const chalk=require('chalk');
const fs=require('fs')

const removeNote=(title)=>{
    const notes=loadNotes()
    const retainedNotes=notes.filter((note)=>note.title !== title
    ) 
    if (notes.length===retainedNotes.length){
        console.log(chalk.bgRed.black('Note Title does not exist'))

    }else{
        saveNotes(retainedNotes)
        console.log(chalk.bgGreen.white('Note Deleted Succefully !!!'))
    }
      
};

 const addNote=  (title,body)=>{

    const notes=loadNotes()
    const duplicateNote=notes.find((note)=>note.title ===title)
    debugger
    if (!duplicateNote){

        notes.push({
            'title': title,
            'body':body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.white('Note added Succefully !!!'))

    }else{
        console.log(chalk.bgRed.black('Note Title is already Taken!!'))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.red.bold.bgWhite('The Notes List'))
    console.log(chalk.red.bold.bgWhite('****************************'))
    notes.forEach(note => {
        console.log(chalk.blue.bold(note.title))
        
    });
}

const readNote=(title)=>{
    const notes=loadNotes()
    const noteToRead=notes.find((note)=>note.title === title ) 
    if (noteToRead){

        console.log(chalk.bgWhite.red(noteToRead.title+':::')+ noteToRead.body)   
    }else{
        console.log(chalk.bgRed.black('Note doesn\'t exist !!!'))
          
    }
      
};

const saveNotes=(notes)=>{
    const jsonData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonData)
}

const loadNotes = ()=> {
try {
    const dataBuffer=fs.readFileSync('notes.json')
    return JSON.parse(dataBuffer.toString())

 } catch(e){

    return []
}
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
