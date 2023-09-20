import Feature from "../feature/Feature";

const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className="p-4 bg-sky-300 rounded-2xl flex flex-col">
            <h1>
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h1>
            <h1 className="my-4 text-xl font-extrabold">
                {name}
            </h1>
            <div className="flex-grow">
                {
                    features.map((feature, index)=> <Feature key={index} feature={feature}/>)
                }
            </div>
            <button className="bg-slate-800 text-white font-bold w-full py-3 rounded-2xl">Buy Now</button>
        </div>
    );
};

export default PriceOption;