import {useContext} from "react"
import { AuthContext } from "@/provider"
import {IAuthContextValues} from "@/@types";

const useAuth = () => {
	const auth = useContext<IAuthContextValues>(AuthContext);
	return auth;
}

export default useAuth;
