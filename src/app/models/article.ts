import { GUID } from '../additional/GUID'

export class Article {
    id: number;
    title: string;
    author: string;
    date: Date;
    description: string;
    imageUrl: string;

    constructor(){
        this.id = GUID.generate();
    }
}
