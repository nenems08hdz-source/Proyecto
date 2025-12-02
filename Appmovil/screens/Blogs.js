import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { blogs } from './data'; // 👈 importamos los blogs
import BlogCard from './components/BlogCard'; // 👈 usamos el mismo componente que en Dashboard
import { colors } from '../Estilos/colors';

export default function Blogs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos los Blogs</Text>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogCard blog={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBody,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
});