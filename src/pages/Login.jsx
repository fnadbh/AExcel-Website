import "./Login.css";
import { ShieldCheck, GraduationCap } from "lucide-react";

function Login() {
  return (
    <section className="login-page">

      <div className="login-card">

        <div className="login-logo">

          <img
            src="/images/logo.png"
            alt="ÆXcel"
          />

        </div>

        <span className="login-label">
          ÆXCEL ACADEMIC FORUM
        </span>

        <h1>
          Welcome Back
        </h1>

        <p>
          Sign in to participate in discussions, share ideas,
          and collaborate with educators across
          i-CATS University College.
        </p>

        <button className="identity-btn">

          <GraduationCap size={22} />

          Continue with i-CATS Identity

        </button>

        <button className="google-btn">

          <img
            src="/images/google.png"
            alt="Google"
          />

          Continue with Google

        </button>

        <div className="login-note">

          <ShieldCheck size={18} />

          <span>
            Access is limited to authorised i-CATS staff.
          </span>

        </div>

      </div>

    </section>
  );
}

export default Login;