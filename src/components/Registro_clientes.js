import styles from "../../styles/clientsRegister.module.css";
import Modales from "../components/modal";
import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";

import { signUp } from "../server";
import Password from "antd/lib/input/Password";
import Link from "next/link";

function ClientsRegister() {
  const [form] = Form.useForm();
  const [nameCt, setnameCt] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState(0);

  const [profilepicture, setprofilepicture] = useState("");
  const [visible, setVisible] = useState(false);

  const handlerInput = ({ target: { value, name } }) => {
    handleInputChange(name, value);
  };

  const handleInputChange = (name, value) => {
    if (name === "nameCt") {
      setnameCt(value);
      console.log("Name:", nameCt);
    } else if (name === "lastName") {
      setlastName(value);
      console.log("Last Name:", lastName);
    } else if (name === "email") {
      setemail(value);
      console.log("Email: ", email);
    } else if (name === "password") {
      setpassword(value);
      console.log("Password: ", password);
    } else if (name === "phone") {
      setphone(value);
      console.log("Phone:", phone);
    } else if (name === "adress") {
      setadress(value);
      console.log("Address:", adress);
    } else if (name === "profilepicture") {
      setprofilepicture(value);
      console.log("Profilepic:", profilepicture);
    }
  };

  const handleModalButton = () => {
    setVisible(true);
    console.log("visible");
  };

  const onFinish = async (value) => {
    console.log(value);
    try {
      const response = await signUp(value);
      if (!response.success) {
        console.log("Error: ", response.error);
        return;
      }
      console.log("response", response.data);
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  // const onFinish = (values) => {
  //   console.log(values);
  // };

  return (
    <>
      <Row>
        <Col xs={0} sm={6} md={6} lg={8} xl={8}>
          <div className={styles.background}>
            <div>
              <h1 className={styles.meraki}>MERAKI </h1>
            </div>
            <div className={styles.center}>
              <h2 className={styles.h2}>
                Únete a Meraki para publicar tus ofertas laborales y trabaja con
                fotógrafas de todo el país
              </h2>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={0} md={0} lg={0} xl={0}>
          <div>
            <h1 className={styles.meraki_mobile}>MERAKI </h1>
          </div>
        </Col>
        <Col
          className={styles.divRight}
          xs={24}
          sm={24}
          md={18}
          lg={16}
          xl={16}
        >
          <div className={styles.form_wrapper}>
            <div>
              <h2 className={styles.text}>¿Ya tienes una cuenta?</h2>
              <h2 className={styles.textPers}>
                <Link href="/login" passHref>
                  <a>Inicia Sesion</a>
                </Link>
              </h2>
            </div>
            <div className={styles.wrapp_form}>
              <Form
                form={form}
                layout="vertical"
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  className={styles.form_item}
                  name={"name"}
                  label="Nombre"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa tu nombre",
                    },
                  ]}
                >
                  <Input
                    value={nameCt}
                    name="nameCt"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  className={styles.form_item}
                  name={"lastName"}
                  label="Apellido"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa tu apellido",
                    },
                  ]}
                >
                  <Input
                    value={lastName}
                    name="lastName"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  className={styles.form_item}
                  name={"email"}
                  label="Correo electrónico"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Por favor, ingresa tu correo electrónico",
                    },
                  ]}
                >
                  <Input
                    value={email}
                    name="email"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  className={styles.form_item}
                  label="password"
                  name={"Contraseña"}
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa tu contraseña",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    value={password}
                    name="password"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  className={styles.form_item}
                  label="phone"
                  name={"Teléfono"}
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa tu número telefónico",
                    },
                  ]}
                >
                  <Input
                    value={phone}
                    name="phone"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item className={styles.button_wrapper}>
                  <Button
                    className={styles.button_submit}
                    htmlType="submit"
                    onClick={handleModalButton} //mostrar modal
                  >
                    REGISTRARSE
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <Modales
        visible={visible}
        onOk={handleModalButton}
        title="Gracias por registrarte"
        text="Ahora puedes inicar sesión"
      ></Modales>
    </>
  );
}

export default ClientsRegister;
