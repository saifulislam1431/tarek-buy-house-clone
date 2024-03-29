'use client'
import React, { createContext, useState } from 'react';

const ParentContext = createContext(null);

const Provider = ({ children }) => {
    const [shake, setShake] = useState(false);
    const [searchOfferValue, setSearchOfferValue] = useState("");
    return (
        <ParentContext.Provider value={{
            shake,
            setShake,
            searchOfferValue,
            setSearchOfferValue
        }}>
            {children}
        </ParentContext.Provider>
    );
};

export { Provider, ParentContext };