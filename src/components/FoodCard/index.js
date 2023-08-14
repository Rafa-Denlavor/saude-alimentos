import styles from "./FoodCard.module.scss";
import Title from "../Title";
import Card from "../Card";

const FoodCard = ({ title, section, key }) => {
  return (
    <>
      <Title name={title} />
      <article className={styles.article}>
        {section.map(({ title, description, ilustration }) => {
          return (
            <Card
              ilustration={ilustration}
              title={title}
              description={description}
              customClass={styles.card}
              key={key}
            />
          );
        })}
      </article>
    </>
  );
};

export default FoodCard;
