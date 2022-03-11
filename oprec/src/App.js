import Form from "./components/Form";
import Header from "./components/Header";
import Kontak from "./components/Kontak";
import KontakKami from "./components/KontakKami";
import Medsos from "./components/Medsos";

function App() {
  return (
    <div className = "h-screen px-4 font-sans">
       <div className = "md:grid-cols-12 md:grid">
         <div className = "md:col-span-1 "> </div>
         <div className= "md:col-span-10">
            <Header/>
            <h1 className = "text-5xl font-extrabold text-gray-700 pb-8"> Kontak Kami </h1>
            <div className = "md:hidden">
              <Kontak/>
            </div>
            
            <div className = "md:grid md:grid-cols-10 gap-12">
              <div className="md:col-span-3">
                <KontakKami />
                <div className = "mb-16 md:hidden">
                    <Medsos/>  
                </div>

              </div>
              <div className="md:col-span-4">
                <div className = "hidden md:block">
                    <Kontak/>
                </div>
                <Form/>
              </div>
              <div className = "hidden md:block md:col-span-3">
                <Medsos/>  
              </div>
            </div>
        </div>
        <div className="md:col-span-1"> </div>
        </div>
    </div>
  );
}

export default App;
