import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskList from './TaskList';
import Category from './Category';

const initialTasks = [
  { task: 'Morning jog' },
  { task: 'Study React Native' },
  { task: 'Finish coding project' },
  { task: 'Prepare dinner' },
  { task: 'Buy groceries' },
  { task: 'Read a book' },
  { task: 'Write a blog post' },
  { task: 'Meditate' },
  { task: 'Evening workout' },
  { task: 'Review pull requests' },
  { task: 'Plan next weeks meals' },
  { task: 'Organize workspace' },
  { task: 'Call family' },
  { task: 'Watch a movie' },
];

const categories = [
  { name: 'Exercise', subtitle: 'Stay Fit', icon: require('./assets/exercing2.png') },
  { name: 'Study', icon: require('./assets/studying.png'), subtitle: 'Gain Knowledge' },
  { name: 'Code', icon: require('./assets/coding.jpeg'), subtitle: 'Build Projects' },
  { name: 'Cook', icon: require('./assets/cooking.jpeg'), subtitle: 'Make Delicious Food' },
  { name: 'Shop', icon: require('./assets/Shopping.jpeg'), subtitle: 'Get Essentials' },
  { name: 'Read', icon: require('./assets/exercising1.jpg'), subtitle: 'Explore Stories' },
  { name: 'Read', icon: require('./assets/reading.png'), subtitle: 'Gaining Knowledge' },
  { name: 'Watch movie', icon: require('./assets/movie.jpeg'), subtitle: 'Unwind and Chill' },
  { name: 'play', icon: require('./assets/football.jpeg'), subtitle: 'Release some stress' },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    if (newTask) {
      setTasks((currentTasks) => [...currentTasks, newTask]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello , Devs</Text>
          <Text style={styles.taskCount}>15 tasks today</Text>
        </View>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchBarContainer}>
        <Image source={require('./assets/search button.png')} style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/listIcon.jpg')} style={styles.listButton} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} icon={category.icon} subtitle={category.subtitle} />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing</Text>
      <TaskList tasks={tasks} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

