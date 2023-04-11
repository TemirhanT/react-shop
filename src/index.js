import React, { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SuppleStore from './store/SuppleStore';
import UserStore from './store/UserStore';
import BasketStore from './store/BasketStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      supplements: new SuppleStore(),
      basket: new BasketStore
    }}>
      <App />
    </Context.Provider>
);
