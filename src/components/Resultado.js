import { Card, Col } from "antd";
import Link from "next/link";
import styles from "../../styles/Resultado.module.css";

const Resultado = ({ name, image, id }) => {
  return (
    <Link href="/home/[id]" as={`home/${id}`}>
      <a>
        <Col offset={1} span={10}>
          <Card
            className={styles.card}
            hoverable
            cover={<img alt="example" src={image} />}
          >
            <span className={styles.cardName}>{name}</span>
          </Card>
        </Col>
      </a>

    </Link>
  );
};

export default Resultado;
