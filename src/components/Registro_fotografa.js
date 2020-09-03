import { useState } from "react";
import cx from "classnames";
import { Row, Col, Form, Input, Button, Checkbox, Upload } from "antd";
import Modales from "../components/modal";
import styles from "../../styles/RegistroFotografa.module.css";
import Link from "next/link";
import { signUpPhotographers, addPhotos } from "../server";
import Droppi from "../components/Dropzone";

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
  const [list, setlist] = useState([]);
  const [visible, setVisible] = useState(false);

  const setimagelist = (listimage) => {
    setlist(listimage);
  };

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
      const id = response.data.photograper._id;
      try {
        console.log(list);
        const formData = new FormData();
        for (let photo in list) {
          formData.append("photos", list[photo]);
        }
        console.log(formData);
        const responseImg = await addPhotos(id, formData);
        if (!responseImg.success) {
          console.log("Error: ", responseImg.error);
          return;
        }
        console.log("response", responseImg.data);
      } catch (error) {
        console.log("error image", error);
      }
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(selectedCategories);

  const handleModalButton = () => {
    setVisible(true);
  };

  const handleModalAccept = () => {
    setVisible(false);
  };

  return (
    <Row>
      <Col md={16} sm={24}>
        <Row>
          <Col offset={6} md={12} sm={24}>
            <h1 className={styles.logo}>MERAKI</h1>
            <p className={styles.title}>¿Ya tienes una cuenta?</p>
            <p className={styles.iniciaSesion}>
              {" "}
              <Link href="/login" passHref>
                <a>Inicia Sesión</a>
              </Link>
            </p>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                form={form}
                className={styles.formItem}
                label="Nombre"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu nombre",
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                form={form}
                className={styles.formItem}
                label="Apellido"
                name="apellido"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu apellido",
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Por favor, ingresa tu correo electrónico",
                  },
                ]}
              >
                <Input placeholder="" type="email" />
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu contraseña",
                  },
                ]}
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

              <p className={styles.textLabel}>
                {" "}
                Compartenos tu sitio web y redes sociales
              </p>
              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
                name="website"
                label={<img width="24" src="/images/Icons/sphere.svg" />}
              >

                <Input placeholder="" type="url" />
              </Form.Item>

              <Form.Item
                className={cx(styles.formItem, styles.socialInput)}
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
              <p className={styles.textLabel}>
                Elige las 6 mejores fotografías que mejor definan tu trabajo
              </p>
              <ul className={styles.submitPhotos}>
                <li> Formato .JPG</li>
                <li> Máximo 5mp</li>
                <li>
                  Estas fotografías serán públicas y se mostrarán en tu perfil.
                  Podrás modificarlas cuando lo desees.
                </li>
              </ul>
              <div>
                <Droppi callback={setimagelist} />
              </div>
              <p className={styles.textLabel}>
                Antes de unirte te invitamos a leer y aceptar nuestros{" "}
                <a className={styles.terminos}>TÉRMINOS Y CONDICIONES</a>
              </p>
              <p className={styles.submitPhotos}>
                <Checkbox /> He leído y acepto TÉRMINOS Y CONDICIONES
              </p>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.submit}
                  onClick={handleModalButton}
                >
                  REGISTRARSE
                </Button>
              </div>
              <Modales
                visible={visible}
                onOk={handleModalButton}
                title="Gracias por registrarte"
                text="Te enviamos un correo de confirmación"
              ></Modales>
            </Form>
          </Col>
        </Row>
      </Col>

      <Col className={styles.aside} md={8}>
        <p>
          Únete a Meraki para conocer ofertas laborales y promocionar tu trabajo
          con clientes de todo el país
        </p>
      </Col>
    </Row>
  );
};

export default RegistroFotografa;
