
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="min-h-screen bg-[#070b17] text-white">   
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#070b17]">
        <div className="absolute left-[-100px] top-[-60px] h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[100px] h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[30%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div> 
      <Navbar></Navbar>
    </div>
  )
}

export default App
