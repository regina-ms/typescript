export interface MovieFeatures {
    year: number,
    country: string,
    tagline: string,
    genre: string[],
    duration: string,
}

export interface BookFeatures {
    year: number,
    author: string,
    pages: number,
}

export type Features = MovieFeatures | BookFeatures;

