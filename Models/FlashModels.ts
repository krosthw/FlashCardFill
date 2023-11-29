
export class FlashCard {
    public LatoA: string = "";
    public LatoB: string = "";
    public Pronuncia: string = "";
}

export class FlashCardDict {
    public Content: FlashCard[] =[];
}

export function  GetDict() : FlashCardDict 
{
     let fd: FlashCardDict  = new FlashCardDict();
    
     return fd;
}