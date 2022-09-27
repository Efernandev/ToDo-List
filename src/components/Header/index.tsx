// import './Header.module.css'
import Logo from '../../images/Logo.png';
import { HeaderContent } from "./styles"
export function Header() {
	return (
		<HeaderContent>
			<img src={Logo} />
		</HeaderContent>
	)
}