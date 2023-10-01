import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const HeroRegister = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error)
            })

    }

    // const handleResetPassword = e => {
       

    // }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name="password" />
                                    <label className="label">
                                        <a href="#"
                                            // onClick={handleResetPassword}
                                            className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>Already have an Account <Link className="font-bold text-orange-500" to={"/login"}>Login Now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;