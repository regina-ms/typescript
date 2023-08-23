import Buyable from "./interfaceBuyable";
import { BookFeatures } from "./interfaceFeatures";

export default class Book implements Buyable<BookFeatures> {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly features: BookFeatures = null,
        readonly isCounted: boolean = true,
    ) { }
}