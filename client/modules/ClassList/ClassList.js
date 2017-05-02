import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import { fetchClasses, createClassRequest } from './ClassListActions';
import Class from './Components/Class/Class';
import ReactModal from 'react-modal';
import NewClassForm from './Components/NewClassForm/NewClassForm';
import styles from './ClassList.css';

class ClassList extends Component {
    componentDidMount() {
           this.props.dispatch(fetchClasses());
           this.setState({ color: this.props.color });
    }

    constructor () {
        super();
        this.state = { color: '', buttonHover: false };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.createClass = this.createClass.bind(this);
        this.hover = this.hover.bind(this);
        this.exitHover = this.exitHover.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    createClass (formdata, state) {
        this.handleCloseModal();
        var classes = this.props.classes;
        this.props.dispatch(createClassRequest(formdata, classes)).then(() => {
            console.log(this.state);
        });
    }
    hover () {
        this.setState({ buttonHover: true });
    }

    exitHover () {
        this.setState({ buttonHover: false });
    }
    render() {
        var theme = this.props.color;
        var dateListColors = [
            tinycolor(theme).darken(10).toString(),
            tinycolor(theme).darken(5).toString(),
            tinycolor(theme).darken(13).toString(),
            tinycolor(theme).darken(8).toString(),
        ]
        var classContainerStyle={
            background: this.state.color,
        }

        var createBg = tinycolor(theme).darken(9).toString();
        var createClassDiv = {
            background: createBg,
        }
        var buttonHover = {
            color: theme,
        }

        return (
            <div style={classContainerStyle} className={styles['classes-list-container']}>
                <div style={createClassDiv} className={styles['createClass']}>
                    <label className={styles['classes-label']}> Classes </label>
                    <div onMouseEnter={() => {this.hover()}} onMouseLeave={() => {this.exitHover()}} style={this.state.buttonHover ? buttonHover : null} className={styles['create-class-button']} onClick={this.handleOpenModal}>New Class</div>
                    <div>
                    <ReactModal
                           isOpen={this.state.showModal}
                           contentLabel="Create Class"
                           className={styles['create-class-modal-container']}
                           >
                           <button className={styles['close-class-pane']} onClick={this.handleCloseModal}>X</button>
                           <NewClassForm createClass={this.createClass}/>
                     </ReactModal>
                     </div>
                </div>
                <div className={styles['classes']}>
                {
                    this.props.classes.map((_class, index) => (
                      <div key={_class.id}>
                        <Class
                            _class = {_class}
                            color = {dateListColors[index%(dateListColors.length)]}
                        />
                      </div>
                    ))
                }
                </div>
            </div>
        );
  }
}

ClassList.need = [() => { return fetchClasses(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        classes: state.classlist.classes,
        color: state.settings.color,
    };
}

ClassList.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

ClassList.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ClassList);
