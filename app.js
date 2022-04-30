
const notes=require('./notes.js');
const chalk=require('chalk');
const yargs=require('yargs');

// Add Command
yargs.command({
    command: 'add',
    describe: 'This command will add a new Note',
    builder:{
            title:{
                describe:'The Note Title',
                demandOption: true,
                type: 'string'
            },

            body:{
                describe:'The Note Contents',
                demandOption: true,
                type: 'string'
            }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'This command will remove an added Note',
    builder:{
        title:{
            describe:'The Note Title',
            demandOption: true,
            type: 'string'
        },
},
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// List Command
yargs.command({
    command: 'list',
    describe: 'This command will list all the Notes',
    handler(){
        notes.listNotes()
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'This command will read a Note',
    builder:{
        title:{
            describe:'The Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
