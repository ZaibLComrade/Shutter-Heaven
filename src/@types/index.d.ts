import {User, UserCredential} from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export interface IUser {
	name: string;
	password?: string;
	confirmPassword?: string;
	email: string;
	role: "BUYER" | "SELLER" | "ADMIN";
	status: "PENDING" | "VERIFIED" | "ACTIVE" | "BLOCKED";
}

export interface IAuthContextValues {
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
	loading: boolean;
	setLoading: Dispatch<SetStateAcction<boolean>>;
	registerUser: (email: string, password: string) => Promise<UserCredential>;
	loginUser: (email: string, password: string) => Promise<UserCredential>;
	logoutUser: () => promise<void>
}
