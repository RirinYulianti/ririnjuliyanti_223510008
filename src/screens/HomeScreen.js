import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import QuoteCard from '../components/QuoteCard';

const HomeScreen = ({ navigation }) => {
  const quotes = [
    { quote: "Hari ini mungkin berat, tapi yakinlah bahwa kerja kerasmu akan membuahkan hasil di masa depan.", author: "Michelle Obama" },
    { quote: "Keberhasilan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci keberhasilan.", author: "Albert Schweitzer" },
    { quote: "Jangan pernah menyerah, karena hari esok mungkin menjadi hari terbaik dalam hidupmu.", author: "Harriet Beecher Stowe" },
    { quote: "Percaya pada dirimu sendiri dan semua yang kamu inginkan akan tercapai.", author: "Walt Disney" }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>Selamat Datang di Aplikasi Quotes</Text>
        <Text style={styles.appSubtitle}>Temukan inspirasi dan motivasi di setiap kutipan</Text>
      </View>

      {quotes.map((quote, index) => (
        <View key={index} style={styles.quoteCard}>
          <Text style={styles.smallQuoteText}>{quote.quote}</Text>
          <Text style={styles.smallAuthorText}>- {quote.author}</Text>
        </View>
      ))}

      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        onPress={() => navigation.navigate('About')}
      >
        Tentang Aplikasi
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#e1bee7',
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a148c',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  appSubtitle: {
    fontSize: 14,
    color: '#7b1fa2',
    textAlign: 'center',
    marginBottom: 5,
  },
  quoteCard: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#8e24aa',
  },
  smallQuoteText: {
    fontSize: 12, // Ukuran font lebih kecil untuk teks kutipan
    color: '#000',
    marginBottom: 5,
  },
  smallAuthorText: {
    fontSize: 10, // Ukuran font lebih kecil untuk nama penulis
    color: '#7b1fa2',
    fontStyle: 'italic',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#8e24aa',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    elevation: 6,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
