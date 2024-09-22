import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import { useState } from "react";

const ImgSlider = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  return (
    <div className="w-full md:w-[700px] h-96 overflow-hidden relative rounded-sm">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImg * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full ">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt={`Slide ${i}`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImg}
        className="absolute top-1/2 left-5 bg-white text-black dark:bg-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-2 rounded-full"
      >
        <IoMdArrowDropleft />
      </button>
      <button
        onClick={nextImg}
        className="absolute top-1/2 right-5 bg-white text-black dark:bg-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-2 rounded-full"
      >
        <IoMdArrowDropright />
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((img, index) => (
          <button
            key={img}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentImg ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImg(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
