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
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'> Travel & Flight-Themed</h2> 
            </div>
            <div>
              <p>  このサイト「Web Design Mastery | SKYWINGS」は、旅行やフライトをテーマにしたウェブサイトです。
ニューヨークやパリ、バリなどの目的地を紹介し、「Popular Destination」「Book Trip」などのセクションがあります </p>
                 <a href="https://assets-rust-two.vercel.app/" className='mt-3 text-green-500 items-center'>もっと見る →</a>
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
    d="M22 6.00086C22 3.54932 19.8148 1.6746 17.3918 2.04737L10.3918 3.1243C8.44044 3.4245 7 5.1035 7 7.07778V15.8407C6.54537 15.6248 6.0368 15.5039 5.5 15.5039C3.567 15.5039 2 17.0709 2 19.0039C2 20.9369 3.567 22.5039 5.5 22.5039C7.43296 22.5039 8.99994 20.937 9 19.004V7.07778C9 6.09064 9.72022 5.25114 10.6959 5.10104L17.6959 4.02412C18.9074 3.83773 20 4.77509 20 6.00086V12.8407C19.5454 12.6248 19.0368 12.5039 18.5 12.5039C16.567 12.5039 15 14.0709 15 16.0039C15 17.9369 16.567 19.5039 18.5 19.5039C20.433 19.5039 21.9999 17.937 22 16.004V6.00086ZM20 16.0039C20 15.1755 19.3284 14.5039 18.5 14.5039C17.6716 14.5039 17 15.1755 17 16.0039C17 16.8323 17.6716 17.5039 18.5 17.5039C19.3284 17.5039 19.9999 16.8323 20 16.0039ZM7 19.0039C7 18.1755 6.32843 17.5039 5.5 17.5039C4.67157 17.5039 4 18.1755 4 19.0039C4 19.8323 4.67157 20.5039 5.5 20.5039C6.32839 20.5039 6.99994 19.8323 7 19.0039Z"
    fill="currentColor"
  />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'>Audio Music</h2> 
            </div>
            <div>
              <p>このサイト「Audio Web」は、音楽やオーディオをテーマにしたシンプルなデモサイトです。
音声コンテンツを再生・紹介するためのクリーンなレイアウトになっています。
おそらく Vercel に公開されたテンプレートまたはサンプルプロジェクトです</p>
                 <a href="https://audio-web-ashen.vercel.app/" className='mt-3 text-green-500 items-center'>もっと見る →</a>
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
    d="M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z"
    fill="currentColor"
  />
  <path
    d="M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z"
    fill="currentColor"
  />
  <path
    d="M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z"
    fill="currentColor"
  />
</svg>
              </div>
              
              <h2  className='text-gray-900 text-lg font-medium ml-2'>Coffee-Shop </h2> 
            </div>
            <div>
              <p>このウェブサイトは HTML、CSS、そして JavaScript を使って作られています。
Next.js や React.js のような最新のフレームワークで開発された可能性があります。
これらの技術によって、サイトは高速で、インタラクティブで、見た目も魅力的になっています。</p>
                 <a href="https://coffe-shop-inky-delta.vercel.app/" className='mt-3 text-green-500 items-center'>もっと見る →</a>
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
