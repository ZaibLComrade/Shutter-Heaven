import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";

interface IProps {
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	type?: "password" | "text";
	labelClass?:string;
}

const SHInput = ({ name, className, label, placeholder, labelClass="", type = "text" }: IProps) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className={ labelClass } htmlFor={ name }>{label}</FormLabel>
					<Input className={`${className} bg-white`} placeholder={placeholder} {...field} type={type} />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default SHInput;
