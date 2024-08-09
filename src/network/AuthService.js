// AuthService.js

class AuthService {
    constructor() {
        this.baseURL = "https://api.oekfb.eu/";
    }

    async login(email, password) {
        const url = `${this.baseURL}/users/login`;

        // Encode the email and password in Base64
        const base64Credentials = btoa(`${email}:${password}`);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Basic ${base64Credentials}`
                },
                body: JSON.stringify({}), // The body can be empty or contain additional info if needed
                credentials: 'include' // Include credentials if needed
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login response:', data);
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                const errorData = await response.json();
                return { success: false, message: errorData.message || 'Login failed' };
            }
        } catch (error) {
            console.error('Error logging in:', error);
            return { success: false, message: 'An error occurred while logging in' };
        }
    }


    async resetPassword() {
        // Implement reset password functionality here
    }

    async createUser() {
        // Implement create user functionality here
    }

    getUserFromSession() {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    getToken() {
        return sessionStorage.getItem('token');
    }

    logoutUser() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }
}

export default AuthService;