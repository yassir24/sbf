import Footer from "../components/Footer";
import styles from "./Tutorial.module.css";

const Tutorial = () => {
  return (
    <> 
    <div className={styles.container}>
    <div className={styles.width}>
    

        <p className={styles.sub}>
        Learn everything about
        </p>

        <h1 className={styles.gettoknow}>
        Sportboo Features
        </h1>
     
        </div>
        <div className={styles.rowlayout}>
       <div className={styles.left}>
        <h1 className={styles.description}>
        Discover the Art of Prediction, Analysis, and Betting Strategy.
        </h1>
        <p className={styles.subtitle}>
      
        Your one-stop guide to all things sport. Whether you're a newbie trying to understand prediction, analysis, bet terms or a pro looking to develop a betting strategy, create bet with unlimited freedom and win big, we've got you covered.
                </p>
                
                <button className={styles.startbutton}>
                Start here
          </button>
       </div>
       <div className={styles.right}>
        <div>
        <img  className={styles.imageStyle} src="/22a70529e87f6d402948ac4e1cc22551.png" />
        </div>
      
       </div>
        </div>
    </div>

    <div className={styles.tut}>
    <div className={styles.header}>
    <div>
       <p className={styles.lp}>
       Tutorials
       </p>
    </div>
    <div className={styles.inputcontainer}>

        <div className={styles.inputlabel}>
            <div>
                <img className={styles.imglogo} src="/search-status.svg" alt="" />
            </div>
            <div>
                <p className={styles.search}>Search</p>
            </div>

        </div>


        <button className={styles.formbutton}>
            <img src="/send.svg" alt="" />
        </button>
    </div>
    </div>
    <div className={styles.gridlayout}>
        <div className={styles.carditem}>
            <div className={styles.divimg}>

            </div>
            <div className={styles.cardcontent}>
               <div className={styles.cardheader}>
               <p>
               Jul 20, 2023
               </p>
               <div className={styles.cardleft}>
                <div>
                    <img className={styles.sideclock} src="/clock.svg" alt="" />
                </div>
                <p>5m</p>
               </div>
               </div>
               <div>
                <h1 className={styles.carddescription}>
                A Step-By-Step Guide on How to Create Your Bet
                </h1>
               </div>
               <div className={styles.cardfooter}>
               <button className={styles.footerbutton}>
               P2P Betting
               </button>
               <button className={styles.footerbutton}>
               Livescore
               </button>
               </div>
            </div>
        </div>
        <div className={styles.carditem}>
            <div className={styles.divimg}>

            </div>
            <div className={styles.cardcontent}>
               <div className={styles.cardheader}>
               <p>
               Jul 20, 2023
               </p>
               <div className={styles.cardleft}>
                <div>
                    <img className={styles.sideclock} src="/clock.svg" alt="" />
                </div>
                <p>5m</p>
               </div>
               </div>
               <div>
                <h1 className={styles.carddescription}>
                A Step-By-Step Guide on How to Create Your Bet
                </h1>
               </div>
               <div className={styles.cardfooter}>
               <button className={styles.footerbutton}>
               P2P Betting
               </button>
               <button className={styles.footerbutton}>
               Livescore
               </button>
               </div>
            </div>
        </div>
        <div className={styles.carditem}>
            <div className={styles.divimg}>

            </div>
            <div className={styles.cardcontent}>
               <div className={styles.cardheader}>
               <p>
               Jul 20, 2023
               </p>
               <div className={styles.cardleft}>
                <div>
                    <img className={styles.sideclock} src="/clock.svg" alt="" />
                </div>
                <p>5m</p>
               </div>
               </div>
               <div>
                <h1 className={styles.carddescription}>
                A Step-By-Step Guide on How to Create Your Bet
                </h1>
               </div>
               <div className={styles.cardfooter}>
               <button className={styles.footerbutton}>
               P2P Betting
               </button>
               <button className={styles.footerbutton}>
               Livescore
               </button>
               </div>
            </div>
        </div>
    </div>
    </div>
    <div className={styles.bannercontainer}>
      <div className={styles.backgrounddiv}>
       <div className={styles.downloadapp}>
      <h1 className={styles.title}>
      Download the Sportboo App
      </h1>
       </div>
       <div className={styles.buttons}>
        <button className={styles.btns}>
        <img
                className={styles.apple}
                alt=""
                src="/Apple - Original.svg"
              />
          <span className={styles.btntxt}>
         
          App Store
          </span>
        </button> 
        <button className={styles.btns}>
        <img
                className={styles.apple}
                alt=""
                src="/logo-google-playstore.svg"
              />
        <span className={styles.btntxt}>
          Google Play
          </span>
          </button>
       </div>
       </div>
      </div>
      <Footer /> 
    </>
    )
    }


    export default Tutorial;