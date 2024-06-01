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
      <TaskList style={styles.sectionTitle} tasks={tasks} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
tasks:{
fontWeight:'bold',
},


  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  taskCount: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f7f0e8',
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f7f0e8',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  listButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7f0e8',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: '30%',
    height:'30%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  categorySubtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
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
    fontSize: 16,
  },
});