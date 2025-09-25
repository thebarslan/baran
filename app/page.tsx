import Container from "@/components/Container";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";

export default function Home() {
   return (
      <main className="h-full">
         <Container>
            <div className="w-full py-4 flex">
               <div className="container w-full flex lg:gap-16 gap-8 lg:flex-row flex-col">
                  <div className="left flex flex-col w-full flex-1 gap-6">
                     <Profile />
                     <About />
                     <Technologies />
                  </div>
                  <div className="right flex flex-col w-full flex-1">
                     <Projects />
                  </div>
               </div>
            </div>
         </Container>
      </main>
   );
}
