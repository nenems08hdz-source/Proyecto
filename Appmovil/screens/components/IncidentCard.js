import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../Estilos/colors';

function IncidentCard({ incident }) {
  if (!incident) return null; // defensa por si llega vacío

  return (
    <View style={styles.card}>
      <Text style={styles.type}>{incident.type}</Text>
      <Text style={styles.title}>Título: {incident.title}</Text>
      <Text style={styles.details}>{incident.details}</Text>
      <Text style={styles.meta}>📍 {incident.location}</Text>
      <Text style={styles.meta}>📅 {incident.dateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.cardBackground, // ✅ corregido
    marginBottom: 12,
    // sombra más suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12, // ✅ más ligera
    shadowRadius: 2,
    elevation: 2,
  },
  type: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  details: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 18,
  },
  meta: {
    fontSize: 12,
    color: colors.textMuted, // ✅ más discreto
    marginTop: 2,
  },
});

export default IncidentCard;