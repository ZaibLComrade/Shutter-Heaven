import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";

interface IProps {
	name: string;
	label: string;
	placeholder?: string;
}

const SHInput = ({ name, label, placeholder }: IProps) => {
	const { control } = useFormContext();
	
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Input placeholder={placeholder} {...field} />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default SHInput;
