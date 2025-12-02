// screens/components/BlogCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../Estilos/colors';

function BlogCard({ blog }) {
  if (!blog) return null; // defensa por si blog llega vacío

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.summary}>{blog.summary}</Text>
      <Text style={styles.date}>{blog.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: colors.cardBackground, // 👈 ahora sí existe en colors.js
    // sombra más ligera y elegante
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, // más suave
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  summary: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'right',
  },
});

export default BlogCard;