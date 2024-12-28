import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Divider, Button } from 'react-native-paper';

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Gambar */}
      <Image
        source={require('../../assets/qoutes.png')}
        style={styles.headerImage}
      />

      {/* Judul dengan gaya baru */}
      <Text variant="headlineLarge" style={styles.title}>
        ✨ Tentang Aplikasi Quotes ✨
      </Text>
      <Divider style={styles.divider} />

      {/* Teks Penjelasan */}
      <View style={styles.card}>
        <Text style={styles.text}>
          <Text style={styles.icon}>🌟</Text> 
          <Text style={styles.highlight}> Aplikasi ini</Text> bertujuan memberikan semangat melalui kutipan-kutipan motivasi. 
          Setiap orang harus tetap <Text style={styles.bold}>semangat</Text>, bekerja keras, dan percaya pada diri sendiri. 
          Kesuksesan tidak hanya ditentukan oleh hasil, tetapi juga oleh <Text style={styles.highlight}>kebahagiaan</Text> 
          dan <Text style={styles.bold}>keyakinan</Text> dalam menghadapi tantangan.
        </Text>
        <Text style={[styles.text, styles.marginTop]}>
          <Text style={styles.icon}>💡</Text> Meskipun masa sulit datang, kita harus percaya bahwa masa depan yang lebih baik akan tiba jika kita terus berusaha 
          dan tidak menyerah. Semua kutipan ini mengajak kita untuk menjaga <Text style={styles.highlight}>optimisme</Text>, percaya pada proses, 
          dan selalu berusaha mencapai yang terbaik dalam hidup.
        </Text>
      </View>

      {/* Tombol kembali ke Home */}
      <Button
        icon="home"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        Kembali ke Home
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3e5f5',
  },
  headerImage: {
    width: '900%', // Ukuran gambar diperkecil
    height: 150, // Tinggi gambar diperkecil
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    color: '#6a1b9a',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadowColor: '#d1c4e9',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  divider: {
    width: '70%',
    height: 3,
    backgroundColor: '#8e24aa',
    marginVertical: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginVertical: 15,
    elevation: 10,
    width: '100%',
    borderLeftWidth: 5,
    borderLeftColor: '#6a1b9a',
  },
  text: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#424242',
    lineHeight: 22,
    letterSpacing: 0.4,
  },
  highlight: {
    color: '#6a1b9a',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: '700',
    color: '#333',
  },
  icon: {
    fontSize: 16,
    marginRight: 5,
    color: '#6a1b9a',
  },
  marginTop: {
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#8e24aa',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 6,
  },
});

export default AboutScreen;
