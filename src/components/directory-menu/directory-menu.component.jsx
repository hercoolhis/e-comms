import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

import "./directory-menu.styles.scss"

const DirectoryMenu = ({ sections }) =>  {    
    
        return (
            <div className="directory-menu">
                {
                    sections.map(
                        ({id, ...otherSectionProps}) => 
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    )                        
                }
            
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector(
  {
    sections: selectDirectorySections
  }
);


export default connect(mapStateToProps, null)(DirectoryMenu);