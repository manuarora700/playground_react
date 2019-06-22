class App extends React.Component {
    render() {
        return (
        <div>
            <Hello 
            to="Manu" 
            from="Paaji" 
            num={7}
            data={[4, 2, 3, 1]}
            bangs={4}
            img = "https://media3.giphy.com/media/3o7bu12GHm4G5frn6U/giphy.gif"
            />
            <Hello 
                to="Adele" 
                from="Rolling in the deep" 
                num={7}
                data={[4, 2, 3, 1]}
                bangs={4}
                img = "https://media3.giphy.com/media/3o7bu12GHm4G5frn6U/giphy.gif"
            />
         </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));