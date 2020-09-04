import styles from "../../styles/Login.module.css";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { loginClients, loginPhotographers } from "../server";
import { useRouter } from 'next/router'
import Navbar from "./Navbar";
import Link from "next/link";


function Login() {

  const router = useRouter()
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

        router.push('/home')
      } else {
        const accessToken = response.data.token;
        console.log(accessToken);
        localStorage.setItem("token", accessToken);
        router.push('/home')
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Row className={styles.center}>
        <Col
          className={styles.nav_wrapper}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <div>
            <p className={styles.meraki}>MERAKI</p>
          </div>

          <div>
            <Link href="/registrate_como">
              <Button className={styles.button_pink}>REGISTRATE</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className={styles.wrapper}>
        <Col xs={22} sm={22} md={12} lg={10} xl={10}>
          <div>
            <h1 className={styles.pTittle}>¡Bienvenido!</h1>
          </div>

          <Form
            layout="vertical"
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              className={styles.input_item}
              name="email"
              rules={[
                { required: true, message: "Por favor, ingresa tu correo" },
              ]}
            >
              <Form.Item label="Email">
                <Input placeholder="Email" className={styles.meraki_input} />
              </Form.Item>
            </Form.Item>
            <Form.Item
              className={styles.input_item}
              name="password"
              rules={[
                { required: true, message: "Por favor, ingresa tu contraseña" },
              ]}
            >
              <Form.Item label="Contraseña">
                <Input
                  type="password"
                  placeholder="Contraseña"
                  className={styles.meraki_input}
                />
              </Form.Item>
            </Form.Item>
            {/*                 <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form.Item> */}

            <div className={styles.button_wrapper}>
              <Button htmlType="submit" className={styles.login_form_button}>
                INGRESAR
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
