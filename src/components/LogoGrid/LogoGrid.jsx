import './LogoGrid.css';

export function LogoGrid({ logos }) {
  return (
    <div className='container-logos'>
      <div className='grid-logos'>
        {logos.map((logo, index) => (
          <div key={index} className=''>
            <img src={logo.src} alt={logo.alt} className='size-img'/>
          </div>
        ))}
      </div>
    </div>
  );
}