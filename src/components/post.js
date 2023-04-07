import React from "react";
import { motion } from "framer-motion";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";
import Comment from "../components/comment";
import { DateTime, Duration } from "luxon";
import Loader from "../components/loader";
import ErrorNotification from "../components/errorNotification";
import Status from "../components/status";
import { useQuery } from "react-query";
import { UrlConfig } from "../config";

async function fetchTopComment(userId, postId) {
    return await fetch(UrlConfig.serverUrl + "/Comment", {
        headers: {
            userId: userId,
            postId: postId,
        },
    }).then((res) => {
        const result = res.json();
        return result;
    });
}

const Post = (props) => {
    const postsId = props.id;
    const postsRef = "posts/id/";

    var postDate = DateTime.fromISO(props.date); // .setLocale('fr')
    var displayTime = postDate.toRelative();

    const randImg =
        "https://mdbootstrap.com/img/new/avatars/" +
        Math.floor(Math.random() * 15) +
        ".jpg";

    const { isLoading, error, data } = useQuery(
        ["fetchTopComment" + postsId],
        () => fetchTopComment("1ddbe57e-d120-4dad-9b91-80cf58bc4135", postsId)
    );

    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "20vh",
                }}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        console.log(error.name + " : " + error.message);
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "10vh",
                }}
            >
                <ErrorNotification
                    message={error.name + " : " + error.message}
                />
            </div>
        );
    }

    return (
        <>
            {console.log(data)}
            <a className="post-anchor" href={postsRef + postsId}>
                <MDBCardBody className="p-4 posts-single-post">
                    <div className="d-flex flex-start">
                        <MDBCardImage
                            className="rounded-circle shadow-1-strong me-3"
                            src={randImg}
                            alt="avatar"
                            width="60"
                            height="60"
                        />

                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">
                                    <div
                                        style={{
                                            flexDirection: "row",
                                            height: "100%",
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h4>{props.title}</h4>
                                        <Status
                                            type={props.status}
                                            color="rgba(255, 132, 0, 1)"
                                        />
                                    </div>
                                    {props.category} &#x2022; Posted by &#x2022;{" "}
                                    {props.userName} &#x2022; {displayTime}
                                </p>

                                <a href="#!" className="link-muted">
                                    <MDBIcon fas icon="pencil-alt ms-2" />
                                </a>

                                <a href="#!" className="text-success">
                                    <MDBIcon fas icon="redo-alt ms-2" />
                                </a>
                                <a href="#!" className="link-danger">
                                    <MDBIcon fas icon="heart ms-2" />
                                </a>
                            </div>

                            {props.description}

                            <Comment
                                id={data.at(0).id}
                                content={data.at(0).content}
                                userName={data.at(0).user.userName}
                                date={data.at(0).created}
                            />
                        </div>
                    </div>
                </MDBCardBody>
            </a>
        </>
    );
};

export default Post;