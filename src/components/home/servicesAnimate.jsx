import styles from "./ServicesAnimate.module.css";
import Lottie from "lottie-react";
import Codes from "../../assets/lottie/code.json";
import Process from "../../assets/lottie/process.json";
import Analisis from "../../assets/lottie/analisis.json";
import Marketing from "../../assets/lottie/marketing.json";

export default function ServicesAnimate({ text }) {
  console.log("ssss", text["services.title"]);
  return (
    <section className={styles.ourServices}>
      <div className={styles.container}>
        <h2 className={styles.H2}>{text["services.title"]}</h2>
        <p className={styles.introParagraph}>{text["services.intro"]}</p>

        <div className={styles.servicesListContainer}>
          <div className={styles.serviceItem}>
            <Lottie
              animationData={Codes}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h3 className={styles.H3}>{text["services.title1"]}</h3>
              <p className={styles.textContentP}>
                {text["services.description1"]}
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <Lottie
              animationData={Process}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h3 className={styles.H3}>{text["services.title2"]}</h3>
              <p className={styles.textContentP}>
                {text["services.description2"]}
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <Lottie
              animationData={Analisis}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h3 className={styles.H3}>{text["services.title3"]}</h3>
              <p className={styles.textContentP}>
                {text["services.description3"]}
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <Lottie
              animationData={Marketing}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
            <div>
              <h3 className={styles.H3}>{text["services.title4"]}</h3>
              <p className={styles.textContentP}>
                {text["services.description4"]}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.callToAction}>
          <p>{text["services.cta.text"]}</p>
          <button className={styles.btn}>{text["services.cta.button"]}</button>
        </div>
      </div>
    </section>
  );
}
