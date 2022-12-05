import ContentPageLayout from '../components/layouts/ContentPageLayout'
import {getDevelopers} from './../libs/getDevelopers'
import DeveloperCard from './../components/developers/DeveloperCard'


function BackEndDeveloperPage({backEnd}) {
    return (
      <>
      {
        backEnd.map((dev) => {
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

export default BackEndDeveloperPage;



BackEndDeveloperPage.getLayout = function getLayout(page){
  return(
      <ContentPageLayout type='backend developers' title='The Next Level App.' tagline='will need a next best developer'>
      {page}
      </ContentPageLayout>
  )
}

export async function getStaticProps(content) {
  const devs = await getDevelopers()
  
  const backEnd =devs.filter(dev=> dev.type==='back-end')


  return {
    props: {
      backEnd:backEnd
    }
  }
}

