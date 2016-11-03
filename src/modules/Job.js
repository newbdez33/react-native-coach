import React from 'react'
import Page from '../component/page';

export default React.createClass({
    render() {
        return (
            <Page className="cell" title="职位详情">
                <div>Job #{this.props.params.jid}</div>
            </Page>
        )
    }
})
