import { useLayoutEffect, useState } from 'react';

function useWindowSize(onResize: Function) {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      onResize();
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [onResize]);
  return size;
}

export default useWindowSize;
