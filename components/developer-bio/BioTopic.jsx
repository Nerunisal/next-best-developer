import {AiOutlineCaretRight} from 'react-icons/ai'

function BioTopic({topic}){
    return(
        <article>
            <h2 className="text-base font-semibold tracking-tight text-indigo-800">
                {topic}
            </h2>
            <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi optio animi ullam aperiam et, ipsum aspernatur saepe dolore mollitia rem, incidunt commodi fugit! Expedita quo deleniti nesciunt rerum adipisci.
            </p>
            <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, quae. Voluptas similique consequatur, tenetur dolorum, voluptatibus debitis et recusandae, est itaque fugiat possimus adipisci hic corrupti at. Vitae, asperiores cum?
            </p>
            <div>
                <a href="#" className="flex items-center text-indigo-800">
                    Read more 
                    <AiOutlineCaretRight />
                 </a>
            </div>
            <footer className="my-4 flex items-center text-sm font-medium text-teal-800">
            </footer>
        </article>
    );

}

export default BioTopic;