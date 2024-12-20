import { SHForm, SHInput, SHSelect } from "@/components/atoms/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import z from "zod";
import { roles, rolesArray } from "@/constants";

const RegisterForm = () => {
	const onSubmit: SubmitHandler<FieldValues> = (values) => {

	};

	const formSchema = z
		.object({
			username: z.string(),
			password: z
				.string()
				.min(8, "Password must be at least 8 characters long.")
				.regex(
					/[A-Z]/,
					"Password must include at least one uppercase letter."
				)
				.regex(
					/[a-z]/,
					"Password must include at least one lowercase letter."
				)
				.regex(/\d/, "Password must include at least one number.")
				.regex(
					/[@!#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?]/,
					"Password must include at least one special character."
				),
			confirmPassword: z.string(),
			email: z.string().email(),
			role: z.enum(rolesArray),
		})
		.refine((data) => data.password === data.confirmPassword, {
			path: ["confirmPassword"],
			message: "Passwords do not match",
		});

	const defaultValues = {
		username: "",
		password: "",
		confirmPassword: "",
		email: "",
		role: "BUYER",
		status: "ACTIVE",
	};

	return (
		<div className="w-[420px] space-y-4 min-w-[300px] font-lato border border-primary bg-white p-4 rounded-lg">
			<div className="mx-auto text-center w-max">
				<h2 className="text-4xl font-bold text-primary">Login</h2>
			</div>
			<SHForm
				onSubmit={onSubmit}
				defaultValues={defaultValues}
				resolver={zodResolver(formSchema)}
				className="space-y-4"
			>
				<SHInput
					name="username"
					label="Username"
					placeholder="Enter username"
					labelClass="text-secondary font-bold"
				/>
				<SHInput
					name="password"
					label="Password"
					placeholder="************"
					type="password"
					labelClass="text-secondary font-bold"
				/>
				<SHInput
					name="confirmPassword"
					label="Confirm Password"
					placeholder="************"
					type="password"
					labelClass="text-secondary font-bold"
				/>
				<SHInput
					name="email"
					label="Email"
					placeholder="Enter email"
					labelClass="text-secondary font-bold"
				/>

				<SHSelect
					name="role"
					label="Role"
					placeholder="Select a role"
					labelClass="text-secondary font-bold"
					// maps select options from roles
					options={Object.entries(roles).map(([key, val]) => ({
						value: key,
						label: val,
					}))}
				/>
				<div>

				</div>
				<Button type="submit" className="font-bold text-neutral bg-primary">Submit</Button>
			</SHForm>
		</div>
	);
};

export default RegisterForm;
