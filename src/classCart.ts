import Buyable from "./interfaceBuyable";
import { Features } from "./interfaceFeatures";

export default class Cart {
    private _items: Buyable<Features>[] = [];

    add(item: Buyable<Features>): void {
        const inCart = this._items.find(el => el.id === item.id);
        if (inCart && inCart.isCounted) {
            inCart.count++;
            inCart.totalPrice = item.count * inCart.price
        } else if (!inCart) {
            item.count = 1;
            item.totalPrice = item.price;
            this._items.push(item);
        }
    }

    get items(): Buyable<Features>[] {
        return [...this._items]
    }

    sum(): number {
        if (this._items.length > 0) {
            return this._items.reduce((acc, item) => acc + item.totalPrice, 0)
        }
        return 0
    }

    discountSum(discountPercent: number): number {
        return this.sum() - this.sum() * (discountPercent / 100);
    }

    deleteItem(id: number): void {
        const itemToDelete = this._items.find(el => el.id === id);
        if (itemToDelete.count === 1) {
            this._items.splice(this._items.indexOf(itemToDelete), 1);
        } else {
            itemToDelete.count--;
            itemToDelete.totalPrice = itemToDelete.count * itemToDelete.price;
        }
    }
}
