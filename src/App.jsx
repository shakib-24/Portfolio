import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row'>
        <a href="#" className='font-medium text-gray-900'>
          <span className='text-xl ml-3'>NisshoCode</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about"className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills"className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog"className=' hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>
    <section className='text-gray-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode <br />
          My Protfolio website</h1>
          <p className='mb-8 leading-relaxed'>現在、webインジニアとしてデビューしたてのほやほやです。得意な言語はHTML, CSS, Javascript, 
            TypeScript, ,PHP, SQL, Reactなどweb全般とPythonです。自身が作ったもの公開しておりますので、ぜひ見て行ってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/pc2.png" alt="" />
        </div>
      </div>
    </section>
    <section className='text-gray-700 border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っています。現在はit業界でシステム構築にじょうじしながら副業としてweb
            サイトやwebAppを個人として受注しています。
          </p>
          <p>Hi, I’m Shakib Hasan, a passionate and creative developer who loves turning ideas into real digital products.
             I have experience in HTML, CSS, JavaScript, React, and Python, and I’m always eager to learn new technologies. 
             I enjoy solving problems, designing clean user interfaces, and building apps that make people’s lives easier. 
             My goal is to become a professional software engineer and
             create projects that connect technology with real-world impact.</p>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
               <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 3H11V11H3V3Z" fill="currentColor" />
  <path d="M3 13H11V21H3V13Z" fill="currentColor" />
  <path d="M13 3H21V11H13V3Z" fill="currentColor" />
  <path d="M13 13H21V21H13V13Z" fill="currentColor" />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2> 
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Dolorem, magni aliquam temporibus ab, repellendus, porro reiciendis quasi corporis ipsam iste blanditiis distinctio
                 libero excepturi illum odio? Nesciunt minus error nihil!</p>
                 <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
            </div>
          </div>
          </div>
           <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
    fill="currentColor"
  />
  <path
    d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
    fill="currentColor"
  />
  <path
    d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
    fill="currentColor"
  />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'>AI Finance</h2> 
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Dolorem, magni aliquam temporibus ab, repellendus, porro reiciendis quasi corporis ipsam iste blanditiis distinctio
                 libero excepturi illum odio? Nesciunt minus error nihil!</p>
                 <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
            </div>
          </div>
          </div>
           <div className='md:w-1/3 p-4'>
          <div className='bg-gray-100 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 5H5V9H9V5ZM3 3V11H11V3H3Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 5H15V9H19V5ZM13 3V11H21V3H13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 15H5V19H9V15ZM3 13V21H11V13H3Z"
    fill="currentColor"
  />
  <path d="M13 13H15V21H13V13Z" fill="currentColor" />
  <path d="M16 13H18V21H16V13Z" fill="currentColor" />
  <path d="M19 13H21V21H19V13Z" fill="currentColor" />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'>Web Site Dev</h2> 
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Dolorem, magni aliquam temporibus ab, repellendus, porro reiciendis quasi corporis ipsam iste blanditiis distinctio
                 libero excepturi illum odio? Nesciunt minus error nihil!</p>
                 <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc1.png" alt="" className='rounded'/>
        </div>
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>MY Skills</h1>
          <div>
            <h2>HTML/CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
            <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
            </div>
            <h2>React</h2>
           <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
            </div>
            <h2>python</h2>
           <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"80%"}}>80%</div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default App
