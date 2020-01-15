import React from 'react';
import AppNavigator from './appNavigator';
import {TaskConntextProvider} from './taskConntextProvider';

const App = () => {
  return (
    <TaskConntextProvider>
      <AppNavigator />
    </TaskConntextProvider>
  );
};

export default App;
