
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.frameParent14}>
    <div className={styles.logoSingleLineLockupWhiteParent}>
      <img
        className={styles.logoSingleLineLockupWhite}
        alt=""
        src="/logo-singleline-lockupwhite.svg"
      />
      <div className={styles.socialslistItems}>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.appleOriginal}
            alt=""
            src="/icons--logolinkedin.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.solidbrandstwitterIcon}
            alt=""
            src="/solidbrandstwitter.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.solidbrandstwitterIcon}
            alt=""
            src="/solidbrandstelegram.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.appleOriginal}
            alt=""
            src="/remixiconsfilllogosinstagramfill.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.appleOriginal}
            alt=""
            src="/remixiconsfilllogosfacebookboxfill.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.appleOriginal}
            alt=""
            src="/remixiconsfilllogosdiscordfill.svg"
          />
        </div>
        <div className={styles.iconsLogoLinkedinWrapper}>
          <img
            className={styles.solidbrandstwitterIcon}
            alt=""
            src="/solidbrandsyoutube.svg"
          />
        </div>
      </div>
    </div>
    <img className={styles.frameChild14} alt="" src="/vector-75.svg" />
    <div className={styles.frameParent15}>
      <div className={styles.frameParent16}>
        <div className={styles.addressParent}>
          <b className={styles.appStore}>Address</b>
          <div className={styles.phaseFCloseRumuaholuPortWrapper}>
            <div className={styles.phaseFCloseContainer}>
              <p className={styles.valid}>Phase F Close, Rumuaholu</p>
              <p className={styles.valid}>Port Harcourt, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.details1}>
            <b className={styles.appStore}>Newsletter</b>
            <div className={styles.description10}>
              Subscribe and stay updated
            </div>
          </div>
          <div className={styles.forminput}>
            <div className={styles.inputLabel}>
              <img className={styles.iconmsg} alt="" src="/iconmsg.svg" />
              <div className={styles.appStore}>Email</div>
            </div>
            <div className={styles.buttonsecondarysend}>
              <img className={styles.iconmsg} alt="" src="/send.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <b className={styles.appStore}>About</b>
        <div className={styles.overviewParent}>
          <div className={styles.registerNow}>Overview</div>
          <div className={styles.registerNow}>Contact Us</div>
          <div className={styles.registerNow}>Blog</div>
          <div className={styles.joinOurTeam}>Join Our Team</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <b className={styles.appStore}>Support</b>
        <div className={styles.overviewParent}>
          <div className={styles.faqs}>
            FAQs
          </div>
          <div className={styles.faqs}>
            Support
          </div>
          <div className={styles.registerNow}>News</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <b className={styles.appStore}>Legal</b>
        <div className={styles.overviewParent}>
          <div className={styles.registerNow}>Privacy Policy</div>
          <div className={styles.registerNow}>{`Terms & Condition`}</div>
        </div>
      </div>
    </div>
    <div className={styles.copyrightWrapper}>
      <div className={styles.copyright}>
        <img
          className={styles.iconcopyright}
          alt=""
          src="/iconcopyright.svg"
        />
        <div className={styles.appStore}>
          Copyright Sportboo 2023. All Right Reserved.
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
