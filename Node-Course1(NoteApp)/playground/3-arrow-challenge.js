const tasks = {
    tasks: [{
        text:'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'File course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task));task.completed === false
    }
}

console.log(tasks.getTasksToDo())