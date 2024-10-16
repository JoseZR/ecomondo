import './LogoGrid.css';

export function LogoGrid({ logos }) {
  return (
    <div className='container-logos'>
      <div className='grid-logos'>
        {logos.map((logo, index) => (
          <div key={index} className='flex justify-center items-center h-full'>
            <img src={logo.src} alt={logo.alt} className='img-size' />
          </div>
        ))}
      </div>
    </div>
  );
}