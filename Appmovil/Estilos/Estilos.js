import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    alignItems: 'center',
  },
  topBlock: { alignItems: 'center' },
  bottomBlock: { alignItems: 'center' },

  titulo: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    marginTop: 100,
  },

  // 👇 Unifica personaje en un solo estilo
  personaje: {
    position: 'absolute',
    bottom: -600,
    right: -50,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },

  boton: {
    backgroundColor: '#3d2a75',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  botonTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  registroTexto: { color: '#fff', fontSize: 14 },
  link: { color: '#4d317cff', fontWeight: 'bold' },

  pantalla: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  textoPantalla: { fontSize: 20, fontWeight: 'bold' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    height: '90%',
  },
  regresar: { color: '#3d2a75', fontSize: 16, marginBottom: 20 },
  registroAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
  registroTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: { fontSize: 14, marginBottom: 5, color: '#555' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  inputPassword: { flex: 1, padding: 12 },
  toggle: { paddingHorizontal: 12, fontSize: 18 },
  olvido: { color: '#3d2a75', textAlign: 'right', marginBottom: 20 },
  botonRegistro: {
    backgroundColor: '#6a4fb3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  // 👇 Nuevo estilo para tarjetas (blogs, etc.)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, // sombra suave
    shadowRadius: 3,
    elevation: 3,
  },
});