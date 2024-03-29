"use client";
import React, { useState } from "react";
import TaskCard from "@/components/TaskCard";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: "Math assignment",
      description: "Complete maths assignment by 8",
      checked: false,
      date: "2024-02-11",
    },
    {
      id: 2,
      title: "clean code",
      description: "Finish backlog of dishes",
      checked: false,
      date: "2024-02-11",
    },
    {
      id: 3,
      title: "Continue Programming course",
      description: "Udemy JavaScript course",
      checked: false,
      date: "2024-02-13",
    },
    {
      id: 4,
      title: "Go for hiking",
      description: "Get set for the Tally-hills hike coming up",
      checked: false,
      date: "2024-03-18",
    },
    {
      id: 5,
      title: "Complete the project",
      description: "Finish the project by 8",
      checked: false,
      date: "2024-01-18",
    },
    {
      id: 6,
      title: "Go for a walk",
      description: "Go for a walk by 8",
      checked: false,
      date: "2024-01-18",
    },
  ]);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Filter tasks into separate arrays
  const todaysTasks = taskData.filter((task) => task.date === today);
  const futureTasks = taskData.filter((task) => task.date > today);
  const pastTasks = taskData.filter((task) => task.date < today);

  // Sort each category array
  const sortedTodaysTasks = [...todaysTasks].sort(
    (a, b) => a.checked - b.checked
  );
  const sortedFutureTasks = [...futureTasks].sort(
    (a, b) => a.checked - b.checked
  );
  const sortedPastTasks = [...pastTasks].sort((a, b) => a.checked - b.checked);

  return (
    <div className="text-text px-4 py-4 flex flex-col gap-4">
      {/* past task */}
      <div className="text-text text-lg font-semibold">Past</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedPastTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* today's task */}
      <div className="text-text text-lg font-semibold">Today</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedTodaysTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* future task */}
      <div className="text-text text-lg font-semibold">Future</div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {sortedFutureTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                checked={task.checked}
                setTaskData={setTaskData}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* {JSON.stringify(taskData)} */}
    </div>
  );
};

export default Page;
