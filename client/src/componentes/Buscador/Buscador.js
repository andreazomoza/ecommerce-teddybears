import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../redux/actions/index';
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
    getData: title => dispatch(getData(title))
  };
}

export class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: ""
    // };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }
  
  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }
  handleSubmit(event) {
    event.preventDefault();
    const inputText = this.myRef.current.value
    this.props.getData(inputText);
    console.log(inputText+ 'soy input text');
  }
 
  render() {
    //const { title } = this.state;
    
    return (
      <div>
        <h2>Buscador</h2>
        
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={this.props.id}
              ref={this.myRef}
            />
            
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div>articuloss
          {/*this.props.map(this.props=>(
            <tr>
              <td>{this.props.nombre}</td>
              <td>{this.props.descripcion}</td>
              <td><img src={this.props.img} alt=""/></td>
          </tr> ))*/}
        </div>

        
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

