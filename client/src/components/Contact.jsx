import { MapPin, PhoneIcon, MailIcon } from "lucide-react"

const Contact = () => {
  return (
    <section className="max-h-screen relative gap-6 m-10 mt-32">
      <div className="container mx-auto my-8 text-center text-4xl">
        <h2 className="text-black/80 m-4 font-bold font-sans">
          Hubungi <span className="text-primary">Kami</span>
        </h2>
        <p className="text-xl text-black/70">Kami siap melayani Anda</p>
      </div>

      <div className="max-w-full flex gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4913169269!2d106.66470156747795!3d-6.229720927829687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1751546157014!5m2!1sid!2sid"
          width="60%"
          height="500"
          style={{ border: 0, borderRadius: 20, borderColor: "black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-150 gap-2 py-4">
          <form action="#" method="POST" className="flex flex-col gap-3 w-full">
            <input
              type="text"
              name="name"
              placeholder="Nama Anda..."
              required
              className="h-12 bg-form border-3 border-primary-dark rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda..."
              required
              className="h-12 bg-form border-3 border-primary-dark rounded-xl"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Pesan Anda..."
              required
              className="bg-form border-3 border-primary-dark rounded"
            ></textarea>
            <button
              type="submit"
              className="h-12 bg-primary-dark text-form rounded-xl font-bold hover:cursor-pointer hover:text-primary hover:bg-primary-dark/90"
            >
              Kirim Pesan
            </button>
          </form>

          <div className="flex flex-col gap-3 mt-6">
            <h3 className="text-black text-2xl font-bold">Informasi Kontak</h3>
            <p className="flex gap-2">
              <MapPin />
              Jl. Kopi No. 1, Jakarta
            </p>
            <p className="flex gap-2">
              <PhoneIcon />
              +62 812-3456-7890
            </p>
            <p className="flex gap-2">
              <MailIcon />
              cafein@email.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
