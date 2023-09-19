import { useState } from "react";
import Link from "../link/Link";
import { HiMenuAlt1, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'not-found' }
    ];


    return (
        <nav>
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <HiX className="text-2xl"/> : <HiMenuAlt1 className="text-2xl"/> 
                }
                   
            </div>
            
            <ul className="md:flex md:hidden">
                {
                    routes.map(route => <Link  key={route.id} route={route}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;