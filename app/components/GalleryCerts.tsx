import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';

const GalleryCerts = () => {
    return (
        <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {/* <Image src={} alt='' width={} height={} /> */}
        </LightGallery>
    )
}

export default GalleryCerts