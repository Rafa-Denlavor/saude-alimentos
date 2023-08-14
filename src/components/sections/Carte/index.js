import Header from "@/components/Header";
import styles from "./Carte.module.scss";
import FoodCard from "@/components/FoodCard";
import {
  chickenMenu,
  chineseMenu,
  drinkMenu,
  fishMenu,
  meatMenu,
  pastaMenu,
  portionMenu,
} from "./getCarteSection/index";

const Carte = () => {
  return (
    <>
      <Header />
      <div className={styles.carteWrapper}>
        <FoodCard title="Peixe" section={fishMenu} key="fishs" />
        <FoodCard title="Carne" section={meatMenu} key="meats" />
        <FoodCard title="Frango" section={chickenMenu} key="chickens" />
        <FoodCard title="Massas" section={pastaMenu} key="Massas" />
        <FoodCard title="Chinesa" section={chineseMenu} key="chineses" />
        <FoodCard title="Porções" section={portionMenu} key="portions" />
        <FoodCard title="Bebidas" section={drinkMenu} key="drinks" />
      </div>
    </>
  );
};

export default Carte;
