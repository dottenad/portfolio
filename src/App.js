import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { EnvelopeIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true" || false;
    });

    useEffect(() => {
        const scrollHandler = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            // save selection in local storage
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            // save selection in local storage
            localStorage.setItem("darkMode", "true");
        }
    }, [darkMode]);

    return (
        <>
            <div
                className={`max-w-full sticky top-0 z-50 bg-white dark:bg-gray-800 ${
                    isScrolled ? "shadow" : ""
                }`}
            >
                <div className="mx-auto max-w-5xl px-8">
                    <div className="py-6 flex justify-between items-center">
                        <div>
                            <Link to="/">
                                <img
                                    src="img/logo.svg"
                                    alt="Logo"
                                    className="h-10 self-center"
                                />
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="mailto:ottenadd@gmail.com?subject=Hi&body=%0D%0A%0D%0A--Sent%20from%20danottenad.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <EnvelopeIcon className="h-11 w-11 rounded-full p-2 dark:text-gray-100 bg-gray-200 dark:text-gray-100 dark:bg-gray-900" />
                            </a>

                            <a
                                href="https://github.com/dottenad"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="h-7 w-7 rounded-full p-2 dark:text-gray-100 bg-gray-200 dark:text-gray-100 dark:bg-gray-900"
                                />
                            </a>
                            <button onClick={() => setDarkMode(!darkMode)}>
                                <MoonIcon className="h-11 w-11 relative -top-0.5 rounded-full p-2 dark:text-gray-100 bg-gray-200 dark:text-gray-100 dark:bg-gray-900" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-4 pb-6">
                <Outlet />
            </div>
        </>
    );
}
