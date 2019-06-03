class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Wah Modiji Wah!</h1>
                <img src="https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_400x400.png" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));