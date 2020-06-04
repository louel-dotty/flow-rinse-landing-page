import React, { useEffect,useState } from 'react';
import {Table, Form,InputGroup,Button,FormControl} from 'react-bootstrap';
import axios from 'axios';
import ArrowUp from '../assets/img/icon-up.svg';
import ArrowDown from '../assets/img/icon-down.svg';
import Remove from '../assets/img/icon-remove.svg';
import styled from 'styled-components';
import SearchBar from './SearchBar.js';

const TableWrapper = styled.div`
    margin-top: 6.500em;
`;

const TableHeaderWrapper = styled.div`
    margin-bottom: 3.500em;
`;

const TableFooterWrapper = styled.div`
    margin-top: 4.563em;
    display: flex;
    justify-content: space-between;
    margin-bottom: 9.750em;
`;

const TimeSheetTable = (props) => {
    const [projectList, setProject] = useState([]);
    useEffect(() => {
        axios.get('http://timeagotchi-v2-backend.test/api/v1/projects',
        {
            headers:{
                'Authorization': `Bearer ${props.UserToken}`
            }
        })
        .then(res =>{
            // console.log(res);
            // console.log(res.data.data);
            setProject(res.data.data)
            
        })
        .catch(() => {
            console.log('error')
        })
    },[]);


    return(
        <> 
            <TableWrapper> 
                <TableHeaderWrapper className="d-flex justify-content-between">
                    <h2 class="text-2 text-left">BOOKING</h2>
                    {/* <ul>
                        <li>{projectList.map(user => <div key={user.id}>{user.id}</div>)}</li>
                    </ul> */}
                    <Form.Control as="select" className="date-dropdown border-0">
                        <option className="option-bg" disabled selected>Arenas, Angelica</option>
                        <option className="option-bg">2</option>
                        <option className="option-bg">3</option>
                        <option className="option-bg">4</option>
                        <option className="option-bg">5</option>
                    </Form.Control>
                </TableHeaderWrapper>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>PROJECT</th>
                            <th>DATE</th>
                            <th>DURATION</th>
                            <th>DESCRIPTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>
                                <div className="form-button-wrapper d-flex justify-content-end">
                                    <img className="btn-rearange" src= {ArrowUp}/>
                                    <img className="btn-rearange" src= {ArrowDown}/>
                                    <img className="btn-remove" src= {Remove}/>
                                </div>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>
                                <div className="form-button-wrapper d-flex justify-content-end">
                                    <img className="btn-rearange" src= {ArrowUp}/>
                                    <img className="btn-rearange" src= {ArrowDown}/>
                                    <img className="btn-remove" src= {Remove}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>
                                <div className="form-button-wrapper d-flex justify-content-end">
                                    <img className="btn-rearange" src= {ArrowUp}/>
                                    <img className="btn-rearange" src= {ArrowDown}/>
                                    <img className="btn-remove" src= {Remove}/>
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                    </Table>
                    <TableFooterWrapper>
                        <SearchBar ProjectList={projectList}/>
                    </TableFooterWrapper>
                </TableWrapper> 
                <Form.Group className="d-flex align-items-center flex-column">
                    <Button variant="secondary" type="submit" className="w-400 mb-4">
                        Save
                    </Button>
                    <Button variant="primary" type="submit" className="w-400">
                        Book
                    </Button>
                </Form.Group>
            </>
    );
}

export default TimeSheetTable;