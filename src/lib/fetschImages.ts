import type {ImagesResults } from "@/modals/ImageModal";
import { ImagesAndPhotoSchema } from "@/modals/ImageModal";

import env from "./env";
import { ok } from "assert";

export default async function fetchImages(): Promise<ImagesResults | undefined> {
    try {
        const res = await fetch("https://api.pexels.com/v1/curated", {
            headers:{
                Authorization: env.PEXELS_API_KEY
            }
        })
       
        const images: ImagesResults = await res.json();
        
`   `
        // //Parse data with zod schema
        const parsedData = ImagesAndPhotoSchema.parse(images);
        // console.log('This is parsed date', parsedData)

        if (parsedData.total_results === 0)
            return undefined

        return parsedData
        
    } catch (error) {
        if(error instanceof Error)
            console.log(error.stack)
        
    }
     
} 