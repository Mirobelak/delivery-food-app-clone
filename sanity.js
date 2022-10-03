import sanityClient from "@sanity/client"
import sanityImage from "@sanity/image-url"

const client = sanityClient({
    projectId: "xgksys71",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = sanityImage(client)

export const urlFor = (source) => {
    return builder.image(source)
}

export default client
