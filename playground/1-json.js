const fs = require('fs');
const yargs = require('yargs');
const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
var data = JSON.parse(dataJson);
yargs.command({
    command: 'modify',
    describe: 'modify the name and age',
    builder:{
        name: {
            demandOption : true,
            describe: 'Name',
            type: 'string',
        },
        age: {
            demandOption: true,
            describe: 'Age',
            type: 'integer',
        }
    },
    handler: function(argv){
        data.age = argv.age;
        data.name = argv.name;
    }
});
yargs.parse();
// const book = {
//     title: 'Ego',
//     authour: 'Saksham'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.authour);

// fs.writeFileSync('1-json.json', bookJSON);
// console.log(data.name)
fs.writeFileSync('1-json.json', JSON.stringify(data));

