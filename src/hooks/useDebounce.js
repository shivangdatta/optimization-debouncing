import React, { useEffect, useState } from 'react';

const useDebounce = ( searchVal, time ) => {
  const [debouncedVal, setDebouncedVal] = useState('');

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedVal(searchVal);
    }, time);

    return () => {
      clearTimeout(id);
    };
  }, [searchVal, time]);

  return debouncedVal;
};

export default useDebounce;
