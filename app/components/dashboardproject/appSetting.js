/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import UserAccess from './userAccess';
import Upgrade from './upgrade';

import {Tab, Panel, Nav, NavItem, FormGroup, InputGroup, FormControl, Button, Clearfix} from 'react-bootstrap';

const AppSetting = (props) => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="addDev">
            <div>
                <Nav bsStyle="tabs">
                    <NavItem eventKey="addDev">
                        Add Developers
                    </NavItem>
                    <NavItem eventKey="keys">
                        App Keys
                    </NavItem>

                    <NavItem eventKey="third">
                        Upgrade
                    </NavItem>
                </Nav>
                <Tab.Content animation>
                    <Tab.Pane eventKey="addDev">
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" placeholder="example@example.com"/>
                            </InputGroup>
                            <Button bsStyle="primary">Invite</Button>
                        </FormGroup>
                        <Clearfix/>
                        <UserAccess id={props.id}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="keys">
                        <FormGroup>
                            <label>App ID</label>
                            <InputGroup>
                                <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                                <FormControl type="text" value={props.id} disabled/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="firstName">Master Key</label>
                            <InputGroup>
                                <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                                <FormControl type="text" value={props.masterKey} disabled/>
                                <InputGroup.Addon><strong>GENERATE NEW</strong></InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="firstName">Client Key</label>
                            <InputGroup>
                                <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                                <FormControl type="text" value={props.clientKey} disabled/>
                                <InputGroup.Addon><strong>GENERATE NEW</strong></InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <Clearfix/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Upgrade onSubmit={handleSubmit} planId={props.planId}/>
                    </Tab.Pane>
                </Tab.Content>

            </div>
        </Tab.Container>
    );
};

export default AppSetting;
