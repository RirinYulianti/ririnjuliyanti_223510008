import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const QuoteCard = ({ quote, author }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.quote}>
          "{quote}"
        </Text>
        <Text variant="bodyMedium" style={styles.author}>
          - {author}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 15, // Rounded corners for card
    backgroundColor: '#fff', // White background for card
    elevation: 4, // Shadow effect for depth
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#333', // Dark text for better contrast
  },
  author: {
    textAlign: 'right',
    fontSize: 14,
    color: '#6200ee', // Color for author's name
  },
});

export default QuoteCard;
