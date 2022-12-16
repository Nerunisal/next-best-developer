const testData = [
    {
        uid:"123",
        name:"trinity"
    },
    {
        uid:"456",
        name:"John"
    },
    {
        uid:"789",
        name:"gimbo"
    }
]

function DeveloperBio({pageData}){
    return(
        <header>
            <h1> Developer Bio Page {pageData.name}</h1>
        </header>
    );
}

export default DeveloperBio;


export async function getStaticPaths() {
    const paths = testData.map(items => ({params:{uid:items.uid}}))

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const pageData = testData.find(item=> item.uid === params.uid)

    return{
        props:{
            pageData:pageData
        }
    }
}


