import React, { Component } from 'react';

class SpecialMenu extends Component {
    state = {
        menuInfo: [
            {
              title: 'Super BBQ Grill No Smoke',
              description: 'Fried eggs, fried bacon, soft bun, and soy sauce.',
              price: '17',
              id: '1'
            },
            {
              title: 'Midtown Atlanta Chicken Grill',
              description: 'Spicy grilled chicken marinated in a honey glaze.',
              price: '21',
              id: '2'
            },
            {
              title: 'Quinoa and Apple Cider Dumplins',
              description: 'Tasty quinoa sauteed in delicious sweet applie cider.',
              price: '15',
              id: '3'
            },   
        ]
    } 
        loopMenu = () => {
            return this.state.menuInfo.map(function(item){
             return(
               <div className="col-md-4" key={item.id}>
                 <div className="box">
                   <div className="box-img">
                     <div className="price-circle">${item.price}</div>
                   </div>
                   <span className="title">{item.title}</span>
                   <p className="details">{item.description}</p>
                 </div>
             </div>
             )
           })
        }


    render() {
        return (
            <section id="SpecialMenu">
                <div className="container">
                    <h5 className="specialMenu-title">Special Menu</h5>
                    <h2>Delicious Flavor of Summer</h2>
                    <div className="row boxes">  

                        {this.loopMenu()}

                    </div>

                    <a href="https://i.pinimg.com/originals/bd/1f/99/bd1f99adebf27169ebd87a128094efe1.jpg" className="link">View full menu</a>
          
                </div>
            </section>
        )
    }
}

export default SpecialMenu;
