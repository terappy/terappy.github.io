import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/layout";

const Posts = () => {
  return (
    <Layout>
      <Head>
        <title>Posts | terappy's portfolio</title>
      </Head>
      <main>
        <p>This is Terappy's portfolio posts</p>
      </main>
    </Layout>
  );
};

export default Posts;
