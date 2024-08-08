


import React from 'react';

// Sample comments data
const commentsdata = [
  {
    name: "Swarnim Rajput",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Swarnim Rajput",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Swarnim Rajput",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Swarnim Rajput",
        text: "Lorem ipsum dolor sit amet",
        replies: [{
            name: "Swarnim Rajput",
            text: "Lorem ipsum dolor sit amet",
            replies: [{
                name: "Swarnim Rajput",
                text: "Lorem ipsum dolor sit amet",
                replies: [{
                    name: "Swarnim Rajput",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [{
                        name: "Swarnim Rajput",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [],
                      },],
                  },],
              },],
          },],
      },
    ],
  },
  {
    name: "Swarnim Rajput",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Swarnim Rajput",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Swarnim Rajput",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

// Comment component
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {replies && replies.length > 0 && (
          <div className="ml-4 mt-2">
            <CommentList comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

// CommentList component
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => <Comment key={index} data={comment} />
  
  
  );
};

// CommentsContainer component
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsdata} />
    </div>
  );
};

export default CommentsContainer;
