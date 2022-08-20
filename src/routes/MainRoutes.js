import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// create question page routing
const CreateQuestion = Loadable(lazy(() => import('views/create-question')));

// class subject page routing
const ClassFirstSubjects = Loadable(lazy(() => import('views/classes-subject-page/classFirstSubjects')));

// Topic page routing
const SubjectTopic = Loadable(lazy(() => import('views/subject-topics-page/Topics')));

// Topic question page routing
const TopicQuestions = Loadable(lazy(() => import('views/question-page/Questions')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'create-question',
            element: <CreateQuestion />
        },
        {
            path: 'classfirst',
            element: <ClassFirstSubjects />
        },
        {
            path: 'classfirst/:subject',
            element: <SubjectTopic />
        },
        {
            path: 'classfirst/:subject/:topic',
            element: <TopicQuestions />
        }
    ]
};

export default MainRoutes;
