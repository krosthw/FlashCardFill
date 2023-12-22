'use client'
import { CardObj, DictCard } from "@/Models/flashModels";
import Container from "@/components/ui/container";
import { use, useState } from "react";

type CardProps = {
    cardObj: CardObj;
    ev: any
};


const Card = (data: CardProps) => {
    const [rotate, setRotate] = useState(false);
    function handleClick() {
        setRotate(!rotate);
    }

    let obj = data;

    return (
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
            {/* <div className={`relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000`}> */}
            <div className={`relative preserve-3d ${rotate ? 'my-rotate-y-180' : ''} w-full h-full duration-1000 bg-blue-800`} >
                <div className="absolute backface-hidden border-2 w-full h-full text-center flex flex-col items-center justify-center text-yellow-300 px-2 pb-2" onClick={handleClick}>
                    <h1 className="text-3xl font-semibold">Lato A</h1>
                    <p>
                        {obj.cardObj.latoa}
                    </p>
                    <h1 className="text-3xl font-semibold">/pronunciaA/</h1>
                </div>
                <div className={`absolute my-rotate-y-180 backface-hidden w-full h-full bg-yellow-300 overflow-hidden`}  >
                    <div className="text-center flex flex-col items-center justify-center h-full text-blue-800 px-2 pb-2" onClick={handleClick}>
                        <h1 className="text-3xl font-semibold">Lato B</h1>
                        <p>
                            {obj.cardObj.latob}
                        </p>
                        <h1 className="text-3xl font-semibold">/{obj.cardObj.pron}/</h1>
                    </div>
                    <button className="bg-red-500 px-6 py-2 font-bold text-white rounded-full absolute bottom-10 left-28 scale-125"
                    onClick={data.ev}
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </div>

    );
};

//lato a
{/* <p>
                                Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.
                                Ac ut consequat semper viverra. Sed velit dignissim sodales ut.
                                Lorem mollis aliquam ut porttitor leo a.
                                Suscipit adipiscing bibendum est ultricies integer quis auctor.
                                Ipsum consequat nisl vel pretium lectus.
                            </p> */}
//lato b
{/* <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                                <h1 className="text-3xl font-semibold">The King's Man</h1>
                                <p className="my-2">9.0 Rating</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                    itaque assumenda saepe animi maxime libero non quasi, odit natus
                                    veritatis enim culpa nam inventore doloribus quidem temporibus
                                    amet velit accusamus.
                                </p>
                                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                                    Watch Now
                                </button>
                            </div> */}
export default Card;
