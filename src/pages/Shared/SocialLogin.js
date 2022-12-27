import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {useNavigate,useLocation} from 'react-router-dom'
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../../Assets/contexts/AuthProvider';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {socialSignin,setLoading} = useContext(AuthContext)
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

    const handleSignin = (provider)=>{
        socialSignin(provider)
        .then(result=>{

            const user = result.user
      
  
            const currentUser = {
              email: user.email
          }

            fetch('https://service-review-server-woad.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                 
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('service-token', data.token);
                    navigate(from, { replace: true });
                });

            toast.success("login successfull")
            navigate(from, {replace: true});
        })
        .catch(err=>toast.errror(err.message))
        .finally(() => {
            setLoading(false);
        })


    }



    return (
        <div className='mb-5'>
            <div className='mx-5'>
            
            <button  onClick={()=>handleSignin(googleProvider)} className="iconBtn">
              <FaGoogle className='socialIcon'/>
            </button>
            <button   onClick={()=>handleSignin(githubProvider)} className="iconBtn">
             <FaGithub className='socialIcon'/>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;