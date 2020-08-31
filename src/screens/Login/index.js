import styles from "./Login.module.css";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { loginClients, loginPhotographers } from "../../server";

import Navbar from "../../components/Navbar";

function Login() {
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await loginClients(values);
      if (!response.success) {
        console.log("Paso a la segunda peticion");
        const response2 = await loginPhotographers(values);
        if (!response2.success) {
          console.log("Error: ", response2.error);
          return;
        }
        const accessToken = response2.data.token;
        console.log("Response 2:", accessToken);
        localStorage.setItem("token", accessToken);
      } else {
        const accessToken = response.data.token;
        console.log(accessToken);
        localStorage.setItem("token", accessToken);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Navbar />
        </Col>
      </Row>

      <Row className={styles.wrapper}>
        <Col>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div>
                <h1 className={styles.pTittle}>¡Bienvenido!</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form
                layout="vertical"
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Form.Item label="Email">
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Form.Item label="Contraseña">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                </Form.Item>
                {/*                 <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form.Item> */}

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    INGRESAR
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Login;
