import { IAuthContextValues } from "@/@types";
import { createContext } from "react";

export const AuthContext = createContext<IAuthContextValues>({});
