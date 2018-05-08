require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

var imageDatas=require('../imageDatas/imageDatas.json');

imageDatas=(function (imageArr){
	for(var i=0,j=imageArr.length;i<j;i++){
		var imageSingle=imageArr[i];
		imageSingle.imageURL=require('../images/'+imageSingle.fileName);
		imageArr[i]=imageSingle;
	}
	return imageArr;
})(imageDatas);

class ImageFigure extends React.Component{
	render(){
		return(
			<figure>
				<img src={this.props.data.imageURL}
						 alt={this.props.data.title}
				/>
				<figcaption>
					<h2>
						{this.props.data.title}
					</h2>
				</figcaption>
			</figure>
		);
	}
}

class AppComponent extends React.Component {
  render() {
  	var imageFigures=[];
  	
  
  	imageDatas.forEach(function (v,k){
  		imageFigures.push(<ImageFigure data={v} key={k}/>);
  	});
  	
    return (
      <div className="stage">
      	<section className="img-sec">
      		{imageFigures}
      	</section>
      	<nav className="nav-sec">
      	</nav>
      	<ImageFigure/>
      </div>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
