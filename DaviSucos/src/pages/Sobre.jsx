import style from '../styles/Sobre.module.css'
import imgdavi from '../assets/imgdavi.png'
import davi1 from '../assets/Davi1.jpeg'
import davi2 from '../assets/Davi2.jpeg'
import davi3 from '../assets/Davi3.jpeg'
import davi4 from '../assets/Davi4.jpeg'
import davi5 from '../assets/Davi5.jpeg'
import davi6 from '../assets/Davi6.png'
import user from '../assets/user.png'
import copo from '../assets/copo.png'
import planta from '../assets/planta2.png'
import escudo from '../assets/escudo.png'
import grafico from '../assets/crescer.png'

const IconePessoa = () => (
 <img src={user} alt="Pessoa" width="60" height="60" />
)

const IconeCopo = () => (
    <img src={copo} alt="Copo" width="60" height="60" />
)

const IconePlanta = () => (
  <img src={planta} alt="Planta" width="60" height="60" />
)

const IconeEscudo = () => (
  <img src={escudo} alt="Escudo" width="60" height="60" />
)

const IconeGrafico = () => (
  <img src={grafico} alt="Grafico" width="60" height="60" />
)
 

export function Sobre() {
  const historia = [
    {
      id: 1,
      icone: IconePessoa,
      titulo: 'Comecei simples',
      descricao: 'Comecei a vender sucos para ter um horário mais flexível e poder estudar'
    },
    {
      id: 2,
      icone: IconeCopo,
      titulo: 'Aprendizado',
      descricao: 'Cada venda me ensinou sobre atendimento, comprometimento e responsabilidade'
    },
    {
      id: 3,
      icone: IconePlanta,
      titulo: 'Evolução',
      descricao: 'Busco constantemente aprimorar meus produtos e entregar cada vez mais'
    },
    {
      id: 4,
      icone: IconeEscudo,
      titulo: 'Qualidade sempre',
      descricao: 'Só vendo o que eu compraria ou serviria para minha própria família.'
    },
    {
      id: 5,
      icone: IconeGrafico,
      titulo: 'Crescimento',
      descricao: 'Moro sozinho, sigo estudando e trabalhando todos os dias para crescer cada vez mais.'
    }
  ]

  const processosImg = [
    davi1,
    davi2,
    davi3,
    davi4,
    davi5
  ]

  return (
    <main className={style.sobre}>
      {/* SEÇÃO SOBRE A DAVI */}
      <section className={style['hero-section']}>
        <div className={style['hero-content']}>
          <h1>
            <span className={style.destaque}>Sobre a</span>
            <br />
            <span className={style['title-davi']}>Davi</span>
            <span className={style['title-sucos']}> Sucos</span>
          </h1>
          <div className={style['title-underline']} />

          <p>
            Me chamo <span className={style['text-green']}>Davi Oliveira</span>, tenho 18 anos e desde muito novo aprendi o valor do trabalho e da responsabilidade, sempre buscando ajudar minha mãe em casa.
          </p>
          <p>
            Mais do que sucos, uma história de <span className={style['text-green']}>dedicação</span>, <span className={style['text-green']}>honestidade</span> e <span className={style['text-green']}>sabor natural</span>.
          </p>
        </div>

        <div className={style['hero-image']}>
          <div className={style['hero-shape']} />
          <img src={davi6} alt="Davi Oliveira" />
        </div>
        <div className={style['hero-caption']}>
          Feito com carinho para você!
        </div>
      </section>

      {/* SEÇÃO HISTÓRIA */}
      <section className={style['historia-section']}>
        <h2>
          <span className={style.destaque}>Minha história</span>
          <span className={style.marca}> em poucas palavras</span>
        </h2>

        <div className={style['historia-grid']}>
          {historia.map((item, index) => {
            const IconComponent = item.icone
            return (
              <div key={item.id} className={style['historia-card']}>
                <div className={style['historia-icon']}>
                  <IconComponent />
                </div>

                {index < historia.length - 1 && (
                  <svg className={style['historia-separador']} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0 50 Q 50 0 100 50" fill="none" stroke="#f8ab1c" strokeWidth="3" />
                  </svg>
                )}

                <h3>{item.titulo}</h3>

                <p>{item.descricao}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SEÇÃO PROCESSO */}
      <section className={style['processo-section']}>
        <h2>
          Por trás de cada <span className={style.marca}>suco</span>
        </h2>
        <p className={style['processo-subtitle']}>
          Um pouco do nosso dia a dia, dos nossos produtos e da dedicação em cada entrega.
        </p>

        <div className={style['processo-grid']}>
          {processosImg.map((img, index) => (
            <div
              key={index}
              className={`${style['processo-card']} ${index === 1 ? style['processo-card--tall'] : ''}`}
            >
              <img src={img} alt={`Processo ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
