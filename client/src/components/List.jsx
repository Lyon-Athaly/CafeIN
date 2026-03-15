
const listMenu = [
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
  {nama: "Roti", image: "images/coffe1.jpg", desc: "Enak", price: "10000"},
]

const List = () => {
  return (
    <section className="mt-32">
        <div>
          <h2 className="mx-auto">Menu</h2>

          <article className="flex justify-center gap-4 p-6">
            {listMenu.map((list, idx)=>(
              <div key={idx} className="bg-primary/50 p-6 rounded-3xl">
                <img src={list.image} alt="" className="w-80 h-80 rounded-3xl mb-8"/>
                <h4>{list.nama}</h4>
                <p>{list.desc}</p>
                <div>
                  <span>{list.price}</span>
                  <button>Pesan</button>
                </div>
              </div>
            ))}
          </article>
        </div>
    </section>
  );
};

export default List;
