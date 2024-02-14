import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateChema } from "../config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateChema
}

export const StoreProvider = (props: StoreProviderProps) => {

    const {
        children,
        initialState
    } = props

    const store = createReduxStore(initialState)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};