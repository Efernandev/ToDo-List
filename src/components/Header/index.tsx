import AOS from "aos";
import 'aos/dist/aos.css';
import Logo from '../../images/Logo.png';
import { HeaderContent } from "./styles"
export function Header() {
	AOS.init({
		duration: 800
	});
	return (
		<HeaderContent >
			<img src={Logo} data-aos="fade-down" />
		</HeaderContent>
	)
}