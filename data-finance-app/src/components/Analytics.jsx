import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
        <article className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img src={Laptop} alt="image of a laptop" className="w-[500px] mx-auto my-4" />
            <div className="flex flex-col justify-center">
                <p className="text-[#ff5349] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Manange Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius suscipit quisquam temporibus deserunt soluta! Reprehenderit nostrum praesentium nam, eligendi eius iure, vitae adipisci possimus minima nulla unde illum accusantium? Et?</p>
                <button className="bg-black text-[#ff5349] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
            </div>
        </article>
    </section>
  )
}

export default Analytics