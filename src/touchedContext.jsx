import { createContext, useState } from "react";

export const TouchedContext = createContext({});

export const TouchedProvider = ({ children }) => {
    const [isTouched, setIsTouched] = useState('');

    return (
        <TouchedContext.Provider value={{ isTouched, setIsTouched }}>
            {children}
        </TouchedContext.Provider>
    )
}

export const withTouched = (WrappedComponent) => {
    return (props) => {
        return (
            <TouchedContext.Consumer>
                { (value) => <WrappedComponent {...value} {...props} /> }
            </TouchedContext.Consumer>
        )
    }
}