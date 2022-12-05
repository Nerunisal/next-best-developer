import {ContentPageHeader} from '../components/headers'
import LoginForm from '../components/forms/LoginForm';

function Login() {
    return (
        <> 
          <div className="w-full max-w-xs m-auto my-10">
            <LoginForm />
          </div>
        </>
    );
}

export default Login;