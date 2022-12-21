import React, { useState, createContext, useContext } from "react";

export const ModalContext = createContext(null);

export function UseModal(){
    return useContext(ModalContext);
}

 function ModalProvider({ children }) {

    const [showModal, setShowModal] = useState(false);
    return (
        <ModalContext.Provider value={{ showModal, setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;