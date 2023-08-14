import styles from "./Header.module.scss";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const logoSidebar = (image) => {
    return (
      <Image
        src={image}
        width={30}
        height={30}
        alt="Logo da Saúde Alimentos"
        title="Logo da Saúde Alimentos"
        className={styles.logo}
        onClick={() => {
          setOpenSideBar(!openSideBar);
        }}
      />
    );
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.menu}>
        {!openSideBar
          ? logoSidebar("/images/menu.png")
          : logoSidebar("/images/close.svg")}
        <h1 className={styles.title}>Saúde Alimentos</h1>
        <a href="tel:5511" target="_blank" className={styles.link}>
          <Image
            src="/images/whatsapp.svg"
            width={30}
            height={30}
            alt="Whatsapp"
          />
        </a>
      </div>
      <Sidebar
        isActive={openSideBar}
        clickCustom={() => {
          setOpenSideBar(false);
        }}
      />
    </header>
  );
};

export default Header;
