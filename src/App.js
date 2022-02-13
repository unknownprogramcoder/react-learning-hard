import React, { Component } from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      showed_subject_id:2,
      selected_content_id:3,
      welcome: {title:'Oh.. bxxxx', desc:'Hello, Motherfxxxer'},
      subjects:[
        {id:1, title: 'WEB', sub:'World Wide Web!'},
        {id:2, title: 'JEB', sub:'Lead developer of Minecraft!'},
        {id:3, title: 'NOTCH', sub:'Creator of Minecraft!'}
      ],
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _maintitle, _sub = null;
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      var i = 0;
      while(i < this.state.subjects.length){
        var data = this.state.subjects[i];
        if(data.id === this.state.showed_subject_id){
          _maintitle = data.title;
          _sub = data.sub;
          break;
        }
        i = i+1;
      }
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
      var i = 0;
      while(i < this.state.subjects.length){
        var data = this.state.subjects[i];
        if(data.id === this.state.showed_subject_id){
          _maintitle = data.title;
          _sub = data.sub;
          break;
        }
        i = i+1;
      }
    }
    return (
      <div className="App">
        <Subject
        title={_maintitle} sub={_sub}
        onChangePage={function(){
          if(this.state.showed_subject_id >= 3){
            this.setState({
              mode:'welcome',
              showed_subject_id:1
            });
          } else{
            var new_subject_id = this.state.showed_subject_id + 1;
            this.setState({
              mode:'welcome',
              showed_subject_id: new_subject_id
            });
          }
        }.bind(this)}></Subject>

        <TOC
        data={this.state.contents}
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}></TOC>

        <Content
        title={_title} desc={_desc}
        ></Content>
      </div>
    );
  }
}

export default App;
