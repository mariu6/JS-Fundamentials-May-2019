function solve(input) {
 
    for (const line of input) {      // въртим през инпута
      if (line === 'end') {         // ако входът е end, 
        break;                     // пркъсни for-a
      }
   
      let [ artist, song ] = line.split(':');  // разделяме по : и правим две променливи
   
      if (!/^[A-Z][a-z\s\']+$/g.test(artist) || !/^[A-Z\s]+$/g.test(song)) {   
          // проверяваме едновременно и двете променливи с TEST, и ако един от тях не отговаря 
       console.log('Invalid input!');           // принтираме 
       continue;              // продължава към следващата итерация на for-of цикъла
     }
   
     let key = artist.length;     // взимаме ключа
     let encryptedString = '';    // инициализираме променлива за криптирания стринг
     for (const char of line) {   // цикъл върху цялата линия
       if (char === ':') {        // когато стигне до :  
         encryptedString += '@';  // да замести с @  
         continue;                // и да премине към следващата итерация
       }
   
       let asciiCode = char.charCodeAt(0);          // променлива с аски кода на текущия символ
       if ((asciiCode >= 65 && asciiCode <= 90)) {  // цикъл с проверка за Главна буква,
         asciiCode += key;                          // генериране на нов символ, като добавя стойност на ключ    
         if (asciiCode > 90) {                      // ако излезе над Z,    
           asciiCode -= 26;                         // да върне с 26 позиции до А
         }
       }
   
       if ((asciiCode >= 97 && asciiCode <= 122)) {  // идентична проверка с малките букви
         asciiCode += key;
         if (asciiCode > 122) {
           asciiCode -= 26;
         }
       }
   
       encryptedString += String.fromCharCode(asciiCode);   // добавяне на всеки елемент към криптирания стринг
     }
   
     console.log(`Successful encryption: ${encryptedString}`);  // принтиране на криптирания ред
   }
  }
   
  solve(
  [
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:ROLLING IN THE DEEP',
    'end'
  ]
  );
   
  solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end'
  ])