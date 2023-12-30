// useForceUpdate.js
import { useState } from 'react';

const useForceUpdate = () => {
  const [, setForceUpdate] = useState();

  const forceUpdate = () => {
    setForceUpdate((prev) => !prev);
  };

  return forceUpdate;
};

export default useForceUpdate;
