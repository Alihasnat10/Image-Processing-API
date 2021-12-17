# Image-Processing-API
Building an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Install dependencies
This is straightforward, after cloning/downloading this repository you can execute the following command from the root folder:

```
npm install
```

## Scripts needed to test/start/build

  ```
  "scripts": {
    "build": "npx tsc",
    "lint": "eslint .eslintrc --ext \"src/**/*.js\"",
    "prettier": "prettier --config .prettierrc \"src/**/*.js\" --write",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine"     
  }
  ```
  
  ## Endpoints that should be accessed to test the required functionality
  ```
  //
  http://localhost:3000/api/images?filename=icelandwaterfall&width=200&height=200
  ```
