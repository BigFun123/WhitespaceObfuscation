const fs = require('fs');

function encode(data) {
        // convert characters in data into binary, and then replace 0 with space and 1 with tab
        
        // convert each character into 8 bits
        data = data.split('').map((char) => {
            let bits = char.charCodeAt(0).toString(2);
            while (bits.length < 8) {
                bits = '0' + bits;
            }
            return bits;
        }).join('');

        // convert each bit into a space or tab
        data = data.replace(/0/g, '\t').replace(/1/g, ' ');

        return data;
}

function readInput() {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);        
        fs.writeFile('../puzzle/sekretcodez.txt', encode(data), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}

readInput();

