const imgcaption = {
  // Visible label
  label: "Image Caption",
  // Internal id of the component
  id: "imagecaption",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "content",
      label: "Caption",
      widget: "string",
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<span>(.*)<\/span>*$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      content: match[1],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `<span>${obj.content}</span>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return `<span>${obj.content}</span>`
  },
}

export default imgcaption
