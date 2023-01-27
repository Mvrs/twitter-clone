import { Sidebar } from "@/components/sidebar";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      {/* Sidebar */}
      <main className="flex min-h-screen max-w-7xl mx-auto">
        <Sidebar />
      </main>
    </div>
  );
}
