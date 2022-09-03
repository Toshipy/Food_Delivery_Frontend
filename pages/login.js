import {Button, Container, Row, Col, Label, Form, FormGroup, Input} from "reactstrap";
import { login, registerUser } from "../lib/auth";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState({ identifier: "", password: "" });
  const appContext = useContext(AppContext);

  // console.log(data);

  const handleLogin = () => {
    login(data.identifier, data.password)
    .then((res) => {
      appContext.setUser(res.data.user);
      console.log(res.data.user);
    })
    .catch((err) => console.log(err));
  
  };

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div> 
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス：</Label>
                  <Input 
                    type="email" 
                    name="identifier" 
                    style={{heigth: 50, fontSize: "1.2rem"}}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード：</Label>
                  <Input
                    type="password" 
                    name="password" 
                    style={{heigth: 50, fontSize: "1.2rem"}}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか？</small>
                  </a>
                </span>
                <Button style={{float: "right", width: 120}} color="primary" onClick={() => {
                  handleLogin();
                }}>ログイン</Button>
                </FormGroup>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }

          .wrapper {
            padding: 10px 30px 20px 30px
          }
        
        `}
      </style>
    </Container>
  );
}

export default Login;
