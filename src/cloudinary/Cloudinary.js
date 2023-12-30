const cloudinary = require ('cloudinary').v2
const fs= require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


  const Upload_on_Cloudinary = async (LocalFilePath) => {
    try {
      if (!LocalFilePath) {
        return null;
      }
  
      const respo = await cloudinary.uploader.upload(LocalFilePath, {
        resource_type: 'auto',
      });
  
      console.log("File is Uploaded.", respo.url);
      return respo;
    } catch (error) {
      console.error('Error during Cloudinary upload:', error);
  
      // If there's an error, you might want to clean up the local file
      try {
        fs.unlinkSync(LocalFilePath);
        console.log('Local file deleted.');
      } catch (unlinkError) {
        console.error('Error deleting local file:', unlinkError);
      }
  
      return null;
    }
  };
  
  module.exports= Upload_on_Cloudinary