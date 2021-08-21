import {Component, ErrorInfo} from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component{
    state = {
        hasError: false
    }
    componentDidCatch(error:Error, errorInfo: ErrorInfo) {
        this.setState({hasError: true});
    }
    render(){
        return this.state.hasError?  <ErrorIndicator/> : this.props.children
    }
}
