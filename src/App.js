import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    pictures: null,
    showModal: false,
    loading: false
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHendler = ({search}) => {
    const  KEY = '19046001-7d44b7f00f708df4674bb235b';
    const URL = 'https://pixabay.com/api/';
    this.setState({ loading: true });

    fetch(`${URL}?q=${search}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState({ pictures }))
        .finally(() => this.setState({ loading: false }));
  };

  render() {
    const {pictures, showModal } = this.state;
    return (
    <div className="App">
        <Searchbar onSubmit={this.formSubmitHendler} />
        {this.state.loading && <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />}
        {/* <ImageGallery
          pictures={pictures}
          onClick={this.toggleModal} /> */}
        {showModal && <Modal onClose={ this.toggleModal }>
          <img src="" alt=""/>
        </Modal>}
    </div>
  );
  }
  
}

export default App;
