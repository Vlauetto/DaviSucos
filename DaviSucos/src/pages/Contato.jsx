import style from "../styles/Contato.module.css";
import whatsappIcon from "../assets/whatsapp.png";
import whats from "../assets/whatscontato.png";
import instagram from "../assets/instagramcontato.png";
import local from "../assets/localizacaocontato.png";
import davi from "../assets/imgdavi.png";
import flor from "../assets/flor.png";

export function Contato() {
  return (
    <main className={style.contato}>
      <div className={style.container}>

        {/* LEFT */}
        <div className={style["content-left"]}>
          <h1>Fale conosco</h1>

          <p>
            Entre em contato e faça seu pedido!
            Será um prazer atender você.
          </p>

          <ul className={style["contact-list"]}>
            <li className={style["contact-item"]}>
              <div className={style["contact-icon"]}>
                <img src={whats} alt="WhatsApp" />
              </div>
              <div className={style["contact-info"]}>
                <span className={style.label}>WhatsApp</span>
                <span className={style.value}>(11) 94043-3265</span>
              </div>
            </li>

            <li className={style["contact-item"]}>
              <div className={style["contact-icon"]}>
                <img src={instagram} alt="Instagram" />
              </div>
              <div className={style["contact-info"]}>
                <span className={style.label}>Instagram</span>
                <span className={style.value}>@davisucos</span>
              </div>
            </li>

            <li className={style["contact-item"]}>
              <div className={style["contact-icon"]}>
                <img src={local} alt="Localização" />
              </div>
              <div className={style["contact-info"]}>
                <span className={style.label}>Endereço</span>
                <span className={style.value}>São Paulo, SP</span>
              </div>
            </li>
          </ul>

          {/* BOTÃO WHATSAPP */}
          <a
            href="https://wa.me/5511940433265"
            target="_blank"
            rel="noopener noreferrer"
            className={style.whatsappButton}
          >
            <span className={style.whatsappIcon}>
              <img src={whatsappIcon} alt="WhatsApp" />
            </span>
            Pedir agora
          </a>
        </div>

        {/* RIGHT */}
        <div className={style["image-section"]}>
          <div className={style["bg-shape"]} />

          <img className={style.flor} src={flor} alt="Flor" />

          <div className={style["person-image"]}>
            <img src={davi} alt="Davi"/>
          </div>
        </div>

      </div>
    </main>
  );
}