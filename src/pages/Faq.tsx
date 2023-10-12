import Footer from "../components/Footer";
import styles from "./Faq.module.css";

const Faq = () => {
   

     

  return (
    <> 
    <div className={styles.headerbackground}>
        <div className={styles.maincontent}>
        <div>
            <h1>Frequently asked questions</h1>
        </div>
        <div className={styles.inputarea}>
            <div className={styles.inputlabel}>
            <div>
                <img className={styles.imglogo} src="/search-status.svg" alt="" />
            </div>
            <div>
                <p className={styles.search}>Search</p>
            </div>
            </div>
            <button>
            <img src="/send.svg" alt="" />
            </button>
        </div>
        <div>
            <p>
            <span className={styles.ttl}>Sportboo Support / </span> <span className={styles.subtitile}> FAQs</span> 
            </p>
        </div>
        </div>
       
    </div>

    <div className={styles.accordion}>
        <div className={styles.faqlist}>
        <div className={styles.accitem}>
        <div className={styles.acccontent}>
            <p>How to create bet</p>
            <div>
                <img className={styles.arrowdown} src="/arrow-down.svg" alt="" />
            </div>
        </div>
    </div>
        <div className={styles.accitem}>
        <div className={styles.acccontent}>
            <p>What is the difference between Even, Odd and Combo Bet</p>
            <div>
                <img className={styles.arrowdown} src="/arrow-down.svg" alt="" />
            </div>
        </div>
    </div>
        <div className={styles.accitem}>
        <div className={styles.acccontent}>
            <p>Are there hidden charges</p>
            <div>
                <img className={styles.arrowdown} src="/arrow-down.svg" alt="" />
            </div>
        </div>
    </div>
   
        </div>
   
    </div>

    <div className={styles.cantfindanswer}>
    <div className={styles.insidecontent}>
        <p>
        Can't find an answer to your question?
        </p>
        <div className={styles.submit}>
            <p>Submit a request</p>
            <img src="/arrow-right.svg" alt="" />
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

    export default Faq;