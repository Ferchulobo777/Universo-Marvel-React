import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Avengers', sans-serif", // Font para los títulos
    body: 'Roboto, sans-serif', // Font para el cuerpo de la aplicación
  },
  colors: {
    light: {
      color: '#f9f9f9',
      bg: '#e23636',
    },
    dark: {
      color: 'black',
      bg: 'purple',
    },
  },
});

export default theme;