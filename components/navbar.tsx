import Link from "next/link";

import Container from "@/components/ui/container";



const NavBar = async () => {

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        LatoA
                    </button>
               
                    <a href="/add" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;