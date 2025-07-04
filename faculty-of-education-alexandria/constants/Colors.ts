export const Colors = {

    light: {
      text: '#000',
      background: '#fff',
      tint: '#1e40af', // أزرق جامعي
      tabIconDefault: '#ccc',
      tabIconSelected: '#1e40af',
    },
    dark: {
      text: '#fff',
      background: '#121212',
      tint: '#60a5fa',
      tabIconDefault: '#888',
      tabIconSelected: '#60a5fa',
    },

  
  primary: {
    50: '#E6EEF4',
    100: '#CCDDE9',
    200: '#99BBDD',
    300: '#668EC6',
    400: '#336AAF',
    500: '#0A3D62', // Main primary color
    600: '#083152',
    700: '#062641',
    800: '#041A31',
    900: '#020D20',
  },
  secondary: {
    50: '#FEFAF5',
    100: '#FDF5EC',
    200: '#FBEAD9',
    300: '#F9E0C5',
    400: '#F7D5B2',
    500: '#F0B27A', // Main secondary color
    600: '#C8954B',
    700: '#A0783C',
    800: '#785A2D',
    900: '#503D1E',
  },
  accent: {
    50: '#F3F9F7',
    100: '#E6F4EF',
    200: '#CDE9DF',
    300: '#B3DECF',
    400: '#9AD3BF',
    500: '#81C8AF', // Main accent color
    600: '#6BA792',
    700: '#558675',
    800: '#406458',
    900: '#2A433B',
  },
  success: {
    50: '#E6F6EC',
    100: '#CEEDD8',
    200: '#9DDBB1',
    300: '#6BC98A',
    400: '#3AB764',
    500: '#09A53E',
    600: '#078833',
    700: '#066C29',
    800: '#04511F',
    900: '#033714',
  },
  warning: {
    50: '#FFF9E6',
    100: '#FFF3CC',
    200: '#FFE799',
    300: '#FFDB66',
    400: '#FFCF33',
    500: '#FFC300',
    600: '#D19F00',
    700: '#A37C00',
    800: '#775C00',
    900: '#3D2E00',
  },
  error: {
    50: '#FEECEB',
    100: '#FCD9D7',
    200: '#F9B3AF',
    300: '#F68D87',
    400: '#F3675F',
    500: '#F04137',
    600: '#C6352D',
    700: '#9C2A24',
    800: '#73201B',
    900: '#491512',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export type ThemeColors = typeof Colors;