import Head from "next/head";
import Newfeed from "../app/project/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saba Sport - Tin bóng đá, nhận định bóng đá</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Newfeed />
    </>
  );
}
