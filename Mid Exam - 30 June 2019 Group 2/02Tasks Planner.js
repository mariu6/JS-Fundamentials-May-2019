function taskPlanner(array) {
    let tasks = array.shift().split(' ').map(Number);
    let i = 0;
    while (array[i] !== 'End') {
        let newArray = array[i].split(' ');
        let command = newArray.shift();
        if (command === 'Count') {
            command = newArray.shift();
        }
        newArray = newArray.map(Number);
        let counter = 0;
        let copyTasks = [...tasks];
        switch (command) {
            case 'Complete':
                if (newArray[0] < tasks.length && newArray[0] >= 0) {
                    tasks[newArray[0]] = 0;
                }
                break;
            case 'Change':
                if (tasks.includes(newArray[0])) {
                    tasks[newArray[0]] = Math.floor(Math.min(newArray[1], 5));
                }
                break;
            case 'Drop':
                if (newArray[0] < tasks.length && newArray[0] >= 0) {
                    tasks[newArray[0]] = -1;
                }
                break;
            case 'Completed':
                counter = 0;
                while (copyTasks.includes(0)) {
                    let positionFound = copyTasks.indexOf(0);
                    counter++;
                    copyTasks.splice(positionFound, 1);
                }
                console.log(counter);
                break;
            case 'Incomplete':
                counter = 0;
                for (let j = 0; j < tasks.length; j++) {
                    if (tasks[j] > 0) {
                        counter++;
                    }
                }
                console.log(counter);
                break;

            case 'Dropped':
                counter = 0;
                copyTasks = copyTasks.map(x < -1 ? x = - 1 : x = x);
                while (copyTasks.includes(-1)) {
                    let positionFound = copyTasks.indexOf(-1);
                    counter++;
                    copyTasks.splice(positionFound, 1);
                }
                console.log(counter);
                break;
            default:
                break;
        }
        i++;
    }
    counter = '';
    for (let j = 0; j < tasks.length; j++) {
        if (tasks[j] > 0) {
            counter += tasks[j] + ' ';
        }
    }
    console.log(counter.trim());
}
taskPlanner(['1 -1 2 3 4 5', 'Complete 4', 'Change 0 4', 'Drop 3', 'Count Incomplete', 'End'])

taskPlanner(['1 2 3 4 5 4 0 3 2 1',
    'Complete 0', 'Complete 1', 'Complete 2', 'Drop 3', 'Change 4 1', 'Count Completed', 'End'])