import React from "react";


export interface IThemeContext {
    theme: "LIGHT" | "DARK",
    setTheme: (color: "LIGHT" | "DARK") => void
}
export const ThemeContext = React.createContext<IThemeContext | null>(null);


export default function ThemeProvider(props: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = React.useState<"DARK" | "LIGHT">('DARK');

    React.useEffect(() => {
        switch(theme) {
            case 'DARK': {
                document.body.style.backgroundColor = '#0E1011';
                document.body.style.color = 'white';
                break;
            }
            case 'LIGHT': {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
                break;
            }
            default: {
                break;
            }
        }
    }, [theme])

    return(
        <ThemeContext.Provider 
            value={{
                theme,
                setTheme(color) {
                    setTheme(color);
                },
            }}

        >
            <div>
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
