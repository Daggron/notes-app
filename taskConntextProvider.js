import React from 'react';

export const TaskContext = React.createContext();

export const TaskConntextProvider = props => {
  const [tasks, setTasks] = React.useState([]);

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
};
