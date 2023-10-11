
import Footer from "../components/Footer";
import styles from "./Token.module.css";

const Token = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.llayout}> 
               <h1>
               Sportboo Community Token
               </h1>
               <p>
               Uniting Passionate Fans, Empowering Community and Redefining Rewards!
               </p>
            </div>
            <div className={styles.lbutton}>
                <button>
                    <p>
                    Download Whitepaper
                    </p>
                </button>
            </div>
        </div>
        <div>
            <img className={styles.bgbanner} src="/coin.png" alt="" />
        </div>

       
    </div>

    <div className={styles.tc}>
            <h1>Welcome to Sportboo, the revolutionary sports community token that's redefining the way you experience sports and betting!</h1>
           <p>
           In this dynamic arena, we unite sports enthusiasts, from soccer to basketball and beyond, leveraging the power of blockchain technology to create an immersive and rewarding platform. Sportboo token is your gateway to a world where you not only follow live scores in real-time but also engage in peer-to-peer betting, making every game even more thrilling.</p>

           <p>Join our vibrant sports community where fans turn into bettors and players into champions. With Sportboo, you'll have access to our lightning-fast livescore platform, keeping you up-to-date with every match, every stat, at your fingertips.</p> 

           <p> But that's not all – our peer-to-peer betting feature takes your sports experience to a whole new level. No bookmakers, just you and your peers, betting smarter and stronger with every wager.</p> 

            <p>And with our secure and user-friendly wallet, managing your digital assets and fiat currencies becomes effortless, making transactions smoother and more convenient than ever before.</p>    

            <p> Get ready to unleash the true potential of sports, betting, and your passion. Welcome to Sportboo, where the game is in your hands, and your tokens open the doors to endless possibilities in the world of sports!
           </p>
        </div>

        <div className={styles.gb}>
            <div>
                <img className={styles.lbanner} src="/leftimg.png" alt="" />
            </div>
            <div className={styles.ml}>
                <div className={styles.tl}>
                    <p>Complete three tasks and</p>
                   <h1>
                   EARN 50 SPORTBOO TOKEN!
                   </h1>
                </div>
                <div>
                    <div className={styles.inner}>
                       <div className={styles.inneritem}>
                        <button className={styles.itembutton}>
                            <img src="/download.svg" alt="" />
                        </button>
                        <p>Download the App</p>
                        <span>
                        Download the app, signup and complete account setup
                        </span>
                        <h4>
                        Download now
                        </h4>
                       </div>
                       <div className={styles.inneritem}>
                        <button className={styles.itembutton}>
                            <img src="/Twitterwhite.svg" alt="" />
                        </button>
                        <p>Twitter Task</p>
                        <span>
                        Follow us on Twitter and retweet pinned post to get reward.
                        </span>
                        <h4>
                        Get rewarded
                        </h4>
                       </div>
                       <div className={styles.inneritem}>
                        <button className={styles.itembutton}>
                            <img src="/Telegramwhite.svg" alt="" />
                        </button>
                        <p>Telegram Task</p>
                        <span>
                        Join our twitter community and share with friends.
                        </span>
                        <h4>
                        Join here
                        </h4>
                       </div>

                       
                    </div>
                </div>
            </div>
            <div>
            <img className={styles.lbanner} src="/rightimg.png" alt="" />
            </div>
        </div>
        <Footer /> 
    </>
  )
}

export default Token