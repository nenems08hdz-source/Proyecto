import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../Estilos/colors';
import StatCard from './components/StatCard';
import IncidentCard from './components/IncidentCard';
import BlogCard from './components/BlogCard'; // 👈 importamos BlogCard
import { stats, incidents, blogs } from './data'; // 👈 importamos blogs también

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Fondo morado decorativo */}
        <View style={styles.backgroundTop} />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Saludo con imagen */}
          <View style={styles.headerContent}>
            <Image
              source={require('../assets/personaje1.png')}
              style={styles.avatar}
            />
            <Text style={styles.greeting}>¡Hola, Mariel!</Text>
          </View>

          {/* Blogs recientes */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Blogs recientes</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
                <Text style={styles.link}>Ver más</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal
              data={blogs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <BlogCard blog={item} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            />
          </View>

          {/* Estadísticas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitleDark}>Estadísticas de la semana</Text>
            <View style={styles.statsRow}>
              {Array.isArray(stats) &&
                stats.map((s) => <StatCard key={s.id} stat={s} />)}
            </View>
          </View>

          {/* Incidentes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitleDark}>Lista de incidentes</Text>
            {Array.isArray(incidents) &&
              incidents.map((i) => (
                <IncidentCard key={i.id} incident={i} />
              ))}
          </View>

          <View style={{ height: 24 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.backgroundBody,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: colors.backgroundTop,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
  },
  scrollContent: {
    paddingTop: 120,
    paddingBottom: 80,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 24,
  },
  greeting: {
    color: colors.textOnPurple,
    fontSize: 22,
    fontWeight: '700',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textOnPurple,
  },
  link: {
    fontSize: 14,
    color: colors.textOnPurple,
    textDecorationLine: 'underline',
  },
  horizontalList: {
    paddingVertical: 12,
  },
  sectionTitleDark: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
  },
});