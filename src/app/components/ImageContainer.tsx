import type { Photo } from '@/modals/ImageModal';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    image: Photo
}

export default function ImageContainer({image}: Props) {

    const widthHeightRatio = image.height / image.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio); 
    const imageSpan = Math.ceil(galleryHeight / 10) + 1;
    return(
        <div key={image.id} className="w-[250px] justify-self-center"
            style={{
                gridRow: `span ${imageSpan}`
            }}
        >
            <Link href={image.url} target='blank' className='grid place-content-center'>
                <div className="rounded-xl overflow-hidden group">
                        <Image
                        src={image.src.large}
                        alt={image.alt}
                        width={250}
                        height={image.height}
                        sizes="250px"
                        quality={100}
                        className='group-hover:opacity-30'
                        placeholder='blur'
                        blurDataURL={image.blurredDataUrl}
                        

                        />
                </div>
            </Link>


           
        </div>

    )
}