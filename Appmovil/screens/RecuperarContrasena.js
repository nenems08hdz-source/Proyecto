import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../Estilos/colors';

export default function RecuperarContrasena({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecovery = () => {
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      Alert.alert('Correo inválido', 'Por favor ingresa un correo válido.');
      return;
    }

    setLoading(true);

    // Simulación de envío de correo de recuperación
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Solicitud enviada',
        'Te hemos enviado instrucciones para recuperar tu contraseña.'
      );
      navigation.goBack();
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Campo de correo electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleRecovery}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.textOnPurple} />
        ) : (
          <Text style={styles.buttonText}>Enviar instrucciones</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹ Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBody,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  button: {
    backgroundColor: colors.buttonPrimary, // 👈 ahora usa tu paleta
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.textOnPurple,
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    textAlign: 'center',
    color: colors.buttonPrimary,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
});