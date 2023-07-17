import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import App from "./App";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import Gotomarket from "./Pages/Gotomarket";
import Secretsanta from "./Pages/Secretsanta";
import Getreviews from "./Pages/Getreviews";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="min-h-screen bg-white dark:bg-gray-800">
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="gotomarket" element={<Gotomarket />} />
                            <Route
                                path="secretsanta"
                                element={<Secretsanta />}
                            />
                            <Route path="getreviews" element={<Getreviews />} />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
