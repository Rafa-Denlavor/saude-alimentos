import Title from "@/components/Title";
import styles from "./About.module.scss";
import Card from "@/components/Card";

const About = () => {
  return (
    <section id="about" className={styles.aboutUsWrapper}>
      <Title name="Sobre nós" />
      <div className={styles.cards}>
        <Card
          ilustration="/images/marmita.jpeg"
          title="Pacotes personalizados"
          description="Precisa seguir sua tabela nutricional, mas deseja ter variedade em suas refeições? Entre em contato para orçamentar suas necessidades nutricionais e satisfazer seu paladar."
        />
        <Card
          ilustration="/images/temperos-naturais.jpg"
          title="Temperos Naturais"
          description="Em nossa cozinha não utilizamos temperos industrializados. Optamos por temperos naturais para realçar ainda mais o sabor dos pratos e para preservar a saúde de nossos clientes."
        />
        <Card
          ilustration="/images/pratos-diversos.png"
          title="+87 pratos"
          description="Atualmente, o nosso cardápio é composto por 87 pratos fixos, que incluem massas, aves, peixes, carnes, porções e pratos de culinária chinesa, além de três opções de pratos do dia."
        />
        <Card
          ilustration="/images/chef.jpg"
          title="Chef renomado"
          description="O Chef Maurício Santos, um gastrônomo com mais de sete anos de experiência na indústria culinária e com uma ampla formação em cursos na área, lidera a equipe da cozinha."
        />
      </div>
    </section>
  );
};

export default About;
