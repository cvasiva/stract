
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import styles from "./login.module.scss";
import Menu from '../stract/menu';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../GoogleSignin/config';
interface FormData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors: { [key: string]: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address ending with .com or .in";
    } else {
      const [user, company] = formData.email.split("@");
      if (!user || !company) {
        errors.email = "Invalid email format";
      }
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      router.push('/home'); 
    }
  };

  const renderErrorMessage = (field: string) => {
    return errorMessages[field] ? (
      <div className="error-message" style={{ color: "red" }}>
        {errorMessages[field]}
      </div>
    ) : null;
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userData = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          phoneNumber: user.phoneNumber,
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        router.push('/home');
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.message);
      });
  };

  return (
    <div className={styles.home}>
      <Menu />
      <div className={styles.card}>
        <div className={styles.createflx}>
          <div className={styles.resumeflx}>
            <div className={styles.ofwidth}>
              <div className={styles.Createfont}>Create a resume you are proud of</div>
              <div className={styles.hassleflx}>
                <div style={{ paddingTop: '2%' }}><img src='/Vector.png' alt='Hourg' style={{ width: '65%' }} /></div>
                <div style={{ paddingTop: '1%' }}>Save time with hassle-free<br />
                  templates</div>
              </div>
              <div className={styles.hassleflx}>
                <div><img src='/ShootingStar.png' alt='Hourg' style={{ width: '75%' }} /></div>
                <div style={{ paddingTop: '1%' }}>Beat the competition using
                  actionable, contextual advice</div>
              </div>
              <div className={styles.hassleflx}>
                <div><img src='/Target.png' alt='Hourg' style={{ width: '75%' }} /></div>
                <div style={{ paddingTop: '1%' }}>Highlight key achievements
                  with memorable visuals</div>
              </div>
              <div className={styles.inspired}>
                Get inspired by <span className={styles.freefont}>200+ Free Resume Examples and Templates</span>
              </div>
            </div>
          </div>
          <div className={styles.resumeflx1}>
            <div className={styles.cardpart2}>
              <div style={{ width: '80%' }}>
                <div className={styles.Signfont}>Sign in to your account</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: "100%", }}>
                  <div className={styles.cardlink}>
                    <div>
                      <img src='/linkdin.png' alt='Hourg' className={styles.linkdinwdt} />
                    </div>
                    <div>LinkedIn</div>
                  </div>
                  <div className={styles.cardlink} onClick={handleClick}>
                    <div>
                      <img src='/google.png' alt='Hourg' className={styles.googlewdt} />
                    </div>
                    <div>Google</div>
                  </div>
                </div>
                <div className={styles.usefont}>or use your email</div>
                {/* <form>
                  <div className={styles.estyleflx}>
                    <div>
                      <label className={styles.emailfont}>Email *</label><br />
                      <input className={styles.inpustyle} />
                      <div className={styles.company}>Use your official company email for sign up, sign in</div>
                    </div>
                    <div>
                      <label className={styles.emailfont}>Password *</label><br />
                      <input className={styles.inpustyle} />
                    </div>
                  </div>
                  <div className={styles.Forgot}>Forgot password?</div>
                  <div>
                    <button className={styles.Signinbtn}>Sign In</button>
                  </div>
                  <div className={styles.yourfont}>Forget your password?</div>
                  <div className={styles.yourfont1}>First time here? <span className={styles.yourfont}>Create an account</span></div>
                </form> */}
                <form onSubmit={handleSubmit}>
                  <div className={styles.estyleflx}>
                    <div>
                      <label className={styles.emailfont}>Email *</label><br />
                      <input
                        type="email"
                        name="email"
                        className={styles.inpustyle}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {renderErrorMessage("email")}
                      <div className={styles.company}>
                        Use your official company email for sign up, sign in
                      </div>
                    </div>
                    <div>
                      <label className={styles.emailfont}>Password *</label><br />
                      <input
                        type={isRevealPwd ? "text" : "password"}
                        name="password"
                        className={styles.inpustyle}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <div
                        style={{
                          position: 'relative',
                          left: '90%',
                          top: '-36px',
                          cursor: 'pointer',
                          color: 'black',
                        }}
                        onClick={() => setIsRevealPwd(!isRevealPwd)}
                      >
                        {isRevealPwd ? <FaEye size={20}/> : <FaEyeSlash size={20}/>}
                      </div>
                      {renderErrorMessage("password")}
                    </div>
                  </div>

                  <div className={styles.Forgot}>Forgot password?</div>
                  <div>
                    <button type="submit" className={styles.Signinbtn}>
                      Sign In
                    </button>
                  </div>
                  <div className={styles.yourfont}>Forget your password?</div>
                  <div className={styles.yourfont1}>
                    First time here? <span className={styles.yourfont}>Create an account</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
