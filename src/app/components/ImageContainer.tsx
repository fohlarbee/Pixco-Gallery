import type { Photo } from '@/modals/ImageModal';
import Image from 'next/image';

type Props = {
    image: Photo
}

export default function ImageContainer({image}: Props) {
    return(
        <div key={image.id} className="h-56 bg-gray-200 rounded-xl relative overflow-hidden group">
                <Image
                src={image.src.large}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                className='group-hover:opacity-30'
                placeholder='blur'
                blurDataURL={image.blurredDataUrl}
                style={{
                    objectFit:'cover',
            
                }}

                />

           
        </div>

    )
}