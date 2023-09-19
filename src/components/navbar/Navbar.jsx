import Link from "../link/Link";

const Navbar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'not-found' }
    ];


    return (
        <nav>
            <ul className="md:flex">
                {
                    routes.map(route => <Link  key={route.id} route={route}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;