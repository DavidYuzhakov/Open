import check from '../img/products/check.svg'

export function Products () {
  return (
    <div className="container md:py-[80px] py-[40px] border-b-[#33363A] border-b-[1px]">
      <div className="md:mb-[80px] mb-[50px] w-full max-w-[690px] mx-auto text-center">
        <div className="text-[#36A269] font-semibold text-sm max-w-[186px] mb-4 mx-auto py-1 px-3 rounded-2xl bg-[#C6F6D5]">Reach goals that matter</div>
        <h2 className="title md:text-4xl text-3xl md:mb-4">One product, unlimited solutions</h2>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
      </div>
      <div className="min-[991px]:flex min-[991px]:items-center min-[991px]:justify-between block md:mb-20 mb-10">
        <div className='min-[991px]:pr-16 max-[990px]:mb-4'>
          <p className="font-['Architects_Daughter'] text-[#5D5DFF] text-xl">More speed. Less spend</p>
          <h3 className='text-[#D9E3EA] font-bold md:text-4xl text-3xl my-2'>Keep projects on schedule</h3>
          <p className='text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Duis aute irure dolor in reprehenderit</p>
            </li>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Excepteur sint occaecat</p>
            </li>
            <li className='flex items-center'>
              <img className='mr-2' src={check} alt="check" />
              <p>Amet consectetur adipiscing elit</p>
            </li>
          </ul>
        </div>
        <img src={require(`../img/products/1.jpg`)} alt="Product #1" />
      </div>
      <div className="flex min-[991px]:items-center min-[991px]:justify-between md:mb-20 mb-10 max-[990px]:flex-col">
        <div>
          <img src={require(`../img/products/2.jpg`)} alt="Product #2" />
        </div>
        <div className='min-[991px]:max-w-[500px] min-[991px]:ml-4 max-[990px]:mb-4 max-[990px]:order-first'>
          <p className="font-['Architects_Daughter'] text-[#5D5DFF] text-xl">More speed. Less spend</p>
          <h3 className='text-[#D9E3EA] font-bold md:text-4xl text-3xl my-2'>Keep projects on schedule</h3>
          <p className='text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Duis aute irure dolor in reprehenderit</p>
            </li>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Excepteur sint occaecat</p>
            </li>
            <li className='flex items-center'>
              <img className='mr-2' src={check} alt="check" />
              <p>Amet consectetur adipiscing elit</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-[991px]:flex min-[991px]:items-center min-[991px]:justify-between block md:mb-20 mb-10">
        <div className='min-[991px]:pr-16 max-[990px]:mb-4'>
          <p className="font-['Architects_Daughter'] text-[#5D5DFF] text-xl">More speed. Less spend</p>
          <h3 className='text-[#D9E3EA] font-bold md:text-4xl text-3xl my-2'>Keep projects on schedule</h3>
          <p className='text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Duis aute irure dolor in reprehenderit</p>
            </li>
            <li className='flex items-center mb-2'>
              <img className='mr-2' src={check} alt="check" />
              <p>Excepteur sint occaecat</p>
            </li>
            <li className='flex items-center'>
              <img className='mr-2' src={check} alt="check" />
              <p>Amet consectetur adipiscing elit</p>
            </li>
          </ul>
        </div>
        <img src={require(`../img/products/3.jpg`)} alt="Product #3" />
      </div>
    </div>
  )
}