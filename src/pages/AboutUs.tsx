
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";
const About = () => {
    return (
      <>
      <div className={styles.container}>
        <div className={styles.width}>
        <h1 className={styles.gettoknow}>
        Get to know us
        </h1>

        <p className={styles.sub}>
        Giving you a chance win BIG.
        <br />
        Giving you a chance win BIG.
Our goal is to offer the best seamless and friendly: livescore with comments on games and token rewards, peer-to-peer betting with flexible payment options including crypto and fiat.
        </p>
     
        </div>
        <div className={styles.rowlayout}>
       <div className={styles.left}>
        <h1 className={styles.description}>
        Welcome to the Revolutionary World of Peer-to-Peer Betting and Live Scores!
        </h1>
        <p className={styles.subtitle}>
      
         At our cutting-edge P2P betting platform and livescore app, we redefine the way you experience the excitement of wagering and live sports. Embrace the power of decentralization, where you engage in thrilling bets directly with fellow enthusiasts, leaving behind the constraints of traditional betting platforms. 
        </p>
        
<p className={styles.subtitle}>
Our platform empowers you like never before, offering seamless integration of both crypto and fiat wallet payment options. Embrace the freedom to bet using your preferred currency, whether it's cryptocurrencies like Bitcoin or USDT, or traditional fiat currencies. The future is here, where financial boundaries are shattered, and you're in full control of your betting experience. 

</p>

<p className={styles.subtitle}>
Stay at the forefront of every game with our real-time livescore app, ensuring you never miss a moment of exhilarating sports action. From soccer to basketball, tennis to football, and more, our comprehensive coverage keeps you updated with lightning-fast precision.

</p>

<p className={styles.subtitle}>
Beyond the convenience and cutting-edge technology, we pride ourselves on fostering a thriving community of passionate bettors. Connect with like-minded individuals, share strategies, and revel in the collective excitement as you witness your favorite teams compete.

    
    </p>
<p className={styles.subtitle}>
As we prioritize your privacy and security above all else. Every transaction and bet are transparent, fair, and tamper-proof, leaving you with absolute peace of mind.

    
    </p>

    <p className={styles.last}>
    Join us now
    </p>


<br />


    
       </div>
       <div className={styles.right}>
        <div>
        <img  className={styles.imageStyle} src="/22a70529e87f6d402948ac4e1cc22551.png" />
        </div>
      
       </div>
        </div>

      


      </div>
      <div>
        <img  className={styles.bgimg} src="/bgimg.png" />

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

export default About;




