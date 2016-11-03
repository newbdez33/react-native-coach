import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>Job #{this.props.params.jid}</div>
        )
    }
})
