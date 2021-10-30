import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { user, signInUsingGoogle, logOut } = useAuth();

    return (
        // Log In Form 
        <>
            {user?.email ?
                <button className="btn btn-primary m-3" onClick={logOut}>Log Out</button> :
                <div>
                    {/* Sign in using google  */}
                    <button className="btn btn-danger m-3" onClick={signInUsingGoogle}>Sign In with google <i className="fab fa-google"></i></button>
                </div>
            }

        </>
    );
};

export default Login;