import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://hanoplaces.fly.dev/v1";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor for tokens
apiClient.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        // Note: X-Refresh-Token header removed as it's not allowed by backend CORS policy
        // The backend handles token refresh via the Authorization header
    }
    return config;
});

// Response interceptor for token rotation
apiClient.interceptors.response.use(
    (response) => {
        // Axios headers are lowercase by default
        const newAccessToken = response.headers["x-new-access-token"];
        const newRefreshToken = response.headers["x-new-refresh-token"];

        if (newAccessToken && typeof window !== "undefined") {
            localStorage.setItem("accessToken", newAccessToken);
        }
        if (newRefreshToken && typeof window !== "undefined") {
            localStorage.setItem("refreshToken", newRefreshToken);
        }

        return response;
    },
    async (error) => {
        // Handle 401 Unauthenticated
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                // Only clear and redirect if we're not already on the login page
                // to avoid infinite loops if the login request itself fails with 401
                if (!window.location.pathname.includes("/login")) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    window.location.href = "/login";
                }
            }
        }
        return Promise.reject(error);
    }
);
