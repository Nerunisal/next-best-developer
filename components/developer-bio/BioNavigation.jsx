import Image from "next/image";

function BioNavigation({avatar,fullName}){
    return( 
        <nav className="pointer-events-auto flex items-center gap-12 mb-10">
            <Image
                src={avatar}
                width={130}
                height={130}
                alt={fullName}
            />
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-indigo-800 shadow-lg">
                <li className="relative block px-3 py-2 transition hover:text-indigo-400">
                    About
                </li>
                <li className="relative block px-3 py-2 transition hover:text-indigo-400">
                    Education
                </li>
                <li className="relative block px-3 py-2 transition hover:text-indigo-400">
                    Projects
                </li>
                <li className="relative block px-3 py-2 transition hover:text-indigo-400">
                    Experience
                </li>
                <li className="relative block px-3 py-2 transition hover:text-indigo-400">
                    Background
                </li>
            </ul>
        </nav>
        
    );

}

export default BioNavigation;