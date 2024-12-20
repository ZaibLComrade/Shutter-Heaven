import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from ".";
import { auth } from "@/config/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	User,
} from "firebase/auth";
import {IAuthContextValues} from "@/@types";



const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
			setUser(userCredential);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const registerUser = (email: string, password: string) => {
		setLoading(false);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email: string, password: string) => {
		setLoading(false);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logoutUser = () => {
		setLoading(false);
		return signOut(auth);
	};

	const contextValues: IAuthContextValues = {
		user,
		setUser,
		loading,
		setLoading,
		registerUser,
		loginUser,
		logoutUser,
	};
	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
