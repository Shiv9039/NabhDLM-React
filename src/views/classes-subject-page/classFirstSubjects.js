import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Grid, Stack, Fab, Modal, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// project imports
import TotalIncomeLightCard from './TotalIncomeLightCard';
import { gridSpacing } from 'store/constant';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
// ==============================|| Class Subjects ||============================== //

const Subjects = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [subjectName, setSubjectName] = useState([]);
    useEffect(() => {
        async function fetchSubjects() {
            const apiData = await axios({
                url: 'http://localhost:3000/subjects',
                method: 'GET'
            });
            // console.log('this is fetched api data', apiData.data);
            setSubjectName(apiData.data);
        }
        fetchSubjects();
    }, []);
    let navigate = useNavigate();
    function routeChange(subject) {
        let path = `${subject}`;
        // console.log(path);
        navigate(path);
    }
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <Stack direction="row" spacing={1} mb={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Fab color="primary" aria-label="add" size="small" sx={{ borderRadius: '30%' }} onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Stack>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {subjectName.map((item) => (
                            // <Link to={`classfirst/${item.subject}`} key={item.id}>
                            // <Grid item lg={4} md={6} sm={6} xs={12} key={item.id} onClick={routeChange(item.subject)}>
                            <Grid
                                item
                                lg={4}
                                md={6}
                                sm={6}
                                xs={12}
                                key={item.id}
                                onClick={() => {
                                    routeChange(item.subject);
                                }}
                            >
                                <TotalIncomeLightCard isLoading={isLoading} subject={item.subject} />
                            </Grid>
                            // </Link>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Subjects;
