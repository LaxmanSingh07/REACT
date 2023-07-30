import Sidebar from "../components/Sidebar";
import AppNav from "./AppNav";

import styles from "./AppLayout.module.css";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map/>
    </div>
  );
}

export default AppLayout;
