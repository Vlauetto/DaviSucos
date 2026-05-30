import style from '../styles/Produtos.module.css'
import whatsapp from '../assets/whatsapp.png'
import sucolaranja from '../assets/SucoLaranja.png'
import sucomorango from '../assets/SucoMorango.png'
import sucomaracuja from '../assets/SucoMaracuja.png'
import sucoacai from '../assets/SucoAçai.png'
import sucomelancia from '../assets/SucoMelancia.png'
import sucomanga from '../assets/SucoManga.png'
import sucolimao from '../assets/SucoLimao.png'
import sucomaca from '../assets/SucaMaca.png'
import sucoabacaxi from '../assets/SucoAbacaxi.png'

export function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: 'Laranja',
      ingredientes: 'Laranja, água e açúcar',
      imagem: sucolaranja
    },
    {
      id: 2,
      nome: 'Morango',
      ingredientes: 'Morango, água e açúcar',
      imagem: sucomorango
    },
    {
      id: 3,
      nome: 'Maracujá',
      ingredientes: 'Maracujá, água e açúcar',
      imagem: sucomaracuja
    },
    {
      id: 4,
      nome: 'Açaí',
      ingredientes: 'Açaí, água e açúcar',
      imagem: sucoacai
    },
    {
      id: 5,
      nome: 'Melancia',
      ingredientes: 'Melancia, água e açúcar',
      imagem: sucomelancia
    },
    {
      id: 6,
      nome: 'Manga',
      ingredientes: 'Manga, água e açúcar',
      imagem: sucomanga
    },
    {
      id: 7,
      nome: 'Limão',
      ingredientes: 'Limão, água e açúcar',
      imagem: sucolimao
    },
    {
      id: 8,
      nome: 'Maçã',
      ingredientes: 'Maçã, água e açúcar',
      imagem: sucomaca
    },
    {
      id: 9,
      nome: 'Abacaxi',
      ingredientes: 'Abacaxi, água e açúcar',
      imagem: sucoabacaxi
    }
  ]

  return (
    <main className={style.produtos}>
      <div className={style.container}>
        <h1 className={style.title}>Nossos Sucos</h1>

        <div className={style['products-grid']}>
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className={style['product-card']}
            >
              <div className={style['product-image']}>
                {produto.imagem ? (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={style['juice-image']}
                  />
                ) : (
                  produto.emoji
                )}
              </div>

              <h2 className={style['product-name']}>
                {produto.nome}
              </h2>

              <div className={style['product-info']}>
                <h4>Ingredientes:</h4>
                <p>{produto.ingredientes}</p>

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
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className={style['whatsapp-icon']}
                />
                Pedir agora
              </a>
            </div>
          ))}
        </div>

        <div className={style.personalization}>
          <h2>Feito do seu jeito</h2>

          <p>
            Cada pedido pode ser personalizado de acordo com sua
            preferência. Alterações nos ingredientes devem ser
            combinadas no WhatsApp durante o atendimento.
          </p>
        </div>
      </div>
    </main>
  )
}