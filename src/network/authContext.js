// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from "./AuthService";

/**
 * @typedef AuthContextType
 * @property {boolean} isAuthenticated - Whether the user is authenticated.
 * @property {function} login - Function to log in a user.
 * @property {function} logout - Function to log out the user.
 * @property {boolean} loading - Whether the authentication status is being checked.
 */

const AuthContext = createContext();

/**
 * AuthProvider component to provide authentication context to children components.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Children components to be wrapped by AuthProvider.
 */
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const authService = new AuthService();

    useEffect(() => {
        const token = authService.getToken();
        const user = authService.getUserFromSession();
        if (token && user) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    /**
     * Log in the user with provided email and password.
     * @param {string} email - User's email.
     * @param {string} password - User's password.
     * @returns {Promise<Object>} - Result of the login attempt.
     */
    const login = async (email, password) => {
        const result = await authService.login(email, password);
        if (result.success) {
            setIsAuthenticated(true);
        }
        return result;
    };

    /**
     * Log out the user.
     */
    const logout = () => {
        authService.logoutUser();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook to use the AuthContext.
 * @returns {AuthContextType} - The authentication context.
 */
export const useAuth = () => useContext(AuthContext);
