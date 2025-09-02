interface GoogleMapEmbedProps {
  address: string;
    width?: string;
    height?: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ address, width, height }) => {

  return (
<iframe 
title={`Localisation de ${address}`}
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.349107171033!2d3.269596004445094!3d44.957990451052545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f627f72ce45775%3A0x8c0374fa3bdbe25c!2s3%20Rue%20de%20la%20Ribeyre%2C%2015320%20Lorci%C3%A8res!5e1!3m2!1sfr!2sfr!4v1756843321820!5m2!1sfr!2sfr" 
width={width || "600"} 
height={height || "450"}
style={{ border: 0 }} 
allowFullScreen
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade">
</iframe>
  );
};

export default GoogleMapEmbed;