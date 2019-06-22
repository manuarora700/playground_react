class App extends React.Component {
    render() {
        return (
        <div>
            <Hello to="Manu" from = "Paaji" />
            <Hello to = "Lol" from = "Waah modiji waah" />
         </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));