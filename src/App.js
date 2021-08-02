import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Loader from "./Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Api } from "./services/fetch";
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

  const handleGetImages = async (e) => {
    e.preventDefault();
    setPage(1);
    setLoader(true);

    if (query.trim() === "") {
      setLoader(false);
      return toast.error("Please enter something!");
    } else {
      setLoader(false);

      try {
        const {
          data: { hits },
        } = await getPictures(query, 1);
        setQuery("");
        setLoader(false);
        setImages(hits);

        if (hits.length < 1) {
          setQuery("");
          return toast.warning(
            `Your search - ${query} - did not match any images`
          );
        }

        setPage((prev) => prev + 1);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  //Button
  const handleLoadMore = async () => {
    try {
      const {
        data: { hits },
      } = await getPictures(query, page);
      setImages((prev) => [...prev, ...hits]);
      setPage((prev) => prev + 1);

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Enter a valid search query");
    }
  };

  // Modal
  const handleShowModal = (url) => {
    setModal(url);
  };

  const handleCloseModal = (e) => {
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
        onSubmit={handleGetImages}
      />

      <ImageGallery showModal={handleShowModal} images={images} />

      {images.length >= 12 && <Button onLoadMore={handleLoadMore} />}
      {modal && <Modal closeModal={handleCloseModal} modalImg={modal} />}
      {loader && <Loader />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;

// then catch
// const handleGetImages = (e) => {
//   e.preventDefault();
//   setPage(1);

//    Api.getPictures(query, 1)
//     .then((images) => {
//       console.log(images);
//       setImages(images);
//       setPage((prev) => prev + 1);
//       return images;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
// const handleLoadMore = () => {
//   setLoader(true);
//   Api.getPictures(query, page)
//     .then((images) => {
//       console.log(images);
//       setImages((prev) => [...prev, ...images]);
//       setPage((prev) => prev + 1);
//       setLoader(false);
//       // return images;
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         left: 0,
//         behavior: "smooth",
//       });
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
