import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import Gotomarket from "./Pages/Gotomarket";
import Secretsanta from "./Pages/Secretsanta";
import Getreviews from "./Pages/Getreviews";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "gotomarket",
                element: <Gotomarket />,
            },
            {
                path: "secretsanta",
                element: <Secretsanta />,
            },
            {
                path: "getreviews",
                element: <Getreviews />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-white dark:bg-gray-800">
                <RouterProvider router={router} />
            </div>
        </QueryClientProvider>
    </React.StrictMode>
);
