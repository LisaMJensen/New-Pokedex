import React from 'react';

class PokeSprite extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <img src={this.props.sprite}></img>
            </div>
        )
    }
}

PokeSprite.propTypes = {
    sprite: PropTypes.string,
};

export default PokeSprite;

