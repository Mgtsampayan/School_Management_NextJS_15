export function Navbar() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 items-center">
                <a href="#" className="text-2xl font-bold">
                    School Portal
                </a>
            </div>
            <div className="flex gap-4 items-center">
                <a href="#" className="text-xl font-bold">
                    Home
                </a>
                <a href="#" className="text-xl font-bold">
                    About
                </a>
                <a href="#" className="text-xl font-bold">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Navbar;