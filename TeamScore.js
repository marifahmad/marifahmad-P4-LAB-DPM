import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, incrementScore, decrementScore }) => {
  return (
    <View style={styles.team}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementScore}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrementScore}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  team: {
    alignItems: 'center',
    backgroundColor: '#00CED1',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  score: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ADFF2F',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TeamScore;
