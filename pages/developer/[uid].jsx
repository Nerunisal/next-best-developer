import {BioHeader, BioNavigation, BioTopic} from '../../components/developer-bio'
import {getDevelopers} from '../../libs/getDevelopers.js'
import {generateRandomTitle} from '../../libs/generateRandomTitle.js'
import DeveloperBioLayout from "../../components/layouts/DeveloperBioLayout"

function SingleDeveloperPage({avatar, full_name, city, heading, }){
    
    return (
    <div className='max-w-2xl mx-auto py-20'>
        <BioNavigation avatar={avatar} fullName={full_name}/>
        <BioHeader city={city} fullName={full_name} heading={heading}/>
        <BioTopic topic="About Me"/>
    </div> );
}

export default SingleDeveloperPage;

export async function getStaticPaths(){
    const devs = await getDevelopers()
    const paths = devs.map(dev => ({params:{uid:dev.uid}}))
     return{
        paths,
        fallback:false
     }
}

export async function getStaticProps({params}){

    const devs = await getDevelopers()
    const dev = devs.find(dev=> dev.uid === params.uid)
    const bio = {...dev, heading:generateRandomTitle()}
     return{
        props:bio
     }
}


SingleDeveloperPage.getLayout = function getLayout(page){
    return(
        <DeveloperBioLayout>
            {page}
        </DeveloperBioLayout>
    )
}