import React from "react";


export interface IThemeContext {
    theme: "LIGHT" | "DARK",
    setTheme: (color: "LIGHT" | "DARK") => void
}
export const ThemeContext = React.createContext<IThemeContext | null>(null);


export default function ThemeProvider(props: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = React.useState<"DARK" | "LIGHT">('LIGHT');

    return(
        <ThemeContext.Provider 
            value={{
                theme,
                setTheme(color) {
                    setTheme(color);
                },
            }}

        >
            <div className={theme === 'DARK' ? 'text-white' : 'text-black'}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const theme = React.useContext(ThemeContext);
    
    if(!theme) {
        throw Error("This should be used with ThemeProvider");
    }

    return theme;
}
