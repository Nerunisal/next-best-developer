import ContentPageLayout from '../components/layouts/ContentPageLayout'
import {getDevelopers} from './../libs/getDevelopers'
import DeveloperCard from './../components/developers/DeveloperCard'

function FullStackDeveloperPage({fullstack}) {
    return (
        <>
          {
            fullstack.map((dev) => {
              return (
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
    )         
}
       
   
export default FullStackDeveloperPage;


FullStackDeveloperPage.getLayout = function getLayout(page){
  return(
      <ContentPageLayout type='full stack developers' title='Your Next SASS service' tagline='Will need a next best developer'>
      {page}
      </ContentPageLayout>
  )
}

export async function getStaticProps(content) {
  const devs = await getDevelopers();
  const fullStack = devs.filter(dev=> dev.type==='full-stack');

  return {
    props: {
      fullstack:fullStack
    }
  }
}