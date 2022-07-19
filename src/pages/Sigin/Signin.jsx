import { Fragment } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Signin.css";

const Signin = () => {
  return (
    <Fragment>
      <Wrapper>
        <section className="signin">
          <h2>Sign in or create an account</h2>
          <form method="post"></form>
        </section>
      </Wrapper>
    </Fragment>
  );
};

export default Signin;
