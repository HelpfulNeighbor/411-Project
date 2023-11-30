// import React, { useState, useEffect, createContext, useContext } from "react";
// import { User } from "../data/types/UserTypes";
// import { getCurrentUser } from "../data/queries/user-queries";
// import { BaseUrl } from "../Config";

// type AuthContextValue = {
// 	user: User | null;
// 	login: (username: string, password: string) => Promise<void>;
// 	register: (inputData: Registration) => Promise<void>;
// 	logout: () => Promise<void>;
// };

// type Registration = {
// 	username: string;
// 	password: string;
// 	firstname: string;
// 	lastname: string;
// 	address: string;
// 	email: string;
// 	roles: Array<string>;
// };

// const AuthContext = createContext<AuthContextValue>({
// 	user: null,
// 	login: () => Promise.resolve(),
// 	register: () => Promise.resolve(),
// 	logout: () => Promise.resolve(),
// });

// export function useAuth() {
// 	const context = useContext(AuthContext);

// 	if (!context) {
// 		throw new Error("useAuth must be used within an AuthProvider");
// 	}

// 	return context;
// }

// export const AuthProvider = ({ children }: any) => {
// 	const [user, setUser] = useState<User | null>(null);

// 	useEffect(() => {
// 		setUser(getCurrentUser);
// 	}, []);

// 	async function login(username: string, password: string) {
// 		try {
// 			const { data, status } = await BaseUrl.post<User>(
// 				"/authentication/login",
// 				{ username, password }
// 			);

// 			if (status === 200) {
// 				setUser(data);
// 				console.log(data);
// 			} else {
// 				throw Error;
// 			}
// 		} catch {
// 			throw Error;
// 		}
// 	}

// 	async function register(inputData: Registration) {
// 		try {
// 			const { data, status } = await BaseUrl.post<User>("/users", inputData);

// 			if (status === 200) {
// 				setUser(data);
// 			} else {
// 				throw Error;
// 			}
// 		} catch {
// 			throw Error;
// 		}
// 	}

// 	async function logout() {
// 		setUser(null);
// 	}

// 	return (
// 		<AuthContext.Provider value={{ user, login, register, logout }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
	authState?: {token: string | null; authenticated: boolean | null};
	onRegister?: (firstName: string, lastName: string, email:string, username: string, password: string) => Promise<any>;
	onLogin?: (username: string, password: string) => Promise<any>;
	onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'secret';
export const API_URL = 'https://helpfulneighborweb20230917140513.azurewebsites.net/'
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {

	const [authState, setAuthState] = useState<{
		token: string | null;
		authenticated: boolean | null;
	}>({
		token: null,
		authenticated: null
	});

	useEffect(()=> {
		const loadToken = async () => {
			const token = await SecureStore.getItemAsync(TOKEN_KEY);
			console.log("stored: " + token);

			if(token){
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

				setAuthState({
					token: token,
					authenticated: true
				});
			}
		}
		loadToken();
	}, [])

	const register = async (firstName: string, lastName: string, email: string, username: string, password: string) => {
		try {
			const result =  await axios.post(`${API_URL}/api/authentication/register`, {firstName, lastName, email, username, password});
			console.log(" file: AuthContext.tsx: 128 ~ register ~ result: ", result)
		} catch (e) {
			return {error: true, msg: (e as any).result.data.msg};
		}
	};

	const login = async (username: string, password: string) => {
		try {
			const result = await axios.post(`${API_URL}/api/authentication/login`, {username, password});

			console.log(" file: AuthContext.tsx: 128 ~ login ~ result: ", result)

			setAuthState({
				token: result.data.token,
				authenticated: true
			});

			axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

			await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)

			return result;

		} catch (e) {
			return {error: true, msg: (e as any).reponse.data.msg};
		}
	};

	const logout = async () => {
		// Delete token from storage
		await SecureStore.deleteItemAsync(TOKEN_KEY);

		// Update HTTP headers
		axios.defaults.headers.common['Authorization'] = '';

		// Reset auth state
		setAuthState({
			token: null,
			authenticated: false
		});
	}

	const value = {
		onRegister: register,
		onLogin: login,
		onLogout: logout,
		authState
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}