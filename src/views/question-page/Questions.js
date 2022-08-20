import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Box,
    Paper,
    Stack,
    styled,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormHelperText,
    FormLabel,
    Button,
    CardActions,
    Backdrop,
    Modal,
    Fade
} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { padding } from '@mui/system';
import parse from 'html-react-parser';

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

const rightAlign = {
    display: 'flex',
    justifyContent: 'flex-end'
    // marginLeft: 'auto'
};
const centerAlign = {
    display: 'flex',
    justifyContent: 'center'
    // marginLeft: 'auto'
};
function Question() {
    const questions = [
        {
            id: 0,
            question: '',
            options: [
                {
                    optionId: 1,
                    value: ' ',
                    isCorrect: false,
                    selected: false
                },
                {
                    optionId: 2,
                    value: ' ',
                    isCorrect: false,
                    selected: false
                },
                {
                    optionId: 3,
                    value: ' ',
                    isCorrect: false,
                    selected: false
                },
                {
                    optionId: 4,
                    value: ' ',
                    isCorrect: false,
                    selected: false
                }
            ]
        }
    ];
    const [question, setQuestion] = useState(questions);
    const [value, setValue] = useState([]);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [questionNumber, setQuestionNumber] = useState(0);
    // const [attempt, setAttempt] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        async function fetchQuestion() {
            const res = await axios({
                url: 'http://localhost:3000/questions',
                method: 'GET'
            });
            setQuestion(res.data);
            // console.log(res.data[0].question);
        }
        fetchQuestion();
    }, []);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    const handleRadioChange = (event, questionDetails) => {
        setValue(event.target.value);
        // console.log('selected value', event.target.value);
        // console.log('question detail parameter oringnal', questionDetails);
        // if (event.target.value) {
        let newQuestions = question;
        // console.log('New question list', newQuestions);
        for (let i = 0; i < questionDetails.options.length; i++) {
            if (questionDetails.options[i].value == event.target.value) {
                questionDetails.options[i].selected = true;
            } else {
                questionDetails.options[i].selected = false;
            }
        }
        // console.log('check question detail update or not', questionDetails);
        newQuestions[questionNumber] = questionDetails;
        // console.log('newQuestion value update or not', newQuestions);
        setQuestion(newQuestions);
        // }
        setHelperText(' ');
        setError(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (value) {
        //     setHelperText('Option 1 is clicked');
        //     setError(false);
        // } else if (value === item.option2.value) {
        //     setHelperText('Option 2 is clicked');
        //     setError(false);
        // } else if (value === item.option3.value) {
        //     setHelperText('Option 3 is clicked');
        //     setError(false);
        // } else if (value === item.option4.value) {
        //     setHelperText('Option 4 is clicked');
        //     setError(false);
        // } else {
        //     setHelperText('Please select an option.');
        //     setError(true);
        // }
    };
    const previousQuestion = () => {
        // debugger;
        setValue('');
        var count = questionNumber - 1;
        if (count >= 0) {
            setQuestionNumber(count);
        } else {
            alert('This is the first question');
        }
    };
    const nextQuestion = () => {
        setValue('');
        var count = questionNumber + 1;
        if (count < question.length) {
            setQuestionNumber(count);
        } else {
            alert('This is the last question');
        }
        setAnswer([...answer, value]);
    };
    const handleAnswer = () => {
        console.log('final submit');
    };
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography> Are you sure, You want to submit all questions answer</Typography>
                        <div style={centerAlign}>
                            <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={handleAnswer}>
                                Submit
                            </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
            <Card>
                <CardHeader title={'Question ' + (questionNumber + 1)} />
                <Grid container spacing={2} sx={{ pl: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            {/* <Item>xs=8</Item> */}
                            {parse(question[questionNumber].question)}
                        </Box>
                    </Grid>
                    <Grid item md={1} sx={{ borderRight: 1, pr: 2 }}></Grid>
                    <Grid item xs={12} md={5}>
                        {/* <div>
                            Attempt {attempt}/ {question.length}
                        </div> */}
                        <Box>
                            <form onSubmit={() => handleSubmit(event)}>
                                <FormControl sx={{ m: 3 }} error={error} variant="standard">
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="quiz"
                                        value={value}
                                        onChange={() => handleRadioChange(event, question[questionNumber])}
                                    >
                                        {question[questionNumber].options.map(
                                            (item) =>
                                                item.selected ? (
                                                    <FormControlLabel
                                                        checked={item.selected}
                                                        value={item.value}
                                                        control={<Radio />}
                                                        label={item.value}
                                                        key={item.optionId}
                                                    />
                                                ) : (
                                                    <FormControlLabel
                                                        value={item.value}
                                                        control={<Radio />}
                                                        label={item.value}
                                                        key={item.optionId}
                                                    />
                                                )
                                            // <FormControlLabel
                                            //     value={item.value}
                                            //     control={<Radio />}
                                            //     label={item.value}
                                            //     key={item.optionId}
                                            // />
                                        )}
                                    </RadioGroup>
                                    <FormHelperText>{helperText}</FormHelperText>
                                </FormControl>
                            </form>
                        </Box>
                        <CardActions sx={rightAlign}>
                            <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={previousQuestion}>
                                Previous
                            </Button>
                            <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={nextQuestion}>
                                Next
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
                <CardActions sx={rightAlign}>
                    <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={handleOpen}>
                        Submit exercise
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default Question;
