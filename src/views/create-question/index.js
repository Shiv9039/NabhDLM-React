import React from 'react';
// Material-ui
import {
    Typography,
    TextField,
    Button,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormCotrol,
    FormLabel
} from '@mui/material';
// Custom Components
import TextEditor from './editor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import MainCard from 'ui-component/cards/MainCard';
import Dropdowns from './dropdowns';
// Form Validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// ==============================|| Add Question Page ||============================== //
const optionField = {
    margin: '10px 0'
};

export default function CreateQuestion() {
    const [correctAnswer, setcorrectAnswer] = React.useState('');
    const [questionData, setquestionData] = React.useState('Question');
    const handleChange = (event) => {
        setcorrectAnswer(event.target.value);
    };
    const getContent = (htmlContentProp) => {
        // setHtmlContent(htmlContentProp);
        // console.log(htmlContentProp);
        // questionData = htmlContentProp;
        setquestionData(htmlContentProp);
        console.log(questionData);
        formik.values.question = questionData;
    };
    const formik = useFormik({
        initialValues: {
            questionNum: 0,
            question: ' ',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctAnswer: ''
        },
        validationSchema: Yup.object({
            questionNum: Yup.number().required('Question number is required!'),
            question: Yup.string().required('Question number is required!'),
            option1: Yup.string().required('Question number is required!'),
            option2: Yup.string().required('Question number is required!'),
            correctAnswer: Yup.string().required('Select correct answer!')
        }),
        onSubmit: (values, { resetForm }) => {
            const Question = {
                _questionNum: formik.values.questionNum,
                question: formik.values.question,
                options: [
                    {
                        value: formik.values.option1,
                        isCorrect: formik.values.correctAnswer == '1' ? true : false,
                        selected: false
                    },
                    {
                        value: formik.values.option2,
                        isCorrect: formik.values.correctAnswer == '2' ? true : false,
                        selected: false
                    },
                    {
                        value: formik.values.option3,
                        isCorrect: formik.values.correctAnswer == '3' ? true : false,
                        selected: false
                    },
                    {
                        value: formik.values.option4,
                        isCorrect: formik.values.correctAnswer == '4' ? true : false,
                        selected: false
                    }
                ]
            };
            axios.post('https://reactndm.herokuapp.com/questions', Question).then((response) => {
                console.log(response);
                alert('Question added');
                resetForm();
            });
        }
        // postQuestion: function () {
        //     const Question = {
        //         questionNum: formik.value.questionNum,
        //         question: formik.value.question,
        //         option1: {
        //             value: formik.value.option1,
        //             isCorrect: correctAnswer == '1' ? true : false
        //         },
        //         option2: {
        //             value: formik.value.option2,
        //             isCorrect: correctAnswer == '2' ? true : false
        //         },
        //         option3: {
        //             value: formik.value.option3,
        //             isCorrect: correctAnswer == '3' ? true : false
        //         },
        //         option4: {
        //             value: formik.value.option4,
        //             isCorrect: correctAnswer == '4' ? true : false
        //         }
        //     };
        //     console.log(Question);
        // }
    });
    return (
        <div>
            <Dropdowns />
            <MainCard title="Add Question" sx={{ height: '900px' }}>
                <form onSubmit={formik.handleSubmit}>
                    <MainCard sx={{ height: '300px', overflowY: 'scroll', margin: '10px 0' }}>
                        <Typography mb={2}>
                            <TextField
                                type="tel"
                                id="question-no"
                                label="Question Number"
                                variant="outlined"
                                name="questionNum"
                                InputProps={{
                                    inputProps: {
                                        min: 0
                                    }
                                }}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.questionNum}
                                helperText={formik.touched.questionNum && formik.errors.questionNum}
                                error={Boolean(formik.touched.questionNum && formik.errors.questionNum)}
                            />
                        </Typography>
                        <TextEditor getContent={getContent} />
                    </MainCard>
                    <MainCard mt={2}>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <TextField
                                label="Option 1"
                                color="secondary"
                                name="option1"
                                multiline
                                sx={optionField}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.option1}
                                helperText={formik.touched.option1 && formik.errors.option1}
                                error={Boolean(formik.touched.option1 && formik.errors.option1)}
                            />
                            <TextField
                                label="Option 2"
                                color="secondary"
                                name="option2"
                                multiline
                                sx={optionField}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.option2}
                                helperText={formik.touched.option2 && formik.errors.option2}
                                error={Boolean(formik.touched.option2 && formik.errors.option2)}
                            />
                            <TextField
                                label="Option 3"
                                color="secondary"
                                name="option3"
                                multiline
                                sx={optionField}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.option3}
                            />
                            <TextField
                                label="Option 4"
                                color="secondary"
                                name="option4"
                                multiline
                                sx={optionField}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.option4}
                            />
                        </Typography>
                        <Typography sx={optionField}>
                            <FormControl fullWidth>
                                <InputLabel id="correct-answer">Correct Answer</InputLabel>
                                <Select
                                    labelId="correct-answer-label"
                                    id="correct-answer"
                                    label="Correct Answer"
                                    name="correctAnswer"
                                    onChange={formik.handleChange}
                                    value={formik.values.correctAnswer}
                                >
                                    <MenuItem value="1">Option 1</MenuItem>
                                    <MenuItem value="2">Option 2</MenuItem>
                                    <MenuItem value="3">Option 3</MenuItem>
                                    <MenuItem value="4">Option 4</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </MainCard>
                    <Typography sx={{ marginTop: '20px', display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </Typography>
                </form>
            </MainCard>
        </div>
    );
}
