import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { colors } from '../Estilos/colors';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const storedPassword = '123456'; // Simulación

  const handleSave = () => {
    if (!currentPassword || !newPassword) {
      Alert.alert('Campos vacíos', 'Por favor completa ambos campos.');
      return;
    }

    if (currentPassword !== storedPassword) {
      Alert.alert('Contraseña incorrecta', 'La contraseña actual no es válida.');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Contraseña débil', 'La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }

    Alert.alert('Éxito', 'Tu contraseña ha sido actualizada.');
    setCurrentPassword('');
    setNewPassword('');
  };

  const handleLogout = () => {
    Alert.alert('Sesión cerrada', 'Has salido de tu cuenta.');
    navigation.navigate('Login');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      '¿Estás segura?',
      'Esta acción eliminará tu cuenta permanentemente.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Cuenta eliminada', 'Tu cuenta ha sido borrada.');
            navigation.navigate('Bienvenida');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Fondos decorativos */}
      <View style={styles.topBackground} />
      <View style={styles.bottomBackground} />

      {/* Avatar flotante */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/personaje1.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Editar perfil</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Anterior contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña actual"
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />

          <Text style={styles.label}>Nueva contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nueva contraseña"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Guardar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
            <Ionicons name="log-out" size={18} color={colors.textPrimary} />
            <Text style={styles.actionText}>Cerrar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleDeleteAccount}>
            <Ionicons name="close-circle" size={18} color={colors.textPrimary} />
            <Text style={styles.actionText}>Borrar cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBody,
    position: 'relative',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    height: '35%',
    width: '100%',
    backgroundColor: colors.backgroundTop,
    borderBottomLeftRadius: 40,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    height: '65%',
    width: '100%',
    backgroundColor: colors.backgroundBody,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 80,
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    backgroundColor: '#8a6df4ff',
    borderRadius: 22,
    padding: 6,
  },
  content: {
    marginTop: 200,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  form: {
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  saveButton: {
    backgroundColor: '#6A4BD8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomButtons: {
    marginTop: 40,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.textPrimary,
  },
});