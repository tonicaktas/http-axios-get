import React, { Component } from 'react'
import axios from 'axios';

/*
1.skapa constructor och ens state för att spara response
2.sen körs render() och ser att posts är toma 
3.sen förs componentDidMounth() och hämtar resonese och uppdaterar state
4.när posts är inte längre toma loopar man ut de på sidan

1.constructor
2.render
3.get

*/ 

 class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(responese => {
            console.log(responese)
            this.setState({posts:responese.data})
        }).catch()
    }

    render(){
        const {posts} = this.state;
        return(
            <div>
            List PostList
            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title} </div>): null
            }
            </div>
        )
    }
}

export default PostList;