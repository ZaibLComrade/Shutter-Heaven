import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Select, SelectTrigger } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select";
import { useFormContext } from "react-hook-form";

interface IProps {
	name: string;
	label: string;
	placeholder?: string;
	options: {
		value: string;
		label: string;
	}[];
	labelClass?: string;
}

const SHSelect = ({
	name,
	label,
	placeholder,
	labelClass,
	options,
}: IProps) => {
	const { control } = useFormContext();

	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel htmlFor={name} className={labelClass}>
						{label}
					</FormLabel>
					<Select
						onValueChange={field.onChange}
						defaultValue={field.value}
					>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{options.map(({ value, label }) => (
								<SelectItem key={value + label} value={value}>
									{label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</FormItem>
			)}
		/>
	);
};

export default SHSelect;
