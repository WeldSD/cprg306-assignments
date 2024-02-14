import ItemList from "./item-list";

export default function Item({
 name, quantity, category}){
    return (
        <div className="ml-5 m-4 border-2 border-rose-500 border-stroke-lime-900 outline-offset-4" >
            <h2 className="text-md text-green-500 font-bold">{name}</h2>
            <p className="text-green-500">buy {quantity} , in: {category}</p>
           
        </div>
    );

}

