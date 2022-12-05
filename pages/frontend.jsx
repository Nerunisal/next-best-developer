import ContentPageLayout from '../components/layouts/ContentPageLayout'
import {getDevelopers} from './../libs/getDevelopers'
import DeveloperCard from './../components/developers/DeveloperCard'


function FrontEndDeveloperPage({frontEnd}) {
    return (
      <>
        {
          frontEnd.map((dev) => {
            return(
              <DeveloperCard key={dev.uid} 
                fullName={dev.full_name}
                avatar={dev.avatar}
                jobTitle={dev.job_title}
                experience={dev.experience}
                availability={dev.availability} 
              />
            )
          })
        }
      </>

    );
}

export default FrontEndDeveloperPage;

FrontEndDeveloperPage.getLayout = function getLayout(page){
  return(
      <ContentPageLayout type='front-end developers' title='The Next Cool Web App' tagline='will be built by one of our next best developers'>
      {page}
      </ContentPageLayout>
  )
}

export async function getStaticProps(content) {
  const devs = await getDevelopers()

  const frontEnd =devs.filter(dev=> dev.type==='front-end')


  return {
    props: {
     frontEnd:frontEnd
    }
  }
}
