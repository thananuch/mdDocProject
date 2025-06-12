import React from 'react'
import logo from '../../assets/imges/logo.png'
import InputTextAll from '../../components/input/InputTextAll'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();


    const handleOnChangePage = () => {
      navigate("/homePage");
    };
  
  return (
    <div  className="relative min-h-[100vh] bg-cover bg-center">
      <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
      <div className='grid grid-cols-12'> 
        <div className='col-span-5 p-2'>
            <div className='flex justify-end'>
            <img src={logo}  alt='logo'/>    
            </div>
        </div>
  
        <div className='col-span-6 border-s-2 p-2'>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12'>
                <p className='text-sm'>User Name</p>
                <InputTextAll placeholder='User Name'/>
            </div>
             <div className='col-span-12'>
                <p className='text-sm'>Password</p>
                <InputTextAll  placeholder='Password'/>
            </div>
            {/* <div className='col-span-12 text-sm'>
                <input type='checkbox' className='mx-2'/>
                    Remember me
                </div> */}
            <div className='col-span-12'>
                <button
                  className="bg-[#03a9f3] cursor-pointer hover:bg-[#03a9f3] transition duration-300 ease-in-out w-full py-2 px-2 rounded-md text-[#FFFFFF] text-sm"
                  onClick={() => {
                  handleOnChangePage()
                  }}
                >
                  Login
                </button>
              </div>
             {/* <div className='col-span-12'>
                <p className='text-sm text-end text-[#03a9f3]'>Forgot Password ?</p>
            </div> */}
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LoginPage
