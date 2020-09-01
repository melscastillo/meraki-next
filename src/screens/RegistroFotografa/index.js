import { useState } from "react";
import cx from "classnames";
import { Row, Col, Form, Input, Button, Checkbox, Upload } from "antd";
import styles from "./RegistroFotografa.module.css";

import { signUpPhotographers } from "../../server";
import App from "../../components/DropZone";

const RegistroFotografa = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categoryList = [
    "Retrato",
    "Eventos",
    "Fotografía de Producto",
    "Fotografía de Moda",
    "Fotografía Documental o Fotoperiodismo",
  ];

  const onChange = (checkedValues) => {
    if (checkedValues.length >= 3) {
      const options = checkedValues.slice(0, 3);
      setSelectedCategories(options);
    } else {
      setSelectedCategories(checkedValues);
    }
    console.log("checked = ", checkedValues);
  };

  const onFinish = async (value) => {
    console.log(value);
    try {
      const response = await signUpPhotographers(value);
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

  console.log(selectedCategories);

  return (
    <Row className={styles.typography}>
      <Col span={16}>
        <Row>
          <Col offset={6} span={12}>
            <h1 className={styles.logo}>MERAKI</h1>
            <p className={styles.title}>¿Ya tienes una cuenta?</p>
            <p className={styles.iniciaSesion}>
              {" "}
              <a>Inicia Sesión</a>
            </p>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                form={form}
                className={styles.formItem}
                label="Nombre"
                name="name"
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item className={styles.formItem} label="Email" name="email">
                <Input placeholder="" type="email" />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Contraseña"
                name="password"
              >
                <Input placeholder="" type="password" />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="¿En qué categoría de fotografía te especializas? (Puedes elegir hasta tres categorías distintas)"
                name="category"
              >
                <Checkbox.Group
                  options={categoryList}
                  onChange={onChange}
                  value={selectedCategories}
                />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Cuéntanos más acerca de ti"
                name="description"
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                label="Comparte la URL de tu porfatolio AQUÍ:"
                name="portfolio"
              >
                <Input placeholder="" type="url" />
              </Form.Item>

              <p> Compartenos tu sitio web y redes sociales</p>
              <Form.Item
                className={cx(styles.formItem)}
                name="website"
                label={<img width="24" src="/images/Icons/sphere.svg" />}
              >
                <Input placeholder="" type="url" />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                name="facebook"
                label={<img width="24" src="/images/Icons/facebook.svg" />}
              >
                <Input placeholder="" type="url" />
              </Form.Item>

              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="instagram"
                label={<img width="24" src="/images/Icons/instagram.svg" />}
              >
                <Input type="url" />
              </Form.Item>
              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="linkedin"
                label={<img width="24" src="/images/Icons/linkedin.svg" />}
              >
                <Input type="url" />
              </Form.Item>
              <p>
                Elige las 6 mejores fotografías que mejor definan tu trabajo
              </p>
              <ul>
                <li> Formato .JPG</li>
                <li> Máximo 5mp</li>
                <li>
                  Estas fotografías serán públicas y se mostrarán en tu perfil.
                  Podrás modificarlas cuando lo desees.
                </li>
              </ul>

              <div>
                <App />
              </div>
              <p>
                Antes de unirte te invitamos a leer y aceptar nuestros{" "}
                <a>TÉRMINOS Y CONDICIONES</a>
              </p>
              <p>
                <Checkbox /> He leído y acepto TÉRMINOS Y CONDICIONES
              </p>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.submit}
                >
                  REGISTRARSE
                </Button>
              </div>
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
          </Col>
        </Row>
      </Col>

      <Col className={styles.aside} span={8}>
        <p>
          Únete a Meraki para conocer ofertas laborales y promocionar tu trabajo
          con clientes de todo el país
        </p>
      </Col>
    </Row>
  );
};

export default RegistroFotografa;
