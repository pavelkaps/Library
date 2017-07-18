import { ID } from '../additional/ID'

export class Article {
    id: number;
    title: string;
    author: string;
    date: Date;
    description: string;
    imageUrl: string;

    constructor(){
        this.id = ID.generate();
    }
}
