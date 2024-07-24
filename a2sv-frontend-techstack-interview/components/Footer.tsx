import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contents = [
    {
      heading: "Get Connected",
      subContent: ["For Physicians", "For Hospitals"],
    },
    {
      heading: "Actions",
      subContent: ["Find a doctor", "Find a hospital"],
    },
    {
      heading: "Company",
      subContent: ["About Us", "Career", "Join our team"],
    },
  ];

  const socialMedia = [
    { link: "/assets/facebook.svg", width: 20, height: 19.88 },
    { link: "/assets/linkdn.svg", width: 18, height: 18 },
    { link: "/assets/insta.svg", width: 18.01, height: 18.04 },
    { link: "/assets/twitter.svg", width: 20.92, height: 16.99 },
  ];

  return (
    <footer className="bg-button-bg text-white">
      <div className="2xl:max-w-9/10 w-full mx-auto">
        <div className="pr-6 pl-10 sm:pr-20 md:pr-40 sm:pl-18 flex flex-col gap-10 lg:flex-row justify-between py-16">
          <Link href="/">
            <h2 className="font-bold text-3xl">HakimHub</h2>
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-18">
            {contents.map((content) => (
              <div key={content.heading}>
                <h3 className="font-bold mb-3">{content.heading}</h3>

                <div className="flex flex-col gap-3.5">
                  {content.subContent.map((sub) => (
                    <Link href="/" key={sub} className="flex gap-2">
                      <Image
                        src="/assets/cool-icon.svg"
                        width={6.37}
                        height={8}
                        alt="cool icon"
                      />

                      <p className="font-light">{sub}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pr-8 sm:pr-20 md:pr-48 pl-4">
          <hr />
        </div>

        <div className="flex justify-between items-center py-5 px-10 sm:pl-20 sm:pr-20 md:pr-56">
          <div className="flex flex-col md:flex-row font-semibold items-center gap-4 lg:gap-24">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-12.5">
            {socialMedia.map((socials) => (
              <Link href="/" key={socials.link}>
                <Image
                  src={socials.link}
                  width={socials.width}
                  height={socials.height}
                  alt="icon"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
