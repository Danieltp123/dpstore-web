import { IMaskFunction } from '.';

const percent: IMaskFunction = {
  apply: (value: number | string) => {
    if (value === null || value === undefined || value === '') return '';
    return new Intl.NumberFormat('pt-BR', { style: 'percent' }).format(Number(value) / 100 || 0).replace(/%/gi, '');
  },
  clean: value => {
    if (!value) return 0;
    value = (value || '')
      .toString()
      .replace(/%/gi, '')
      .replace(/[^\d,]/gi, '');

    return parseInt(value);
  }
};

export default percent;
