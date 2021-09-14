import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import caption from "./caption"

CMS.registerMediaLibrary(cloudinary)
//Register Editor Components
CMS.registerEditorComponent(caption)
