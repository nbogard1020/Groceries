class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

let list_of_items = [
    new Grocery("milk", 3, 5),
    new Grocery("bread", 6, 15),
    new Grocery("egg", 11, 5)
]

const ele = document.getElementById("app");

list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});