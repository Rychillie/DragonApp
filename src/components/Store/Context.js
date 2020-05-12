import { createContext } from 'react';

const StoreContext = createContext({
    token: null,
    setTolen: () => {},
});

export default StoreContext
