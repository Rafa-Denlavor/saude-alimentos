import styles from "./Sidebar.module.scss";
import cx from "classnames";

const Sidebar = ({ isActive, clickCustom }) => {
  return (
    <nav
      className={cx(
        styles.sidebarWrapper,
        isActive ? styles.showSidebar : styles.closeSidebar
      )}
      onClick={clickCustom}
    >
      <a href="#home">Home</a>
      <a href="#about">Quem somos</a>
      <a href="#menu">Cardápio</a>
      <a href="#location">Localização</a>
      <a href="#contacts">Entre em contato!</a>
      <a href="#footer">Mais informações.</a>
    </nav>
  );
};

export default Sidebar;
