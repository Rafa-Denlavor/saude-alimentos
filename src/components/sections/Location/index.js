import Title from "@/components/Title";
import styles from "./Location.module.scss";

const Location = () => {
  return (
    <section id="location" className={styles.location}>
      <article className={styles.textBox}>
        <Title name="Localização" />
        <p>
          Nosso restaurante está localizado no litoral do Estado de São Paulo na
          cidade de São Vicente, conhecida por ser a primeira Vila oficial do
          Brasil.
        </p>
        <p>
          Para nos encontrar acesse o mapa ao lado e verifique a distância entre
          nossas instalações e a sua localização.
        </p>
      </article>
      <aside>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116677.82404983239!2d-46.513611122356245!3d-23.954003487038936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1be795087ec7%3A0xe6e95e9915fa8605!2sS%C3%A3o%20Vicente%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1691787836326!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </aside>
    </section>
  );
};

export default Location;
