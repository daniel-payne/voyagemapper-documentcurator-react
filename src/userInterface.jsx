import React           from 'react';
import {render}        from 'react-dom';
import Immutable       from 'immutable'

import DocumentFactManager from './components/DocumentFactManager.jsx';
import DocumentMapManager  from './components/DocumentMapManager.jsx';

import { Checkbox, Radio, Panel, ListGroup, ListGroupItem, Label, Grid, Row, Col, MenuItem, NavDropdown, NavItem, Nav, Navbar, ButtonGroup, Button } from 'react-bootstrap';

import {Application} from './Applicarion.jsx'

const sa = [[
  {"lng":37.907272338789035,"lat":-46.9005546570357},
  {"lng":37.689445495584565,"lat":-46.823890686051044},
  {"lng":37.5830574035613,"lat":-46.945835113464966},
  {"lng":37.907272338789035,"lat":-46.9005546570357}
  ], 
  [
    {"lng":31.99044990542852,"lat":-24.31326484680519},{"lng":31.557096481273071,"lat":-23.4700031280149},{"lng":31.311269760157241,"lat":-22.417739868137602},{"lng":30.843919754047707,"lat":-22.291051864657547},{"lng":30.28819274904092,"lat":-22.351074218752796},{"lng":29.6480102538566,"lat":-22.126609802178344},{"lng":29.033380508447276,"lat":-22.217079162630764},{"lng":28.91636085505862,"lat":-22.459590911909476},{"lng":28.279260635343725,"lat":-22.617910385179865},{"lng":27.744419097897847,"lat":-23.236387252812211},{"lng":27.010051727324811,"lat":-23.642950058018155},{"lng":26.865400314304367,"lat":-24.260070800812215},{"lng":26.421550750710008,"lat":-24.635549545282274},{"lng":25.868659973129969,"lat":-24.755210876480781},{"lng":25.651351928731252,"lat":-25.505020141634873},{"lng":25.420780181909894,"lat":-25.737438201917264},{"lng":24.654207229628593,"lat":-25.81951141356063},{"lng":23.908647537205415,"lat":-25.626127243024143},{"lng":23.464990615894632,"lat":-25.274469375568028},{"lng":23.011869430552519,"lat":-25.293409347512622},{"lng":22.562910079975541,"lat":-26.220729827831661},{"lng":21.661489486626692,"lat":-26.867580413810856},{"lng":20.901018142706839,"lat":-26.79594039917421},{"lng":20.693330764722852,"lat":-26.907249450712857},{"lng":20.6142597198597,"lat":-26.469589233454549},{"lng":20.862480163546163,"lat":-26.133579254183388},{"lng":20.675489425681075,"lat":-25.451559066787919},{"lng":20.000240325940428,"lat":-24.752990722658197},{"lng":19.996761321997944,"lat":-28.433113098158845},{"lng":19.56237792966995,"lat":-28.531885147120494},{"lng":19.172746658340486,"lat":-28.957828521770292},{"lng":18.732040405289826,"lat":-28.841169357316563},{"lng":18.179010391227234,"lat":-28.915889739966556},{"lng":17.409490585321848,"lat":-28.722951889077748},{"lng":17.378442764253219,"lat":-28.295349121111833},{"lng":17.083320617669088,"lat":-28.037767410298681},{"lng":16.899778366092644,"lat":-28.0715923309313},{"lng":16.772188186684058,"lat":-28.447788238524865},{"lng":16.4580192565981,"lat":-28.636520385712785},{"lng":16.817918777423245,"lat":-29.09652709961518},{"lng":17.277915954535491,"lat":-30.345972061149105},{"lng":18.280138015704313,"lat":-31.896526336703985},{"lng":18.30125045775323,"lat":-32.59402847284985},{"lng":17.843193054145619,"lat":-32.825973510727813},{"lng":18.43902778631773,"lat":-33.696250915544496},{"lng":18.491527557418696,"lat":-33.885417938245475},{"lng":18.306528091453362,"lat":-34.040138244621474},{"lng":18.475139617955008,"lat":-34.358749389590109},{"lng":18.438472747807676,"lat":-34.132362365719338},{"lng":18.768472671535687,"lat":-34.080417633052917},{"lng":18.827360153211394,"lat":-34.388748168923314},{"lng":19.139583587640523,"lat":-34.315139770522592},{"lng":19.118194580087742,"lat":-34.41930389405298},{"lng":19.386806488064678,"lat":-34.414028167736525},{"lng":19.290418624829638,"lat":-34.632915496778239},{"lng":19.990417480450144,"lat":-34.835140228215693},{"lng":20.533750534100196,"lat":-34.4701385498123},{"lng":21.813194274953354,"lat":-34.381526946973437},{"lng":22.13569450371083,"lat":-34.087638854994019},{"lng":22.552360534687189,"lat":-33.994583129906992},{"lng":23.405971527103365,"lat":-34.110973358167961},{"lng":23.400138854917589,"lat":-33.996807098401277},{"lng":23.64985847473622,"lat":-33.980693817132646},{"lng":24.832639694165703,"lat":-34.21736145020332},{"lng":25.031528472849949,"lat":-33.970417022688515},{"lng":25.702638626142043,"lat":-34.03569412230015},{"lng":25.631805419919431,"lat":-33.865139007568061},{"lng":25.83875083920184,"lat":-33.724861144998165},{"lng":26.466527938860228,"lat":-33.773193359390596},{"lng":27.006526947064049,"lat":-33.571250915534947},{"lng":28.554027557364829,"lat":-32.572360992400334},{"lng":29.410417556737379,"lat":-31.692083358739197},{"lng":30.009859085062409,"lat":-31.296249389700733},{"lng":31.121528625437591,"lat":-29.647638320968863},{"lng":31.756526947005518,"lat":-28.971250534075878},{"lng":32.36125183110137,"lat":-28.576528549206071},{"lng":32.554027557325114,"lat":-28.150138854967778},{"lng":32.891250610426745,"lat":-26.85841560366449},{"lng":32.013820648259014,"lat":-26.811199188201762},{"lng":31.975320816089493,"lat":-27.316989898701287},{"lng":31.536869049050033,"lat":-27.316160202063742},{"lng":31.157707214295439,"lat":-27.199579238903969},{"lng":30.812160491920796,"lat":-26.825510025043744},{"lng":30.83328819274535,"lat":-26.417999267537848},{"lng":31.320360183758616,"lat":-25.744029998807413},{"lng":31.982130050672808,"lat":-25.952049255361374},{"lng":31.99044990542852,"lat":-24.31326484680519}], [{"lng":29.465610504203845,"lat":-29.34679985048458},{"lng":29.150230407675611,"lat":-29.719310760499823},{"lng":29.166259765586194,"lat":-29.929729461695093},{"lng":28.243450164821279,"lat":-30.263780593835129},{"lng":28.118230819662951,"lat":-30.668960571287165},{"lng":27.394620895390204,"lat":-30.330490112323993},{"lng":27.415679931711843,"lat":-30.150789260885968},{"lng":27.029069900526711,"lat":-29.64602088927316},{"lng":27.369768142658078,"lat":-29.476179122919817},{"lng":27.760150909433637,"lat":-28.895412445082915},{"lng":28.65373039239855,"lat":-28.572059631317327},{"lng":29.335029602095943,"lat":-29.089559555023779},{"lng":29.465610504203845,"lat":-29.34679985048458}
]] 

