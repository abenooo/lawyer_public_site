import Image from 'next/image';

const Header = ({ imageUrl, logoUrl, text }) => {
  return (
    <div className="relative h-64 w-full">
      <Image src={imageUrl} alt="Header Background" layout="fill" objectFit="cover" className="opacity-90 h-90%t"  />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image src={logoUrl} alt="Logo" width={100} height={100} priority />
        <h1 className="text-2xl font-bold text-white">{text}</h1>
      </div>
    </div>
  );
};

export default Header;
