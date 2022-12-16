import ContentPageLayout from '../components/layouts/ContentPageLayout'
import {getDevelopers} from './../libs/getDevelopers'
import DeveloperCard from './../components/developers/DeveloperCard'


function UiUxPage({ui}) {
    return (
      <>
          {
            ui.map((dev) => {
              return(
                <DeveloperCard key={dev.uid} 
                  fullName={dev.full_name}
                  avatar={dev.avatar}
                  jobTitle={dev.job_title}
                  experience={dev.experience}
                  availability={dev.availability} 
                  uid={dev.uid}
                />
              )
            })
          }
      </>


    );
}

export default UiUxPage;

UiUxPage.getLayout = function getLayout(page){
      return(
          <ContentPageLayout type='ui-ux developers' title='The Next Big Thing.' tagline='Makes the last big thing usable'>
          {page}
          </ContentPageLayout>
    )
}

export async function getStaticProps(content){
  const devs = await getDevelopers()

  const uiDevs = devs.filter(dev=> dev.type==='ui-ux')

  return {
    props: {
      ui:uiDevs
    }
  }
}

