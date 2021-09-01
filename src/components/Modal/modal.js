import React from 'react';
import '../Modal/modal.css';
import CloseButton from '../../assets/Close.png';
import Quotes from '../../assets/Quotes.png';

const Modal = ({ handleClose, show, props}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modalBackground">
        <div className="modal-main">
          <img
            className="cardImageModal"
            src={props.imageUrl}
            alt="cover book"
          ></img>
          <div className="cardModal">
            <div className="cardModalHeader">
              <h1 className="cardTitleModal">{props.title}</h1>
              <h2 className="cardAuthorModal">{props.authors}</h2>
            </div>
            <div className="cardModalInfos">
              <h2 className="cardInfoModal">INFORMAÇÕES</h2>
              <table className="cardListModal">
                <tbody>
                  <tr>
                    <th>Páginas</th>
                    <td className="cardPages">{props.pageCount}</td>
                  </tr>
                  <tr>
                    <th>Editora</th>
                    <td className="cardEdit">{props.publisher}</td>
                  </tr>
                  <tr>
                    <th>Publicação</th>
                    <td className="cardPublis">{props.published}</td>
                  </tr>
                  <tr>
                    <th>Idioma</th>
                    <td className="cardLanguage">{props.language}</td>
                  </tr>
                  <tr>
                    <th>Título original</th>
                    <td className="cardOriginalTitle">{props.title}</td>
                  </tr>
                  <tr>
                    <th>ISBN-10</th>
                    <td className="cardIsbn1">{props.isbn10}</td>
                  </tr>
                  <tr>
                    <th>ISBN-13</th>
                    <td className="cardIsbn2">{props.isbn13}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cardModalReview">
              <h2 className="cardReview">Resenha da Editora</h2>
              <div className="cardReviewContents">
                <img className="quotesIcon" src={Quotes} />
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="closeModal" type="button" onClick={handleClose}>
          <img src={CloseButton} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
