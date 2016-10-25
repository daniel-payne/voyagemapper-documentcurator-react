import React from 'react';

import { Checkbox, ButtonGroup, ListGroupItem, Button } from 'react-bootstrap';

class DocumentFactManager extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.extractState(props)
  }

  componentWillReceiveProps(nextProps) {
      this.setState( this.extractState(nextProps) )
  } 

  extractState(nextProps){
      
      let newState = {

          setAsDiscarded: () => {
            this.props.onSetDocumentFactStatus(this.props.documentFactId, 'DISCARDED')
          },
          setAsAlert: () => {
            this.props.onSetDocumentFactStatus(this.props.documentFactId, 'ALERT')
          },
          setAsProfile: () => {
            this.props.onSetDocumentFactStatus(this.props.documentFactId, 'PROFILE')
          }
      }

      return newState;

  }

  render() {

    let    discardeStyle  =  'default' 
    let    alertStyle     =  'default' 
    let    profileStyle   =  'default' 

    let canShowOnMap   =  false 

    switch (this.props.factStatus) {
      case 'DISCARDED':
        discardeStyle = 'primary'
        break
      case 'ALERT':
        alertStyle    = 'warning'
        break
      case 'PROFILE':
        profileStyle  = 'warning'
        break
    }

    if ( (this.props.factGeography) && (this.props.factStatus !== 'DISCARDED') ) {
      canShowOnMap = true;
    }

    return (
        <ListGroupItem> 
          <ButtonGroup>
            <Button bsSize="xsmall" bsStyle={discardeStyle} onClick={this.state.setAsDiscarded} >Discarded</Button>
            <Button bsSize="xsmall" bsStyle={alertStyle}    onClick={this.state.setAsAlert} >Alert</Button>
            <Button bsSize="xsmall" bsStyle={profileStyle}  onClick={this.state.setAsProfile} >Profile</Button>
          </ButtonGroup>
          <h4 className="text-danger">{this.props.factCategory}</h4> 
          <p>{this.props.factText}</p> 
          { canShowOnMap  ? <Checkbox defaultChecked="true" inline>Show On Map</Checkbox> : undefined }
        </ListGroupItem> 
    );
  }

}

export default DocumentFactManager;



 