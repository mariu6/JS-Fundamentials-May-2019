function string(input) {
  let text = input.shift();

  for (const line of input) {

    if (line === 'End') {    // ако командата е end,
      break;              // да прекъсне
    }

    let currentLine = line.split(' ');
    let command = currentLine.shift();

    if (command === 'Translate') {
      let regex = new RegExp(currentLine[0], 'g');
      text = text.replace(regex, currentLine[1]);
      console.log(text);
    }

    if (command === 'Includes') {
      if (text.includes(currentLine[0])) {
        console.log('True');
      } else {
        console.log('False');
      }
    }

    if (command === 'Start') {
      if (text.startsWith(currentLine[0])) {
        console.log('True');
      } else {
        console.log('False');
      }
    }

    if (command === 'Lowercase') {
      text = text.toLowerCase();
      console.log(text);
    }

    if (command === 'FindIndex') {
      console.log(text.lastIndexOf(currentLine[0]));
    }
    
    if (command === 'Remove') {
      let newText = text.split('');
      newText.splice(currentLine[0], currentLine[1]);
      console.log(newText.join(''));
    }
    // console.log(line);
  }
}

string(['//Thi5 I5 MY 5trING!//',
  'Translate 5 s',
  'Includes string',
  'Start //This',
  'Lowercase',
  'FindIndex i',
  'Remove 0 10',
  'End']
);