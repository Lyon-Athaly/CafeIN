import { FacebookIcon, InstagramIcon, TwitterIcon} from "lucide-react";

const sosmed = [
  { href: "https://facebook.com/", label: "Facebook", logo: FacebookIcon },
  { href: "https://instagram.com/", label: "Instagram", logo: InstagramIcon },
  { href: "", label: "Twitter", logo: TwitterIcon },
];

const About = () => {
  return (
    <section className="relative flex gap-6 m-10">
      {/* About Photo */}
      <div className="max-w-150 max-h-150">
        <img src="/images/img-about.webp" className="rounded-3xl" />
      </div>

      {/* About Text */}
      <div className="flex flex-col justify-center gap-4">
        <h2 className="my-3 text-4xl font-extrabold">
          Tentang <span className="text-primary">Kami</span>
        </h2>
        <p className="font-sans">
          CafeIN adalah tempat terbaik untuk menikmati kopi berkualitas dengan
          suasana yang nyaman dan hangat. Kami menyajikan berbagai jenis kopi
          pilihan dan makanan ringan yang menggugah selera.
        </p>

        <p className="font-sans">
          Datang dan rasakan pengalaman berbeda di CafeIN. Kami siap menyambut
          Anda dengan pelayanan terbaik.
        </p>

        {/* SOSMED */}
        <div className="flex mt-3">
          {sosmed.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="px-4 py-2 font-light text-bold rounded-full hover:text-primary"
            >
              <link.logo/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
