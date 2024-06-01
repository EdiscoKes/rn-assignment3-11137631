import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TaskItem = ({ task, image }) => (
  <View style={styles.taskItem}>
    <Image source={image} style={styles.taskImage} />
    <Text style={styles.taskText}>{task}</Text>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  taskImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;