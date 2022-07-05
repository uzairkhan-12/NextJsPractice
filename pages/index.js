import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      {/* <div className="mx-4: bg-gray-150 text-center lg:text-left sm:"> */}
  <div className="text-gray-700 text-center p-12" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
  </div>
  


    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto border-b-2 border-green-600 pb-4">
    
      <img src="https://recipefund.com/_next/image?url=%2Fassets%2Fimages%2FRF_color_v1.webp&w=96&q=75" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    
  <div className="flex md:order-2">
  
    <div className="hidden relative md:block">
       <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input type="text" id="search-navbar" className="block p-2 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div> 
    <button class="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-3">Signup/Login</button>
    <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
     
     
    </div>
  </div>
  
  <div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 ml-8 mt-4" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700  md:p-0 dark:text-blue underline;" aria-current="page">Home</a>
      </li>
      <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700  md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
     
      <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
          
            <div id="dropdownNavbar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
     
      <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700  md:p-0 dark:text-white" aria-current="page">Home</a>      </li>
      <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700  md:p-0 dark:text-white" aria-current="page">Home</a>      </li>
    </ul>
    <button class=" mr-7 bg-transparent text-green-700 font-semibold  py-2 px-4 border border-blue-500 rounded">
  Submit Recipe
</button>
  </div>
  </div>
  {/* </div> */}
</nav>



<p class="text-2xl font-bold text-center mt-5 color: rgb(255 255 255)">Browse our amazing recipies</p>


  
{/* </div> */}
    </div>
  )
}
