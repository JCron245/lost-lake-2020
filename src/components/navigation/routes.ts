import Contact from "../contact/Contact";
import Home from "../home/Home";
import NotFound from "../not-found/NotFound";
import Rates from "../rates/Rates";
import Services from "../services/Services";
import Map from "../map/Map";

export const routes = [
	{ path: "/", name: "home", Component: Home, showInNav: true },
	{ path: "/services", name: "services", Component: Services, showInNav: true },
	{ path: "/rates", name: "rates", Component: Rates, showInNav: true },
	{ path: "/map", name: "map", Component: Map, showInNav: true },
	{ path: "/contact", name: "contact", Component: Contact, showInNav: true },
	{ path: "/404", name: "404", Component: NotFound, showInNav: false },
];
