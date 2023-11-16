const features = [
  {
    image: '1.svg',
    id: 1
  },
  {
    image: '2.svg',
    id: 2
  },
  {
    image: '3.svg',
    id: 3
  },
  {
    image: '4.svg',
    id: 4
  },
  {
    image: '5.svg',
    id: 5
  },
  {
    image: '6.svg',
    id: 6
  },
]

interface IFeature {
  image: string,
  id: number
}

export function Features () {
  return (
    <div className="pt-[130px]">
      <div className="container border-b-[#33363A] border-b-[1px]">
        <div className="mb-[50px] w-full max-w-[765px] mx-auto text-center">
          <h2 className="title md:text-4xl text-3xl md:mb-[44px]">The majority our customers do not understand their workflows.</h2>
          <p className="text-xl">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex flex-wrap justify-between max-[730px]:justify-center my-6">
          {features.map(({image, id}: IFeature) => {
            return <div key={id} className="text-center w-full max-w-[325px] mb-5 mr-4">
              <img className='mx-auto mb-4' src={require(`../img/features/${image}`)} alt="" />
              <h4 className="text-[#D9E3EA] font-bold text-2xl mb-2">Instant Features</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}