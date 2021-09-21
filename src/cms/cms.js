import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import caption from "./caption"
import { Figure } from "netlify-cms-editor-component-figure"

CMS.registerMediaLibrary(cloudinary)
//Register Editor Components
CMS.registerEditorComponent(caption)
CMS.registerEditorComponent(Figure)
