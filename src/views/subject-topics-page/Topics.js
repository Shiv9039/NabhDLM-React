import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@mui/material';

// project imports
import TotalIncomeLightCard from './TotalIncomeLightCard';
import { gridSpacing } from 'store/constant';

function Topic() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const { subject } = useParams();
    const [topicName, setTopicName] = useState([]);
    useEffect(() => {
        async function fetchTopics() {
            const res = await axios({
                url: 'https://reactndm.herokuapp.com/topic',
                method: 'GET'
            });
            setTopicName(res.data);
            // console.log('topics ', res.data);
        }
        fetchTopics();
    }, []);
    let navigate = useNavigate();
    function routeChange(subject) {
        let path = `${subject}`;
        // console.log(path);
        navigate(path);
    }
    return (
        <>
            <h1>{subject.toUpperCase()}</h1>
            {/* <ul>
                {topicName.map((item) => (
                    <li key={item.id}>{item.topic}</li>
                ))}
            </ul> */}
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {topicName.map((item) => (
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
                                    routeChange(item.topic);
                                }}
                            >
                                <TotalIncomeLightCard isLoading={isLoading} topic={item.topic} />
                            </Grid>
                            // </Link>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Topic;
