import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { getCourses } from '../components/utils/fetchs';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MyCourse = () => {

    const [courses, setCourses] = useState([])
    const [open, setOpen] = useState({});
    const [selectedLink, setLink] = useState('')
    const currentUser = useSelector(state => state.user.value)

    const handleClick = (index) => {
        setOpen({...open, [index]: !open[index]});
    };
    const handleLoadVideo = (link) => {
        setLink(link)
    }
    useEffect(()=> {
        const fetchCourses = async() => {
            let response = await getCourses()
            let open = new Array(response.length).fill(false);
            setOpen({...open})
            setCourses(response)
        }
        fetchCourses()
    }, [])


    if (currentUser===''){
        return <Navigate replace to='/'/>
    }
    return ( 
        <Body>
            <List
                sx={{ width: '100%', maxWidth: 200, height: 500, bgcolor: 'background.paper', overflow: 'auto' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Courses
                    </ListSubheader>
                }
                >
                {courses.map((course, index) => {
                    return (
                        <React.Fragment key={uuidv4()}>
                            <ListItemButton key={uuidv4()} onClick={()=>handleClick(index)}>
                                <ListItemText  primary={course.title} />
                            </ListItemButton>
                            <Collapse key={uuidv4()} in={open[index]} timeout="auto" unmountOnExit>
                                <List key={uuidv4()} component="div" disablePadding>
                            {course.links.map((link) => {
                                return (        
                                    <ListItemButton key={uuidv4()} sx={{ pl: 4 }} onClick={()=>handleLoadVideo(link.link_url)}>
                                        <ListItemText primary={link.title}/>
                                    </ListItemButton>   
                                )
                            })}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    )
                })}
            </List>
            <iframe
                width="853"
                height="480"
                src={selectedLink}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Body>
    );
}
 
export default MyCourse;

const Body = styled.div`
    display: flex;
`