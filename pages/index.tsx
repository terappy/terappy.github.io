import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>terappy's portfolio</title>
      </Head>
      <main>
        <p>This is Terappy's portfolio</p>
      </main>
    </Layout>
  );
};

export default Home;
