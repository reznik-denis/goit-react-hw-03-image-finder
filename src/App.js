import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import LoadMore from './Components/LoadMore/LoadMore';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    picture: [],
    search: null,
    showModal: false,
    loading: false,
    error: null,
    largeImage: '',
    pageFetch: 1
  }

  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: largeImageURL
    }));
  };

  formSubmitHendler = ({search}) => {
    this.setState({ loading: true, picture: [], search});

    this.fetshSearch();
  };

  fetshSearch = () => {
    const KEY = '19046001-7d44b7f00f708df4674bb235b';
    const URL = 'https://pixabay.com/api/';
    const { search, pageFetch } = this.state;
    fetch(`${URL}?q=${search}&page=${pageFetch}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Картинки с таким именем отсутсвуют'))
      }).then(pictures => this.setState(prevState => (
        { picture: ((this.state.picture === []) ? pictures.hits : ([...prevState.picture, ...pictures.hits])) }
      )))
      .catch(error => (this.setState({error})))
      .finally(() => this.setState(prevState => ({
        loading: false,
        pageFetch: prevState.pageFetch + 1
      }))); 
  }

  render() {
    const {picture, showModal, error, largeImage, pageFetch} = this.state;
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
          pictures={picture}
          onClick={this.toggleModal} />
        {picture !== [] && pageFetch >= 2 && <LoadMore onClick={this.fetshSearch}/>}
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
