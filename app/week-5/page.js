import Item from "./item";


export default function Page() {
    let Item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
    let Item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };
    let Item3 = {
        name: "eggs, dozen 🥚",
        quantity: 1,
        category: "dairy",
    };
    let Item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };
    let Item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };
    let Item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };
    let Item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };
    let Item8 = {
        name: "spaghetti, 454g 🍝",
        quantity: 2,
        category: "dry goods",
    };
    let Item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };
    let Item10 = {
        name: "paper towels, 6 pack 🧻",
        quantity: 1,
        category: "household",
    };
    let Item11 = {
        name: "toothpaste 🦷",
        quantity: 1,
        category: "personal care",
    };
    let Item12 = {
        name: "shampoo 🧴",
        quantity: 1,
        category: "personal care",
    };


    return (
        <main className="bg-black m-4">
            <h1 className="text-green-500 font-bold text-3xl ">Shopping List</h1>
            <p>
                <Item 
                name={Item1.name}
                quantity={Item1.quantity} 
                category={Item1.category}
                />    
            </p>
            <p>
                <Item 
                name={Item2.name}
                quantity={Item2.quantity} 
                category={Item2.category}
                />    
            </p>
            <p>
                <Item 
                name={Item3.name}
                quantity={Item3.quantity} 
                category={Item3.category}
                />    
            </p>
            <p>
                <Item 
                name={Item4.name}
                quantity={Item4.quantity} 
                category={Item4.category}
                />    
            </p>
            <p>
                <Item 
                name={Item5.name}
                quantity={Item5.quantity} 
                category={Item5.category}
                />    
            </p>
            <p>
                <Item 
                name={Item6.name}
                quantity={Item6.quantity} 
                category={Item6.category}
                />
            </p>
            <p>
                <Item 
                name={Item7.name}
                quantity={Item7.quantity} 
                category={Item7.category}
                />
            </p>
            <p>
                <Item 
                name={Item8.name}
                quantity={Item8.quantity} 
                category={Item8.category}
                />
            </p>
            <p>
                <Item 
                name={Item9.name}
                quantity={Item9.quantity} 
                category={Item9.category}
                />
            </p>
            <p>
                <Item 
                name={Item10.name}
                quantity={Item10.quantity} 
                category={Item10.category}
                />
            </p>
            <p>
                <Item 
                name={Item11.name}
                quantity={Item11.quantity} 
                category={Item11.category}
                />
            </p>
            <p>
                <Item 
                name={Item12.name}
                quantity={Item12.quantity} 
                category={Item12.category}
                />
            </p>

        </main>
    );
}
