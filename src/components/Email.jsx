import Header from "./Header";

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('/images/fondo.jpg')]">
      <Header/>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h2>
        <form action='https://formspree.io/f/mdknjejv' method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escribe tu mensaje aquí..."
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center">
            <input value="ENVIAR" type="submit" className="cursor-pointer text-cyan-50 px-3 py-2 rounded-lg  bg-green-500 hover:bg-green-600 "/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
