
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.header}>
    <img
      className={styles.logoSingleLineLockupWhite1}
      alt=""
      src="/logo-singleline-lockupwhite1.svg"
    />
    <div className={styles.frameParent17}>
      <div className={styles.homeWrapper}>
        <b className={styles.appStore}>Home</b>
      </div>
      <div
        className={styles.tokenWrapper}
        
      >
        <div className={styles.registerNow}>Token</div>
      </div>
      <div
        className={styles.tokenWrapper}
      
      >
        <div className={styles.registerNow}>Tutorials</div>
      </div>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.registerNow}>About us</div>
      </div>
      <div
        className={styles.tokenWrapper}
       
      >
        <div className={styles.registerNow}>FAQs</div>
      </div>
    </div>
    <div className={styles.getTheAppWrapper}>
      <div className={styles.registerNow}>Get the App</div>
    </div>
    <div className={styles.headerChild} />
  </div>
  );
};

export default Navbar;
