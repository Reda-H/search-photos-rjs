import React, { Component } from 'react';

export default class MosaicPictures extends Component{
    render() {
        const pictures = this.props.pictures;
        return (
            <>
                {
                    pictures.map((pic) => <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.full}
                            width="50%"
                            height="50%"
                         />
                         {/* <p className="card--username">
                             {pic.user.name}
                         </p> */}
                    </div>)
                }
            </>
        );
    }
}