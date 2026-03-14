
import NavbarLayout from './components/navbar/layouts/NavbarLayout'
function App() {

  return (
    <>    
      <div className="min-h-screen bg-[#070b17] text-slate-50">
      <NavbarLayout />

      <main>
        <section id="about" className="min-h-screen">About</section>
        <section id="education" className="min-h-screen">Education</section>
        <section id="skills" className="min-h-screen">Skills</section>
        <section id="projects" className="min-h-screen">Projects</section>
        <section id="contact" className="min-h-screen">Contact</section>
      </main>
    </div>
    </>
  )
}

export default App
