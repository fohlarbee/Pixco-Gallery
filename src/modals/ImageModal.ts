import {z} from 'zod'


const ImageSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    next_page: z.string().optional(),
    prev_page: z.string().optional(),
    total_results: z.number()
})

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string(),
    }),
    alt:z.string(),
    blurredDataUrl: z.string().optional(),
});


export const ImagesAndPhotoSchema = ImageSchema.extend({
    photos: z.array(PhotoSchema)
})


export type Photo = z.infer<typeof PhotoSchema>

export type ImagesResults = z.infer<typeof ImagesAndPhotoSchema>
