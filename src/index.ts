// @ts-nocheck
const express = require('express')
const sharp = require('sharp');
//const routes = require('./routes/index');
const app = express()

const port = 3000

//url http://localhost:3000/api/images?filename=icelandwaterfall&width=200&height=200

async function resizeImage(file:string,filepath:string, width_:number, height_:number) {
  try {
    await sharp(filepath)
      .resize({
        width: width_,
        height: height_
      })
      //.toFormat("jpeg", { mozjpeg: true })
      .toFile(`${file}_resized.jpeg`);
  } catch (error) {
    resizeImage.send('resizing error: '+error)
  }
}


async function displayer(file, req, res) {
  try {
    await res.sendFile(`C:/Users/aliar/OneDrive/Desktop/udacity-full stack/image processing API/${file}_resized.jpeg`);
  } catch (err) {
    res.send('displayer error: '+err);
  }
}
app.get('/api/images', async (req, res) => {
  const file = req.query.filename
  const width_ = parseInt(req.query.width)
  const height_ = parseInt(req.query.width)
  // sharp(`C:/Users/aliar/OneDrive/Desktop/udacity-full stack/image processing API/images/${file}.jpg`)
  // .resize(width, height)
  // .toFile('output.webp', (err, info) => { console.log(err) });
  //res.send(`filename ${file}, width ${width}, height ${height}`)
  //const image =  `../images/${file}.jpg`
  //res.sendFile(`C:/Users/aliar/OneDrive/Desktop/udacity-full stack/image processing API/images/${file}.jpg`);
  const filepath = `C:/Users/aliar/OneDrive/Desktop/udacity-full stack/image processing API/images/${file}.jpg`
  await resizeImage(file,filepath,width_,height_);
//   res.sendFile(`C:/Users/aliar/OneDrive/Desktop/udacity-full stack/image processing API/${file}_resized.jpeg`)
  await displayer(file, req, res);

// })
})

//app.use('./api', routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
