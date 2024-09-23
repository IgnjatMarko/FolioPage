import React from 'react'

export const AspectApp = () => {
  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      <nav className="sticky top-0 z-50 bg-[#ffffff]">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
   
          <div className="flex items-center space-x-4">
           
    <div className="flex items-center">
      <div className="w-[120px] h-[40px] bg-gray-300 cursor-pointer"></div>
    </div>
 
            <div className="flex items-center space-x-4">
              <a href="/" className="font-[500] text-[16px] text-[#000000] hover:underline rounded-full px-3 py-2">Home</a><a href="/about" className="font-[500] text-[16px] text-[#000000] hover:underline rounded-full px-3 py-2">About</a><a href="/services" className="font-[500] text-[16px] text-[#000000] hover:underline rounded-full px-3 py-2">Services</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
      className="font-medium text-sm leading-none transition-colors duration-200 cursor-default rounded-full hover:brightness-110 active:brightness-90 px-6 py-4 font-[500] text-[1em] bg-[#ff7500] text-[#FFFFFF]"
    >
      Contact Us
    </button>
          </div>
       
    <div className="md:hidden">
      <button className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>
      <main className="flex-grow">
        <section className="relative min-h-[480px] bg-[#ffffff] bg-cover bg-center-center bg-no-repeat flex">
  <div className="container mx-auto px-6 sm:px-10 py-6 sm:py-8 min-h-full">
    <div className="flex flex-col items-center justify-center gap-10 min-h-full">
      <div className="w-[600px] max-w-full text-center text-[#000000] font-[Inter]">
       
     
      <span className="inline-flex items-center px-[14px] py-2 text-sm mb-3 bg-opacity-10 rounded-full bg-[#ff7500] bg-opacity-10 text-[#ff7500] ">
        Default label
      </span>
   
      <h1 className="mb-3 leading-[118%] font-[700] font-[Inter] text-[3.75em] tracking-[-0.025em]">
        Default Title
      </h1>
      <p className="mb-4 leading-[118%] tracking-[-0.025em] font-[400]  text-[1.75em] text-[#666666]">
        Default subtitle
      </p>
     
      <div className="justify-center flex gap-2">
        <button
      className="font-medium text-sm leading-none transition-colors duration-200 cursor-default rounded-full hover:brightness-110 active:brightness-90 px-6 py-4 font-[500] text-[1em] bg-[#ff7500] text-[#FFFFFF]"
    >
      Get started
    </button>
      </div>
   
   
      </div>
     
          <div className="w-full h-[200px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
              Add Image
            </div>
          </div>
       
    </div>
  </div>
</section>
<section className="relative min-h-[480px] bg-[#ffffff] bg-cover bg-center-center bg-no-repeat flex">
  <div className="container mx-auto px-6 sm:px-10 py-6 sm:py-8 min-h-full">
    <div className="flex flex-row-reverse items-center justify-between gap-10 min-h-full">
      <div className="w-[480px] max-w-full text-left text-[#000000] font-[Inter]">
       
     
      <h1 className="mb-3 leading-[118%] font-[700] font-[Inter] text-[3.75em] tracking-[-0.025em]">
        Section Title
      </h1>
      <p className="mb-4 leading-[118%] tracking-[-0.025em] font-[400]  text-[1.75em] text-[#666666]">
        Section Subtitle
      </p>
     
      <div className="justify-start flex gap-2">
        <button
      className="font-medium text-sm leading-none transition-colors duration-200 cursor-default rounded-full hover:brightness-110 active:brightness-90 px-6 py-4 font-[500] text-[1em] bg-[#ff7500] text-[#FFFFFF]"
    >
      Get Started
    </button>
      </div>
   
   
      </div>
     
          <div className="w-auto flex-grow h-[200px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
              Add Image
            </div>
          </div>
       
    </div>
  </div>
</section>
<section className="relative min-h-[480px] bg-[#ffffff] bg-cover bg-center-center bg-no-repeat flex">
  <div className="container mx-auto px-6 sm:px-10 py-6 sm:py-8 min-h-full">
    <div className="flex flex-row items-center justify-between gap-10 min-h-full">
      <div className="w-[480px] max-w-full text-left text-[#000000] font-[Inter]">
       
     
      <h1 className="mb-3 leading-[118%] font-[700] font-[Inter] text-[3.75em] tracking-[-0.025em]">
        Section Title
      </h1>
      <p className="mb-4 leading-[118%] tracking-[-0.025em] font-[400]  text-[1.75em] text-[#666666]">
        Section Subtitle
      </p>
     
      <div className="justify-start flex gap-2">
        <button
      className="font-medium text-sm leading-none transition-colors duration-200 cursor-default rounded-full hover:brightness-110 active:brightness-90 px-6 py-4 font-[500] text-[1em] bg-[#ff7500] text-[#FFFFFF]"
    >
      Get Started
    </button>
      </div>
   
   
      </div>
     
          <div className="w-auto flex-grow h-[200px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
              Add Image
            </div>
          </div>
       
    </div>
  </div>
</section>
<section className="relative min-h-[480px] bg-[#ffffff] bg-cover bg-center-center bg-no-repeat flex">
  <div className="container mx-auto px-6 sm:px-10 py-6 sm:py-8 min-h-full">
    <div className="flex flex-row-reverse items-center justify-between gap-10 min-h-full">
      <div className="w-[480px] max-w-full text-left text-[#000000] font-[Inter]">
       
     
      <h1 className="mb-3 leading-[118%] font-[700] font-[Inter] text-[3.75em] tracking-[-0.025em]">
        Section Title
      </h1>
      <p className="mb-4 leading-[118%] tracking-[-0.025em] font-[400]  text-[1.75em] text-[#666666]">
        Section Subtitle
      </p>
     
      <div className="justify-start flex gap-2">
        <button
      className="font-medium text-sm leading-none transition-colors duration-200 cursor-default rounded-full hover:brightness-110 active:brightness-90 px-6 py-4 font-[500] text-[1em] bg-[#ff7500] text-[#FFFFFF]"
    >
      Get Started
    </button>
      </div>
   
   
      </div>
     
          <div className="w-auto flex-grow h-[200px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
              Add Image
            </div>
          </div>
       
    </div>
  </div>
</section>
      </main>
      <footer className="bg-[#ffffff] text-[#000000] font-[Inter] font-[500]">
      <div className="container mx-auto px-4 py-8 md:py-16">
       
       
        <div className="flex flex-wrap gap-8 justify-between flex-row">
         
         
          <div className="flex flex-wrap gap-8">
           
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                 
                    <li><a href="/about" className="hover:underline">About</a></li>
                 
                </ul>
              </div>
           
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                 
                    <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
                 
                    <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                 
                </ul>
              </div>
           
              <div>
                <h3 className="font-semibold mb-4">More</h3>
                <ul className="space-y-2">
                 
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                 
                    <li><a href="/careers" className="hover:underline">Careers</a></li>
                 
                    <li><a href="/blog" className="hover:underline">Blog</a></li>
                 
                </ul>
              </div>
           
          </div>
        </div>
       
        <div className="mt-8 text-left">
          <p>© 2024 Company Name</p>
        </div>
       
       
      </div>
    </footer>
    </div>
  )
}
