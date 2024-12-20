import Logo from "@/components/atoms/Logo";
import { Card } from "../ui/card";
import { NavLink } from "react-router-dom";
import {
	NavigationMenuList,
	NavigationMenu,
	NavigationMenuItem,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

interface Route {
	label: string;
	href: string;
}

const routes: Route[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Link 1",
		href: "/"
	},
	{
		label: "Link 2",
		href: "/"
	},
	{
		label: "Link 3",
		href: "/"
	}
];

const Navbar = () => {
	return (
		<Card className="flex items-center justify-between p-3 text-white bg-primary">
			<Logo />
			<NavigationMenu>
				<NavigationMenuList>
					{routes.map(({ label, href }) => (
						<NavigationMenuItem key={href + label}>
							<NavLink to={href}>
								<Button
									variant="ghost"
									className="text-md hover:font-bold font-lato"
								>
									{label}
								</Button>
							</NavLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</Card>
	);
};

export default Navbar;
