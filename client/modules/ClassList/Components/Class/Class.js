import React, { PropTypes, Component } from 'react';
import styles from './Class.css';
import moment from 'moment';
import { deleteClass } from '../../ClassListActions';
import { connect } from 'react-redux';

/**
    Renders an individual class.
    @param {Object} props The properies inherited from DateList
    @param {Object} context The context.
*/

class Class extends Component {
    constructor(props){
        super(props);
        this.state = {
            hover:false,
        };
        this.hover = this.hover.bind(this);
        this.delete = this.delete.bind(this);
    }

    hover() {
        if(this.state.hover){
            this.setState({ hover: false });
        }
        else {
            this.setState({ hover: true });
        }
    }

    delete(id) {
        var _class = {
            id: id,
        }
        this.props.handleDelete(_class);
    }

    render() {
        var stripeStyle = {
            backgroundColor: this.props._class.class_color
        }

        return (
            <div className={styles['class']} onMouseEnter={this.hover} onMouseLeave={this.hover}>
                <div className={styles['class-text']}>
                {this.props._class.class_name}
                <br/>
                {this.props._class.class_info}
                <br/>
                {this.props._class.class_times}
                </div>

                <div className={styles['options-container']}>
                    <div onClick={this.delete(this.props._class.id)} className={this.state.hover ? styles['class-X'] : styles['hidden']}>X</div>
                    <div style={stripeStyle} className={styles['class-color']}>
                    </div>
                </div>
            </div>
      );
    }
}

function mapStateToProps(state) {
    return {
    };
}

Class.propTypes = {
    _class: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

Class.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Class);
