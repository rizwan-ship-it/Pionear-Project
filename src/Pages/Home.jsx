import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ImageSlider from '../../Image-controller/ImageSlider'
import HomeSlider from '../Slider/HomeSlider'
// ======================= IMAGE ==================================
import image1 from '../assets/homeImage/image1.png'
import image2 from '../assets/homeImage/image2.png'
import image3 from '../assets/homeImage/image3.png'
import image4 from '../assets/homeImage/image4.png'
// =========================== ICONS ===============================================
import icon1 from '../assets/homeImage/icons/image1.png'
import icon2 from '../assets/homeImage/icons/image2.png'
import icon3 from '../assets/homeImage/icons/image3.png'

function Home () {
  function handleFormSubmit (e) {
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <ImageSlider />
      </div>
      <main>
        <section className='grid grid-cols-[1fr_2fr] w-10/12 mx-auto py-10 px-4 '>
          <div className='font-bold text-gray-700 pr-5'>
            <p>ABOUT PIONEERS</p>
          </div>
          <div className='text-justify flex flex-col gap-5 px-8'>
            <p className='font-medium text-gray-500'>
              PPE Pioneer Projects Executer Co. was established on 2013 as a
              general contracting company, specialized in design & build,
              construction, and fit-outs. PPE has enjoyed a remarkable steady
              growth for the past years due mainly to the support of its
              clients, the company's technical expertise and capabilities, the
              distinguished quality products and client service, the vision of
              the management, and the drive of the human resources team.
            </p>
            <p className='font-medium text-gray-500'>
              We can assist in every step of the project, from planning tailored
              solutions to manufacturing unique finishing and furnishings to
              meet the international quality standards.
            </p>
            <p className='font-medium text-gray-500'>
              PPE is a local establishment with international standards. We are
              committed to provide creative solutions with superior services
              that is financially viable in prompt timing.
            </p>
            <p className='font-medium text-gray-500'>
              Our mission, to be the leader in providing efficient and effective
              packaged solutions in the region with best-in-class services and
              operation.
            </p>
            {/* ==================================================================================================== */}
            <div className='flex flex-col text-gray-500 font-medium'>
              <span>Our values:</span>
              <span>-Commitment</span>
              <span>-Integrity</span>
              <span>-Quality</span>
              <span>-Client Satisfaction</span>
            </div>

            {/* ===================================================================== */}
            <p className='text-blue-950 font-medium mt-3'>
              The company was established with a vision of its own “If you
              believe in it, work for it“.
            </p>
            <div className='flex flex-col'>
              <span className='text-blue-950 font-medium mt-3'>
                Mohammed A. AlZamil
              </span>
              <span className='font-medium text-gray-500'>
                Pioneer Projects Executer Founder/CEO
              </span>
            </div>
          </div>
        </section>
        <div>
          <div className='px-5  '>
            <HomeSlider />
          </div>
        </div>
      </main>
      <div className=' flex gap-5 h-120 '>
        <div className='object-fill relative '>
          <img
            src={image1}
            alt='ZOOBA image h-50'
            className='h-full w-80  object-center rounded '
          />
          <div className='flex flex-col gap-5 absolute bottom-5 '>
            <h1 className='text-white text-4xl font-bold text-center '>
              ZOOBA
            </h1>
            <p className='text-white font-light flex  text-center'>
              2023 Best 10 Restaurants in Riyadh By Timeout
            </p>
            <Link
              to='mo'
              className='text-white font-light text-center hover:text-green-900 '
            >
              Wiev The Projects ➜
            </Link>
          </div>
        </div>
        <div className='object-fill relative '>
          <img
            src={image2}
            alt='ZOOBA image h-50'
            className='h-full w-80  object-center rounded '
          />
          <div className='flex flex-col gap-5 absolute bottom-5 '>
            <h1 className='text-white text-4xl font-bold text-center '>
              COSMO
            </h1>
            <p className='text-white font-light flex  text-center'>
              2023 Highly Commended Design By Saudi Commercial Interior Design
            </p>
            <Link
              to='mo'
              className='text-white font-light text-center hover:text-green-900'
            >
              Wiev The Projects ➜
            </Link>
          </div>
        </div>
        <div className='object-fill relative '>
          <img
            src={image3}
            alt='ZOOBA image h-50'
            className='h-full w-80  object-center rounded '
          />
          <div className='flex flex-col gap-5 absolute bottom-5 '>
            <h1 className='text-white text-4xl font-bold text-center '>MO</h1>
            <p className='text-white font-light flex  text-center'>
              2022 Interior Design Award Winner By Restaurant & Bar Design Award
            </p>
            <Link
              to='mo'
              className='text-white font-light text-center hover:text-green-900'
            >
              Wiev The Projects ➜
            </Link>
          </div>
        </div>
        <div className='object-fill relative '>
          <img
            src={image4}
            alt='ZOOBA image h-50'
            className='h-full w-80  object-center rounded '
          />
          <div className='flex flex-col gap-5 absolute bottom-5 '>
            <h1 className='text-white text-4xl font-bold text-center '>RCU</h1>
            <h5 className='text-white font-medium text-center -mt-5'>
              Royal Commission for AlUla
            </h5>
            <p className='text-white font-light flex  text-center'>
              2025 Interior Design Award Winner By Saudi Commercial Interior
              Design
            </p>
            <Link
              to='mo'
              className='text-white font-light text-center hover:text-green-900'
            >
              Wiev The Projects ➜
            </Link>
          </div>
        </div>
      </div>
      {/* ========================================== SERVICES ======================================================================= */}
      <section>
        <div>
          <div className='mt-10 px-15'>
            <h1 className='font-bold text-2xl text-blue-950'>OUR SERVICES</h1>
          </div>
          <div>
            <div className='flex gap-10 px-15 py-10'>
              <div className='flex flex-col gap-5 py-10'>
                <img src={icon1} alt='Design icons' className='h-30 w-30' />
                <p className='font-bold text-2xl text-blue-950'>DESIGN</p>
                <p className='text-gray-700 font-medium'>
                  We pride ourselves on our creative design team that engage
                  with our customers to understand their wants and needs and
                  find the perfect solutions that provide value results and
                  happy customers
                </p>
              </div>
              <div className='flex flex-col gap-5 p-10'>
                <img src={icon2} alt='Design icons' className='h-30 w-30' />
                <p className='font-bold text-2xl text-blue-950'>CONSTRUCTION</p>
                <p className='text-gray-700 font-medium'>
                  Pioneer Projects provides construction services to exceed
                  expectations on every project. By our high quality materials
                  and experienced team we create a satisfaction customers within
                  the perfect budget.
                </p>
              </div>
              <div className='flex flex-col gap-5 p-10'>
                <img src={icon3} alt='Design icons' className='h-30 w-30' />
                <p className='font-bold text-2xl text-blue-950'>FIT OUT </p>
                <p className='text-gray-700 font-medium'>
                  Finishing work is our duty, this step is very important
                  because it reflects your project character. Our highly trained
                  staff will help you to choose the best products and materials
                  according to their experience and your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================================  ABOUT US   ============================================================================================== */}

      <section>
        <div className='flex gap-2 h-70 bg-gray-50 justify-between '>
          <div className='bg-gray-200 h-full flex-col gap-8 w-full flex items-center justify-center '>
            <h1 className='text-blue-950 font-bold text-2xl'>1234</h1>
            <p className='text-gray-600 font-medium text-2xl'>
              {' '}
              Years of Experience{' '}
            </p>
          </div>
          <div className='bg-gray-200 h-full flex-col gap-8 w-full flex items-center justify-center '>
            <h1 className='text-blue-950 font-bold text-2xl'>123456</h1>
            <p className='text-gray-600 font-medium text-2xl'>
              Projects Completed
            </p>
          </div>
          <div className='bg-gray-200 h-full w-full flex-col gap-8 flex items-center justify-center '>
            <h1 className='text-blue-950 font-bold text-2xl'>123456789</h1>
            <p className='text-gray-600 font-medium text-2xl'>
              Hours of Working
            </p>
          </div>
        </div>
      </section>
      {/* ==========================================  CONTACT US   ============================================================================================== */}

      <section>
        <div>
          <h1 className='font-bold text-2xl text-blue-950 mt-10'>Contact Us</h1>
        </div>
        <div className=' h-70 bg-gray-50 border-black border mt-8 '>
          <p className=' h-full flex items-center justify-center text-5xl font-bold text-gray-500'>
            Import Google Map
          </p>
        </div>
      </section>
      {/* ==========================================  CONTACT US   ============================================================================================== */}
      {/* ==========================================  CONTACT US   ============================================================================================== */}

      <section>
        <div>
          <h1 className='font-bold text-2xl text-blue-950 mt-10 '>
            Contact US
          </h1>
          <div className='grid grid-cols-[2fr_1fr] p-5'>
            <div>
              <p className=' h-full flex font-medium py-5 text-gray-500'>
                For any inquiries, questions or commendations, please contact
                us.
              </p>
            </div>
            <div className='flex flex-col gap-5 mt-5'>
              <div>
                <span className='text-blue-950 font-medium'>Khobar</span>
                <p className='text-gray-700 font-medium'>
                  {' '}
                  Ibn Sina, Khobar, Saudi Arabia
                </p>
              </div>
              <div>
                <span className='text-blue-950 font-medium'>Riyadh</span>
                <p className='text-gray-700 font-medium'>
                  {' '}
                  AlQirawan, Riyadh, Saudi Arabia{' '}
                </p>
              </div>
              <div>
                <span className='text-blue-950 font-medium'>AlUla</span>
                <p className='text-gray-700 font-medium'>
                  {' '}
                  AlSukhairat, AlUla, Saudi Arabia ​
                </p>
              </div>
              <div className='text-blue-950 font-medium'>
                <p>info@ppecon.com </p>
                <p>+966 54 423 8500 </p>
                <p>+966 013 889 1443 Ext. 115</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form
        action=''
        className=' h-full w-full mt-10 mb-20'
        onSubmit={handleFormSubmit}
      >
        <div className='flex justify-center items-center'>
          <div className=' flex flex-col w-200 gap-5'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              className='border rounded border-blue-300 p-1.5 px-5 outline-blue-400 text-gray-700 font-medium'
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              className='border rounded border-blue-300 p-1.5 px-5 outline-blue-400 text-gray-700 font-medium'
            />
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Enter your subject '
              className='border rounded border-blue-300 p-1.5 px-5 outline-blue-400 text-gray-700 font-medium'
            />
            <textarea
              name='description'
              id='descriptioon'
              placeholder='Write your comments '
              rows='6'
              className='border rounded border-blue-300 p-1.5 px-5 outline-blue-400 text-gray-700 font-medium'
            ></textarea>
            <select
              name=''
              id=''
              className='border w-200 rounded border-blue-300 p-1.5 px-5 outline-blue-400 text-gray-700 font-medium'
            >
              <option>Chooes option</option>
              <option value='Quotation Request'>Quotation Request</option>
              <option value='Enquiry'>Enquiry</option>
            </select>
            <div className='flex w-full justify-center'>
              <button
                type='submit'
                className='bg-blue-500 px-8 py-3 text-white font-medium text-xl rounded cursor-pointer active:scale-97 hover:bg-blue-600 '
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* ==========================================  CONTACT US END HERE   ============================================================================================== */}
    </div>
  )
}

export default Home
