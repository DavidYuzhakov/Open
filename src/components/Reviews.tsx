export function Reviews () {
  const persons = [
    {
      image: '1.png',
      id: 1,
      name: 'Anastasia Dan',
      prof: 'UX Board'
    },
    {
      image: '2.png',
      id: 2,
      name: 'Roman Level',
      prof: 'AppName'
    },
    {
      image: '3.png',
      id: 3,
      name: 'Alex Sackett',
      prof: 'Reform Layouts'
    }
  ]

  interface IPerson {
    image: string,
    id: number,
    name: string,
    prof: string
  }

  return (
    <div className="container">
      <div className="md:my-20 my-10">
        <div className="mx-auto text-center max-w-[750px] md:mb-20 mb-10">
          <h2 className="title md:text-4xl text-3xl mb-4">Don't take our word for it</h2>
          <p className="text-xl">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
        </div>
        <div className="md:flex flex-wrap justify-around items-center block">
          {persons.map(({image, id, name, prof}: IPerson) => {
            return <div key={id} className="bg-[#25282C] max-[768px]:mx-auto mr-2 mb-4 rounded w-full max-w-[340px] p-6">
              <img className="mb-4" src={require(`../img/reviews/${image}`)} alt="Avatar" />
              <p className="pb-6 border-[#33363A] border-b-[1px]">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
              <p className="cursor-pointer font-medium text-white pt-5">
                {name} <span className="text-[#33363A]">/ </span> 
                <span className="text-[#5D5DFF]">{prof}</span></p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}