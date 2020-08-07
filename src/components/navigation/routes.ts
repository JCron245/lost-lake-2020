import { lazy } from 'react';

const Home = lazy(() => import('../home/Home'));
const Services = lazy(() => import('../services/Services'));
const Rates = lazy(() => import('../rates/Rates'));
const Map = lazy(() => import('../map/Map'));
const Contact = lazy(() => import('../contact/Contact'));
const NotFound = lazy(() => import('../not-found/NotFound'));

export const routes = [
	{ path: '/', name: 'home', Component: Home, showInNav: true },
	{ path: '/services', name: 'services', Component: Services, showInNav: true },
	{ path: '/rates', name: 'rates', Component: Rates, showInNav: true },
	{ path: '/map', name: 'map', Component: Map, showInNav: true },
	{ path: '/contact', name: 'contact', Component: Contact, showInNav: true },
	{ path: '/404', name: '404', Component: NotFound, showInNav: false },
];
