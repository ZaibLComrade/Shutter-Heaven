import { Form } from "@/components/ui/form";
import { ReactNode } from "react";
import { DefaultValues, FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";

interface IProps {
	resolver?: Resolver;
	defaultValues?: DefaultValues<unknown>;
	children: ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
	className?: string
	rest?: unknown;
}

const SHForm = ({ resolver, defaultValues, children, onSubmit, ...rest }: IProps) => {
	const formConfig: {
		resolver?: Resolver;
		defaultValues?: DefaultValues<unknown>;
	} = {};

	if (resolver) formConfig["resolver"] = resolver;
	if (defaultValues) formConfig["defaultValues"] = defaultValues;

	const form = useForm(formConfig);
	return <Form {...form} >
		<form onSubmit={ form.handleSubmit(onSubmit) } { ...rest }>
			{ children }
		</form>
	</Form>;
};

export default SHForm;
