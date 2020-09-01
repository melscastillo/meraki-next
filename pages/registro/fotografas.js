import Head from "next/head";
import RegistroFotografa from "../../src/components/Registro_fotografa"

const Fotografas = () => {
  return (
    <>
      {" "}
      {/*Fragmento de JSX*/}
      <Head>
        <title>Meraki</title>
      </Head>
      <RegistroFotografa />
    </>
  );
};

export default Fotografas;
