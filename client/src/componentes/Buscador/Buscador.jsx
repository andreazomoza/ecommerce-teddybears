import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { traerTodo } from '../../redux/actions/index';
import { addArticle } from '../../redux/actions/index';
import { Link } from 'react-router-dom';



function mapStateToProps(state) {
  return {
    articles: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    traerTodo: title => dispatch(traerTodo(title))
  };
}

export class Post extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }
  
  
  handleSubmit(event) {
    event.preventDefault();
    const inputText = this.myRef.current.value
    this.props.traerTodo(inputText);
    console.log(inputText+ 'soy input text');
  }
 
  render() {
    
    
    return (
      <div>
        <h2>Buscador</h2>
         
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

