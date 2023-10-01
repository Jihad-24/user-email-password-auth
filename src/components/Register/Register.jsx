import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(name,email, password, terms);

        // reset error & success
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character!');
            return;
        }
        else if (!terms) {
            setRegisterError('Please Accept Our Terms and Condition!');
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')

                // update profile
                updateProfile(result.user, {
                    displayName: name, 
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(() => {
                        alert('Profile Updated')
                    })
                    .catch(error => {
                    console.log(error.message);
                })

                // send varification email
                sendEmailVerification(result.user)
                    .then(() => {
                    alert('Email varification sent')
                })

            })
            .catch(error => {

                setRegisterError(error.message)
            })


    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-2xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full py-2 px-4 bg-slate-200 rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        id=""
                        required />
                    <input className="mb-4 w-full py-2 px-4 bg-slate-200 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        id=""
                        required />
                    <br />
                    <div className="relative ">
                        <input className=" w-full py-2 px-4 bg-slate-200 rounded-lg"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" required />
                        <span className="absolute top-1/3 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms"><a href="#">Acceept our Terms and Condition</a></label>
                    <br />
                    <br />
                    <input className="mb-4 w-full btn btn-secondary"
                        type="submit"
                        value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-700">{success}</p>
                }
                <p>Already have an Account <Link className="font-bold text-orange-500" to={"/login"}>Login Now</Link> </p>
            </div>

        </div>
    );
};

export default Register;