import React from 'react'
import WeUI from 'react-weui';
import 'weui';
import Page from '../component/page';
import {Icon} from 'react-fa'

const {Button, CellsTitle, Cells, Cell, CellBody, CellFooter, CellHeader} = WeUI;

export default React.createClass({
    getInitialState: function() {
        return {
            item: {
                "positions" : [],
                "welfare" : [],
                "pics" : []
            }
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.get("http://localhost:8080/test/job.json?"+this.props.params.jid, function (result) {
            var obj = result[0];
            this.setState({
                item: obj
            });
            console.log("fetched data:");
            console.log(this.state);
        }.bind(this));
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    render() {
        console.log(this.state);
        console.log(this.state['item']);
        return (
            <Page className="cell" title="职位详情" subTitle="OOKK">
                <Cells>
                    <Cell>
                        <CellBody>
                            {this.state.item.company}
                        </CellBody>
                        <CellFooter>
                            {this.state.item.posttime}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            {this.state.item.welfare.map(function(object, i){
                                return (
                                    <span style={{color:`#3cc51f`, padding: `2px`,paddingRight: `8px`,paddingLeft: `8px`, marginRight: `5px`, borderRadius:`15px`, borderWidth:`1px`, borderColor:`#3cc51f`, borderStyle:`solid`}}>{object}</span>
                                );
                            }, this)}
                        </CellBody>
                    </Cell>
                </Cells>
                <CellsTitle>正在招聘的职位</CellsTitle>
                <Cells>
                    {this.state.item.positions.map(function(object, i){
                        return (
                            <Cell>
                                <CellBody>
                                    {object.name}
                                </CellBody>
                                <CellFooter>
                                    {object.salary}
                                </CellFooter>
                            </Cell>
                        );
                    }, this)}
                </Cells>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Icon name="map-marker" style={{marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            {this.state.item.address}
                        </CellBody>
                    </Cell>
                </Cells>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Icon name="edit" style={{marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            职位描述
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellBody>
                            <span style={{color:`#333333`}}>{this.state.item.description}</span>
                        </CellBody>
                    </Cell>
                </Cells>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Icon name="image" style={{marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            照片
                        </CellBody>
                    </Cell>
                    <Cell>
                        <CellBody>
                            {this.state.item.pics.map(function(object, i){
                                return (
                                    <img src={object} style={{width:80, height:80, marginRight: `5px`}}/>
                                );
                            }, this)}
                        </CellBody>
                    </Cell>
                </Cells>
            </Page>
        )
    }
})
