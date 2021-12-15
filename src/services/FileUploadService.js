function upload(formData) {
  const photos = formData.getAll('photos');
  const promises = photos.map((x) => getImage(x)
      .then(img => ({
          id: img,
          originalName: x.name,
          fileName: x.name,
          url: img
      })));
  return Promise.all(promises);
}

function getImage(file) {
  return new Promise((resolve, reject) => {
      const fReader = new FileReader();

      fReader.onload = () => {
          resolve(fReader.result);
      }

      fReader.onerror = (e) => {
        console.error(e);
        reject("Upload went wrong!");
      }

      fReader.readAsDataURL(file);
  })
}
export { upload }