const App = () => {
  return <div id="main-container" className="flex flex-wrap justify-center py-8 border border-red-500">
    <div id="section-1" className="flex flex-wrap w-[70%] justify-end border border-green-500">
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
          <div className="w-full bg-yellow pl-52 pr-3 py-10">
            <h1 className="text-darkBlue hyphens-auto text-6xl font-normal">Limpiar la contaminación del océano</h1>
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
        <div id="section-img-1" className="flex flex-wrap justify-end w-full pl-52">
          <img 
            className="-mt-7"
            src="https://images01.nicepage.io/a9/5e/a95e1229baf697d500c050e713b797cf.jpeg" 
            alt="turtle-1" 
            width="100%"
            height="100%"
          />
          <span className="mt-3 text-gray-600">Fotos de ievenn</span>
        </div>
      </div>
    </div>
    <div id="section-2" className="flex flex-wrap w-[70%] justify-end border border-green-500">
      <div className="flex flex-wrap w-1/4 border border-yellow">
        <p className="w-full pl-4 text-base text-gray-600 italic">
          Los océanos son un cuerpo conectado de agua salada que cubre más de 70 por ciento de la Tierra, y dependemos de estas aguas para la supervivencia humana. Ellos influyen en todo, desde el clima hasta el suministro de alimentos y la salud de comunidades costeras. Sin embargo, somos los mayores infractores cuando se trata de
        </p>
        <div id="section-title" className="flex justify-start w-full">
          <div className="w-3/5 bg-yellow">
          </div>
          <h1 className="w-full pt-24 pb-10 -ml-[48%] text-darkBlue hyphens-auto text-5xl font-normal">
            Ecología: podemos proteger los océanos
          </h1>
        </div>
      </div>
      <div className="w-3/4 border border-yellow">
        col 2
      </div>
    </div>
  </div>
}

export default App