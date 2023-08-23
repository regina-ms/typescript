export default interface Buyable<T> {
    id: number,
    name: string,
    price: number,
    isCounted: boolean,
    features?: T,
    count?: number,
    totalPrice?: number,
};







