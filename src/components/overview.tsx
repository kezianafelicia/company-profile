import cleaner from "../../public/picture/cleaner.jpg";

const Overview = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] rounded-xl mx-auto my-4" src={cleaner} alt="cleaner"/>
        <div className="flex flex-col justify-center">
          <p className="text-[#AB886D] font-bold">About Us</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#493628]">Company Overview</h1>
          <p>With over 100 years of experience, Kinclong has built a reputation for excellence in residential and commercial cleaning. Our skilled team is equipped with the latest tools and techniques to ensure that every space is left pristine. We pride ourselves on our attention to detail, customer satisfaction, and eco-conscious practices.</p>
          <button className="bg-[#493628] w-[200px] rounded-md font-medium my-6 mx-auto text-[#E4E0E1] py-3">Book Now</button>
        </div>

      </div>

    </div>
  )
}

export default Overview;
