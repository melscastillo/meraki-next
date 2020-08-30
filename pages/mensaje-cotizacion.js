import { Layout, Input, Row, Col, Upload, Button, Icon, message } from "antd";
import styles from "../styles/cotizacion.module.css";
import reqwest from "reqwest";

const { Header, Content } = Layout;
const { TextArea } = Input;

function Cotizacion() {
  return (
    <div>
      <Layout>
        <Header className={styles.header}>MERAKI</Header>
        <Content>
          <EnviarCotizacion />
        </Content>
      </Layout>
    </div>
  );
}

function EnviarCotizacion() {
  return (
    <div className={styles.content}>
      <Row>
        <Col offset={4} span={16}>
          <div className={styles.text}>
            <p>Escribe tu mensaje:</p>
          </div>
          <div>
            <TextArea rows={4} className={styles.textArea} />
          </div>
          <div className={styles.text}>
            <p>Agrega tu cotización:</p>
          </div>
          <div>
            <Subir />
            <div className={styles.btngroup}>
              <Button size={10} className={styles.btn}>
                Enviar Mensaje
              </Button>
              <Button className={styles.btn}>Regresar a mis mensajes</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

class Subir extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: "//jsonplaceholder.typicode.com/posts/",
      method: "post",
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success("upload successfully.");
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error("upload failed.");
      },
    });
  };

  render() {
    const { uploading } = this.state;
    const props = {
      action: "//jsonplaceholder.typicode.com/posts/",
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    return (
      <div className={styles.subir}>
        <Upload {...props}>
          <Button className={styles.upload}>
            <Icon type="upload" /> Selecciona el archivo
          </Button>
        </Upload>
        <Button
          className={styles.upload}
          type="primary"
          onClick={this.handleUpload}
          disabled={this.state.fileList.length === 0}
          loading={uploading}
        >
          {uploading ? "Uploading" : "Start Upload"}
        </Button>
      </div>
    );
  }
}

export default Cotizacion;
