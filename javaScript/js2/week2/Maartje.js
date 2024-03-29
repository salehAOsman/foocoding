"use strict";
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
const tasks = monday.concat(tuesday);
console.log("All taskes in on Array",tasks);

const tasksInHour = tasks.map(t => (t.duration / 60).toFixed( 2 ));
console.log("Times in hours",tasksInHour);

const tasksBiggerThanTowHours = tasksInHour.filter(t => t >= 2);
console.log("Tasks that duration >= 2: ", tasksBiggerThanTowHours );

const billings = tasksBiggerThanTowHours.map( billing => billing * 20 );
console.log( "Multiply by 20 Euro: ",billings );

const total = billings.reduce( (total, t) => total + t, 0 );
console.log("Total: ", total );
const totalInEuro = total.toFixed( 2 );
console.log( "Total In Euro: ",totalInEuro );