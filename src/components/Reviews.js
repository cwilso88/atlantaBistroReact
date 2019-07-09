import React, { Component } from 'react'

class Reviews extends Component {
    state = {
        currentReview: 0
    }
    
    leftClick = (state, props) => {
        if(state.globalState.currentReview == 0 ) {
          console.log('do nothing')
        } else {
          reviewLeft();
        }
      }
    
      rightClick = (state, props) => {
        if(state.globalState.currentReview == (reviewIndex - 1)) {
          console.log('do nothing')
        } 
      }

      currentReviewDisplay = (state, actions) => {
        return (
          <div>
            <h5 className="reviews-title">Reviews</h5>
            <h2>{reviewInfo[currentReview].company}</h2>
            <h4>{reviewInfo[currentReview].highlight}</h4>
            <p>{reviewInfo[currentReview].review}</p>
          
            <div className="author"><strong>{reviewInfo[currentReview].author}</strong>- <em>{reviewInfo[currentReview].authorInfo}</em></div>
          </div>
        )
      }

    render() {
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
                                <i onclick={() => console.log(state.globalState.currentReview - 1)} class={`fa fa-arrow-left ${(currentReview > 0) ? 'ready' : ''}`}></i>
                                <i onclick={() => console.log(state.globalState.currentReview + 1)} class={`fa fa-arrow-right ${(currentReview == (reviewIndex - 1)) ? '' : 'ready'}`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Reviews;
