import React from 'react'
import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, AlurakutStyles, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={ `https://github.com/${props.githubUser}.png` } style={{ borderRadius: '8px' }}/>
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '61616060606',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])
  const githubUser = 'subarusakaguchi'
  // const comunidades = ['Alurakut', 'Odeio acordar cedo', 'Eu amo a minha mãe', 'Um mamão vai na cabeça', 'Só mais 5 minutos', 'Tenho medo da gina dos Palitos']
  const pessoas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser = { githubUser }/>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem-vindo(a) { githubUser }
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">
            O que você deseja fazer?
          </h2>
          <form onSubmit={function handleCreateComunity(e) {
            e.preventDefault()
            const dadosForm = new FormData(e.target)

            
            // comunidades.push('Alura Stars')
            const comunidade = {
              id: new Date().toISOString(),
              title: dadosForm.get('title'),
              image: dadosForm.get('image')
            }
            const comunidadesAtt = [...comunidades, comunidade]
            setComunidades(comunidadesAtt)

          }}>
            <div>
              <input type="text" name="title" aria-label="title" placeholder="Qual vai ser o nome da sua comunidade?"/>
            </div>
            <div>
              <input type="text" name="title" aria-label="Coloque uma URL para usarmos de capa" placeholder="Coloque uma URL para usarmos de capa"/>
            </div>

            <button>
              Criar Comunidade
            </button>
          </form>
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            Comunidades ({comunidades.length})
        </h2>

        <ul>
            {comunidades.map((item) => {
              return (
                <li key={item}>
                  <a href={`/users/${item.title}`}>
                    {/* <ProfileSidebar githubUser = { item }/> */}
                    <img src={ item.image }/>
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoas.length})
          </h2>
          
          <ul>
            {pessoas.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`/users/${item}`}>
                    {/* <ProfileSidebar githubUser = { item }/> */}
                    <img src={ `https://github.com/${item}.png` }/>
                    <span>{item}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
    </>
  )
}
