export class Recipe {

    image:string;
    imageType:string;
    id:number;
    instructions:string;
    summary:string;
    readyInMinutes:string;
    sourceUrl:string;
    title:string;
    vegan:boolean;
    vegetarian:boolean;
    glutenFree:boolean;
    diets:string[];
    cuisines:string[];

    constructor() {
    }
}