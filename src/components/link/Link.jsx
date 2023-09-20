const Link = ({route}) => {
    return (
        <li className="ml-5 hover:bg-slate-500 px-3 rounded-lg"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;