import { getPlaiceholder } from "plaiceholder";
import { Photo, ImagesResults } from "@/modals/ImageModal";

async function getBase64(imageUrl: string){


    try{
        const res = await fetch(imageUrl);

        if(!res.ok){
            throw new Error(`Unable to fetch Image: ${res.status} ${res.statusText}`);
        }

        const buffer = await res.arrayBuffer();

        const { base64 } = await getPlaiceholder(Buffer.from(buffer)); 
        return base64
    }catch (e) {
        if(e instanceof Error) console.log(e.stack);
    }
}

export default async function getBase64Urls(images: ImagesResults):Promise<Photo[]>{
        //avoid waterfall
    const base64Promises = images.photos.map((photo) => getBase64(photo.src.large));
    

    // Reslove all promises in order
    const base64Results = await Promise.all(base64Promises);
   
    const photosWithBlur: Photo[] = images.photos.map((photo, i) => {

        photo.blurredDataUrl = base64Results[i];

        return photo;

    });

    return photosWithBlur
}
