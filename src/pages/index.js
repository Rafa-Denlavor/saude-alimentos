import Head from "next/head";
import { Inter } from "next/font/google";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Footer from "@/components/Footer";
import Location from "@/components/sections/Location";

const inter = Inter({ subsets: ["latin"] });

export default function SaudeAlimentos() {
  return (
    <>
      <Head>
        <title>Restaurante Saúde Alimentos - Delivery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rafaella Denlavor" />
        <meta
          name="description"
          content="Faça seu pedido agora mesmo ou conheça nossos pacotes semanais, mensais e anuais com os pratos que você adora!"
        />
        <link
          name="keywords"
          content="restaurante, comida, marmita, refeição, pacotes de comida"
        />
        <meta name="robots" content="index, follow" />
        <meta property="org:image" content="/images/logo.png" />
        <meta
          property="org:title"
          content="Restaurante Saúde Alimentos - Delivery"
        />
        <link rel="manifest" href="icon/site.webmanifest" />
        <link rel="stylesheet" href="/scss/global.module.scss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Home />
        <Menu />
        <Location />
        <About />
        <Footer />
      </main>
    </>
  );
}
