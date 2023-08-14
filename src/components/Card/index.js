import styles from "./Card.module.scss";
import cx from "classnames";
import Image from "next/image";

const Card = ({ ilustration, title, description, customClass }) => {
  return (
    <article className={cx(styles.cardWrapper, customClass)}>
      <Image
        src={ilustration}
        width={220}
        height={140}
        alt=""
        className={styles.ilustration}
      />
      <div className={styles.infoBox}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
