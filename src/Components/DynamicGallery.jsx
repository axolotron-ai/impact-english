"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const DynamicGallery = ({ apiPath = "/api/gallery", embedded = false }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(embedded);
  const [selectedImage, setSelectedImage] = useState(null);
  const host = 'http://localhost:8000'; // Adjust based on your backend server
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${host}${apiPath}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json?.message || "Failed to load gallery");
        // Expecting: { success: true, results: [ { album: 'Students', photos: [ { img_url: '' } ] } ] }
        if (!json.success || !Array.isArray(json.results)) {
          throw new Error("Unexpected response format from gallery API");
        }
        if (mounted) setAlbums(json.results);
      } catch (err) {
        if (mounted) setError(err.message || "Error fetching gallery");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => (mounted = false);
  }, [apiPath]);

  if (loading) return <div className="p-10">Loading gallery…</div>;
  if (error) return <div className="p-10 text-red-600">Error: {error}</div>;

  return (
    <div className="overflow-hidden" style={{backgroundColor:'#383838'}}>
      {/* Hero / intro (matches Home Gallery) */}
 

      {/* Mobile marquee when shown - organized by albums */}
      <section className={show ? "lg:hidden overflow-hidden w-full my-10 py-5" : "hidden"}>
        {albums.map((album, albumIdx) => {
          const title = album.album || album.album_name || album.title;
          if (!Array.isArray(album.photos) || album.photos.length === 0) return null;
          
          return (
            <div key={albumIdx} className="mb-8">
              <h3 className="text-white text-lg font-semibold momo px-4 mb-3">
                {title}
              </h3>
              <Marquee pauseOnClick speed={40} gradient={false}>
                {album.photos.map((photo, idx) => (
                  <img 
                    key={idx} 
                    src={photo.img_url} 
                    alt={photo.caption || `${title} photo ${idx + 1}`} 
                    className="h-[200px] rounded-2xl px-2 cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => setSelectedImage(photo)}
                  />
                ))}
              </Marquee>
            </div>
          );
        })}
      </section>

      {/* Actual gallery listing - Desktop only */}
       <motion.div
          key={show}
          initial={{ opacity: 0, scale: 3, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="hidden lg:block"
        >
      <div className={"p-6 lg:px-20" } >
        {/* <h1 className="text-center lg:text-3xl text-[17px]  text-white font-bold momo text-center  mb-6">A Glimpse Into Our Journey — Capturing <br />Every Moment of Learning, <br /><span style={{color:'#00a61c'}}>Growth, and Success.</span></h1> */}
        {albums.length === 0 && <p className="text-xl momo pt-10">No albums found.</p>}
        <div className="grid gap-10">
          {albums.map((album) => {
            const title = album.album || album.album_name || album.title;
            return (
              <section key={title}>
                <h2 className="text-xl momo mb-4 text-white"  style={{fontWeight:'lighter'}}>{title}</h2>
                <div className="flex flex-wrap gap-6 items-start">
                  {Array.isArray(album.photos) && album.photos.length > 0 ? (
                    album.photos.map((photo, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="h-64 sm:h-56 overflow-hidden rounded-lg shadow-xl inline-flex items-center justify-center w-full sm:w-auto cursor-pointer"
                        style={{ backgroundColor: '#2a2a2a' }}
                        onClick={() => setSelectedImage(photo)}
                      >
                        <img
                          src={photo.img_url}
                          alt={photo.caption || `${title} photo ${idx + 1}`}
                          className="object-contain h-64 sm:h-56 w-full sm:w-auto max-w-full hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-sm opacity-70 text-white">No photos in this album.</p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage.img_url}
            alt={selectedImage.caption || 'Photo'}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {selectedImage.caption && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg bg-black bg-opacity-50 py-2">
              {selectedImage.caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicGallery;
