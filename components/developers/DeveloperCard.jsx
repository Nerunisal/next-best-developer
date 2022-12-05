function DeveloperCard({fullName,avatar,jobTitle,experience,availability}){
    const variants = {
        available:"bg-teal-200 rounded-md px-3 py-1 text-sm text-teal-900",
        unavailable:"bg-rose-200 rounded-md px-3 py-1 text-sm text-rose-900"

    }
        return(
            <aside className="w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)] py-10 border border-indigo-500/50 rounded-md shadow-md ">
                <header className="flex flex-col items-center mb-4">
                    <img src={avatar}
                width={130}
                height={130}
                className="rounded-full"
                />
                <h2 className="text-3xl font-semibold text-indigo-900">{fullName}</h2>
                </header>

                <dl className="flex flex-col items-center text-blue-700 text-sm ">
                    <dt className="sr-only">Job Title</dt>
                    <dd className="text-lg text-blue-500 font-semibold">{jobTitle}</dd>

                    <dt className="sr-only">Experience</dt>
                    <dd className="mb-4">{experience} years </dd>

                    <dt className="sr-only">Availability</dt>
                    <dd className={` ${availability? variants.available : variants.unavailable}`}>
                    {availability? "not available": "available"}</dd>
                </dl>

            </aside>
        );
}

export default DeveloperCard;