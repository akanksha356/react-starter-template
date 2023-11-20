import React from "react";
import styles from "./auth.module.scss";
import forgotImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
function Reset() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={forgotImg} alt="Forgot" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>

          <form>
            <input type="text" placeholder="Email" required />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">- Logi.n</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>

          {/* <span className={styles.register}>
            <Link to="/login">Login</Link>
          </span> */}
        </div>
      </Card>
    </section>
  );
}

export default Reset;
