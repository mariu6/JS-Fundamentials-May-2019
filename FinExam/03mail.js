function mail(input) {
    let capacity = input.shift();
    let sentMail = {};
    let receivedMail = {};
    let common = {};
    let summarized = {}
    // let deletedUsersCount = 0;

    for (let line of input) {
        if (line === 'Statistics') {
            for (const user in sentMail) {
                common[user] = user;
            }
            for (const user in receivedMail) {
                if (!common.hasOwnProperty(user)) {
                    common[user] = user;
                }
            }
            let count = Object.keys(common).length; // - deletedUsersCount;
            console.log(`Users count: ${count}`);
            let sortedUsers = Object.entries(receivedMail).sort(sort2D);

            summarized =sumObjectsByKey(sentMail, receivedMail);
            let asummarized= Object.entries(summarized).sort(sort2D);
            for (let i = 0; i < sortedUsers.length; i++) {
                console.log(`${sortedUsers[i][0]} - ${asummarized[i][1]}`)
            }
            // console.log(summarized);

        } else {
            let currentLine = line.split('=');
            let command = currentLine.shift();

            if (command === 'Add') {
                let [userName, sent, received] = currentLine;
                // console.log(userName, sent, received);
                add(userName, sent, received);
            }

            if (command === 'Message') {
                let [sender, receiver] = currentLine;
                // console.log(sender, receiver);
                message(sender, receiver);
            }

            if (command === 'Empty') {
                let userName = currentLine[0];
                empty(userName);
            }
        }




        function add(userName, sent, received) {
            if (!sentMail.hasOwnProperty(userName)) {   // проверяваме дали се съдържа в обекта
                sentMail[userName] = sent;     // добавяме името  и неговите данни 
            }

            if (!receivedMail.hasOwnProperty(userName)) {   // проверяваме дали се съдържа в обекта
                receivedMail[userName] = received;     // добавяме името  и неговите данни 
            }
        }

    }



    function message(sender, receiver) {
        if (sentMail.hasOwnProperty(sender) && receivedMail.hasOwnProperty(receiver)) {
            sentMail[sender]++;
            if (sentMail[sender] >= capacity) {
                console.log(`${sender} reached the capacity!`);
                delete sentMail[sender];
                delete receivedMail[sender];
                // deletedUsersCount++;
            }
            receivedMail[receiver]++;
            if (receivedMail[receiver] >= capacity) {
                console.log(`${sender} reached the capacity!`);
                delete sentMail[sender];
                delete receivedMail[receiver];
                // deletedUsersCount++;
            }
        }
    }

    function empty(userName) {
        if (sentMail.hasOwnProperty(userName)) {
            delete sentMail[userName];
        }
        if (receivedMail.hasOwnProperty(userName)) {
            delete receivedMail[userName];
        }

        if (userName === 'All') {
            for (const user in sentMail) {
                if (sentMail.hasOwnProperty(user)) {
                    delete sentMail[user];
                }
            }
            for (const user in receivedMail) {
                if (receivedMail.hasOwnProperty(user)) {
                    delete receivedMail[user];
                }
            }
        }
    }

    function sort2D(a, b) { 
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }

    // function sum(sentMail, receivedMail) {
    //     for (const user in sentMail) {
    //         if (!sentMail.hasOwnProperty(user)) {  
    //             summarized[user] = sentMail[user];     
    //         } else {
    //             summarized[user] += sentMail[user];
    //         }

    //     }
    //     for (const user in receivedMail) {
    //         if (!receivedMail.hasOwnProperty(user)) {   
    //             summarized[user] = receivedMail[user];      
    //         } else {
    //             summarized[user] += receivedMail[user];
    //         }
    //     }
    // }

    function sumObjectsByKey(...objs) {
        return objs.reduce((a, b) => {
          for (let k in b) {
            if (b.hasOwnProperty(k))
              a[k] = (Number(a[k]) || 0) + Number(b[k]);
          }
          return a;
        }, {});
      }
}

mail(['10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics']);