const tc = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757}
        ]


let application = new Application( (data) => {
  render(
      <App 
         documents             = {data.documents}
         facts                 = {data.facts}
         selectedDocument      = {data.selectedDocument}
         selectedDocumentIndex = {data.selectedDocumentIndex + 1 || 0}  
      />, 
      document.getElementById('renderTarget') 
   );
})


class App extends React.Component {

  constructor(props){

     super(props)

     this.state = this.extractState(props)

 

  }

  componentWillReceiveProps(nextProps) {
      this.setState( this.extractState(nextProps) )
  } 

  extractState(nextProps){
      return {
          documentCount: nextProps.documents.count()
      }
  }

  render () {

    return (
        <div className="container-fluid">
        
            <Navbar fluid fixedTop>
                <Navbar.Header >
                <Navbar.Brand>
                    <a href="#">Document Curator </a>  
                    {this.props.selectedDocument.countryName}  
                    &nbsp;
                    {this.props.selectedDocument.documentId}          
                </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight >
                    <NavItem>
                      <Button bsSize="xsmall"   onClick={this.props.onChoosePriorDocument} >Previous Document</Button>
                      <Label  bsStyle="default" bsSize="small" style={{marginRight: '4px', marginLeft: '4px'}}>{this.props.selectedDocumentIndex} of {this.state.documentCount}</Label>
                      <Button bsSize="xsmall"   onClick={this.props.onChooseNextDocument}>Next Document</Button>
                    </NavItem>
                    <NavDropdown eventKey={3} title="Server" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Reload Documents</MenuItem>
                        <MenuItem eventKey={3.2}>Disconnect</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>
                          <input type="password" />
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>    
 
            <Grid fluid style={{marginTop: '58px', height: 'calc(100% - 78px)'}}>
                <Row className="show-grid">
                <Col md={4}> 
                
                    <ListGroup   style={{height: 'calc(100% - 4px)', overflowX: 'auto'}}>
                        { this.props.facts.map( item =>   
                          <DocumentFactManager {...item} onSetDocumentFactStatus={this.props.onSetDocumentFactStatus} key={item.documentFactId}></DocumentFactManager>
                        ) }
                    </ListGroup>
              
                </Col>
                <Col md={8}>
                  <DocumentMapManager  document={this.props.selectedDocument} ></DocumentMapManager>
                </Col>
                </Row>
            </Grid>   
        
        </div>
    )
  }
}

// App.propTypes = {
//    data :      React.PropTypes.object.isRequired,
//    functions:  React.PropTypes.object.isRequired,
// }
//<DocumentMapManager  paths={paths} markers={[markers]} ></DocumentMapManager>

App.defaultProps = {

  test: 'xxx',  

  documents:        Immutable.List([]),
  facts:            Immutable.List([]),

  selectedDocument: {},
  selectedFact:     {},

  onChoosePriorDocument:   application.choosePriorDocument.bind(application), 
  onChooseNextDocument:    application.chooseNextDocument.bind(application), 

  onSetDocumentFactStatus:    application.setDocumentFactStatus.bind(application) 
  
}

render(<App />, document.getElementById('renderTarget'));

application.loadCountries().then( () => {
    application.loadDocuments().then( () => {
    //application.chooseDocument(104) 
    })
})



                            // <ListGroupItem key={item.documentFactId}> 
                            //   <ButtonGroup>
                            //     <Button bsSize="xsmall">Discarde</Button>
                            //     <Button bsSize="xsmall">Add Alert</Button>
                            //     <Button bsSize="xsmall">Add to Profile</Button>
                            //   </ButtonGroup>
                            //   <h4 className="text-danger">{item.factCategory}</h4> 
                            //   <p>{item.factText}</p> 
                            //   <Checkbox disabled inline>Show On Map</Checkbox>
                            // </ListGroupItem>  



 
