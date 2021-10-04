import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
// import caption from "./caption"
import figure from "./figure"
// import { Figure } from "netlify-cms-editor-component-figure"

CMS.registerMediaLibrary(cloudinary)
//Register Editor Components
CMS.registerEditorComponent(figure)
// CMS.registerEditorComponent(Figure)
CMS.registerEditorComponent({
  id: "separator",
  label: "---",
  // A bogus field so that the component doesn't look weird when rendered:
  fields: [
    { label: "Separator", widget: "select", options: ["---"], default: "---" },
  ],
  // Never match anything so that the separator will be recognized as a horizontal rule when the document is reloaded:
  pattern: /.^/,
  toBlock(obj) {
    return "---"
  },
  toPreview(obj) {
    return "<hr>"
  },
})
