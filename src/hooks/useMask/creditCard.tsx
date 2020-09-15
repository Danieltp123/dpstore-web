import { IMaskFunction } from '.';

const creditCard: IMaskFunction = {
  apply: (value: string) => {
    if (!value) return '';

    const regexp = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4}).*/;
    const result = '$1-$2-$3-$4';

    return value
      .replace(regexp, result)
      .replace(/-$/,'')
      .replace(/-$/,'')
      .replace(/-$/,'');
  },
  clean: (value: string) => (value || '').replace(/\D/gi, '').substr(0, 16)
};

export default creditCard;
