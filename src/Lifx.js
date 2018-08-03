import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { ToastContainer, toast, style } from 'react-toastify';
import TextField from 'material-ui/TextField';
import Rodal from 'rodal';

import './Lifx.css'

class Lifx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: '',
      token: '',
      connected: false,
      modalIsOpen: false,
    };
  }

  notify = (text) => toast(text);

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  updateToken = (data) => {
    var token = data.target.value;
    this.setState({token: token})
  }

  getLifx = () => {
    var LifxHTTP = require('lifx-http-api'),client; 
    try {
      client = new LifxHTTP({
        bearerToken: this.state.token
      })
      this.closeModal();
      client.listLights('all').then((response) => {
        var text = "Connected to ";
        for(var i = 0; i < response.length; i++) {
          if(i+1 === response.length){
            text += "and " + response[i].label.toString() + ".";
          }
          else {
            text += response[i].label.toString() + ", ";
          }
        }
        console.log(text);
        this.setState({connected: true});
        this.notify(text);
      });
    }
    catch(error) {
      console.log(error);
      this.notify(error.toString());
    }
    this.setState({client: client});
  }

  sendLifx = () => {
    var client = this.state.client;
    // Using callbacks 
    client.pulse('all', {
      color: '#000000',
      from_color: '#ffffff',
      period: 1,
      cycles: 10,
      persist: false,
      power_on: true,
      peak: 0.5
    }, function (err, data) {
      if (err) {
          console.error(err);
          return;
      }
      console.log(data)
    });
  }
  
  render() {
    return (
      <div>
          <Button style={{width: 200, height:20, margin:20, fontFamily: 'Lineto Brown', textTransform: 'none', background:'#fea909', fontWeight:'bold'}} onClick={this.openModal.bind(this)} raised color="accent">
              Get Started
          </Button>
          <br/>
          <Button disabled={!this.state.connected} style={{width: 200, height:20, margin:20, fontFamily: 'Lineto Brown', textTransform: 'none', background:'#fea909', fontWeight:'bold'}} onClick={this.sendLifx} raised color="accent">
              Test Lights
          </Button>
          <Rodal height={200} visible={this.state.modalIsOpen} onClose={this.closeModal.bind(this)}>
              <p style={{fontWeight:400,color:"#000000",padding:0,paddingTop:15}}>Generate a personal access token with your LIFX Cloud account and enter it below: </p>
                  <TextField style={{paddingBottom:"15px"}} fullWidth={true} label="Access Token" onChange={this.updateToken}/>
                  <br/>
                  <Button style={{width: 200, height:20, fontFamily: 'Lineto Brown', textTransform: 'none', background:'#fea909', fontWeight:'bold'}} onClick={this.getLifx} raised color="accent">
              Connect to LIFX
          </Button>
          </Rodal>
          <ToastContainer style={{fontWeight: "bold"}}/>
      </div>
    );
  }
}

style({
  fontFamily: "Lineto Brown",
});
  
export default Lifx;