import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ name, icon, subtitle }) => (
  <View style={styles.categoryCard}>
    <Image source={icon} style={styles.categoryIcon} />
    <Text style={styles.categoryTitle}>{name}</Text>
    <Text style={styles.categorySubtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryCard: {
    width: '30%',
    height: '30%',
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
});

export default Category;