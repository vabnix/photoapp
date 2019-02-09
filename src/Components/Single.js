import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const single =(props) => {
    {/*console.log(props.match)*/}
    const {match,posts}=props
    const id= Number(match.params.id)
    const photo = posts.find((post) => {
        return post.id===id;
    });
    const index = posts.findIndex((post) => {
        return post.id===id;
    });

    const comments = props.comments[id] || [];
    return(
        <div className='single-photo'>
            <Photo photo={photo} {...props} index={index}> </Photo>
            <Comments addComments={props.addComments} comments={comments} id={id}></Comments>
        </div>
    );
}

export default single;