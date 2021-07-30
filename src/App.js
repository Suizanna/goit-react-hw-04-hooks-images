import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Loader from "./Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getPictures from "./services/fetch";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState("");
  const [loader, setLoader] = useState(false);

  const closeModalByEsc = (e) => {
    if (e.key === "Escape") {
      setModal("");
    }
  };

  useEffect(() => {
    if (modal) {
      window.addEventListener("keyup", closeModalByEsc);
    } else {
      window.removeEventListener("keyup", closeModalByEsc);
    }
  }, [modal]);

  //изменения в инпуте
  const handleSetQuery = (e) => {
    setQuery(e.target.value);
  };

  //   try catch
  // const hendleGetImages = async (e) => {
  //   e.preventDefault();
  //   setPage(1);
  //   setLoader(true);
  //   try {
  //     const {
  //       data: { hits },
  //     } = await getPictures(query, 1);
  //     setLoader(false);
  //     setImages(hits);
  //     setPage((prev) => prev + 1);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const hendleGetImages = (e) => {
    e.preventDefault();
    setPage(1);

    getPictures(query, 1)
      .then((images) => {
        console.log(images);
        setImages(images.data.hits);
        // setPage((prev) => prev + 1);
        return images;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const hendleLoadMore = () => {
    setLoader(true);
    getPictures(query, page)
      .then((images) => {
        console.log(images);
        setImages((prev) => [...prev, ...images.data.hits]);
        setPage((prev) => prev + 1);
        return images;

        // window.scrollTo({
        //   top: document.documentElement.scrollHeight,
        //   left: 0,
        //   behavior: "smooth",
        // });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //работает try catch
  // const hendleGetImages = async (e) => {
  //   e.preventDefault();
  //   setLoader(true);
  //   setPage(1);

  //   if (query.trim() === "") {
  //     setLoader(false);
  //     return toast.error("Please enter something!");
  //   } else {
  //     setQuery(""); //очиста формы сразу после Submit
  //     setLoader(false);
  //     try {
  //       const {
  //         data: { hits },
  //       } = await getPictures(query, 1);
  //       setImages(hits);
  //       setPage((prev) => prev + 1);

  //       if (hits.length < 1) {
  //         setQuery("");
  //         return toast.warning(
  //           `Your search - ${query} - did not match any images`
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // };
  ////работает
  // const hendleLoadMore = async () => {
  //   setLoader(true);
  //   try {
  //     const {
  //       data: { hits },
  //     } = await getPictures(query, page);
  //     setImages((prev) => [...prev, ...hits]);
  //     setPage((prev) => prev + 1);
  //     setLoader(false);
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //     // toast.error("Enter a valid search query");
  //   }
  // };

  const hendleShowModal = (url) => {
    setModal(url);
  };

  const hendleCloseModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setModal("");
  };

  return (
    <div className="App">
      <Searchbar
        query={query}
        onSetQuery={handleSetQuery}
        onSubmit={hendleGetImages}
      />

      <ImageGallery showModal={hendleShowModal} images={images} />

      {images.length >= 12 && <Button onLoadMore={hendleLoadMore} />}
      {modal && <Modal closeModal={hendleCloseModal} modalImg={modal} />}
      {loader && <Loader />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
