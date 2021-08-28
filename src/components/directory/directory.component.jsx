import React from "react";
import MenuItem from "../menu/menu-item.component";
import "./directory.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  console.log("section",sections);
  // constructor() {
  //   super();

  //   this.state = {
  //     sections: [
  //       {
  //         title: "hats",
  //         imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //         size: 'large',
  //         id: 1,
  //         linkUrl:'shop'
  //       },
  //       {
  //         title: "jackets",
  //         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //         size: 'large',
  //         id: 2,
  //         linkUrl:''
  //       },
  //       {
  //         title: "sneakers",
  //         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //         size: 'large',
  //         id: 3,
  //         linkUrl:''
  //       },
  //       {
  //         title: "womens",
  //         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //         size: "large",
  //         id: 4,
  //         linkUrl:''
  //       },
  //       {
  //         title: "mens",
  //         imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //         size: "large",
  //         id: 5,
  //         linkUrl:''
  //       },
  //     ],
  //   };
  // }

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
