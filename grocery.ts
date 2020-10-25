class Grocery {
    name: string;
    amount: number;
    price: number;

    constructor(a: string, b: number, c: number){
        this.name = a;
        this.amount = b;
        this.price = c;
    }
}

let list_of_items = [
    new Grocery("milk", 3, 5),
    new Grocery("bread", 6, 15),
    new Grocery("egg", 11, 5)
]

const ele = document.getElementById("app");

list_of_items.forEach(e => {
    const c = document.createElement("c");
    c.textContent = `${e.name} ${e.amount} -> $${e.price}`;
    ele.appendChild(c);
});