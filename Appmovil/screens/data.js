import { colors } from '../Estilos/colors';

export const stats = [
  {
    id: 'robos',
    label: 'Robos',
    value: 5,
    gradient: [colors.statRobosStart, colors.statRobosEnd],
  },
  {
    id: 'accidentes',
    label: 'Accidentes',
    value: 3,
    gradient: [colors.statAccidentesStart, colors.statAccidentesEnd],
  },
  {
    id: 'incendios',
    label: 'Incendios',
    value: 1,
    gradient: [colors.statIncendiosStart, colors.statIncendiosEnd],
  },
];

export const incidents = [
  {
    id: 'i1',
    type: 'Incendio',
    title: 'Incendio local',
    details:
      'Se reportó fuego en una tienda de abarrotes ubicada en la esquina de Calle 5, Av. Universidad. Bomberos ya fueron llamados. No se reportan heridos.',
    location: 'Colonia Centro',
    dateTime: '27 de noviembre de 2023, 14:45',
  },
  {
    id: 'i2',
    type: 'Robo',
    title: 'Asalto a transeúnte en parque',
    details:
      'Persona fue interceptada por dos individuos armados en el parque de la Colonia Reforma. Se llevaron celular y cartera. No hubo lesiones físicas.',
    location: 'Parque Reforma',
    dateTime: '27 de noviembre de 2023, 13:45',
  },
];

export const blogs = [
  {
    id: 'b1',
    title: 'Cómo prevenir robos en la calle',
    summary:
      'Consejos para evitar ser víctima de asaltos en calles, intersecciones y parques durante el día.',
    date: '27 de noviembre de 2023',
  },
  {
    id: 'b2',
    title: 'Qué hacer en caso de incendio',
    summary:
      'Pasos clave para evacuar con seguridad y alertar a las autoridades en caso de fuego.',
    date: '26 de noviembre de 2023',
  },
];