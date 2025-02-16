import React from 'react'

const Video = () => {
  const videoId='AFicYbv-mzg';

  return (
    <div className="w-[60%] mx-auto grid place-items-center -mt-24">
        <div className="relative w-full pb-[56.25%]">
            <iframe
                className="absolute inset-0 w-full h-full"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
  )
}

export default Video