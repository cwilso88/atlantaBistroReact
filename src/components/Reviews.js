import React, { Component } from 'react';
import reviewsData from '../data/reviewsData';

class Reviews extends Component {
    state = {
        currentReview: 0
    }

    reviewRight = () => {
      if(this.state.currentReview < 4)
        this.setState({
          currentReview: this.state.currentReview + 1
        });
    }

    reviewLeft = () => {
      if(this.state.currentReview > 0){
        this.setState({
          currentReview: this.state.currentReview - 1
        });
      }
    }

    currentReviewDisplay = (props) => {
      const { currentReview } = this.state;
    
      return (
        <div>
          <h5 className="reviews-title">Reviews</h5>
          <h2>{reviewsData[currentReview].company}</h2>
          <h4>{reviewsData[currentReview].highlight}</h4>
          <p>{reviewsData[currentReview].review}</p>
        
          <div className="author"><strong>{reviewsData[currentReview].author}</strong>- <em>{reviewsData[currentReview].authorInfo}</em></div>
        </div>
      )
    }
    
    leftClick = (props) => {
        
          this.reviewLeft();
       
      }
    
      rightClick = (props, ) => {
        if(this.currentReview > 4) {
          console.log('do nothing');
        } else {
          this.reviewRight();
        }
      }

      

    render() {
          const { currentReview } = this.state;
        
          return (
            <section id="Reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 side-img">
                            <img src="https://image.freepik.com/free-photo/chef-with-his-arms-crossed-over-white-background_1368-2792.jpg" alt="Master Chef"/>
                        </div>
                        <div className="col-md-4">
                            {this.currentReviewDisplay()}
                            <div className="arrows">
                             
                                <i  onClick={this.leftClick} className={`fa fa-arrow-left ${(currentReview > 0) ? 'ready' : ''}`}></i>
                                <i  onClick={this.rightClick} className={`fa fa-arrow-right ${(currentReview === 4) ? '' : 'ready'}`}></i>
                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Reviews;
