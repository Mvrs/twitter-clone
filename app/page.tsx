import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <h1>Hello, World</h1>
    </div>
  );
}
