

const Sidebar = () => {



    return (
      <aside className="fixed right-0 bottom-0 top-0 p-4 z-60 h-full w-1/4 bg-amber-200">
        <div className="">
          <button className="bg-primary-dark text-white font-bold cursor-pointer">Tutup</button>
          <div>
            <p>Keranjang kosong</p>
          </div>
          <button className="bg-remove text-white font-bold cursor-pointer">Pesan Sekarang</button>
        </div>
      </aside>
    );
}

export default Sidebar