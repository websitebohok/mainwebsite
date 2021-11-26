import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
import figure from "./figure"
import CategoryPagePreview from "./preview-templates/CategoryPagePreview"
import IndexPagePreview from "./preview-templates/IndexPagePreview"
import PagePreview from "./preview-templates/PagePreview"
import PostPagePreview from "./preview-templates/PostPagePreview"
import withStyledComponentsRendered from "./preview-templates/StyleInjection"

// Register Preview Template
CMS.registerPreviewTemplate(
  "index",
  withStyledComponentsRendered(IndexPagePreview)
)
CMS.registerPreviewTemplate("kontak", withStyledComponentsRendered(PagePreview))
CMS.registerPreviewTemplate(
  "terimaKasih",
  withStyledComponentsRendered(PagePreview)
)
CMS.registerPreviewTemplate(
  "tentangKami",
  withStyledComponentsRendered(PagePreview)
)
CMS.registerPreviewTemplate(
  "cookies",
  withStyledComponentsRendered(PagePreview)
)
CMS.registerPreviewTemplate(
  "privasi",
  withStyledComponentsRendered(PagePreview)
)
CMS.registerPreviewTemplate(
  "category-esai",
  withStyledComponentsRendered(CategoryPagePreview)
)
CMS.registerPreviewTemplate(
  "category-foto",
  withStyledComponentsRendered(CategoryPagePreview)
)
CMS.registerPreviewTemplate(
  "category-blog",
  withStyledComponentsRendered(CategoryPagePreview)
)
CMS.registerPreviewTemplate(
  "category-pranala",
  withStyledComponentsRendered(CategoryPagePreview)
)
CMS.registerPreviewTemplate(
  "post-esai",
  withStyledComponentsRendered(PostPagePreview)
)
CMS.registerPreviewTemplate(
  "post-foto",
  withStyledComponentsRendered(PostPagePreview)
)
CMS.registerPreviewTemplate(
  "post-blog",
  withStyledComponentsRendered(PostPagePreview)
)
CMS.registerPreviewTemplate(
  "post-pranala",
  withStyledComponentsRendered(PostPagePreview)
)

// Register Media Library
CMS.registerMediaLibrary(cloudinary)

// Register Editor Components
CMS.registerEditorComponent(figure)
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
