import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const { user, signInUsingGoogle, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(url)
            })

    }

    return (
        // Log In Form 
        <>
            {user?.email ?
                <button className="btn btn-primary m-3" onClick={logOut}>Log Out</button> :
                <div>
                    {/* Sign in using google  */}
                    <button className="btn btn-danger m-3" onClick={handleGoogleLogin}>Sign In with google <i className="fab fa-google"></i></button>
                </div>
            }

        </>
    );
};

export default Login;