import styles from "./Menu.module.scss";
import Title from "@/components/Title";
import Link from "next/link";

const Menu = () => {
  return (
    <section id="menu" className={styles.menuWrapper}>
      <Title name="Cardápio" />
      <p className={styles.description}>
        Satisfaça seu paladar e cuide da sua saúde, tudo em uma única refeição.
        Não perca tempo, explore agora mesmo e transforme sua alimentação
      </p>
      <Link href="/cardapio" className={styles.button}>
        Conheça nossos pratos
      </Link>
    </section>
  );
};

export default Menu;
