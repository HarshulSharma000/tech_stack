//@flow
import React,{Component} from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	LayoutAnimation} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{

	componentWillUpdate(){
		console.log("Why not animating dude?");
/*
Warning: checkPropTypes has been moved to a separate package. Accessing React.checkPropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. 
(https://fb.me/migrating-from-react-proptypes)
*/
		LayoutAnimation.spring();
	}
	renderDescription(){
		const {library,expanded} = this.props;
		if(expanded){
			return(
				<CardSection>
					<Text style = {{flex: 1,fontSize: 18}}> 
						{library.description} 
					</Text>
				</CardSection>
			);
		}
	}
	render(){
		const {library} = this.props;
		return(
			<TouchableWithoutFeedback
			onPress = {() => this.props.selectLibrary(library.id)}
			>
				<View>
					<CardSection>
						<Text style = {styles.titleStyle}> {library.title} </Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle:{
		fontSize: 35,
		paddingLeft: 18
	}
};

const mapStateToProps = (state,ownProps) => {
	const expanded = (ownProps.library.id === state.selectedLibraryId);
	//console.log(state);
	return {expanded};
};

export default connect(mapStateToProps,actions)(ListItem);
