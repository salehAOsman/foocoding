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
  const tasks=monday.concat(tuesday);
  console.log(tasks);


  const tasksInHour = tasks.map(t => t.duration / 60);
  console.log(tasksInHour);

  const tasksBiggerThanTowHours=tasksInHour.filter(t=>t >= 2);
  console.log(tasksBiggerThanTowHours);

  const billings=tasksBiggerThanTowHours.map(billing=>billing * 20);
  console.log(billings);

  const total=billings.reduce((total,t)=>total+t,0);
  console.log(total);

  
  const totalInEuro=total.toFixed(2);
  console.log(totalInEuro);