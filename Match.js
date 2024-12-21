import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import TeamScore from './TeamScore';

const Match = ({ teamA, teamB }) => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const checkWinner = () => {
    if (scoreTeamA === 10) {
      setWinner(teamA);
      setModalVisible(true);
    } else if (scoreTeamB === 10) {
      setWinner(teamB);
      setModalVisible(true);
    }
  };

  const incrementScore = (team) => {
    if (team === 'A') {
      setScoreTeamA(scoreTeamA + 1);
    } else {
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setWinner(null);
    setModalVisible(false);
  };

  React.useEffect(() => {
    checkWinner();
  }, [scoreTeamA, scoreTeamB]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score App</Text>
      <View style={styles.infoContainer}>
        <TeamScore
          teamName={teamA}
          score={scoreTeamA}
          incrementScore={() => incrementScore('A')}
          decrementScore={() => decrementScore('A')}
        />
        <TeamScore
          teamName={teamB}
          score={scoreTeamB}
          incrementScore={() => incrementScore('B')}
          decrementScore={() => decrementScore('B')}
        />
      </View>
      <Button title="Reset Match" onPress={resetScores} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalText}>🎉 {winner} wins the match! 🎉</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    color: '#1e3a8a',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Match;
