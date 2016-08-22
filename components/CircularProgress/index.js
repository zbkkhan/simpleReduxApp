import React from 'react';
import PulseLogo from '../PulseLogo';


export default class CircularProgress extends React.Component {
    constructor(props) {
        super(props);
		var ratio=this.props.radius/160;
        this.state = {
			//Pulse Code
			pulseHeight:200*ratio,
			pulseWidth:200*ratio,
			grow: true,
			pulseOpacity:0.75,
			percentage:this.props.percentage,
			progressOpacity:1,
			finished:false
        };
    }
	componentDidUpdate(){
		
//			this.setState({percentage:this.state.percentage+5});
		
		
	}
	//Pulse Code
	changeSize(){
		var ratio=this.props.radius/160;
		if(this.state.percentage<100){
//			this.setState({percentage:this.state.percentage+0.5});
			if(this.state.grow==true){
				if(this.state.pulseHeight <= 250*ratio){
					this.setState({
					pulseHeight:this.state.pulseHeight + 3,
					pulseWidth: this.state.pulseWidth +3,
					pulseOpacity: this.state.pulseOpacity +0.025	
					});
				}
				else{
					this.setState({grow:false});
				}
			}
			else if(this.state.grow==false){
				if(this.state.pulseHeight >= 200*ratio){
					this.setState({
					pulseHeight:this.state.pulseHeight - 3,
					pulseWidth: this.state.pulseWidth -3,
					pulseOpacity: this.state.pulseOpacity -0.025
					});
				}
				else{
					this.setState({grow:true});
				}
			}
		}
		
		else{
			if(this.state.pulseOpacity<=0){
				this.setState({finished:true});
			}
			this.setState({
					pulseHeight:this.state.pulseHeight + 3 ,
					pulseWidth: this.state.pulseWidth +3 ,
					pulseOpacity: this.state.pulseOpacity -0.050,
					progressOpacity:this.state.progressOpacity-0.1
					});
		}
		

	}
	componentDidUpdate(){
		if(this.state.percentage!= this.props.percentage){
			this.setState({percentage:this.props.percentage});
		}
		
		
	}
	componentDidMount(){
		this.setState({percentage:this.props.percentage+20});
		
		//Pulse Code
		var th= this;
		setInterval(function(){
			th.changeSize();
			
		},50);
	}
    render() {
        const radius = this.props.radius - this.props.strokeWidth / 2;
        const width = this.props.radius * 2;
        const height = this.props.radius * 2;
        const viewBox = `0 0 ${width} ${height}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.state.percentage / 100;
		
		//Pulse Code
		var pulseHeight=this.state.pulseHeight;
		var pulseWidth= this.state.pulseWidth;
		var pulseChange=275-pulseWidth;
       var imgStyle={
		 	margin:pulseChange/2,
			height: pulseHeight,
		 	width: pulseWidth,
		 	opacity: this.state.pulseOpacity,
		   	
		 
	   };
		var ratio=this.props.radius/160;
		var pulseStyle={
		marginLeft:this.props.radius/1.4,
			marginTop:this.props.radius/1.5
		};
		var progressStyle={
			opacity:this.state.progressOpacity,
			
		};

	if(this.state.finished==false){
		      return (
			
			<div className="MainComponent"  >
				<div className="ProgressContainer"  >
				          <svg
							   style={progressStyle}
                className="CircularProgress"
                width={this.props.radius * 2}
                height={this.props.radius * 2}
                viewBox={viewBox}>
                <circle
					
                    className="CircularProgress-Bg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
					
                    className="CircularProgress-Fg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />

	<div className="PulseLogo" style={pulseStyle}>
					<img src="../../img/loudtronix_logo.png" style={imgStyle} />
							  </div>
				
			
				
            	</svg>
				
					</div>
			</div>
  
        );
		
		}
		else{
			return(<div></div>);
		}
		
  
    }
}

CircularProgress.defaultProps = {
    radius: 50,
    percentage: 0,
    strokeWidth: 1
};
