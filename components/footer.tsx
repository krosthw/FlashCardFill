import Container from "./ui/container";

const Footer = () => {
    return (
        
        <footer className="border-b">
            <div className="relative px-2 sm:px-6 flex h-12 items-center flex-col">
                <a href="/add" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add
                </a>
            </div>
        </footer>
    );
}

export default Footer;