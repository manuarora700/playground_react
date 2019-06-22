class Hello extends React.Component {
    render() {
        // console.log(this.props.to);
        this.props.from = "BLUEEEEE";
        // shorthand 
        return <p>Hello {this.props.to} from {this.props.from}</p>
    }
}
