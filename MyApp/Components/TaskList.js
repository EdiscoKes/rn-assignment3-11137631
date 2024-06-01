import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <FlatList
    data={tasks}
    renderItem={({ item }) => <TaskItem task={item.task} image={item.image} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default TaskList;