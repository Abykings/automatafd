/*
Enrique Abdiel Reyes Rodriguez
2019630112
2CV3
*/
const path = require('path')
const fs = require('fs');
const fsPromises = fs.promises;
const { Select } = require('enquirer');
const { prompt } = require('enquirer');
const Automata = require('./Automata')

function main(file) {
    var fileAfd = require(path.join(__dirname, file));
    var automata = new Automata(fileAfd);
    const optionsMenu = new Select({
        name: 'menu',
        message: '¿Que deseas hacer?',
        choices: ['Ver tabla de transicion', 'Evaluar cadena', 'Salir']
    });
    optionsMenu.run()
        .then(answer => {
            switch (answer) {
                case 'Ver tabla de transicion':
                    console.log("\tTabla de transicion\n\n")
                    automata.verTablaTransicion();
                    console.log("\n\n")
                    main(file);
                    break;
                case 'Evaluar cadena':
                    async function ls() {
                        const string = await prompt({
                            type: 'input',
                            name: 'string',
                            message: 'Introduce la cadena a leer,\tΣ: {' + automata.simbolos + '}'
                        });
                        return string
                    }
                    ls().then((string) => {
                        automata.evalua(string.string);
                        main(file)
                    });
                    break;
                case 'Salir':
                    break;
                default:
                    break;
            }
        })
        .catch(console.error);
}



async function listDir() {
    try {
        var a = fsPromises.readdir('./');
        return a;
    } catch (err) {
        console.error('Error occured while reading directory!', err);
    }
}
listDir().then((a) => {
    preguntaArchivo(a);
});
function preguntaArchivo(a) {
    const prompt = new Select({
        name: 'menu',
        message: 'Elije el archivo a leer',
        choices: a
    });
    prompt.run()
        .then(file => {
            main(file);
        })
        .catch(console.error);
}
