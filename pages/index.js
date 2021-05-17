import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next-Tailwind-Boiler</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-wrap items-center ">
        <div className="text-2xl text-center">Hello World</div>
      </main>

      <footer className="">
        <a>
          <span className=""></span>
        </a>
      </footer>
    </div>
  );
}
