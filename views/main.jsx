'use babel';

import React from 'react';
import {Label,Card,Menu, Header,Sidebar} from 'semantic-ui-react';
var loki = require('lokijs');
var read = require('read-file-utf8')
export default class Main extends React.Component {
constructor(props){
super(props);
  this.state = {
            "activeItem": window.location.pathname,
            "visible": false
        };
	this.handleItemClick = this.handleItemClick.bind(this);
} 

handleItemClick (e, { name }){ 
var db = new loki('loki.json')
var children = db.addCollection('children')
children.insert({name:'Sleipnir', legs: 8})
var data = read(__dirname + '/db.json')
this.setState({ activeItem: name });
console.log(db);
}
  render() {
  const { activeItem } = this.state
  return  (
<Sidebar as={Menu} width='thin' visible={true} icon='labeled' vertical inverted>
        <Menu.Item name='Alunos' active={activeItem === 'Alunos'} onClick={this.handleItemClick} />
        <Menu.Item name='Turmas' active={activeItem === 'Turmas'} onClick={this.handleItemClick} />
      </Sidebar>
      )}
}
