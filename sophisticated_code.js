/*** 
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex and elaborate implementation of a task scheduler using JavaScript.
 * Author: AI Assistant
 * Version: 1.0
***/

// Task Scheduler class
class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.currentTaskIndex = 0;
    this.isRunning = false;
  }

  // Add a task to the scheduler
  addTask(task) {
    if (typeof task === 'function') {
      this.tasks.push(task);
    } else {
      throw new Error('Invalid task provided');
    }
  }

  // Run the tasks
  run() {
    if (this.isRunning) {
      console.log('Scheduler is already running');
      return;
    }

    this.isRunning = true;
    this.executeTask();
  }

  // Execute the current task
  executeTask() {
    if (this.currentTaskIndex < this.tasks.length) {
      const currentTask = this.tasks[this.currentTaskIndex];
      currentTask();

      this.currentTaskIndex++;
      setTimeout(() => this.executeTask(), 0);
    } else {
      this.isRunning = false;
      console.log('All tasks completed');
    }
  }
}

// Create a new task scheduler instance
const scheduler = new TaskScheduler();

// Define some asynchronous tasks
const task1 = () => {
  console.log('Task 1 started');
  setTimeout(() => {
    console.log('Task 1 completed');
  }, 1000);
};

const task2 = () => {
  setTimeout(() => {
    console.log('Task 2 started');
  }, 500);
  setTimeout(() => {
    console.log('Task 2 completed');
  }, 2000);
};

const task3 = () => {
  console.log('Task 3 started');
  setTimeout(() => {
    console.log('Task 3 completed');
  }, 1500);
};

// Add the tasks to the scheduler
scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);

// Run the task scheduler
scheduler.run();