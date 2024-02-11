import fetchImages from "@/lib/fetschImages";
import type { ImagesResults } from "@/modals/ImageModal";
import ImageContainer from "./ImageContainer";
import getBase64Urls from "@/lib/getBase64";
import getPrevNextPage from "@/lib/getPrevNextPage";
import Footer from "./Footer";

type Props = {
  topic?: string | undefined
  page?: string | undefined
}

export default async function Gallery({topic = "curated", page} : Props) {

    let url;
    if(topic === "curated" && page){ // browsing beyond home
        url = `https://api.pexels.com/v1/curated?page=${page}`;
    }
    else if(topic === "curated") { //home
        url = `https://api.pexels.com/v1/curated`;
    }
    else if(!page){ //first page of search result
      url = `https://api.pexe ls.com/v1/search?query=${topic}`

    }
    else{
      url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
    }

    const images: ImagesResults | undefined = await fetchImages();

    if (!images || images.per_page === 0)
        return <h2 className="m-4 text-2xl font-bold">No images found</h2>
    
    const photosWithBlur = await getBase64Urls(images);

    //calculate paginator
    const {prevPage, nextPage} = getPrevNextPage(images);

    const footerProps = {topic, page, nextPage, prevPage};
  return (
    <>
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
            { photosWithBlur.map(photo => (
                <ImageContainer image={photo} key={photo.id}/>
            ))}
    </section>
    <Footer  {...footerProps}/>

    
    </>
  )
}
