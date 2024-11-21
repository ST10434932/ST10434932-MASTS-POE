// src/components/FilterMenu.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterMenu = () => {
    const [dishes, setDishes] = React.useState([]);

    const loadDishesFromStorage = async () => {
      try {
        const storedDishes = await AsyncStorage.getItem('dishes');
        if (storedDishes) {
          setDishes(JSON.parse(storedDishes));
        }
      } catch (error) {
        console.log('Error loading dishes', error);
      }
    };
  
    React.useEffect(() => {
      loadDishesFromStorage();
    }, []);
  
    const handleBack = () => {
      // Logic to navigate back to the previous screen if using navigation
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Filter Menu</Text>
        <FlatList
          data={dishes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.dishCard}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishDetails}>{item.courseType}</Text>
              <Text style={styles.dishDetails}>{item.description}</Text>
              <Text style={styles.dishPrice}>Price: R{item.price}</Text>
            </View>
          )}
        />
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default FilterMenu;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFBDE6',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    dishCard: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
    },
    dishName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    dishDetails: {
      fontSize: 16,
      marginVertical: 5,
    },
    dishPrice: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: '#4C6B51',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    backButtonText: {
      color: 'white',
      fontSize: 18,
    },
  });