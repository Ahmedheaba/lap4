import React, { Component } from 'react';

class Movies extends Component {

    state = { 
        data:[]
     }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then(res => res.json())
        .then(res => {
            this.setState({data:res.data})
        })
    }
    render() { 
        return ( 
            <div>
                {this.state.data.map(movie =>{
                    return( 
                        <Movie movie={movie} />
                    )
                })}
            </div>
         );
    }
}
class Movie extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{float:'left'}}>
                <img src={this.props.movie.avatar} />
                <h3>{this.props.movie.first_name}</h3>
                <h3>{this.props.movie.last_name}</h3>
            </div>
         );
    }
}
  
export default Movies;