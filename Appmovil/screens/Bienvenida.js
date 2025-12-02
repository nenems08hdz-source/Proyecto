import React from 'react';
import styles from '../Estilos/Estilos';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function Bienvenida({ navigation }) {
  const [mostrarRegistro, setMostrarRegistro] = React.useState(false);
  const [mostrarLogin, setMostrarLogin] = React.useState(false);
  const [verPassword, setVerPassword] = React.useState(false);
  const [verPasswordRegistro, setVerPasswordRegistro] = React.useState(false);

  return (
    <LinearGradient colors={['#6a4fb3', '#bba7f2ff']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Bloque superior */}
      <View style={styles.topBlock}>
        <Text style={styles.titulo}>CaminoSeguro</Text>
        <Image source={require('../assets/Personajemovil.png')} style={styles.personaje} />
      </View>

      {/* Bloque inferior */}
      <View style={styles.bottomBlock}>
        <TouchableOpacity style={styles.boton} onPress={() => setMostrarLogin(true)}>
          <Text style={styles.botonTexto}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMostrarRegistro(true)}>
          <Text style={styles.registroTexto}>
            ¿No tienes cuenta? <Text style={styles.link}>Regístrate</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Registro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={mostrarRegistro}
        onRequestClose={() => setMostrarRegistro(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalContent}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
              <Pressable onPress={() => setMostrarRegistro(false)}>
                <Text style={styles.regresar}>‹ Regresar</Text>
              </Pressable>

              <Image source={require('../assets/personaje2.png')} style={styles.registroAvatar} />
              <Text style={styles.registroTitulo}>Regístrate</Text>

              <Text style={styles.label}>Nombre</Text>
              <TextInput style={styles.input} placeholder="Ingrese un nombre" autoCapitalize="words" />

              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su correo"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Ingrese su contraseña"
                  secureTextEntry={!verPasswordRegistro}
                />
                <TouchableOpacity onPress={() => setVerPasswordRegistro(!verPasswordRegistro)}>
                  <Image
                    source={
                      verPasswordRegistro
                        ? require('../assets/ojo.png')
                        : require('../assets/oculto.png')
                    }
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.botonRegistro}>
                <Text style={styles.botonTexto}>Registrarse</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>

      {/* Modal de Inicio de Sesión */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={mostrarLogin}
        onRequestClose={() => setMostrarLogin(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalContent}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
              <Pressable onPress={() => setMostrarLogin(false)}>
                <Text style={styles.regresar}>‹ Regresar</Text>
              </Pressable>

              <Image source={require('../assets/personaje1.png')} style={styles.registroAvatar} />
              <Text style={styles.registroTitulo}>Iniciar sesión</Text>

              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su correo"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Ingrese su contraseña"
                  secureTextEntry={!verPassword}
                />
                <TouchableOpacity onPress={() => setVerPassword(!verPassword)}>
                  <Image
                    source={
                      verPassword
                        ? require('../assets/ojo.png')
                        : require('../assets/oculto.png')
                    }
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('RecuperarContrasena')}>
  <Text style={{ color: '#6A4BD8', textAlign: 'right', marginTop: 8 }}>
    ¿Olvidaste tu contraseña?
  </Text>
</TouchableOpacity>

              <TouchableOpacity
          style={styles.botonRegistro}
          onPress={() => {
            setMostrarLogin(false);
            navigation.navigate('Main');
          }}
        >
          <Text style={styles.botonTexto}>Empezar</Text>

              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </LinearGradient>
  );
}