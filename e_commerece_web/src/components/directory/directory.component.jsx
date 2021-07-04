import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';
// import HomePage_Data from './homepage.data';

// class Directory extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             sections: HomePage_Data
//         }
//     }

//     render(){
//         return (
//             <div className='directory-menu'>
//                 {this.state.sections && this.state.sections.map(({ id, ...otherSectionProps }) => (
//                     <MenuItem key={id} {...otherSectionProps} />
//                 ))}
//             </div>
//         )
//     }
// }

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections && sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);