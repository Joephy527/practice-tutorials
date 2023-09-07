import Typed from 'react-typed'

const Hero = () => {
  return (
    <section className="text-white">
        <article className="w-full h-screen max-w-[800px] mx-auto mt-[-96px] text-center flex  flex-col justify-center">
            <p className="text-[#ff5349] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="font-bold text-4xl md:text-7xl md:py-6 sm:text-6xl">Grow with data</h1>
            <div className="flex justify-center text-center">
                <p className="font-bold md:text-5xl sm:text-4xl text-xl">fast, flexible financing for</p>
                <Typed className="font-bold md:text-5xl sm:text-4xl text-xl pl-2 md:pl-4" strings={['B2B', 'SASS', 'B2C']} typeSpeed={120} backSpeed={130} loop />
            </div>
            <p className="mt-2 font-bold md:text-2xl text-xl text-gray-600">Moniter your data analyticsto increase revenue for BTB, BTC & SASS platforms.</p>
            <button className="bg-[#ff5349] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
        </article>
    </section>
  )
}

export default Hero