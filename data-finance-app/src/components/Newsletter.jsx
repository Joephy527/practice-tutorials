const Newsletter = () => {
  return (
    <section className="w-full text-white py-16 px-4">
        <article className=" max-w-[1240px] grid lg:grid-cols-3 justify-center mx-auto">
            <div className="lg:col-span-2 my-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Want tips and tricks to optimize your flow?</h1>
                <p>sign up to our newsletter and stay up to date</p>
            </div>
            <div className="my-4 flex flex-col justify-center">
                <div className="sm:flex-row flex flex-col w-full items-center justify-between">
                    <input type="email" placeholder="Enter your email" className="p-3 rounded-md w-full text-black" />
                    <button className="bg-[#ff5349] w-[200px] rounded-md font-medium ml-4 my-6 py-3 px-6">Notify me</button>
                </div>
                <p>We care about the protection of your data. Read our <a href="#" className="text-[#ff5349] hover:underline">Privacy policy</a></p>
            </div>
        </article>
    </section>
  )
}

export default Newsletter