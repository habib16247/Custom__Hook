import { createBrowserRouter } from "react-router-dom";
import CommentList from './../customHooks/Comments/CommentList';
import PostList from './../customHooks/Posts/PostList';
import UserList from "../customHooks/Users/UserList";
import MainLayout from "../MainLayout/MainLayout";


const cardRouting = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            path: "/",
            element: <CommentList />
        },
        {
            path: "/posts",
            element: <PostList />
        },
        {
            path: "/users",
            element: <UserList />
        },
        {
            path: "/*",
            element: <h2>404 - Your page is not </h2>

        }
    ]
    }
])

export default cardRouting