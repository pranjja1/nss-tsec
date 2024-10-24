import React, { useState, useEffect } from 'react';



export default function Gallery1() {

 const [photos, setPhotos] = useState(() => {

  // Retrieve photos from localStorage if they exist, otherwise use the default array

  const savedPhotos = localStorage.getItem('photos');

  return savedPhotos

   ? JSON.parse(savedPhotos)

   : [

     {

      id: 1,

      src: '/images/photo1.jpg',

      alt: 'Photo 1 Description',

     },

     {

      id: 2,

      src: '/images/photo6.jpg',

      alt: 'Photo 2 Description',

     },

     {

      id: 3,

      src: '/images/photo3.jpg',

      alt: 'Photo 3 Description',

     },

     {

      id: 4,

      src: '/images/photo4.jpg',

      alt: 'Photo 4 Description',

     },

    ];

 });



 const [file, setFile] = useState(null);

 const [description, setDescription] = useState('');

 const [previewSrc, setPreviewSrc] = useState('');



 // Save photos to localStorage whenever they are updated

 useEffect(() => {

  localStorage.setItem('photos', JSON.stringify(photos));

 }, [photos]);



 // Handle file input

 const handleFileChange = (e) => {

  const selectedFile = e.target.files[0];

  setFile(selectedFile);

  if (selectedFile) {

   const reader = new FileReader();

   reader.onloadend = () => {

    setPreviewSrc(reader.result); // Preview the selected image

   };

   reader.readAsDataURL(selectedFile);

  }

 };



 // Handle description input

 const handleDescriptionChange = (e) => {

  setDescription(e.target.value);

 };



 // Handle form submit

 const handleSubmit = (e) => {

  e.preventDefault();

  if (file && description) {

   const newPhoto = {

    id: photos.length + 1,

    src: previewSrc, // For simplicity, use base64-encoded image preview

    alt: description,

   };



   setPhotos([...photos, newPhoto]); // Add the new photo to the state

   setFile(null); // Reset file input

   setDescription(''); // Reset description input

   setPreviewSrc(''); // Clear image preview

  }

 };



 // Handle deleting a photo

 const handleDelete = (id) => {

  const updatedPhotos = photos.filter((photo) => photo.id !== id);

  setPhotos(updatedPhotos); // Update the state with the new list

 };



 return (

  <section className="bg-gray-100 py-16 lg:py-24">

   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center">

     <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>

     <p className="mt-4 text-lg text-gray-700">

      Explore our gallery to see photos from various NSS TSEC events and activities.

     </p>

    </div>



    {/* Form for uploading images */}

    <div className="mt-8 max-w-md mx-auto">

     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">

      <div className="mb-4">

       <label className="block text-sm font-bold mb-2 text-gray-700">Upload Image:</label>

       <input

        type="file"

        accept="image/*"

        onChange={handleFileChange}

        className="border border-gray-300 rounded-lg p-2 w-full"

       />

      </div>



      <div className="mb-4">

       <label className="block text-sm font-bold mb-2 text-gray-700">Description:</label>

       <input

        type="text"

        value={description}

        onChange={handleDescriptionChange}

        className="border border-gray-300 rounded-lg p-2 w-full"

        placeholder="Enter a description"

       />

      </div>



      {previewSrc && (

       <div className="mb-4">

        <label className="block text-sm font-bold mb-2 text-gray-700">Preview:</label>

        <img src={previewSrc} alt="Preview" className="w-full h-64 object-cover" />

       </div>

      )}



      <button

       type="submit"

       className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"

      >

       Upload Photo

      </button>

     </form>

    </div>



    {/* Gallery Grid */}

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

     {photos.map((photo) => (

      <div key={photo.id} className="bg-white overflow-hidden rounded-lg shadow-lg relative">

       <img

        src={photo.src}

        alt={photo.alt}

        className="w-full h-64 object-cover"

       />

       <p className="p-4 text-center text-gray-700">{photo.alt}</p>

       

       {/* Delete Button */}

       <button

        onClick={() => handleDelete(photo.id)}

        className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-lg hover:bg-red-600"

       >

        Delete

       </button>

      </div>

     ))}

    </div>

   </div>

  </section>

 );

}