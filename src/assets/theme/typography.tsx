import { TypographyOptions, TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

const bold: TypographyStyleOptions = { fontWeight: 'bold' };

const typography: TypographyOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'Noto Sans',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    'Noto Color Emoji'
  ].join(','),
  h1: bold,
  h2: bold,
  h3: bold,
  h4: bold,
  h5: bold,
  h6: bold
};

export default typography;
