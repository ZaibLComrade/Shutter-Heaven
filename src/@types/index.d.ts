interface IUser {
	name: string;
	password?: string;
	confirmPassword?: string;
	email: string;
	role: "BUYER" | "SELLER" | "ADMIN";
	status: "PENDING" | "VERIFIED" | "ACTIVE" | "BLOCKED";
}
