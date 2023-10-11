
import Footer from "../components/Footer";
import styles from "./Support.module.css";

const Support = () => {
  return (
    <> 
    <div className={styles.headerbackground}>
        <div className={styles.maincontent}>
        <div>
            <h1>We are happy to help!</h1>
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
            <span className={styles.ttl}>Sportboo Support / </span> <span className={styles.subtitile}> Submit a request</span> 
            </p>
        </div>
        </div>
       
    </div>

    <div className={styles.accordion}>
        <div className={styles.faqlist}>
        <p>
        Submit a request
        </p>
        <select name="" id="">
           <option value="Select Category" selected> Select Category</option>
        </select>

        <input type="email" placeholder="Email" />
        <textarea name="" placeholder="Write us a message" id=""></textarea>
   
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

export default Support