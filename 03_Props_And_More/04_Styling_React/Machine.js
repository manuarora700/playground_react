class Machine extends React.Component {
    render() {
        let msg;
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const colors = {fontSize: '50px', backgroundColor: 'purple'}
        
        return(
            <div className = "Machine">
                <p style = {colors}>{s1} {s2} {s3}<br/></p>
                <p>{winner ? 'Winner': 'Loser'}</p>
            </div>
        );
            
    }
}
