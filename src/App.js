

function App() {
  return (
   <>
   <div class = "container m-auto ">
        <nav class="flex justify-center space-x-4 py-1">
        <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
        <a href="/team" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
        <a href="/projects" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
        <a href="/reports" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
        </nav>
   </div>

   {/* banner start */}

   <div class = "container m-auto w-full bg-[url('./images/red-ankhaled.jpg')] bg-no-repeat bg-cover h-96 mt-6 relative">

    <div class = "w-full flex justify-around m-auto absolute  left-0 top-72">
      <div class = "w-96 h-52 bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div class = "w-96 h-52 bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div class = "w-96 h-52 bg-gradient-to-r from-blue-500 to-transparent"></div>
      
    </div>


   </div>

   <div class=" container m-auto w-full h-96 mt-20 flex relative ">

    <div class = " absolute top-36 left-32 ">
        <h3 class = "text-2xl w-1/2">We bring the decades’ worth of experience we have to bear on every case.</h3>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-8">
        Learn More
        </button>
    </div>
    <div class = " w-1/2 absolute top-0 right-0  h-full flex">
      <div class = " w-full h-1/2 ">
        <div class = " w-full h-full ">
          <div class ="pt-12 pl-12">
            <h1 class = "text-xl">Family law</h1>
            <p class ="mt-5">We think you should be treated like a person and not a potential paycheck</p>
          </div>
        </div>
        <div class = " w-full h-full ">
        <div class ="pt-12 pl-12">
            <h1 class = "text-xl">Business law</h1>
            <p class ="mt-5">We think you deserve better service than what you would get in a legal firm</p>
          </div>
        </div>
      </div>
      <div class = " w-full h-1/2 ">
        <div class = " full h-full ">
        <div class ="pt-12 pl-12">
            <h1 class = "text-xl">Labor law</h1>
            <p class ="mt-5">Take care to develop resources continually and integrity them with previous projects.</p>
          </div>
        </div>
        <div class = " w-full h-full ">
        <div class ="pt-12 pl-12">
            <h1 class = "text-xl">Estate planning</h1>
            <p class ="mt-5">Take care to develop resources continually and integrity them with previous projects.</p>
          </div>
           </div>
      </div>
     
    </div>

  
   </div>

   {/* banner ends */}
   {/* banner lower parts starts*/}

   <div class = "container container m-auto w-full h-96 mt-20 bg-red-500">

    <h1>Hellow World!</h1>
   </div>

   {/* banner lower parts ends*/}
  
   </>
  );
}

export default App;
