import{
    BsGithub,
    BsInstagram,
    BsTwitter,
    BsLinkedin,
}from "react-icons/bs";

function BioHeader({fullName,city,heading}){
    return( 
    <header className="max-w-2xl mb-16">
            <h1 className="text-4xl font-bold text-indigo-800">
                I'm {fullName} I live in {city}, Where I'm The {heading}
            </h1>   
            <p className="mt-6 text-base text-zinc-800 dark:text-zinc-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aperiam adipisci dolor eum id. Laborum, est temporibus dignissimos, suscipit animi hic aut ullam quod excepturi sed voluptates reiciendis fugit optio.
            </p> 
            <ul className="mt-6 flex gap-6">
                <li>
                    <a href="#">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BsInstagram />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BsTwitter />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BsLinkedin />
                    </a>
                </li>
            </ul>
    </header>
);

}

export default BioHeader;