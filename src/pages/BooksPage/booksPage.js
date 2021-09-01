import React, { Component } from "react";
import "./booksPage.css";
import LogoBlack from "../../assets/LogoBlack.png";
import LogOutIcon from "../../assets/Log Out.png";
import Previous from "../../assets/Prev.png";
import Next from "../../assets/Next.png";
import BookCard from "../../components/Books/book.js";
import axios from "axios";

class BooksPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get(
        "https://books.ioasys.com.br/api/v1/books?page=1&amount=12&category=biographies",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.setState({ data: result.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const books = this.state.data;

    return (
      <div className="mainBooksPage">
        <div className="booksPageHeader">
          <div className="booksPageLogo">
            <img className="logoIoasys" src={LogoBlack} alt="logo ioasys"></img>
            <p className="booksPageTitle">Books</p>
          </div>
          <div className="logout">    
            <p className="greeting">Bem vindo, nome!</p>
            <img src={LogOutIcon} alt="logout icon"></img>
          </div>
        </div>
        <div className="booksGrid">
          {books.data &&
            books.data.map((book, i) => {
              return (
                <div key={i}>
                  <div>
                    <BookCard data={book} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="booksPageFooter">
          <p>Página 1 de 10</p>
          <img className="prevIcon" src={Previous} alt="previous icon"></img>
          <img className="nextIcon" src={Next} alt="next icon"></img>
        </div>
      </div>
    );
  }
}

/*class ModalBook extends Component {
   constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} />
                <button type='button' onClick={this.showModal}></button>
            </div>
        )
    }
}*/

export default BooksPage;
