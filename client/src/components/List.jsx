
const listMenu = [
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
]

const List = () => {
  return (
    <section className="mt-32">
        <div>
          <h2 className="text-center font-extrabold text-5xl">Menu</h2>

          <article className="flex justify-center flex-wrap gap-8 p-6">
            {listMenu.map((list, idx)=>(
              <div key={idx} className="bg-primary/50 p-6 rounded-3xl">
                <img src={list.image} alt="" className="w-80 h-80 rounded-3xl mb-8"/>
                
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-2xl font-bold font-sans">{list.nama}</h4>
                  <p className="text-md">{list.desc}</p>
                  <span className="text-remove font-bold text-xl">Rp. {list.price}</span>
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
