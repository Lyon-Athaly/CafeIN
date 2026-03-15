import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Sidebar from "@/components/Sidebar"; 
import List from "@/components/List"; 



function Menu() {
  return (
    <div>
      {/* <Sidebar />
      <Navbar /> */}
      <main>
        <Hero />
        <List />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Menu;
