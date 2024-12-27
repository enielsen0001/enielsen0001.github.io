import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [isCurrentDarkTheme, setIsCurrentDarkTheme] = useState(false);

    const userSystemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        setTheme(getPreferredTheme());
    }, []);

    // helper functions
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = (theme: string) => localStorage.setItem('theme', theme);
    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();

        if (storedTheme) {
            return storedTheme;
        }

        return userSystemThemeIsDark ? 'dark' : 'light';
    }

    const setTheme = (theme: string) => {

        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (userSystemThemeIsDark ? 'dark' : 'light'));
            setStoredTheme(userSystemThemeIsDark ? 'dark' : 'light');
            setIsCurrentDarkTheme(userSystemThemeIsDark);
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
            setStoredTheme(theme);
            setIsCurrentDarkTheme(theme === 'dark');
        }
    }

    return (

        <button
            className="dark-mode-toggle btn-reset"
            onClick={() => {
                setTheme(isCurrentDarkTheme ? 'light' : 'dark');
            }}
        >
            <span className="sr-only">Enable {isCurrentDarkTheme ? 'light' : 'dark'} theme</span>
            <FontAwesomeIcon icon={isCurrentDarkTheme ? faSun : faMoon } />
        </button>

    );


}

export default DarkModeToggle;