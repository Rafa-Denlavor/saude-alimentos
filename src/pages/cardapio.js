import Head from "next/head";
import Carte from "@/components/sections/Carte";

export default function Cardapio() {
  return (
    <>
      <Head>
        <title>Cardápio - Saúde Alimentos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rafaella Denlavor" />
        <meta
          name="description"
          content="Encontre seus pratos prediletos e negocie seu sabor."
        />
        <meta name="robots" content="index, follow" />
        <meta property="org:image" content="/images/logo.png" />
        <meta property="org:title" content="Cardápio - Saúde Alimentos" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        />

        <link rel="manifest" href="icon/site.webmanifest" />
        <link rel="stylesheet" href="/scss/global.module.scss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carte />
      </main>
    </>
  );
}
