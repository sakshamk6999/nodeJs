const chalk = require('chalk');
const f = require('./notes.js');
const yargs = require('yargs');

// console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function(){
        console.log('Listing all the notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler: function(){
        console.log('Reading');
    }
});

yargs.parse();