import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(null);


export const AppProvider = ({ children }) => {
	const [state, setState] = useState({});

	return (
		<AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>
	);
};

export default AppProvider;
