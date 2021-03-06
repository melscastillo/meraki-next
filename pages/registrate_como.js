import styles from "./../styles/registrateComo.module.css";
import { Layout, Button, Card } from "antd";
import Link from 'next/link';

const { Content } = Layout;

function RegistrateComo() {
  return (
    <div>
      <Layout className={styles.layout}>
        <Content>
          <p className={styles.title}>Te interesa registrarte como: </p>

          <div className={styles.card_wrapper}>
            <Card
              className={styles.insideCard}
              hoverable
              style={{ width: 380, height: 400 }}
            >
              <div>
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_product_photography_91i21.png"
                />

                <p className={styles.pText}>
                  Registrate como FOTÓGRAFA para promocionar tu trabajo con
                  clientes de todo el país.
                </p>
              </div>
              <Link href = "/registro/fotografas">
              <Button className={styles.button}>FOTÓGRAFA</Button>
              </Link>
            </Card>

            <Card
              hoverable
              style={{ width: 380, height: 400 }}
              className={styles.insideCard}
            >
              <div>
                <img
                  className={styles.imgCard}
                  alt="example"
                  src="/images/undraw_personal_file_222m1.png"
                />

                <p className={styles.pText}>
                  Registrate como CLIENTE para publicar tus ofertas laborales
                </p>
              </div>
              <Link href = "/registro/clientes">
              <Button className={styles.button}>CLIENTE</Button>
              </Link>
            </Card>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default RegistrateComo;
