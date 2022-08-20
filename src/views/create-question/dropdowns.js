import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Dropdowns() {
    const [standard, setstandard] = React.useState([]);
    const [subject, setsubject] = React.useState([]);
    const [chapter, setchapter] = React.useState([]);
    const [topic, settopic] = React.useState([]);
    const [subjectList, setsubjectList] = React.useState([]);
    const [chapterList, setchapterList] = React.useState([]);
    const [topicList, settopicList] = React.useState([]);

    const handleChangeStandard = (event) => {
        setstandard(event.target.value);
        const subData = subjects.filter((x) => x.clsId === event.target.value);
        setsubjectList(subData);
        setchapterList([]);
        settopicList([]);
    };
    const handleChangeSub = (event) => {
        setsubject(event.target.value);
        const chapData = chapters.filter((x) => x.subId === event.target.value);
        setchapterList(chapData);
        settopicList([]);
        // console.log(chapData);
    };
    const handleChangeChap = (event) => {
        setchapter(event.target.value);
        const topicData = topics.filter((x) => x.chapId === event.target.value);
        settopicList(topicData);
        // console.log(topicData);
    };
    const handleChangeTopic = (event) => {
        settopic(event.target.value);
    };
    const classes = [
        {
            id: 1,
            class: 'Class 1st'
        },
        {
            id: 2,
            class: 'Class 2nd'
        }
    ];
    const subjects = [
        {
            id: 1,
            clsId: 1,
            subject: 'English'
        },
        {
            id: 2,
            clsId: 1,
            subject: 'Hindi'
        },
        {
            id: 3,
            clsId: 1,
            subject: 'Mathematics'
        },
        {
            id: 4,
            clsId: 2,
            subject: 'English'
        },
        {
            id: 5,
            clsId: 2,
            subject: 'Mathematics'
        },
        {
            id: 6,
            clsId: 2,
            subject: 'Science'
        },
        {
            id: 7,
            clsId: 2,
            subject: 'Social Science'
        }
    ];
    const chapters = [
        {
            id: 1,
            subId: 1,
            chapter: 'Chapter 1'
        },
        {
            id: 2,
            subId: 1,
            chapter: 'Chapter 2'
        },
        {
            id: 3,
            subId: 2,
            chapter: 'Chapter 3'
        },
        {
            id: 4,
            subId: 3,
            chapter: 'Chapter 4'
        },
        {
            id: 5,
            subId: 3,
            chapter: 'Chapter 5'
        },
        {
            id: 6,
            subId: 4,
            chapter: 'Chapter 6'
        }
    ];
    const topics = [
        {
            id: 1,
            chapId: 1,
            topic: 'Parts of Speech'
        },
        {
            id: 2,
            chapId: 1,
            topic: 'Tense'
        },
        {
            id: 3,
            chapId: 2,
            topic: 'Vilom Shabd'
        },
        {
            id: 4,
            chapId: 3,
            topic: 'Interger'
        },
        {
            id: 5,
            chapId: 4,
            topic: 'Fraction'
        },
        {
            id: 6,
            chapId: 4,
            topic: 'Ratio'
        }
    ];
    const dropdownsCss = {
        display: 'flex',
        dd_width: {
            width: '200px',
            margin: '0 10px 5px 0'
        }
    };
    return (
        <div>
            <Typography sx={dropdownsCss}>
                <Typography sx={dropdownsCss.dd_width}>
                    <FormControl fullWidth>
                        <InputLabel id="select-class">Select Class</InputLabel>
                        <Select
                            labelId="select-class"
                            id="select-class"
                            value={standard}
                            label="Select Class"
                            // onChange={(e) => handleChangeStandard(e.target.value)}
                            onChange={handleChangeStandard}
                        >
                            {classes && classes !== undefined ? (
                                classes.map((item, i) => (
                                    <MenuItem key={i} value={item.id}>
                                        {item.class}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem value={0}>Something went wrong!!</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Typography>
                <Typography sx={dropdownsCss.dd_width}>
                    <FormControl fullWidth>
                        <InputLabel id="select-subject">Select Subject </InputLabel>
                        <Select
                            labelId="select-subject"
                            id="select-subject"
                            value={subject}
                            label="Select Subject"
                            onChange={handleChangeSub}
                        >
                            {subjectList && subjectList !== [] ? (
                                subjectList.map((item, i) => (
                                    <MenuItem key={i} value={item.id}>
                                        {item.subject}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem value={0}>Select Class Firstly</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Typography>
                <Typography sx={dropdownsCss.dd_width}>
                    <FormControl fullWidth>
                        <InputLabel id="select-chapter">Select Chapter</InputLabel>
                        <Select
                            labelId="select-chapter"
                            id="select-chapter"
                            value={chapter}
                            label="Select Chapter"
                            onChange={handleChangeChap}
                        >
                            {chapterList && chapterList !== []
                                ? chapterList.map((item, i) => (
                                      <MenuItem key={i} value={item.id}>
                                          {item.chapter}
                                      </MenuItem>
                                  ))
                                : ''}
                        </Select>
                    </FormControl>
                </Typography>
                <Typography sx={dropdownsCss.dd_width}>
                    <FormControl fullWidth>
                        <InputLabel id="select-topic">Select Topic</InputLabel>
                        <Select labelId="select-topic" id="select-topic" value={topic} label="Select Topic" onChange={handleChangeTopic}>
                            {topicList && topicList !== []
                                ? topicList.map((item, i) => (
                                      <MenuItem key={i} value={item.id}>
                                          {item.topic}
                                      </MenuItem>
                                  ))
                                : ''}
                        </Select>
                    </FormControl>
                </Typography>
            </Typography>
        </div>
    );
}
