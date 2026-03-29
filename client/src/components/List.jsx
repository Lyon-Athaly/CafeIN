import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

const List = () => {
  const [listMenu, setMenu] = useState([]);

  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;

  const fetchMenu = async () => {
    const menuResponse = await axiosInstance.get("/menu");
  
    setMenu(menuResponse.data);
  }
  
  useEffect(() => {
    fetchMenu();
  }, []);
  
  

  return (
    <section className="mt-32">
        <div>
          <h2 className="text-center font-extrabold text-5xl">Menu</h2>

          <article className="flex justify-center flex-wrap gap-8 p-6">
            {listMenu.map((menu)=>(
              <div key={menu.id} className="bg-primary/50 p-6 rounded-3xl">
                <img src={`${imageUrl}/${menu.image}`} alt="" className="w-80 h-80 rounded-3xl mb-8"/>
                
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-2xl font-bold font-sans">{menu.name}</h4>
                  <p className="text-md">{menu.description}</p>
                  <span className="text-remove font-bold text-xl">Rp. {menu.price}</span>
                  <button className="bg-primary-dark/80 px-12 py-2 rounded-2xl text-white/70 cursor-pointer">Pesan</button>
                </div>
                
              </div>
            ))}
          </article>
        </div>
    </section>
  );
};

export default List;
