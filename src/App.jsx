const App = () => {
  return <div id="main-container" className="flex flex-wrap justify-center py-8 border border-red-500">
    <div className="flex flex-wrap w-[70%] justify-end border border-green-500">
      <div className="flex flex-wrap justify-start content-end w-2/6">
        <img 
          src="https://images01.nicepage.io/45/ba/45baeab130d58fa0db986f6adc33db42.jpeg" 
          alt="turtle-2"
          width="30%"
          height="100%"
          className="absolute top-1/4"
        />
      </div>
      <div className="flex flex-wrap w-4/6">
        <div id="section-title" className="flex justify-end w-full pr-20">
          <div className="w-full bg-yellow pl-52 pr-3 py-10 font-medium">
            <h1 className="text-darkBlue hyphens-auto">Limpiar la contaminación del océano</h1>
          </div>
        </div>
        <div id="section-paragraph-1" className="w-full pl-52">
          <p className="text-xl">
            Es fundamental que nosotros, como residentes de este planeta, nos unamos para luchar contra la basura del océano. Hay varias agencias, organizaciones sin fines de lucro y corporaciones que se están uniendo a la lucha y podemos apoyarlas.
          </p>
        </div>
        <div id="section-button-1" className="flex justify-end w-full pl-52 pr-20 z-10">
          <button type="button" className="bg-yellow py-4 px-14 font-medium">LEER MÁS</button>
        </div>
        <div id="section-img-1" className="flex justify-end w-full pl-52">
          <img 
            className="-mt-7"
            src="https://images01.nicepage.io/a9/5e/a95e1229baf697d500c050e713b797cf.jpeg" 
            alt="turtle-1" 
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  </div>
}

export default App