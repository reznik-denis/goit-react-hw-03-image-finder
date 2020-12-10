import React, { Component } from 'react';
// import Loader from "react-loader-spinner";
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    search: '',
    showModal: true
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHendler = ({search}) => {
    // if (this.state.contacts.find(cont => cont.name === contact.name)) {
    //   alert(`${contact.name} is already in contacts`);
    //   return
    // }
    this.setState( { search: search });
  };

  render() {
    const { showModal } = this.state;
    return (
    <div className="App">
        <Searchbar onSubmit={this.formSubmitHendler} />
        <ImageGallery onClick={this.toggleModal}/>
        {showModal && <Modal onClose={ this.toggleModal }>
          <img src="" alt="" onClick={this.toggleModal}/>
        </Modal>}
    </div>
  );
  }
  
}

export default App;
