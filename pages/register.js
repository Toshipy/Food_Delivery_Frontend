import {Button, Container, Row, Col, Label, Form, FormGroup, Input} from "reactstrap";
import { registerUser } from "../lib/auth";
import { useState } from "react";
import AppContext from "../context/AppContext";
import { useContext } from "react";


const register = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState({ username: "", email: "", password: "" });
  // const {user, setUser } = useContext(AppContext);



  const appContext = useContext(AppContext);
  const handleRegister = () => {
    // console.log(data.username);
    // console.log(data.email);
    // console.log(data.password);
    registerUser(data.username, data.email, data.password)
    .then((res) => {
      appContext.setUser({res});
    })
    .catch((err) => console.log(err));
  };
  
  

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ユーザー登録</h2>
            </div>
          </div> 
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>ユーザー名：</Label>
                  <Input
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      type="text" 
                      name="username" 
                      style={{heigth: 50, fontSize: "1.2rem"}}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>メールアドレス：</Label>
                  <Input 
                    onChange={(e) => 
                      setData({ ...data, email: e.target.value })}
                    type="email" 
                    name="email" 
                    style={{heigth: 50, fontSize: "1.2rem"}}

                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード：</Label>
                  <Input
                    onChange={(e) => 
                      setData({ ...data, password: e.target.value })} 
                    type="password" 
                    name="password" 
                    style={{heigth: 50, fontSize: "1.2rem"}}

                  />
                </FormGroup>
                <FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか？</small>
                  </a>
                </span>
                <Button style={{float: "right", width: 120}} color="primary" onClick={() => {
                  handleRegister();
                }}>登録</Button>
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

export default register;
