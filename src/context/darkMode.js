import { createContext, useReducer } from "react"

const INITIAL_STATE = {
	dark: false,
}

const darkReducer = (state, action) => {
	switch (action.type) {
		case "light":
			return {
				dark: false,
			}
		case "dark":
			return {
				dark: true,
			}
		case "toggle":
			return {
				dark: !state.dark,
			}
		default:
			return state
	}
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
	const [darkModeState, dispatch] = useReducer(darkReducer, INITIAL_STATE)

	return (
		<DarkModeContext.Provider
			value={{
				darkMode: darkModeState.dark,
				dispatch,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	)
}
