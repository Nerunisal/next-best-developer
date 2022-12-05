import Link from 'next/link'
function GithubButton({className, ...props}) {
    return ( 
        <Link href="https://github.com/Nerunisal/next-best-developer    " className={`hidden ${className} w-[80px]`}>
            Github
        </Link>

     );
}

export default GithubButton; 