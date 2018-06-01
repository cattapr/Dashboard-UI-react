import React, { Component } from 'react';

const PinnedPost = (props) => {
		return(<h4 className={props.chartTitleClass}><i class="fas fa-thumbtack fa-1x"></i> {props.chartTitle}</h4>)
}

export default PinnedPost;