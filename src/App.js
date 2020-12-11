import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    pictures: null,
    showModal: false,
    loading: false,
    error: null,
    largeImage: ''
  }

  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: largeImageURL
    }));
  };

  formSubmitHendler = ({search}) => {
    const  KEY = '19046001-7d44b7f00f708df4674bb235b';
    const URL = 'https://pixabay.com/api/';
    this.setState({ loading: true, pictures: null });

    fetch(`${URL}?q=${search}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Картинки с таким именем отсутсвуют'))
      })
      .then(pictures => this.setState({ pictures }))
      .catch(error => (this.setState({error})))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const {pictures, showModal, error, largeImage} = this.state;
    return (
      <div className="App">
        {error && <h1>{ error.massage }</h1>}
        <Searchbar onSubmit={this.formSubmitHendler} />
        {this.state.loading && <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />}
        <ImageGallery
          pictures={pictures}
          onClick={this.toggleModal} />
        {showModal && <Modal onClose={ this.toggleModal }>
          <img src={largeImage} alt=""/>
        </Modal>}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
  }
  
}

export default App;
