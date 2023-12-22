
// export class FlashCard {
//     public LatoA: string = "";
//     public LatoB: string = "";
//     public Pronuncia: string = "";
// }

// export class FlashCardDict {
//     public Content: FlashCard[] =[];
// }
export interface CardObj{
    latoa:string,
    latob:string,
    pron:string,
}

export  interface DictCard{
    dict: CardObj[];
}