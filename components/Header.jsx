import Image from 'next/image';

const Header = ({ imageUrl, logoUrl, text }) => {
  return (
    <div className="relative h-64 w-full">
      <Image src={imageUrl} alt="Header Background" layout="fill" objectFit="cover" className="opacity-90" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Updated Image tag for the logo */}
        <div className="rounded-full overflow-hidden  w-28 h-28 relative"> {/* Width and height are set to 5rem = 80px */}
          <Image src={logoUrl} alt="Logo" layout="fill" objectFit="cover" priority />
        </div>
        <h1 className="text-2xl font-bold text-white mt-4">{text}</h1>
      </div>
    </div>
  );
};

export default Header;
