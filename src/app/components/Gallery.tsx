import fetchImages from "@/lib/fetschImages";
import type { ImagesResults } from "@/modals/ImageModal";
import ImageContainer from "./ImageContainer";
import getBase64Urls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined
}

export default async function Gallery({topic} : Props) {
  console.log('this is topic', topic)
    const uri = !topic ?
     "https://api.pexels.com/v1/curated" : `https://api.pexels.com/v1/search?query=${topic}`

    const images: ImagesResults | undefined = await fetchImages();
    console.log(uri)

    if (!images)
        return <h2 className="m-4 text-2xl font-bold">No images found</h2>
    
    const photosWithBlur = await getBase64Urls(images);
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            { photosWithBlur.map(photo => (
                <ImageContainer image={photo} key={photo.id}/>
            ))}
    </section>
  )
}
