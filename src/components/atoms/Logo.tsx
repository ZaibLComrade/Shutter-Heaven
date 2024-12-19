import logo from "@/assets/icon.png";

const Logo = () => {
	return <div className="flex items-center gap-2">
		<img src={ logo } className="size-12"/>
		<span className="text-3xl font-extrabold font-playfair">Shutter Haven</span>
	</div>
}

export default Logo;
