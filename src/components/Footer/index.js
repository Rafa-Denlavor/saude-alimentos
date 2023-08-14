import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <section className={styles.topicsBox}>
        <ul>
          <li className={styles.primaryItem}>Informações</li>
          <li>
            <a href="" className={styles.items}>
              Política de privacidade
            </a>
          </li>
          <li>
            <a href="" className={styles.items}>
              Termos de uso
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.primaryItem}>Contatos e Mídias</li>
          <li>
            <a href="" className={styles.items}>
              Whatsapp
            </a>
          </li>
          <li>
            <a href="" className={styles.items}>
              Instagram
            </a>
          </li>
          <li>
            <a href="" className={styles.items}>
              Facebook
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.primaryItem}>Desenvolvedor</li>
          <li>
            <a href="" className={styles.items}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="" className={styles.items}>
              Whatsapp
            </a>
          </li>
          <li>
            <a href="" className={styles.items}>
              Linkedin
            </a>
          </li>
        </ul>
      </section>
      <div className={styles.infoDeveloper}>
        <p>Que tal realizar um orçamento?</p>
      </div>
    </footer>
  );
};

export default Footer;
