import React from 'react';

class RandomOrder extends React.Component {
    makeRandomOrder = (len) => {
        let order = [];
        for(let i = 0; i < len; i++){
            order[i] = i;
        }
    
        for(let i = 0; i < len; i++){
            let randIndex = Math.floor(Math.random() * (len - i));
            [order[len - i], order[randIndex]] = [order[randIndex], order[len - i]];
        }
    
        return order;
    }

    render () {
        const {len} = this.props

        return this.makeRandomOrder(len);
    }
}

export default RandomOrder;

