import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

export const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setsymbol] = useState("R");
  useEffect(() => {
    if (currency === "INR") setsymbol("R");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setcurrency }}>
      {children}
    </Crypto.Provider>
  );
};
export const CryptoState = () => {
  return useContext(Crypto);
};

// export CryptoContext;
