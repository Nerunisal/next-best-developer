import Link from 'next/link'
function LoginButton({className, ...props}) {
    return ( 
        <Link href="login" className={`hidden ${className} w-[80px]`}>
            Login
        </Link>

     );
}

export default LoginButton; 