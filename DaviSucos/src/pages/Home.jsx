import { Link } from 'react-router-dom'
import style from '../styles/Home.module.css'
import sucos from '../assets/sucos header.png'
import onda from '../assets/onda.png'
import whatsapp from '../assets/whatsapp.png'
import sucosicones from '../assets/sucos-icone.png'
import planta from '../assets/planta.png'
import macauva from '../assets/maçauva.png'
import copo from '../assets/copo.png'
import coracao from '../assets/coracao.png'
import sucolaranja from '../assets/sucolaranja.png'
import sucomorango from '../assets/sucomorango.png'
import sucomaracuja from '../assets/sucoMaracuja.png' 

export function Home() {
  return (
    <main className={style.home}>
      
      {/* HERO */}
      <section className={style.hero}>

        {/* TEXTO */}
        <div className={style['hero-content']}>
          <h1>
            Sucos naturais feitos com
            <span className={style.highlight}>
              frutas frescas
            </span>
          </h1>

          <p>
            Sabor, qualidade e refrescância para o seu dia a dia.
            Atendemos encomendas para eventos, empresas, festas e revenda.
          </p>

          <div className={style['hero-buttons']}>
            <a
              href="https://wa.me/5511940433265"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.btn} ${style['btn-primary']}`}
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className={style['whatsapp-icon']}
              />
              Pedir agora
            </a>

            <Link
              to="/produtos"
              className={`${style.btn} ${style['btn-secondary']}`}
            >
              <img
                src={sucosicones}
                alt="Cardápio"
                className={style['menu-icon']}
              />
              Ver cardápio
            </Link>
          </div>
        </div>

        {/* IMAGEM */}
        <div className={style['hero-image']}>

          <img
            src={onda}
            alt="Onda verde"
            className={style['hero-wave']}
          />
            
          <img
            src={sucos}
            alt="Sucos Naturais"
            className={style['hero-sucos']}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className={style.features}>

        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>
            <img src={planta} alt="Planta" />
          </div>

          <h3>100% naturais</h3>
          <p>Sem conservantes</p>
        </div>

        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>
            <img
  src={macauva}
  alt="Maçã"
  className={style.macauva}
/>
          </div>

          <h3>Frutas frescas</h3>
          <p>Selecionadas</p>
        </div>

        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>
            <img src={copo} alt="Copo" />
          </div>

          <h3>Diversos sabores</h3>
          <p>Para todos</p>
        </div>

        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>
            <img src={coracao} alt="Coração" />
          </div>

          <h3>Feito com carinho</h3>
          <p>Para você</p>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className={style['products-section']}>

        <h2 className={style['section-title']}>
          Nossos queridinhos
        </h2>

        <div className={style['products-grid']}>

          {/* CARD */}
          <div className={style['product-card']}>
            <div className={style['product-image']}>
              <img src={sucolaranja} alt="Laranja" />
            </div>

            <h3>Laranja</h3>

            <div className={style['product-info']}>
              <h4>Ingredientes:</h4>
              <p>Laranja, água e açúcar</p>

              <h4>Tamanhos:</h4>

              <div className={style.sizes}>
                <span className={style['size-badge']}>
                  300ml
                </span>

                <span className={style['size-badge']}>
                  500ml
                </span>
              </div>
            </div>

            <div className={style.price}>
              R$ 20 à 30
            </div>

            <a
              href="https://wa.me/5511940433265"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.btn} ${style['btn-primary']} ${style['product-btn']}`}
            >
              Pedir agora
              <img
                src={whatsapp}
                alt="WhatsApp"
                className={style['whatsapp-icon']}
              />
            </a>
          </div>

          {/* CARD */}
          <div className={style['product-card']}>
            <div className={style['product-image']}>
              <img src={sucomorango} alt="Morango" />
            </div>

            <h3>Morango</h3>

            <div className={style['product-info']}>
              <h4>Ingredientes:</h4>
              <p>Morango, água e açúcar</p>

              <h4>Tamanhos:</h4>

              <div className={style.sizes}>
                <span className={style['size-badge']}>
                  300ml
                </span>

                <span className={style['size-badge']}>
                  500ml
                </span>
              </div>
            </div>

            <div className={style.price}>
              R$ 20 à 30
            </div>

            <a
              href="https://wa.me/5511940433265"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.btn} ${style['btn-primary']} ${style['product-btn']}`}
            >
              Pedir agora
              <img
                src={whatsapp}
                alt="WhatsApp"
                className={style['whatsapp-icon']}
              />
            </a>
          </div>

          {/* CARD */}
          <div className={style['product-card']}>
            <div className={style['product-image']}>
              <img src={sucomaracuja} alt="Maracujá" />
          </div>

            <h3>Maracujá</h3>

            <div className={style['product-info']}>
              <h4>Ingredientes:</h4>
              <p>Maracujá, água e açúcar</p>

              <h4>Tamanhos:</h4>

              <div className={style.sizes}>
                <span className={style['size-badge']}>
                  300ml
                </span>

                <span className={style['size-badge']}>
                  500ml
                </span>
              </div>
            </div>

            <div className={style.price}>
              R$ 20 à 30
            </div>

            <a
              href="https://wa.me/5511940433265"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.btn} ${style['btn-primary']} ${style['product-btn']}`}
            >
              Pedir agora
              <img
                src={whatsapp}
                alt="WhatsApp"
                className={style['whatsapp-icon']}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}