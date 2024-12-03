import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

export default function Gallery(props) {
  const results = props.data;
  let images;
  let noImages;

  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images}
      </ul>
      {noImages && <div className="mt-4 text-gray-500">{noImages}</div>}
    </div>
  );
}
