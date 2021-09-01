import React, { Component } from 'react';
import './book.css';
import Modal from '../Modal/modal.js';

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const book = this.props.data;

    return (
      <div className="card" onClick={this.showModal}>
        <img className="cardImage" src={book.imageUrl} alt="cover book" />
        <div className="cardDetails">
          <div className="cardInfos">
            <h1 className="cardTitle">{book.title}</h1>
            <h2 className="cardAuthor">{book.authors.join(" ")}</h2>
          </div>
          <div className="cardDatas">
            <p className="cardPages">{book.pageCount} páginas</p>
            <p className="cardEdit">Editora {book.publisher}</p>
            <p className="cardPublis">Publicado em {book.published}</p>
          </div>
        </div>
        <div>
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            props={book}
          />
        </div>
      </div>
    );
  }
}

export default BookCard;