import { Card, Col } from "antd";
import Link from "next/link";
import styles from "../../styles/Resultado.module.css";

const Resultado = ({ name, image }) => {
  return (
    <Link href="/vista_fotografa">
      <Col offset={1} span={10}>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={image} />}
        >
          <span className={styles.cardName}>{name}</span>
        </Card>
      </Col>
    </Link>
  );
};

export default Resultado;
