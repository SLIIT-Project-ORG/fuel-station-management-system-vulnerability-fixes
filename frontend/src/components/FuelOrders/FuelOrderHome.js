import axios from 'axios';
import { AppBar, Stack, Paper, Button, Box, FormGroup, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import OrderImage from '../../images/OrderPage.png';
import ApprovePage from './ApprovePage';

export const FuelOrderHome = () => {

    const [institute,setInstitute] = useState("");
    const [city,setCity] = useState("");
    const [fax_no,setFaxNo] = useState("");
    const [email,setEmail] = useState("");
    const [mobile_no,setMobileNo] = useState("");
    const [regstration_no,setRegistrationNo] = useState("");
    const [province,setProvince] = useState("");
    const [district,setDistrict] = useState("");
    const [document_links,setDocumentLink] = useState("");
    const [description,setDescription] = useState("");

    const reqObject = {
        institute,city,fax_no,email,mobile_no,regstration_no,province,district,document_links,description
    }

    //Save Data
    const saveFuelOrder = async (obj)=>{
        await axios.post("http://localhost:8000/fuel-order/",obj)
        .then((res)=>{
            alert("Data Saved Successfully");
            window.location.href = "/";
        }).catch((err)=>{
            alert("Data save failed");
            console.log(err.message);
        })
    }

    return (
        <div>
            <div>
                <Stack spacing={2}>
                    <AppBar elevation={2} color={'error'}>
                        <h2>FUEL ORDER REQUESTS</h2>
                        <Button variant='outlined' color='inherit' sx={{ marginLeft: '1000px' }}>ORDER STATUS</Button>
                    </AppBar>
                </Stack>
            </div>
            <div>
                <Box alignItems={'center'} margin={'100px'} marginTop={'150px'}>
                    <Paper variant={'outlined'} sx={{ padding: '50px' }}>
                        <form onSubmit={()=>saveFuelOrder(reqObject)}>
                        <Stack rowGap={2}>
                            <div className='row'>
                                <div className='col'>
                                    <img src={OrderImage} alt={"logo"} width={300} height={300} />
                                </div>
                                <div className='col'>
                                    <FormGroup>
                                        <FormControl>
                                            <TextField variant='outlined' name='institute' id="institute" label="Institute Name" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setInstitute(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='city' id="city" label="City" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setCity(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='fax_no' id="fax_no" label="Fax No" size='small' type={'text'} onChange={
                                                (e)=>{
                                                    setFaxNo(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='email' id="email" label="Email" size='small' required validated type={'email'} onChange={
                                                (e)=>{
                                                    setEmail(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='mobile_no' id="mobile_no" label="Mobile No" size='small' required type={'tel'} onChange={
                                                (e)=>{
                                                    setMobileNo(e.target.value);
                                                }
                                            }></TextField><br />
                                        </FormControl>
                                        <Button variant='contained' color='error'> CANCEL</Button>
                                    </FormGroup>
                                </div>
                                <div className='col'>
                                    <FormGroup>
                                        <FormControl>
                                            <TextField variant='outlined' name='regstration_no' id="regstration_no" label="Registration No" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setRegistrationNo(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='province' id="province" label="Province" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setProvince(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='district' id="district" label="District" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setDistrict(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='document_links' id="document_links" label="Document Link" size='small' type={'text'} onChange={
                                                (e)=>{
                                                    setDocumentLink(e.target.value);
                                                }
                                            }></TextField><br />
                                            <TextField variant='outlined' name='description' id="description" label="Description" size='small' required type={'text'} onChange={
                                                (e)=>{
                                                    setDescription(e.target.value);
                                                }
                                            }></TextField><br />
                                        </FormControl>
                                        <Button variant='contained' color='primary' type='submit'>SUBMIT</Button>
                                    </FormGroup>
                                </div>
                            </div>
                        </Stack>
                        </form>
                    </Paper>
                </Box>
            </div>
        </div>
    )
}
