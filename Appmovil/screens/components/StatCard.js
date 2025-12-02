// screens/components/StatCard.js
import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Íconos para cada estadística (coinciden con los nombres reales en /assets)
const ICONS = {
  robos: require('../../assets/Robos.png'),        // R mayúscula
  accidentes: require('../../assets/accidentes.png'), // minúscula
  incendios: require('../../assets/Incendios.png'),   // I mayúscula
};

function StatCard({ stat }) {
  if (!stat) return null;

  const iconSource = ICONS[stat.id] || null;

  return (
    <LinearGradient colors={stat.gradient} style={styles.card}>
      {iconSource && <Image source={iconSource} style={styles.icon} />}
      <Text style={styles.label}>{stat.label}</Text>
      <Text style={styles.value}>{stat.value}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 107,
    height: 110,
    borderRadius: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
});

export default StatCard;