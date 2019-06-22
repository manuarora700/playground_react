class App extends React.Component {
    render() {
        return (
        <div>
            <Friend 
                name = "Manu"
                hobbies = {['Basketball', 'Coding', 'Dancing']}
            />
            <Friend 
                name = "Paaji"
                hobbies = {['Living', 'Enjoying', 'Sleeping']}
            />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));