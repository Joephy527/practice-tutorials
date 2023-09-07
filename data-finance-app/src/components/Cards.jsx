import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <section className="w-full py-40 px-4 bg-white">
        <article className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto -mt-12 bg-transparent" src={Single} alt="#" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl font-bold">$149.99</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="bg-black text-[#ff5349] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
            </div>
            <div className="w-full bg-gray-100 flex flex-col shadow-xl p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto -mt-12 bg-transparent" src={Double} alt="#" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl font-bold">$149.99</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="text-white bg-[#ff5349] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
            </div>
            <div className="w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto -mt-12 bg-transparent" src={Triple} alt="#" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl font-bold">$149.99</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="bg-black text-[#ff5349] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
            </div>
        </article>
    </section>
  )
}

export default Cards