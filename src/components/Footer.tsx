const Instagram = "https://www.instagram.com/firman.khoiril/";
const Footer = () => {
  return (
    <div className="w-full mt-4 bg-white/10 p-3">
      <h2>
        @Created By{" "}
        <a href={Instagram} className=" bg-gradient-to-r bg-clip-text text-transparent font-semibold from-lime-500 to-green-400" target="_blank">
          Firman Khoiril
        </a>
      </h2>
    </div>
  );
};

export default Footer;
