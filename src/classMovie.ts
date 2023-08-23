import Buyable from "./interfaceBuyable";
import { MovieFeatures } from "./interfaceFeatures";

export default class Movie implements Buyable<MovieFeatures> {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly features: MovieFeatures = null,
        readonly isCounted: boolean = false,
        readonly count?: number,
    ) { }
}


