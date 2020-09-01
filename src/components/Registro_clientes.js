import styles from "../../styles/clientsRegister.module.css";
import React, { useState } from "react";
import { Row, Col, Form, Input, InputNumber, Button } from "antd";

import { signUp } from "../server";

function ClientsRegister() {
  const [form] = Form.useForm();
  const [nameCt, setnameCt] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState(0);
  const [adress, setadress] = useState("");
  const [profilepicture, setprofilepicture] = useState("");

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
        <Col className={styles.background} xs={24} sm={6} md={6} lg={6} xl={6}>
          <div>
            <h2>MERAKI </h2>
          </div>
          <div className={styles.center}>
            <h2 className={styles.h2}>
              Únete a Meraki para publicar tus ofertas laborales y trabaja con
              fotógrafas de todo el país
            </h2>
          </div>
        </Col>
        <Col
          className={styles.divRight}
          xs={24}
          sm={18}
          md={18}
          lg={18}
          xl={18}
        >
          <div>
            <div>
              <h2 className={styles.text}>¿Ya tienes una cuenta?</h2>
              <h2 className={styles.textPers}>Inicia Sesion</h2>
            </div>
            <div>
              <Form
                form={form}
                layout="vertical"
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={"name"}
                  label="Name"
                  rules={[
                    {
                      required: true,
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
                  name={"lastName"}
                  label="Last name"
                  rules={[
                    {
                      required: true,
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
                  name={"email"}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      required: true,
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
                  label="Password"
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    value={password}
                    name="password"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  label="phone"
                  name={"phone"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
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

                <Form.Item
                  name={"adress"}
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: "Please input address!",
                    },
                  ]}
                >
                  <Input
                    value={adress}
                    name="adress"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item
                  name={"profilepicture"}
                  label="Prueba de foto de perfil"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    value={profilepicture}
                    name="profilepicture"
                    className={styles.inputs}
                    onChange={handlerInput}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    className={styles.inputs}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ClientsRegister;
